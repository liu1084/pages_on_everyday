### Java hashCode()

- 在数据结构中使用hashCode()

  在某些集合操作的过程中,如果不使用hashCode方法,效率会极低.例如:

  ```java
  List<String> words = Arrays.asList("Welcome", "to", "Baeldung");
  if (words.contains("Baeldung")) {
      System.out.println("Baeldung is in the list");
  }
  ```

  如果这个List非常大,那么这种线性的查找效率会很低.

  Java为此提供了一系列数据结构,例如:实现了Map接口的hashTable

  当我们使用hashTable的时候,存取数据的时候,会根据给定的key先计算key的hashCode,然后在内部使用这个值进行存取数据,这样效率就会非常高.

  

- hashCode()的工作原理

  简单: 就是根据给定的hash算法,计算一个整数并返回.

  1. 在java里,如果对象相等,那么返回的hashCode必须相同.但是不要求不同的对象返回的hashCode必须不同.
  2. 在java对象不修改equals方法的情况下,执行hashCode必须是等幂的.
  3. 如果两个不同的对象,我们应该尽量返回不同的hashCode.

- 实现对象的自定义hashCode

  ```java
  public class User {
   
      private long id;
      private String name;
      private String email;
   
      // standard getters/setters/constructors
           
      @Override
      public int hashCode() {
          return 1;
      }
           
      @Override
      public boolean equals(Object o) {
          if (this == o) return true;
          if (o == null) return false;
          if (this.getClass() != o.getClass()) return false;
          User user = (User) o;
          return id == user.id 
            && (name.equals(user.name) 
            && email.equals(user.email));
      }
       
      // getters and setters here
  }
  ```

  上面的代码实现了hashCode,而且都返回了1.也就是说,所有的对象会存储在同一个key的桶中,这样并没有提高使用效率.

- 提升自定义hashCode实现,equal方法保持不变,修改hashCode()方法如下:

  ```java
  @Override
  public int hashCode() {
      return (int) id * name.hashCode() * email.hashCode();
  }
  ```

  上面的修改,使用了id,name和email3个字段的hash进行乘积.这减少了hash的碰撞,比之前要好的多.

- 标准的hashCode

  更好的hash算法,会带来更好的性能.

  ```java
  @Override
  public int hashCode() {
      int hash = 7;
      hash = 31 * hash + (int) id;
      hash = 31 * hash + (name == null ? 0 : name.hashCode());
      hash = 31 * hash + (email == null ? 0 : email.hashCode());
      return hash;
  }
  ```

  

- 处理hash碰撞

  即使最有效的hash算法,也无法完全避免不同的对象,计算出来的hash值有可能相同.
- 处理碰撞有多种方法,java使用了拉链法,具体如下:

Algorithm | 在拉链种插入数据的算法
1. 申明一个包含链表的数组为hash table的大小;

2. 初始化数组的每个元素为NULL;

3. 根据插入的key/value中key的值及hashCode的算法逻辑,得到hashCode,比如:计算结果为"a",那就把key/vaue作为一个节点(Node)放到a下面对应的链表中.

4. 如果a下面的key对应的值为NULL,将a[key]指向value

5. 如果不为NULL,发生了hash碰撞,这个时候,会将key/value放到两边的末端.

   ![查看源图像](2020-3-2-Java%20hashCode.assets/HashMap_pictorial_representation.jpg) 



在java8中,hashMap得到了升级.如果链表的大小超过了一个阈值(64),将会被treeMap替换掉.这样查找的复杂度由O(N)变成O(logN),变得更有效.



- Java8 HashMap解读和使用
  - 源码解析
  - 使用范例