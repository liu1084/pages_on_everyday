LIMIT and OFFSET SQL Pagination
AUGUST 29, 2005

Both MySQL and PostgreSQL support a really cool feature called OFFSET that is usually used with a LIMIT clause.

The LIMIT clause is used to limit the number of results returned in a SQL statement. So if you have 1000 rows in a table, but only want to return the first 10, you would do something like this:

SELECT column FROM table
LIMIT 10
This is similar to the TOP clause on Microsoft SQL Server. However the LIMIT clause always goes at the end of the query on MySQL, and PostgreSQL.

Now suppose you wanted to show results 11-20. With the OFFSET keyword its just as easy, the following query will do:

SELECT column FROM table
LIMIT 10 OFFSET 10
This makes it easy to code multi page results or pagination with SQL. Often the approach used is to SELECT all the records, and then filter through them on the application server tier, rather than directly on the database. As you would imagine doing this on the database yields much better performance.

I have known that PostgreSQL supports the OFFSET keyword for quite some time, and for some reason I always thought it was not supported by MySQL. Well it turns out that it is supported now.