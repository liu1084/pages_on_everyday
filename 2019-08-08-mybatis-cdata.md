&            &amp;
<            &lt;
>            &gt;
"            &quot;
'            &apos;



小于等于    a<=b                 a &lt;= b      a <![CDATA[<= ]]>b

大于等于    a>=b                 a &gt;= b      a <![CDATA[>= ]]>b

不等于        a!=ba <![CDATA[ <> ]]>b      a <![CDATA[!= ]]>b



例子：<if test="provinceId != null">
AND <![CDATA[ province_id = #{provinceId} ]]>
</if>
<if test="id != null">
AND <![CDATA[ id <> #{id} ]]>
</if>