## The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received





url = "jdbc:mysql://localhost:3306/jnditest?serverTimezone=GMT&useSSL=false";

url = "jdbc:mysql://192.168.10.242:3306/confluence?serverTimezone=Asia/Shanghai&useSSL=false"

//数据库的路径

主要是红色字体方面，serverTimezone缺失是很容易从错误找出来的，但是重点是useSSL=false，这个从错误提示是看不出来的，它有个很重要的作用是使用JDBC跟你的数据库连接的时候，你的JDBC版本与MySQL版本不兼容，MySQL的版本更高一些，在连接语句后加上“useSSL=‘true’” ，就可以连接到数据库了。更高版本。但如果是兼容版本的话就会出错。