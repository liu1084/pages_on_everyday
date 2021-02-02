### 在开发中IN语句效率比较低，应该改成JOIN语句

```sql
SELECT col FROM t1 WHERE id_col IN (SELECT id_col2 FROM t2 WHERE condition);
```

=>

```sql
SELECT DISTINCT col FROM t1, t2 WHERE t1.id_col = t2.id_col2 AND condition;
```

摘抄：

1）关于使用IN的子查询：

Subquery optimization for IN is not as effective as for the = operator or for IN(value_list) constructs.

A typical case for poor IN subquery performance is when the subquery returns a small number of rows but the outer query returns a large number of rows to be compared to the subquery result.

The problem is that, for a statement that uses an IN subquery, the optimizer rewrites it as a correlated subquery. Consider the following statement that uses an uncorrelated subquery:

SELECT ... FROM t1 WHERE t1.a IN (SELECT b FROM t2);
The optimizer rewrites the statement to a correlated subquery:

SELECT ... FROM t1 WHERE EXISTS (SELECT 1 FROM t2 WHERE t2.b = t1.a);
If the inner and outer queries return M and N rows, respectively, the execution time becomes on the order of O(M×N), rather than O(M+N) as it would be for an uncorrelated subquery.

An implication is that an IN subquery can be much slower than a query written using an IN(value_list) construct that lists the same values that the subquery would return.

2）关于把子查询转换成join的：

The optimizer is more mature for joins than for subqueries, so in many cases a statement that uses a subquery can be executed more efficiently if you rewrite it as a join.

An exception occurs for the case where an IN subquery can be rewritten as a SELECT DISTINCT join. Example:

SELECT col FROM t1 WHERE id_col IN (SELECT id_col2 FROM t2 WHERE condition);
That statement can be rewritten as follows:

SELECT DISTINCT col FROM t1, t2 WHERE t1.id_col = t2.id_col AND condition;
But in this case, the join requires an extra DISTINCT operation and is not more efficient than the subquery