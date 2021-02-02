Structured Query Language(SQL) as we all know is the database language by the use of which we can perform certain operations on the existing database and also we can use this language to create a database. SQL uses certain commands like Create, Drop, Insert etc. to carry out the required tasks.

These SQL commands are mainly categorized into four categories as:

1. DDL – Data Definition Language
2. DQl – Data Query Language
3. DML – Data Manipulation Language
4. DCL – Data Control Language

Though many resources claim there to be another category of SQL clauses **TCL – Transaction Control Language**. So we will see in detail about TCL as well.



![SQL commands](I:%5Cgithub%5Cpages_on_everyday%5Cimgs%5CTypes-of-SQL-Commands-1024x884.jpg)

1. DDL(Data Definition Language) : 

   DDL or Data Definition Language actually consists of the SQL commands that can be used to define the database schema. It simply deals with descriptions of the database schema and is used to create and modify the structure of database objects in the database.

   **Examples of DDL commands:**

   - **[CREATE](https://www.geeksforgeeks.org/sql-create/)** – is used to create the database or its objects (like table, index, function, views, store procedure and triggers).
   - **[DROP](https://www.geeksforgeeks.org/sql-drop-truncate/)** – is used to delete objects from the database.
   - **[ALTER](https://www.geeksforgeeks.org/sql-alter-add-drop-modify/)**-is used to alter the structure of the database.
   - **[TRUNCATE](https://www.geeksforgeeks.org/sql-drop-truncate/)**–is used to remove all records from a table, including all spaces allocated for the records are removed.
   - **[COMMENT](https://www.geeksforgeeks.org/sql-comments/)** –is used to add comments to the data dictionary.
   - **[RENAME ](https://www.geeksforgeeks.org/sql-alter-rename/)**–is used to rename an object existing in the database.

2. **DQL (Data Query Language) :**

   DML statements are used for performing queries on the data within schema objects. The purpose of DQL Command is to get some schema relation based on the query passed to it.

   **Example of DQL:**

   - **[SELECT](https://www.geeksforgeeks.org/sql-select-clause/)** – is used to retrieve data from the a database.

3. DML(Data Manipulation Language) : 

   The SQL commands that deals with the manipulation of data present in the database belong to DML or Data Manipulation Language and this includes most of the SQL statements.

   **Examples of DML:**

   - **[INSERT](https://www.geeksforgeeks.org/sql-insert-statement/)** – is used to insert data into a table.
   - **[UPDATE](https://www.geeksforgeeks.org/sql-update-statement/)** – is used to update existing data within a table.
   - **[DELETE](https://www.geeksforgeeks.org/sql-delete-statement/)** – is used to delete records from a database table.

4. DCL(Data Control Language) : 

   DCL includes commands such as GRANT and REVOKE which mainly deals with the rights, permissions and other controls of the database system.

   **Examples of DCL commands:**

   - **GRANT**-gives user’s access privileges to database.
   - **REVOKE**-withdraw user’s access privileges given by using the GRANT command.

5. TCL(transaction Control Language) : 

   TCL commands deals with the

    

   transaction within the database

   .

   **Examples of TCL commands:**

   - **COMMIT**– commits a Transaction.
   - **[ROLLBACK](https://www.geeksforgeeks.org/sql-transactions/)**– rollbacks a transaction in case of any error occurs.
   - **SAVEPOINT**–sets a savepoint within a transaction.
   - **SET TRANSACTION**–specify characteristics for the transaction.