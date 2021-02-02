### Springboot 2 with H2

- H2 database setup (Simple: not mapper & xml)
1. add h2 connection info to application.properties
```properties
spring.datasource.url=jdbc:h2:file:d:/data/h2-demo
spring.h2.console.enabled=true
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
```

and, add schema.sql & data.sql under directory resources
then you can access "http://localhost:8080/h2-console", view your database...

2. add studentRepository interface
```java
@Mapper
@Repository
public interface StudentRepository {
	@Select(value = "select id, name, passport_number as passportNumber from student t1 where t1.id = #{id, jdbcType=BIGINT}")
	Student findStudentById(Long id);
}
```

3. Test your repository
```java
@SpringBootTest
class SpringbootH2ApplicationTests {

	@Autowired
	private StudentRepository studentRepository;

	@Test
	public void testFindStudent() {
		long id = 10001L;
		Student student = studentRepository.findStudentById(id);
		Assertions.assertNotNull(student);
		Assertions.assertEquals(id, student.getId());
	}
}
```


4. implements CommandLineRunner
```java
public class SpringbootH2Application implements CommandLineRunner {

	@Autowired
	private StudentRepository studentRepository;

	public static void main(String[] args) {
		SpringApplication.run(SpringbootH2Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		long studentId = 10001L;
		Student student = studentRepository.findStudentById(studentId);
		log.debug("Student id = {}, {}", studentId, student);
	}
}

```