---
layout: post
title: "mysql/mybatis/How to implement many to many relationship?"
date: 2016-06-22 00:54:05 +0800
comments: true
categories: mysql mybatis many-to-many relationship
---

## User story

First, mybatis generator model, mapper, and mapper.xml for you.

Now, if you have two models -- User & Role
What's the relationship between User and Role?


A user have many roles, and a role can be authoricated to many user.
So they are many-to-many relationship.

## How to implement?
- add List<Role> roles to User model 
    ```java
    private List<Role> roles = new ArrayList<>();
    ```

- add List<User> users to Role model
    ```java
    private List<User> users = new ArrayList<>();
    ```

- make a UserRoleMapper interface to add some methods


    ```java
    package com.jim.mapper;

    import com.jim.model.Role;
    import com.jim.model.User;

    import java.util.List;

    public interface UserRoleMapper {
        int deleteRole(long userId, long roleId);
        int addRole(long userId, long roleId);
        List<Role> getRoles(long userId);
        List<User> getUsers(long roleId);
    }
    ```

- add a xml to mapping SQL & result.

    ```xml
        <resultMap id="UserResultMap" type="com.jim.model.Role">
            <id column="id" jdbcType="INTEGER" property="id"/>
            <result column="name" jdbcType="VARCHAR" property="name"/>
            <collection javaType="ArrayList" property="users" resultMap="RoleResultMap" />
        </resultMap>

        <resultMap id="RoleResultMap" type="com.jim.model.User">
            <id column="id" jdbcType="BIGINT" property="id"/>
            <result column="username" jdbcType="VARCHAR" property="username"/>
            <collection javaType="ArrayList" property="roles" resultMap="UserResultMap" />
        </resultMap>

        <insert id="addRole">
            INSERT INTO user_role (userId, roleId)
            VALUES (#{userId, jdbcType=BIGINT}, #{roleId, jdbcType=BIGINT});
        </insert>
        <delete id="deleteRole" >
            DELETE FROM user_role
            WHERE 1=1
            AND userId=#{userId}
            AND roleId=#{roleId}
        </delete>

        <select id="getRoles" resultMap="UserResultMap">
            SELECT
            r.id AS id, r.name AS name
            FROM users AS  u
            LEFT JOIN user_role AS ur ON u.id = ur.userId
            LEFT JOIN roles AS r ON r.id = ur.roleId
            WHERE 1=1
              AND u.id = #{id,jdbcType=BIGINT}
              AND r.isActive = 1
              AND u.isActive = 1
        </select>

        <select id="getUsers" resultMap="RoleResultMap">
            SELECT
            u.id AS id, u.username AS username
            FROM roles AS  r
            LEFT JOIN user_role AS ur ON r.id = ur.roleId
            LEFT JOIN users AS u ON u.id = ur.userId
            WHERE 1=1
            AND r.id = #{id,jdbcType=BIGINT}
            AND r.isActive = 1
            AND u.isActive = 1
        </select>
    ```


