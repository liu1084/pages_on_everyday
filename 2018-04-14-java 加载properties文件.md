## java 加载properties文件

可以通过getResourceAsStream读取resources目录下的文件，再通过Properties对象的load方法读取。
具体代码如下：

```java
	public class LoadPropertiesFile {
		private static final String PROPERTIES_FILE_NAME = "/bms-mail.properties";

		static {
			Properties properties = LoadProperties();
		}


		private static Properties LoadProperties(){
			Properties properties = new Properties();
			try(InputStream inputstream = LoadPropertiesFile.class.getResourceAsStream(PROPERTIES_FILE_NAME);){

					properties.load(inputstream);
			}catch (IOException ex1){
				throw ex1;
			}
			return properties;
		}
	}
```