### java 中 byte[\]、File、InputStream 互相转换

- 將File, FileInputStream转换为byte数组

```java
File file = new File("test.txt");
InputStream input = new FileInputStream(file);
byte [] bytes = new Byte[input.available()];
input.read(bytes);
```



- 将byte数组转换为InputStream

```java
byte [] bytes = new byte[1024];
InputStream input = new ByteArrayInputStream(bytes);
```



- 将byte数组转换为File

```java
String filePrefix = String.valueOf(LocalDateTime.now().getNano());
String fileSuffix = ".tmp";
Path temp = Files.createTempFile(filePrefix, fileSuffix);
try (BufferedOutputStream outputStream = new BufferedOutputStream(Files.newOutputStream(temp))) {
			// 读取

			byte[] result = ...;
			outputStream.write(result)
		} catch (IOException e) {
			e.printStackTrace();
			throw new GreException(FILE_UPLOAD_FAILED);
		}
```

