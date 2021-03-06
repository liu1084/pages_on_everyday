# Using RocksDB with Spring Boot and Java

 [RocksDB](https://rocksdb.org/) is an embedded key-value store by Facebook, which is a fork of [LevelDB](https://github.com/google/leveldb) by Google. It is used as a storage layer for a number of databases e.g. [CockroachDB](https://www.cockroachlabs.com/). You can use it as an embedded store, a cache (instead of Redis), as a storage layer for your own custom database, file system or storage solution etc. 

>   https://github.com/ukchukx/rocksdb-example



-   add dependency

 In your pom.xml, add the following dependency to bring in RocksDB: 

```xml
<dependency>                           
    <groupId>org.rocksdb</groupId> 
    <artifactId>rocksdbjni</artifactId>  
    <version>6.6.4</version>   
</dependency>
```



-   DAO

 After that, we want to describe a repository interface through which our app can interact with storage services in general, and RocksDB in particular. 

```java
import java.util.Optional;
public interface KVRepository<K, V> {
  boolean save(K key, V value);
  Optional<V> find(K key);
  boolean delete(K key);
}
```

 Saving, finding, and deleting are the basics we require from any key-value store, so we define that. With this interface, we can use any key-value store without changing other parts of our app which is good design.
Next, we create our RocksDB repository as an implementation of this interface: 

```java
import lombok.extern.slf4j.Slf4j;
import org.rocksdb.Options;
import org.rocksdb.RocksDB;
import org.rocksdb.RocksDBException;
import org.springframework.stereotype.Repository;
import org.springframework.util.SerializationUtils;
import javax.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;
@Slf4j
@Repository
public class RocksDBRepository implements KVRepository<String, Object> {
  private final static String FILE_NAME = "spring-boot-db";
  File baseDir;
  RocksDB db;
  @PostConstruct // execute after the application starts.
  void initialize() {
    RocksDB.loadLibrary();
    final Options options = new Options();
    options.setCreateIfMissing(true);
    baseDir = new File("/tmp/rocks", FILE_NAME);
    try {
      Files.createDirectories(baseDir.getParentFile().toPath());
      Files.createDirectories(baseDir.getAbsoluteFile().toPath());
      db = RocksDB.open(options, baseDir.getAbsolutePath());
      log.info("RocksDB initialized");
    } catch(IOException | RocksDBException e) {
      log.error("Error initializng RocksDB. Exception: '{}', message: '{}'", e.getCause(), e.getMessage(), e);
    }
  }
  @Override
  public synchronized boolean save(String key, Object value) {
    log.info("saving value '{}' with key '{}'", value, key);
    try {
      db.put(key.getBytes(), SerializationUtils.serialize(value));
    } catch (RocksDBException e) {
      log.error("Error saving entry. Cause: '{}', message: '{}'", e.getCause(), e.getMessage());
      return false;
    }
    return true;
  }
  @Override
  public synchronized Optional<Object> find(String key) {
    Object value = null;
    try {
      byte[] bytes = db.get(key.getBytes());
      if (bytes != null) value = SerializationUtils.deserialize(bytes);
    } catch (RocksDBException e) {
      log.error(
        "Error retrieving the entry with key: {}, cause: {}, message: {}", 
        key, 
        e.getCause(), 
        e.getMessage()
      );
    }
    log.info("finding key '{}' returns '{}'", key, value);
    return value != null ? Optional.of(value) : Optional.empty();
  }
  @Override
  public synchronized boolean delete(String key) {
    log.info("deleting key '{}'", key);
    try {
      db.delete(key.getBytes());
    } catch (RocksDBException e) {
      log.error("Error deleting entry, cause: '{}', message: '{}'", e.getCause(), e.getMessage());
      return false;
    }
    return true;
  }
}
```

We initialize our database when the app starts in `initialize()`. RocksDB is a low-level store, so we need to serialize our key-value pairs to bytes before interacting with it in `save()`, `find()` and `delete()`.

That’s all there is to it…really.

At this stage, our repository is done but not very usable. Let’s add a controller to enable us interact with the repository:



-   Controller

```java
import com.ukchukx.rocksdbexample.repository.KVRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;
@Slf4j
@RestController
@RequestMapping("/api")
public class Api {
  private final KVRepository<String, Object> repository;
  public Api(KVRepository<String, Object> repository) {
    this.repository = repository;
  }
  // curl -iv -X POST -H "Content-Type: application/json" -d '{"bar":"baz"}' http://localhost:8080/api/foo
  @PostMapping(value = "/{key}", 
              consumes = MediaType.APPLICATION_JSON_VALUE, 
              produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Object> save(@PathVariable("key") String key, @RequestBody Object value) {
    return repository.save(key, value) 
      ? ResponseEntity.ok(value) 
      : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
  }
  // curl -iv -X GET -H "Content-Type: application/json" http://localhost:8080/api/foo
  @GetMapping(value = "/{key}", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Object> find(@PathVariable("key") String key) {
    return ResponseEntity.of(repository.find(key));
  }
  // curl -iv -X DELETE -H "Content-Type: application/json" http://localhost:8080/api/foo
  @DeleteMapping(value = "/{key}", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Object> delete(@PathVariable("key") String key) {
    return repository.delete(key) 
      ? ResponseEntity.noContent().build() 
      : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
  }
}
```



We declare a simple REST controller that exposes save, find and delete endpoints. That’s all there is to it.

Go ahead and save, find and delete items to your heart’s content using either cURL or Postman.