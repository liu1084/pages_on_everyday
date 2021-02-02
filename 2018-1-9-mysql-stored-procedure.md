## JDBC (java database connectivity) java数据库连接
Java数据库连接，是java语言中用来规范客户端程序如何来访问数据库的应用程序接口，提供了诸如CRUD数据库的方法。

### Statement 普通的SQL语句 - 适合没有入参的，单次执行的场景
1. 建立数据库连接
2. 编写Statement语句
3. 使用连接建立查询结果集
4. 执行并使用循环，获取结果
5. 关闭数据库连接
6. 捕获可能的异常

```java
    // create our mysql database connection
        String myDriver = "com.mysql.jdbc.Driver";
        String myUrl = "jdbc:mysql://localhost:3306/test";
        Class.forName(myDriver);
        Connection conn = DriverManager.getConnection(myUrl, "root", "");

        // our SQL SELECT query. 
        // if you only need a few columns, specify them by name instead of using "*"
        String query = "SELECT * FROM users";

        // create the java statement
        Statement st = conn.createStatement();
        try {
            // execute the query, and get a java resultset
            ResultSet rs = st.executeQuery(query);

            // iterate through the java resultset
            while (rs.next()) {
                int id = rs.getInt("id");
                String firstName = rs.getString("first_name");
                String lastName = rs.getString("last_name");
                Date dateCreated = rs.getDate("date_created");
                boolean isAdmin = rs.getBoolean("is_admin");
                int numPoints = rs.getInt("num_points");

                // print the results
                System.out.format("%s, %s, %s, %s, %s, %s\n", id, firstName, lastName, dateCreated, isAdmin, numPoints);
            }
    } catch (Exception e){
        System.err.println("Got an exception! ");
        System.err.println(e.getMessage());
    } finally {
        st.close();
    }
```

### PrepareStatement 预编译SQL语句 - 适合带入餐，多次、批量执行的场景
1. 建立数据库连接
2. 编写带入参的PrepareStatement语句
3. 使用连接建立预查询
4. 按照从1～N的，依次设置参数的值
5. 执行并使用循环，获取结果 
6. 关闭数据库连接
7. 捕获可能的异常


```java
    // create our mysql database connection
        String myDriver = "com.mysql.jdbc.Driver";
        String myUrl = "jdbc:mysql://localhost:3306/test";
        Class.forName(myDriver);
        Connection conn = DriverManager.getConnection(myUrl, "root", "");

        // our SQL SELECT query. 
        // if you only need a few columns, specify them by name instead of using "*"
        String query = "SELECT * FROM users WHERE id = ?";

        // create the java statement
        Statement st = conn.prepareStatement(query);
        try {
            Integer id = 10;
            st.setInt(1, id);
            // execute the query, and get a java resultset
            ResultSet rs = st.executeQuery(query);

            // iterate through the java resultset
            while (rs.next()) {
                int id = rs.getInt("id");
                String firstName = rs.getString("first_name");
                String lastName = rs.getString("last_name");
                Date dateCreated = rs.getDate("date_created");
                boolean isAdmin = rs.getBoolean("is_admin");
                int numPoints = rs.getInt("num_points");

                // print the results
                System.out.format("%s, %s, %s, %s, %s, %s\n", id, firstName, lastName, dateCreated, isAdmin, numPoints);
            }
    } catch (Exception e){
        System.err.println("Got an exception! ");
        System.err.println(e.getMessage());
    } finally {
        st.close();
    }
```

### Statement vs PrepareStatement

1. 经过预编译，在多次执行的时候性能更好；
2. 安全性更高


### CallableStatement -- 用于执行存储过程

java中调用存储过程如下：

1. 定义存储过程，这需要在数据端完成
2. 使用连接创建CallableStatement对象，使用call调用存储过程
3. 如果存储过程有入参，需要使用setXXX／registerOutParameter语法
4. 如果存储过程有返回，需要使用getXXX语法

### 熟悉一下MySQL的存储过程定义及其入参、出参和出入参

#### IN 入参

```sql
DELIMITER // ----> 声明定义此存储过程中的结束符，默认结束符为；

--- 此存储过程名称为 `GetOfficeByCountry`，并且接受一个入参 `countryName`，类型为varchar，参数的最大长度为255

CREATE PROCEDURE GetOfficeByCountry(IN countryName VARCHAR(255))
 BEGIN -- 存储过程定义的SQL开始
 SELECT * 
 FROM offices
 WHERE country = countryName;
 END -- 存储过程定义的SQL结束
 // -- 存储过程结束
DELIMITER ; ------>恢复默认的结束符
```

```sql
call GetOfficeByCountry('USA');
CALL GetOfficeByCountry('France');
```

#### OUT 出参

```sql
DELIMITER $$
-- 定义一个存储过程，名称为`CountOrderByStatus`
-- 一个入参 orderStatus，一个出参 total，也就是存储过程的返回值
CREATE PROCEDURE CountOrderByStatus(
 IN orderStatus VARCHAR(25),
 OUT total INT)
BEGIN
 SELECT count(orderNumber)
 INTO total -- 将查询的结果存入出参total中
 FROM orders
 WHERE status = orderStatus;
END$$
DELIMITER ;
```

调用：
```sql
CALL CountOrderByStatus('Shipped',@total);
SELECT @total;

CALL CountOrderByStatus('in process',@total);
SELECT @total AS  total_in_process;
```

#### INOUT 出入参，这个参数既是入参，也是返回值，也就是入参可能会被改变

```sql
DELIMITER $$
CREATE PROCEDURE set_counter(INOUT count INT(4),IN inc INT(4))
BEGIN
 SET count = count + inc; -- 出参的值随时会被改变
END$$
DELIMITER ;
```

调用：

```sql
SET @counter = 1;
CALL set_counter(@counter,1); -- 2
CALL set_counter(@counter,1); -- 3
CALL set_counter(@counter,5); -- 8
SELECT @counter; -- 8
```

### 使用JDBC调用存储过程

#### IN 入参
```java 
try {
        Connection conn = DriverManager.getConnection();
        String query = "{CALL get_candidate_skill(?)}";
        CallableStatement stmt = conn.prepareCall(query);
        stmt.setInt(1, candidateId);
        ResultSet rs = stmt.executeQuery();

        while (rs.next()) {
            System.out.println(String.format("%s - %s",
                  rs.getString("first_name") + " "
                  + rs.getString("last_name"),
                  rs.getString("skill")));
        }
    }catch(Exception ex){
        //exception
    }finally{
        //close
    }

    private static Connection getDBConnection() {

        Connection dbConnection = null;

        try {

            Class.forName(DB_DRIVER);

        } catch (ClassNotFoundException e) {

            System.out.println(e.getMessage());

        }

        try {

            dbConnection = DriverManager.getConnection(
                DB_CONNECTION, DB_USER,DB_PASSWORD);
            return dbConnection;

        } catch (SQLException e) {

            System.out.println(e.getMessage());

        }

        return dbConnection;

    }
```

#### IN & OUT
```java 
try {
        Connection conn = DriverManager.getConnection();
        String query = "{CALL CountOrderByStatus(?, ?)}";
        CallableStatement stmt = conn.prepareCall(query);
        stmt.setInt(1, 'Shipped');
        //注册出参类型为INT的JDBC类型
        stmt.registerOutParameter(2, java.sql.Types.INT); 
        //执行
        stmt.executeQuery();
        //获取出参的值
        Integer count = stmt.getString(2);
    }catch(Exception ex){
        //exception
    }finally{
        //close
    }
```

#### INOUT
```java 
try {
        Connection conn = DriverManager.getConnection();
        String query = "{CALL set_counter(?, ?)}";
        CallableStatement stmt = conn.prepareCall(query);
        stmt.setInt(1, 5);
        //注册出参类型为INT的JDBC类型
        stmt.registerOutParameter(2, java.sql.Types.INT); 
        //执行
        stmt.executeQuery();
        //获取出参的值
        Integer count = stmt.getInt(2);
    }catch(Exception ex){
        //exception
    }finally{
        //close
    }
```