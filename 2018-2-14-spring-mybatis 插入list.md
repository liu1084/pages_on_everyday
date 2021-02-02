### mybatis 插入list

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.xxxx.sample.test.dao.TestDAO">
  <insert id="insertEmployeeList" parameterType="java.util.List">
   INSERT ALL  
    <foreach collection="list" item="element" index="index" >
     INTO EMPLOYEE (id,name) values (#{element.id},#{element.name})
    </foreach>
   SELECT * FROM dual
 </insert>
</mapper>
```