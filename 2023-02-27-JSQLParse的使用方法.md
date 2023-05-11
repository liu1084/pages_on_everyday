## JSQLParse的使用方法



支持的语法：https://jsqlparser.github.io/JSqlParser/syntax.html#show



```xml
        <dependency>
            <groupId>com.github.jsqlparser</groupId>
            <artifactId>jsqlparser</artifactId>
            <version>3.2</version>
        </dependency>

```

```java
import net.sf.jsqlparser.JSQLParserException;
import net.sf.jsqlparser.expression.Expression;
import net.sf.jsqlparser.expression.Function;
import net.sf.jsqlparser.expression.operators.relational.NamedExpressionList;
import net.sf.jsqlparser.parser.CCJSqlParserUtil;
import net.sf.jsqlparser.schema.Column;
import net.sf.jsqlparser.schema.Table;
import net.sf.jsqlparser.statement.delete.Delete;
import net.sf.jsqlparser.statement.insert.Insert;
import net.sf.jsqlparser.statement.select.*;
import net.sf.jsqlparser.statement.update.Update;
import net.sf.jsqlparser.util.TablesNamesFinder;

import java.util.List;
import java.util.Objects;

public class Main {

    static String sql1 = "select t1.f1,t1.f2,t2.id,count(*) from table t1 left join table1 t2 right join (select * from table2) t3 where t1.id='12121' or (t1.id between 1 and 3 and t1.id>'22112') group by t.f1 order by t.f1 desc,tf2 asc limit 1,20";
    static String sql2 = "insert into table(f1,f2) values (1,2)";
    static String sql2_1 = "insert into table(f1,f2) (select f1,f2 from table1)";
    static String sql3 = "update table set f1=2,f2=3 where f1=1212";
    static String sql3_1 = "insert into table(f1,f2) (select f1,f2 from table1)";
    static String sql4_1 = "delete from table where 1=1";

    public static void main(String[] args) {
        testSimpleSelectSql();
        testSimpleInsertSql(sql2);
        testSimpleInsertSql(sql2_1);
        testSimpleUpdateSql(sql3);
        testSimpleDeleteSql(sql4_1);
    }

    //解析sql
    public static void testSimpleSelectSql() {
        System.out.println("=================测试查询==================");
        try {
            Select select = (Select) CCJSqlParserUtil.parse(sql1);
            TablesNamesFinder tablesNamesFinder = new TablesNamesFinder();
            List<String> tableList = tablesNamesFinder.getTableList(select);
            PlainSelect plain = (PlainSelect) select.getSelectBody();
            List<Join> joins = plain.getJoins();
            for (Join join : joins) {
                FromItem rightItem = join.getRightItem();
                if (rightItem instanceof Table) {
                    Table table = (Table) (rightItem);
                    System.out.println("连接类型:" + joinTypeStr(join) + "         表：" + table.getName() + "           别名：" + table.getAlias());
                } else if (rightItem instanceof SubSelect) {
                    SubSelect subSelect = (SubSelect) (rightItem);
                    System.out.println("连接类型:" + joinTypeStr(join) + "         子查询：" + subSelect.getSelectBody() + "           别名：" + rightItem.getAlias());
                }
            }
            List<SelectItem> selectItems = plain.getSelectItems();
            for (SelectItem selectItem : selectItems) {
                SelectExpressionItem selectExpressionItem = (SelectExpressionItem) selectItem;
                Expression expression = selectExpressionItem.getExpression();
                //判断表达式是否是函数
                if (expression instanceof Function) {
                    Function function = (Function) expression;
                    NamedExpressionList namedParameters = function.getNamedParameters();
                    if (namedParameters != null) {
                        List<Expression> expressions = namedParameters.getExpressions();
                        System.out.println(expressions);
                    }
                    System.out.println("函数：" + ((Function) expression).getName());
                    boolean allColumns = function.isAllColumns();
                    System.out.println("传入的是全部列：" + allColumns);
                    //判断表达式是否是列
                } else if (expression instanceof Column) {
                    System.out.println("查询值：" + ((Column) expression).getColumnName());
                }
            }
            System.out.println("表名:" + tableList);
            Expression where = plain.getWhere();
            if (where != null) {
                System.out.println("条件:" + where);
            }

            //排序
            List<OrderByElement> orderByElements = plain.getOrderByElements();
            if (Objects.nonNull(orderByElements)) {
                for (OrderByElement orderByElement : orderByElements) {
                    Expression expression = orderByElement.getExpression();
                    if (expression instanceof Column) {
                        Column column = (Column) (expression);
                        System.out.println("排序字段:" + column.getColumnName() + "," + (orderByElement.isAsc() ? "正序" : "倒序"));
                    }
                }
            }


            //获取分组
            GroupByElement groupBy = plain.getGroupBy();
            if ( Objects.nonNull(groupBy)) {
                List<Expression> groupByExpressions = groupBy.getGroupByExpressions();
                for (Expression groupByExpression : groupByExpressions) {
                    if (groupByExpression instanceof Column) {
                        Column column = (Column) (groupByExpression);
                        System.out.println("分组字段:" + column.getColumnName());
                    }
                }
            }

            //分页
            Limit limit = plain.getLimit();
            if(Objects.nonNull(limit)){
                System.out.println("行:"+limit.getRowCount());
                System.out.println("偏移量:"+limit.getOffset());
            }
        } catch (JSQLParserException e) {
            e.printStackTrace();
        }
        System.out.println("=================测试查询==================");
    }

    public static void testSimpleInsertSql(String sql) {
        System.out.println("=================测试插入sql==================");
        System.out.println("测试sql:" + sql);
        try {
            Insert insert = (Insert) CCJSqlParserUtil.parse(sql);
            System.out.println("插入的表" + insert.getTable());
            System.out.println("插入的列" + insert.getColumns());
            if (Objects.nonNull(insert.getSelect())) {
                SelectBody selectBody = insert.getSelect().getSelectBody();
                System.out.println("来自：" + selectBody);
            } else {
                System.out.println("普通插入");
                System.out.println("插入的值" + insert.getItemsList());
            }

        } catch (JSQLParserException e) {
            e.printStackTrace();
        }

        System.out.println("=================测试插入sql==================");
    }

    public static void testSimpleUpdateSql(String sql) {
        System.out.println("=================测试更新sql==================");
        System.out.println("测试sql:" + sql);
        try {
            Update update = (Update) CCJSqlParserUtil.parse(sql);
            System.out.println("更新的表" + update.getTable());
            System.out.println("更新的列" + update.getColumns());
            System.out.println("更新的值" + update.getExpressions());
            System.out.println("条件" + update.getWhere());
        } catch (JSQLParserException e) {
            e.printStackTrace();
        }

        System.out.println("=================测试更新sql==================");
    }

    public static void testSimpleDeleteSql(String sql) {
        System.out.println("=================测试删除sql==================");
        System.out.println("测试sql:" + sql);
        try {
            Delete delete = (Delete) CCJSqlParserUtil.parse(sql);
            System.out.println("删除的表" + delete.getTable());
            System.out.println("条件的列" + delete.getWhere());
        } catch (JSQLParserException e) {
            e.printStackTrace();
        }

        System.out.println("=================测试删除sql==================");
    }

    public static String joinTypeStr(Join join) {
        if (join.isLeft()) {
            return "左连接";
        }
        if (join.isRight()) {
            return "左连接";
        }
        if (join.isFull()) {
            return "全连接";
        }
        if (join.isCross()) {
            return "交叉连接";
        }
        return null;
    }
}


```



```java
import net.sf.jsqlparser.JSQLParserException;
import net.sf.jsqlparser.expression.Alias;
import net.sf.jsqlparser.expression.Function;
import net.sf.jsqlparser.expression.LongValue;
import net.sf.jsqlparser.expression.StringValue;
import net.sf.jsqlparser.expression.operators.conditional.OrExpression;
import net.sf.jsqlparser.expression.operators.relational.EqualsTo;
import net.sf.jsqlparser.expression.operators.relational.ExpressionList;
import net.sf.jsqlparser.expression.operators.relational.MultiExpressionList;
import net.sf.jsqlparser.parser.CCJSqlParserManager;
import net.sf.jsqlparser.schema.Column;
import net.sf.jsqlparser.schema.Table;
import net.sf.jsqlparser.statement.Statement;
import net.sf.jsqlparser.statement.delete.Delete;
import net.sf.jsqlparser.statement.insert.Insert;
import net.sf.jsqlparser.statement.select.*;
import net.sf.jsqlparser.statement.update.Update;
import net.sf.jsqlparser.util.SelectUtils;

import java.io.StringReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main1 {

    public static void main(String[] args) {
        createSelect();
        changeSelect();
        createInsert();
        createUpdate();
        createDelete();
    }

    public static void createSelect() {
        System.out.println("==================================================创建查询====================================================");
        PlainSelect plainSelect = new PlainSelect();
        //创建查询的表
        Table table = new Table("table");
        table.setAlias(new Alias("t"));
        plainSelect.setFromItem(table);
        //创建查询的列
        List<String> selectColumnsStr = Arrays.asList("f1", "f2");


        List<SelectItem> expressionItemList = selectColumnsStr.stream().map(item -> {
            SelectExpressionItem selectExpressionItem = new SelectExpressionItem();
            selectExpressionItem.setExpression(new Column(table, item));
            return (SelectItem) selectExpressionItem;
        }).collect(Collectors.toList());

        SelectExpressionItem selectExpressionItem = new SelectExpressionItem();
        selectExpressionItem.setAlias(new Alias("count"));
        Function function = new Function();
        function.setName("count");
        ExpressionList expressionList = new ExpressionList();
        expressionList.setExpressions(Arrays.asList(new Column(table, "f1")));
        function.setParameters(expressionList);
        selectExpressionItem.setExpression(function);
        expressionItemList.add(selectExpressionItem);
        plainSelect.setSelectItems(expressionItemList);

        AtomicInteger atomicInteger = new AtomicInteger(1);
        List<Join> joinList = Stream.of(new String[2]).map(item -> {
            Join join = new Join();
            join.setLeft(true);
            Table joinTable = new Table();
            joinTable.setName("table" + atomicInteger.incrementAndGet());
            joinTable.setAlias(new Alias("t" + atomicInteger.get()));
            join.setRightItem(joinTable);
            EqualsTo equalsTo = new EqualsTo();
            equalsTo.setLeftExpression(new Column(table, "f1"));
            equalsTo.setRightExpression(new Column(joinTable, "f2"));
            join.setOnExpression(equalsTo);
            return join;
        }).collect(Collectors.toList());
        plainSelect.setJoins(joinList);


        //条件
        EqualsTo leftEqualsTo = new EqualsTo();
        leftEqualsTo.setLeftExpression(new Column(table, "f1"));
        StringValue stringValue = new StringValue("1222121");
        leftEqualsTo.setRightExpression(stringValue);
        plainSelect.setWhere(leftEqualsTo);

        EqualsTo rightEqualsTo = new EqualsTo();
        rightEqualsTo.setLeftExpression(new Column(table, "f2"));
        StringValue stringValue1 = new StringValue("122212111111");
        rightEqualsTo.setRightExpression(stringValue1);
        OrExpression orExpression = new OrExpression(leftEqualsTo, rightEqualsTo);
        plainSelect.setWhere(orExpression);

        //分组
        GroupByElement groupByElement = new GroupByElement();
        groupByElement.setGroupByExpressions(Arrays.asList(new Column(table, "f1")));
        plainSelect.setGroupByElement(groupByElement);
        System.out.println(plainSelect);

        //排序
        OrderByElement orderByElement = new OrderByElement();
        orderByElement.setAsc(true);
        orderByElement.setExpression(new Column(table, "f1"));
        OrderByElement orderByElement1 = new OrderByElement();
        orderByElement1.setAsc(false);
        orderByElement1.setExpression(new Column(table, "f2"));

        //分页
        Limit limit = new Limit();
        limit.setRowCount(new LongValue(2));
        limit.setOffset(new LongValue(10));
        plainSelect.setLimit(limit);
        plainSelect.setOrderByElements(Arrays.asList(orderByElement, orderByElement1));
        System.out.println(SQLFormatterUtil.format(plainSelect.toString()));
        System.out.println("==================================================创建查询====================================================");
    }


    //在原有的sql基础上改
    public static void changeSelect() {
        System.out.println("==================================================改变原有查询====================================================");
        CCJSqlParserManager parserManager = new CCJSqlParserManager();
        try {
            Select select = (Select) (parserManager.parse(new StringReader("select * from table")));
            PlainSelect plainSelect = (PlainSelect) select.getSelectBody();
            //创建查询的表
            Table table = new Table("table");
            table.setAlias(new Alias("t"));
            plainSelect.setFromItem(table);
            //创建查询的列
            List<String> selectColumnsStr = Arrays.asList("f1", "f2");

            List<SelectItem> expressionItemList = selectColumnsStr.stream().map(item -> {
                SelectExpressionItem selectExpressionItem = new SelectExpressionItem();
                selectExpressionItem.setExpression(new Column(table, item));
                return (SelectItem) selectExpressionItem;
            }).collect(Collectors.toList());

            SelectExpressionItem selectExpressionItem = new SelectExpressionItem();
            selectExpressionItem.setAlias(new Alias("count"));
            Function function = new Function();
            function.setName("count");
            ExpressionList expressionList = new ExpressionList();
            expressionList.setExpressions(Arrays.asList(new Column(table, "f1")));
            function.setParameters(expressionList);
            selectExpressionItem.setExpression(function);
            expressionItemList.add(selectExpressionItem);
            plainSelect.setSelectItems(expressionItemList);

            AtomicInteger atomicInteger = new AtomicInteger(1);
            List<Join> joinList = Stream.of(new String[2]).map(item -> {
                Join join = new Join();
                join.setLeft(true);
                Table joinTable = new Table();
                joinTable.setName("table" + atomicInteger.incrementAndGet());
                joinTable.setAlias(new Alias("t" + atomicInteger.get()));
                join.setRightItem(joinTable);
                EqualsTo equalsTo = new EqualsTo();
                equalsTo.setLeftExpression(new Column(table, "f1"));
                equalsTo.setRightExpression(new Column(joinTable, "f2"));
                join.setOnExpression(equalsTo);
                return join;
            }).collect(Collectors.toList());
            plainSelect.setJoins(joinList);

            //条件
            EqualsTo leftEqualsTo = new EqualsTo();
            leftEqualsTo.setLeftExpression(new Column(table, "f1"));
            StringValue stringValue = new StringValue("1222121");
            leftEqualsTo.setRightExpression(stringValue);

            EqualsTo rightEqualsTo = new EqualsTo();
            rightEqualsTo.setLeftExpression(new Column(table, "f2"));
            StringValue stringValue1 = new StringValue("122212111111");
            rightEqualsTo.setRightExpression(stringValue1);
            OrExpression orExpression = new OrExpression(leftEqualsTo, rightEqualsTo);
            plainSelect.setWhere(orExpression);

            //分组
            GroupByElement groupByElement = new GroupByElement();
            groupByElement.setGroupByExpressions(Arrays.asList(new Column(table, "f1")));
            plainSelect.setGroupByElement(groupByElement);
            System.out.println(plainSelect);

            //排序
            OrderByElement orderByElement = new OrderByElement();
            orderByElement.setAsc(true);
            orderByElement.setExpression(new Column(table, "f1"));
            OrderByElement orderByElement1 = new OrderByElement();
            orderByElement1.setAsc(false);
            orderByElement1.setExpression(new Column(table, "f2"));

            //分页
            Limit limit = new Limit();
            limit.setRowCount(new LongValue(2));
            limit.setOffset(new LongValue(10));
            plainSelect.setLimit(limit);
            plainSelect.setOrderByElements(Arrays.asList(orderByElement, orderByElement1));
            System.out.println(SQLFormatterUtil.format(plainSelect.toString()));
        } catch (JSQLParserException e) {
            e.printStackTrace();
        }
        System.out.println("==================================================改变原有查询====================================================");
    }

    //创建插入sql语句
    public static void createInsert() {
        System.out.println("==================================================创建插入语句====================================================");
        Insert insert = new Insert();
        Table table = new Table();
        table.setName("table");
        insert.setTable(table);
        insert.setColumns(Arrays.asList(
                new Column(table, "f1"),
                new Column(table, "f2"),
                new Column(table, "f3")
        ));

        MultiExpressionList multiExpressionList = new MultiExpressionList();
        multiExpressionList.addExpressionList(Arrays.asList(
                new StringValue("1"),
                new StringValue("2"),
                new StringValue("3")
        ));
        insert.setItemsList(multiExpressionList);
        System.out.println(insert);
        System.out.println("==================================================创建插入语句====================================================");
    }

    //创建插入sql语句
    public static void createUpdate() {
        System.out.println("==================================================创建更新语句====================================================");
        Update update = new Update();
        Table table = new Table();
        table.setName("table");
        update.setTable(table);
        update.setColumns(Arrays.asList(
                new Column(table, "f1"),
                new Column(table, "f2"),
                new Column(table, "f3")
        ));
        update.setExpressions(Arrays.asList(
                new StringValue("1"),
                new StringValue("6"),
                new StringValue("2")
        ));
        //条件
        EqualsTo leftEqualsTo = new EqualsTo();
        leftEqualsTo.setLeftExpression(new Column(table, "f1"));
        StringValue stringValue = new StringValue("1222121");
        leftEqualsTo.setRightExpression(stringValue);
        EqualsTo rightEqualsTo = new EqualsTo();
        rightEqualsTo.setLeftExpression(new Column(table, "f2"));
        StringValue stringValue1 = new StringValue("122212111111");
        rightEqualsTo.setRightExpression(stringValue1);
        OrExpression orExpression = new OrExpression(leftEqualsTo, rightEqualsTo);
        update.setWhere(orExpression);
        System.out.println(update);
        System.out.println("==================================================创建更新语句====================================================");
    }

    //创建插入sql语句
    public static void createDelete() {
        System.out.println("==================================================创建删除语句====================================================");
        Delete delete = new Delete();
        Table table = new Table();
        table.setName("table");
        delete.setTable(table);
        //条件
        EqualsTo leftEqualsTo = new EqualsTo();
        leftEqualsTo.setLeftExpression(new Column(table, "f1"));
        StringValue stringValue = new StringValue("1222121");
        leftEqualsTo.setRightExpression(stringValue);
        EqualsTo rightEqualsTo = new EqualsTo();
        rightEqualsTo.setLeftExpression(new Column(table, "f2"));
        StringValue stringValue1 = new StringValue("122212111111");
        rightEqualsTo.setRightExpression(stringValue1);
        OrExpression orExpression = new OrExpression(leftEqualsTo, rightEqualsTo);
        delete.setWhere(orExpression);
        System.out.println(delete);
        System.out.println("==================================================创建删除语句====================================================");
    }

}


```

