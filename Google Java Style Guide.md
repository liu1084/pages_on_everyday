<div id="content">

# Google Java Style Guide

<div class="vertical_toc" id="tocDiv">

### Table of Contents

<table class="columns">

<tbody valign="top" class="toc">

<tr>

<td class="two_columns">

<dl>

<dt>[1 Introduction](http://google.github.io/styleguide/javaguide.html#s1-introduction)</dt>

<dd>[1.1 Terminology notes](http://google.github.io/styleguide/javaguide.html#s1.1-terminology)</dd>

<dd>[1.2 Guide notes](http://google.github.io/styleguide/javaguide.html#s1.2-guide-notes)</dd>

</dl>

<dl>

<dt>[2 Source file basics](http://google.github.io/styleguide/javaguide.html#s2-source-file-basics)</dt>

<dd>[2.1 File name](http://google.github.io/styleguide/javaguide.html#s2.1-file-name)</dd>

<dd>[2.2 File encoding: UTF-8](http://google.github.io/styleguide/javaguide.html#s2.2-file-encoding)</dd>

<dd>[2.3 Special characters](http://google.github.io/styleguide/javaguide.html#s2.3-special-characters)</dd>

</dl>

<dl>

<dt>[3 Source file structure](http://google.github.io/styleguide/javaguide.html#s3-source-file-structure)</dt>

<dd>[3.1 License or copyright information, if present](http://google.github.io/styleguide/javaguide.html#s3.1-copyright-statement)</dd>

<dd>[3.2 Package statement](http://google.github.io/styleguide/javaguide.html#s3.2-package-statement)</dd>

<dd>[3.3 Import statements](http://google.github.io/styleguide/javaguide.html#s3.3-import-statements)</dd>

<dd>[3.4 Class declaration](http://google.github.io/styleguide/javaguide.html#s3.4-class-declaration)</dd>

</dl>

<dl>

<dt>[4 Formatting](http://google.github.io/styleguide/javaguide.html#s4-formatting)</dt>

<dd>[4.1 Braces](http://google.github.io/styleguide/javaguide.html#s4.1-braces)</dd>

<dd>[4.2 Block indentation: +2 spaces](http://google.github.io/styleguide/javaguide.html#s4.2-block-indentation)</dd>

<dd>[4.3 One statement per line](http://google.github.io/styleguide/javaguide.html#s4.3-one-statement-per-line)</dd>

<dd>[4.4 Column limit: 100](http://google.github.io/styleguide/javaguide.html#s4.4-column-limit)</dd>

<dd>[4.5 Line-wrapping](http://google.github.io/styleguide/javaguide.html#s4.5-line-wrapping)</dd>

<dd>[4.6 Whitespace](http://google.github.io/styleguide/javaguide.html#s4.6-whitespace)</dd>

<dd>[4.7 Grouping parentheses: recommended](http://google.github.io/styleguide/javaguide.html#s4.7-grouping-parentheses)</dd>

<dd>[4.8 Specific constructs](http://google.github.io/styleguide/javaguide.html#s4.8-specific-constructs)</dd>

</dl>

<dl>

<dt>[5 Naming](http://google.github.io/styleguide/javaguide.html#s5-naming)</dt>

<dd>[5.1 Rules common to all identifiers](http://google.github.io/styleguide/javaguide.html#s5.1-identifier-names)</dd>

<dd>[5.2 Rules by identifier type](http://google.github.io/styleguide/javaguide.html#s5.2-specific-identifier-names)</dd>

<dd>[5.3 Camel case: defined](http://google.github.io/styleguide/javaguide.html#s5.3-camel-case)</dd>

</dl>

<dl>

<dt>[6 Programming Practices](http://google.github.io/styleguide/javaguide.html#s6-programming-practices)</dt>

<dd>[6.1 @Override: always used](http://google.github.io/styleguide/javaguide.html#s6.1-override-annotation)</dd>

<dd>[6.2 Caught exceptions: not ignored](http://google.github.io/styleguide/javaguide.html#s6.2-caught-exceptions)</dd>

<dd>[6.3 Static members: qualified using class](http://google.github.io/styleguide/javaguide.html#s6.3-static-members)</dd>

<dd>[6.4 Finalizers: not used](http://google.github.io/styleguide/javaguide.html#s6.4-finalizers)</dd>

</dl>

<dl>

<dt>[7 Javadoc](http://google.github.io/styleguide/javaguide.html#s7-javadoc)</dt>

<dd>[7.1 Formatting](http://google.github.io/styleguide/javaguide.html#s7.1-javadoc-formatting)</dd>

<dd>[7.2 The summary fragment](http://google.github.io/styleguide/javaguide.html#s7.2-summary-fragment)</dd>

<dd>[7.3 Where Javadoc is used](http://google.github.io/styleguide/javaguide.html#s7.3-javadoc-where-required)</dd>

</dl>

</td>

</tr>

</tbody>

</table>

</div>

<div class="main_body">

## 1 Introduction[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s1-introduction)

This document serves as the **complete** definition of Google's coding standards for source code in the Java™ Programming Language. A Java source file is described as being _in Google Style_ if and only if it adheres to the rules herein.

Like other programming style guides, the issues covered span not only aesthetic issues of formatting, but other types of conventions or coding standards as well. However, this document focuses primarily on the **hard-and-fast rules** that we follow universally, and avoids giving _advice_ that isn't clearly enforceable (whether by human or tool).

### 1.1 Terminology notes[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s1.1-terminology)

In this document, unless otherwise clarified:

1.  The term _class_ is used inclusively to mean an "ordinary" class, enum class, interface or annotation type (`<span class="lit">@interface</span>`).
2.  The term _comment_ always refers to _implementation_ comments. We do not use the phrase "documentation comments", instead using the common term "Javadoc."

Other "terminology notes" will appear occasionally throughout the document.

### 1.2 Guide notes[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s1.2-guide-notes)

Example code in this document is **non-normative**. That is, while the examples are in Google Style, they may not illustrate the _only_ stylish way to represent the code. Optional formatting choices made in examples should not be enforced as rules.

## 2 Source file basics[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s2-source-file-basics)

### 2.1 File name[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s2.1-file-name)

The source file name consists of the case-sensitive name of the top-level class it contains (of which there is [exactly one](http://google.github.io/styleguide/javaguide.html#s3.4.1-one-top-level-class)), plus the `.java` extension.

### 2.2 File encoding: UTF-8[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s2.2-file-encoding)

Source files are encoded in **UTF-8**.

### 2.3 Special characters[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s2.3-special-characters)

#### 2.3.1 Whitespace characters[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s2.3.1-whitespace-characters)

Aside from the line terminator sequence, the **ASCII horizontal space character** (**0x20**) is the only whitespace character that appears anywhere in a source file. This implies that:

1.  All other whitespace characters in string and character literals are escaped.
2.  Tab characters are **not** used for indentation.

#### 2.3.2 Special escape sequences[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s2.3.2-special-escape-sequences)

For any character that has a [special escape sequence](http://docs.oracle.com/javase/tutorial/java/data/characters.html) (`<span class="pln">\b</span>`, `<span class="pln">\t</span>`, `<span class="pln">\n</span>`, `<span class="pln">\f</span>`, `<span class="pln">\r</span>`, `<span class="pln">\"</span>`, `<span class="pln">\'</span>` and `<span class="pln">\\</span>`), that sequence is used rather than the corresponding octal (e.g. `\012`) or Unicode (e.g. `\u000a`) escape.

#### 2.3.3 Non-ASCII characters[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s2.3.3-non-ascii-characters)

For the remaining non-ASCII characters, either the actual Unicode character (e.g. `<span class="pun">∞</span>`) or the equivalent Unicode escape (e.g. `<span class="pln">\u</span><span class="lit">221e</span>`) is used. The choice depends only on which makes the code **easier to read and understand**, although Unicode escapes outside string literals and comments are strongly discouraged.

**Tip:** In the Unicode escape case, and occasionally even when actual Unicode characters are used, an explanatory comment can be very helpful.

Examples:

<table>

<tbody>

<tr>

<th>Example</th>

<th>Discussion</th>

</tr>

<tr>

<td>`<span class="typ">String</span> <span class="pln">unitAbbrev</span> <span class="pun">=</span> <span class="pln"></span> <span class="str">"μs"</span><span class="pun">;</span>`</td>

<td>Best: perfectly clear even without a comment.</td>

</tr>

<tr>

<td>`<span class="typ">String</span> <span class="pln">unitAbbrev</span> <span class="pun">=</span> <span class="pln"></span> <span class="str">"\u03bcs"</span><span class="pun">;</span> <span class="pln"></span> <span class="com">// "μs"</span>`</td>

<td>Allowed, but there's no reason to do this.</td>

</tr>

<tr>

<td>`<span class="typ">String</span> <span class="pln">unitAbbrev</span> <span class="pun">=</span> <span class="pln"></span> <span class="str">"\u03bcs"</span><span class="pun">;</span> <span class="pln"></span> <span class="com">// Greek letter mu, "s"</span>`</td>

<td>Allowed, but awkward and prone to mistakes.</td>

</tr>

<tr>

<td>`String unitAbbrev = "\u03bcs";`</td>

<td>Poor: the reader has no idea what this is.</td>

</tr>

<tr>

<td>`<span class="kwd">return</span> <span class="pln"></span> <span class="str">'\ufeff'</span> <span class="pln"></span> <span class="pun">+</span> <span class="pln">content</span><span class="pun">;</span> <span class="pln"></span> <span class="com">// byte order mark</span>`</td>

<td>Good: use escapes for non-printable characters, and comment if necessary.</td>

</tr>

</tbody>

</table>

**Tip:** Never make your code less readable simply out of fear that some programs might not handle non-ASCII characters properly. If that should happen, those programs are **broken** and they must be **fixed**.

<a name="filestructure"></a>

## 3 Source file structure[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s3-source-file-structure)

<div>

A source file consists of, **in order**:

1.  License or copyright information, if present
2.  Package statement
3.  Import statements
4.  Exactly one top-level class

</div>

**Exactly one blank line** separates each section that is present.

### 3.1 License or copyright information, if present[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s3.1-copyright-statement)

If license or copyright information belongs in a file, it belongs here.

### 3.2 Package statement[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s3.2-package-statement)

The package statement is **not line-wrapped**. The column limit (Section 4.4, [Column limit: 100](http://google.github.io/styleguide/javaguide.html#s4.4-column-limit)) does not apply to package statements.

<a name="imports"></a>

### 3.3 Import statements[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s3.3-import-statements)

#### 3.3.1 No wildcard imports[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s3.3.1-wildcard-imports)

**Wildcard imports**, static or otherwise, **are not used**.

#### 3.3.2 No line-wrapping[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s3.3.2-import-line-wrapping)

Import statements are **not line-wrapped**. The column limit (Section 4.4, [Column limit: 100](http://google.github.io/styleguide/javaguide.html#s4.4-column-limit)) does not apply to import statements.

#### 3.3.3 Ordering and spacing[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s3.3.3-import-ordering-and-spacing)

Imports are ordered as follows:

1.  All static imports in a single block.
2.  All non-static imports in a single block.

If there are both static and non-static imports, a single blank line separates the two blocks. There are no other blank lines between import statements.

Within each block the imported names appear in ASCII sort order. (**Note:** this is not the same as the import _statements_ being in ASCII sort order, since '.' sorts before ';'.)

### 3.4 Class declaration[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s3.4-class-declaration)

<a name="oneclassperfile"></a>

#### 3.4.1 Exactly one top-level class declaration[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s3.4.1-one-top-level-class)

Each top-level class resides in a source file of its own.

#### 3.4.2 Class member ordering[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s3.4.2-class-member-ordering)

The ordering of the members of a class can have a great effect on learnability, but there is no single correct recipe for how to do it. Different classes may order their members differently.

What is important is that each class order its members in **_some_ logical order**, which its maintainer could explain if asked. For example, new methods are not just habitually added to the end of the class, as that would yield "chronological by date added" ordering, which is not a logical ordering.

<a name="overloads"></a>

##### 3.4.2.1 Overloads: never split

When a class has multiple constructors, or multiple methods with the same name, these appear sequentially, with no intervening members (not even private ones).

## 4 Formatting[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4-formatting)

**Terminology Note:** _block-like construct_ refers to the body of a class, method or constructor. Note that, by Section 4.8.3.1 on [array initializers](http://google.github.io/styleguide/javaguide.html#s4.8.3.1-array-initializers), any array initializer _may_ optionally be treated as if it were a block-like construct.

<a name="braces"></a>

### 4.1 Braces[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.1-braces)

#### 4.1.1 Braces are used where optional[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.1.1-braces-always-used)

Braces are used with `<span class="kwd">if</span>`, `<span class="kwd">else</span>`, `<span class="kwd">for</span>`, `<span class="kwd">do</span>` and `<span class="kwd">while</span>` statements, even when the body is empty or contains only a single statement.

#### 4.1.2 Nonempty blocks: K & R style[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.1.2-blocks-k-r-style)

Braces follow the Kernighan and Ritchie style ("[Egyptian brackets](http://www.codinghorror.com/blog/2012/07/new-programming-jargon.html)") for _nonempty_ blocks and block-like constructs:

*   No line break before the opening brace.
*   Line break after the opening brace.
*   Line break before the closing brace.
*   Line break after the closing brace, _only if_ that brace terminates a statement or terminates the body of a method, constructor, or _named_ class. For example, there is _no_ line break after the brace if it is followed by `<span class="kwd">else</span>` or a comma.

Examples:

<pre class="prettyprint lang-java prettyprinted"><span class="kwd">return</span> <span class="pln"></span> <span class="pun">()</span> <span class="pln"></span> <span class="pun">-></span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="kwd">while</span> <span class="pln"></span> <span class="pun">(</span><span class="pln">condition</span><span class="pun">())</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln">method</span><span class="pun">();</span> <span class="pln"></span> <span class="pun">}</span> <span class="pln"></span> <span class="pun">};</span> <span class="pln"></span> <span class="kwd">return</span> <span class="pln"></span> <span class="kwd">new</span> <span class="pln"></span> <span class="typ">MyClass</span><span class="pun">()</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="lit">@Override</span> <span class="pln"></span> <span class="kwd">public</span> <span class="pln"></span> <span class="kwd">void</span> <span class="pln">method</span><span class="pun">()</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="kwd">if</span> <span class="pln"></span> <span class="pun">(</span><span class="pln">condition</span><span class="pun">())</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="kwd">try</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln">something</span><span class="pun">();</span> <span class="pln"></span> <span class="pun">}</span> <span class="pln"></span> <span class="kwd">catch</span> <span class="pln"></span> <span class="pun">(</span><span class="typ">ProblemException</span> <span class="pln">e</span><span class="pun">)</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln">recover</span><span class="pun">();</span> <span class="pln"></span> <span class="pun">}</span> <span class="pln"></span> <span class="pun">}</span> <span class="pln"></span> <span class="kwd">else</span> <span class="pln"></span> <span class="kwd">if</span> <span class="pln"></span> <span class="pun">(</span><span class="pln">otherCondition</span><span class="pun">())</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln">somethingElse</span><span class="pun">();</span> <span class="pln"></span> <span class="pun">}</span> <span class="pln"></span> <span class="kwd">else</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln">lastThing</span><span class="pun">();</span> <span class="pln"></span> <span class="pun">}</span> <span class="pln"></span> <span class="pun">}</span> <span class="pln"></span> <span class="pun">};</span></pre>

A few exceptions for enum classes are given in Section 4.8.1, [Enum classes](http://google.github.io/styleguide/javaguide.html#s4.8.1-enum-classes).

<a name="emptyblocks"></a>

#### 4.1.3 Empty blocks: may be concise[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.1.3-braces-empty-blocks)

An empty block or block-like construct _may_ be closed immediately after it is opened, with no characters or line break in between (`<span class="pun">{}</span>`), **unless** it is part of a _multi-block statement_ (one that directly contains multiple blocks: `<span class="kwd">if</span><span class="pun">/</span><span class="kwd">else</span><span class="pun">-</span><span class="kwd">if</span><span class="pun">/</span><span class="kwd">else</span>` or `<span class="kwd">try</span><span class="pun">/</span><span class="kwd">catch</span><span class="pun">/</span><span class="kwd">finally</span>`).

Example:

<pre class="prettyprint lang-java prettyprinted"> <span class="pln"></span> <span class="kwd">void</span> <span class="pln">doNothing</span><span class="pun">()</span> <span class="pln"></span> <span class="pun">{}</span></pre>

### 4.2 Block indentation: +2 spaces[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.2-block-indentation)

Each time a new block or block-like construct is opened, the indent increases by two spaces. When the block ends, the indent returns to the previous indent level. The indent level applies to both code and comments throughout the block. (See the example in Section 4.1.2, [Nonempty blocks: K & R Style](http://google.github.io/styleguide/javaguide.html#s4.1.2-blocks-k-r-style).)

### 4.3 One statement per line[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.3-one-statement-per-line)

Each statement is followed by a line break.

<a name="columnlimit"></a>

### 4.4 Column limit: 100[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.4-column-limit)

Java code has a column limit of 100 characters. Except as noted below, any line that would exceed this limit must be line-wrapped, as explained in Section 4.5, [Line-wrapping](http://google.github.io/styleguide/javaguide.html#s4.5-line-wrapping).

**Exceptions:**

1.  Lines where obeying the column limit is not possible (for example, a long URL in Javadoc, or a long JSNI method reference).
2.  `<span class="kwd">package</span>` and `<span class="kwd">import</span>` statements (see Sections 3.2 [Package statement](http://google.github.io/styleguide/javaguide.html#s3.2-package-statement) and 3.3 [Import statements](http://google.github.io/styleguide/javaguide.html#s3.3-import-statements)).
3.  Command lines in a comment that may be cut-and-pasted into a shell.

### 4.5 Line-wrapping[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.5-line-wrapping)

**Terminology Note:** When code that might otherwise legally occupy a single line is divided into multiple lines, this activity is called _line-wrapping_.

There is no comprehensive, deterministic formula showing _exactly_ how to line-wrap in every situation. Very often there are several valid ways to line-wrap the same piece of code.

**Note:** While the typical reason for line-wrapping is to avoid overflowing the column limit, even code that would in fact fit within the column limit _may_ be line-wrapped at the author's discretion.

**Tip:** Extracting a method or local variable may solve the problem without the need to line-wrap.

#### 4.5.1 Where to break[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.5.1-line-wrapping-where-to-break)

The prime directive of line-wrapping is: prefer to break at a **higher syntactic level**. Also:

1.  When a line is broken at a _non-assignment_ operator the break comes _before_ the symbol. (Note that this is not the same practice used in Google style for other languages, such as C++ and JavaScript.)
    *   This also applies to the following "operator-like" symbols: the dot separator (`<span class="pun">.</span>`), the two colons of a method reference (`<span class="pun">::</span>`), the ampersand in type bounds (`<span class="pun"><</span><span class="pln">T</span> <span class="kwd">extends</span> <span class="pln"></span> <span class="typ">Foo</span> <span class="pln"></span> <span class="pun">&</span> <span class="pln"></span> <span class="typ">Bar</span><span class="pun">></span>`), and the pipe in catch blocks (`<span class="kwd">catch</span> <span class="pln"></span> <span class="pun">(</span><span class="typ">FooException</span> <span class="pln"></span> <span class="pun">|</span> <span class="pln"></span> <span class="typ">BarException</span> <span class="pln">e</span><span class="pun">)</span>`).
2.  When a line is broken at an _assignment_ operator the break typically comes _after_ the symbol, but either way is acceptable.
    *   This also applies to the "assignment-operator-like" colon in an enhanced `<span class="kwd">for</span>` ("foreach") statement.
3.  A method or constructor name stays attached to the open parenthesis (`<span class="pun">(</span>`) that follows it.
4.  A comma (`<span class="pun">,</span>`) stays attached to the token that precedes it.

**Note:** The primary goal for line wrapping is to have clear code, _not necessarily_ code that fits in the smallest number of lines.

<a name="indentation"></a>

#### 4.5.2 Indent continuation lines at least +4 spaces[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.5.2-line-wrapping-indent)

When line-wrapping, each line after the first (each _continuation line_) is indented at least +4 from the original line.

When there are multiple continuation lines, indentation may be varied beyond +4 as desired. In general, two continuation lines use the same indentation level if and only if they begin with syntactically parallel elements.

Section 4.6.3 on [Horizontal alignment](http://google.github.io/styleguide/javaguide.html#s4.6.3-horizontal-alignment) addresses the discouraged practice of using a variable number of spaces to align certain tokens with previous lines.

### 4.6 Whitespace[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.6-whitespace)

#### 4.6.1 Vertical Whitespace[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.6.1-vertical-whitespace)

A single blank line appears:

1.  _Between_ consecutive members (or initializers) of a class: fields, constructors, methods, nested classes, static initializers, instance initializers.
    *   <span class="exception">**Exception:** A blank line between two consecutive fields (having no other code between them) is optional. Such blank lines are used as needed to create _logical groupings_ of fields.</span>
    *   <span class="exception">**Exception:** Blank lines between enum constants are covered in [Section 4.8.1](http://google.github.io/styleguide/javaguide.html#s4.8.1-enum-classes).</span>
2.  Between statements, _as needed_ to organize the code into logical subsections.
3.  _Optionally_ before the first member or after the last member of the class (neither encouraged nor discouraged).
4.  As required by other sections of this document (such as Section 3, [Source file structure](http://google.github.io/styleguide/javaguide.html#s3-source-file-structure), and Section 3.3, [Import statements](http://google.github.io/styleguide/javaguide.html#s3.3-import-statements)).

_Multiple_ consecutive blank lines are permitted, but never required (or encouraged).

#### 4.6.2 Horizontal whitespace[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.6.2-horizontal-whitespace)

Beyond where required by the language or other style rules, and apart from literals, comments and Javadoc, a single ASCII space also appears in the following places **only**.

1.  Separating any reserved word, such as `<span class="kwd">if</span>`, `<span class="kwd">for</span>` or `<span class="kwd">catch</span>`, from an open parenthesis (`<span class="pun">(</span>`) that follows it on that line
2.  Separating any reserved word, such as `<span class="kwd">else</span>` or `<span class="kwd">catch</span>`, from a closing curly brace (`<span class="pun">}</span>`) that precedes it on that line
3.  Before any open curly brace (`<span class="pun">{</span>`), with two exceptions:
    *   `<span class="lit">@SomeAnnotation</span><span class="pun">({</span><span class="pln">a</span><span class="pun">,</span> <span class="pln">b</span><span class="pun">})</span>` (no space is used)
    *   `<span class="typ">String</span><span class="pun">[][]</span> <span class="pln">x</span> <span class="pun">=</span> <span class="pln"></span> <span class="pun">{{</span><span class="str">"foo"</span><span class="pun">}};</span>` (no space is required between `<span class="pun">{{</span>`, by item 8 below)
4.  On both sides of any binary or ternary operator. This also applies to the following "operator-like" symbols:
    *   the ampersand in a conjunctive type bound: `<span class="pun"><</span><span class="pln">T</span> <span class="kwd">extends</span> <span class="pln"></span> <span class="typ">Foo</span> <span class="pln"></span> <span class="pun">&</span> <span class="pln"></span> <span class="typ">Bar</span><span class="pun">></span>`
    *   the pipe for a catch block that handles multiple exceptions: `<span class="kwd">catch</span> <span class="pln"></span> <span class="pun">(</span><span class="typ">FooException</span> <span class="pln"></span> <span class="pun">|</span> <span class="pln"></span> <span class="typ">BarException</span> <span class="pln">e</span><span class="pun">)</span>`
    *   the colon (`<span class="pun">:</span>`) in an enhanced `<span class="kwd">for</span>` ("foreach") statement
    *   the arrow in a lambda expression: `<span class="pun">(</span><span class="typ">String</span> <span class="pln">str</span><span class="pun">)</span> <span class="pln"></span> <span class="pun">-></span> <span class="pln">str</span><span class="pun">.</span><span class="pln">length</span><span class="pun">()</span>`but not
    *   the two colons (`<span class="pun">::</span>`) of a method reference, which is written like `<span class="typ">Object</span><span class="pun">::</span><span class="pln">toString</span>`
    *   the dot separator (`<span class="pun">.</span>`), which is written like `<span class="pln">object</span><span class="pun">.</span><span class="pln">toString</span><span class="pun">()</span>`
5.  After `<span class="pun">,:;</span>` or the closing parenthesis (`<span class="pun">)</span>`) of a cast
6.  On both sides of the double slash (`<span class="com">//</span>`) that begins an end-of-line comment. Here, multiple spaces are allowed, but not required.
7.  Between the type and variable of a declaration: `<span class="typ">List</span><span class="pun"><</span><span class="typ">String</span><span class="pun">></span> <span class="pln">list</span>`
8.  _Optional_ just inside both braces of an array initializer
    *   `<span class="kwd">new</span> <span class="pln"></span> <span class="kwd">int</span><span class="pun">[]</span> <span class="pln"></span> <span class="pun">{</span><span class="lit">5</span><span class="pun">,</span> <span class="pln"></span> <span class="lit">6</span><span class="pun">}</span>` and `<span class="kwd">new</span> <span class="pln"></span> <span class="kwd">int</span><span class="pun">[]</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="lit">5</span><span class="pun">,</span> <span class="pln"></span> <span class="lit">6</span> <span class="pln"></span> <span class="pun">}</span>` are both valid

This rule is never interpreted as requiring or forbidding additional space at the start or end of a line; it addresses only _interior_ space.

#### 4.6.3 Horizontal alignment: never required[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.6.3-horizontal-alignment)

**Terminology Note:** _Horizontal alignment_ is the practice of adding a variable number of additional spaces in your code with the goal of making certain tokens appear directly below certain other tokens on previous lines.

This practice is permitted, but is **never required** by Google Style. It is not even required to _maintain_ horizontal alignment in places where it was already used.

Here is an example without alignment, then using alignment:

<pre class="prettyprint lang-java prettyprinted"><span class="kwd">private</span> <span class="pln"></span> <span class="kwd">int</span> <span class="pln">x</span><span class="pun">;</span> <span class="pln"></span> <span class="com">// this is fine</span> <span class="pln"></span> <span class="kwd">private</span> <span class="pln"></span> <span class="typ">Color</span> <span class="pln">color</span><span class="pun">;</span> <span class="pln"></span> <span class="com">// this too</span> <span class="pln"></span> <span class="kwd">private</span> <span class="pln"></span> <span class="kwd">int</span> <span class="pln">x</span><span class="pun">;</span> <span class="pln"></span> <span class="com">// permitted, but future edits</span> <span class="pln"></span> <span class="kwd">private</span> <span class="pln"></span> <span class="typ">Color</span> <span class="pln">color</span><span class="pun">;</span> <span class="pln"></span> <span class="com">// may leave it unaligned</span></pre>

**Tip:** Alignment can aid readability, but it creates problems for future maintenance. Consider a future change that needs to touch just one line. This change may leave the formerly-pleasing formatting mangled, and that is **allowed**. More often it prompts the coder (perhaps you) to adjust whitespace on nearby lines as well, possibly triggering a cascading series of reformattings. That one-line change now has a "blast radius." This can at worst result in pointless busywork, but at best it still corrupts version history information, slows down reviewers and exacerbates merge conflicts.

<a name="parentheses"></a>

### 4.7 Grouping parentheses: recommended[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.7-grouping-parentheses)

Optional grouping parentheses are omitted only when author and reviewer agree that there is no reasonable chance the code will be misinterpreted without them, nor would they have made the code easier to read. It is _not_ reasonable to assume that every reader has the entire Java operator precedence table memorized.

### 4.8 Specific constructs[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.8-specific-constructs)

#### 4.8.1 Enum classes[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.8.1-enum-classes)

After each comma that follows an enum constant, a line break is optional. Additional blank lines (usually just one) are also allowed. This is one possibility:

<pre class="prettyprint lang-java prettyprinted"><span class="kwd">private</span> <span class="pln"></span> <span class="kwd">enum</span> <span class="pln"></span> <span class="typ">Answer</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln">YES</span> <span class="pun">{</span> <span class="pln"></span> <span class="lit">@Override</span> <span class="pln"></span> <span class="kwd">public</span> <span class="pln"></span> <span class="typ">String</span> <span class="pln">toString</span><span class="pun">()</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="kwd">return</span> <span class="pln"></span> <span class="str">"yes"</span><span class="pun">;</span> <span class="pln"></span> <span class="pun">}</span> <span class="pln"></span> <span class="pun">},</span> <span class="pln">NO</span><span class="pun">,</span> <span class="pln">MAYBE</span> <span class="pun">}</span></pre>

An enum class with no methods and no documentation on its constants may optionally be formatted as if it were an array initializer (see Section 4.8.3.1 on [array initializers](http://google.github.io/styleguide/javaguide.html#s4.8.3.1-array-initializers)).

<pre class="prettyprint lang-java prettyprinted"><span class="kwd">private</span> <span class="pln"></span> <span class="kwd">enum</span> <span class="pln"></span> <span class="typ">Suit</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln">CLUBS</span><span class="pun">,</span> <span class="pln">HEARTS</span><span class="pun">,</span> <span class="pln">SPADES</span><span class="pun">,</span> <span class="pln">DIAMONDS</span> <span class="pun">}</span></pre>

Since enum classes _are classes_, all other rules for formatting classes apply.

<a name="localvariables"></a>

#### 4.8.2 Variable declarations[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.8.2-variable-declarations)

##### 4.8.2.1 One variable per declaration

Every variable declaration (field or local) declares only one variable: declarations such as `int a, b;` are not used.

##### 4.8.2.2 Declared when needed

Local variables are **not** habitually declared at the start of their containing block or block-like construct. Instead, local variables are declared close to the point they are first used (within reason), to minimize their scope. Local variable declarations typically have initializers, or are initialized immediately after declaration.

#### 4.8.3 Arrays[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.8.3-arrays)

##### 4.8.3.1 Array initializers: can be "block-like"

Any array initializer may _optionally_ be formatted as if it were a "block-like construct." For example, the following are all valid (**not** an exhaustive list):

<pre class="prettyprint lang-java prettyprinted"><span class="kwd">new</span> <span class="pln"></span> <span class="kwd">int</span><span class="pun">[]</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="kwd">new</span> <span class="pln"></span> <span class="kwd">int</span><span class="pun">[]</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="lit">0</span><span class="pun">,</span> <span class="pln"></span> <span class="lit">1</span><span class="pun">,</span> <span class="pln"></span> <span class="lit">2</span><span class="pun">,</span> <span class="pln"></span> <span class="lit">3</span> <span class="pln"></span> <span class="lit">0</span><span class="pun">,</span> <span class="pln"></span> <span class="pun">}</span> <span class="pln"></span> <span class="lit">1</span><span class="pun">,</span> <span class="pln"></span> <span class="lit">2</span><span class="pun">,</span> <span class="pln"></span> <span class="kwd">new</span> <span class="pln"></span> <span class="kwd">int</span><span class="pun">[]</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="lit">3</span><span class="pun">,</span> <span class="pln"></span> <span class="lit">0</span><span class="pun">,</span> <span class="pln"></span> <span class="lit">1</span><span class="pun">,</span> <span class="pln"></span> <span class="pun">}</span> <span class="pln"></span> <span class="lit">2</span><span class="pun">,</span> <span class="pln"></span> <span class="lit">3</span> <span class="pln"></span> <span class="pun">}</span> <span class="pln"></span> <span class="kwd">new</span> <span class="pln"></span> <span class="kwd">int</span><span class="pun">[]</span> <span class="pln"></span> <span class="pun">{</span><span class="lit">0</span><span class="pun">,</span> <span class="pln"></span> <span class="lit">1</span><span class="pun">,</span> <span class="pln"></span> <span class="lit">2</span><span class="pun">,</span> <span class="pln"></span> <span class="lit">3</span><span class="pun">}</span></pre>

##### 4.8.3.2 No C-style array declarations

The square brackets form a part of the _type_, not the variable: `<span class="typ">String</span><span class="pun">[]</span> <span class="pln">args</span>`, not `String args[]`.

#### 4.8.4 Switch statements[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.8.4-switch)

**Terminology Note:** Inside the braces of a _switch block_ are one or more _statement groups_. Each statement group consists of one or more _switch labels_ (either `<span class="kwd">case</span> <span class="pln">FOO</span><span class="pun">:</span>` or `<span class="kwd">default</span><span class="pun">:</span>`), followed by one or more statements.

##### 4.8.4.1 Indentation

As with any other block, the contents of a switch block are indented +2.

After a switch label, a newline appears, and the indentation level is increased +2, exactly as if a block were being opened. The following switch label returns to the previous indentation level, as if a block had been closed.

<a name="fallthrough"></a>

##### 4.8.4.2 Fall-through: commented

Within a switch block, each statement group either terminates abruptly (with a `<span class="kwd">break</span>`, `<span class="kwd">continue</span>`, `<span class="kwd">return</span>` or thrown exception), or is marked with a comment to indicate that execution will or _might_ continue into the next statement group. Any comment that communicates the idea of fall-through is sufficient (typically `<span class="com">// fall through</span>`). This special comment is not required in the last statement group of the switch block. Example:

<pre class="prettyprint lang-java prettyprinted"><span class="kwd">switch</span> <span class="pln"></span> <span class="pun">(</span><span class="pln">input</span><span class="pun">)</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="kwd">case</span> <span class="pln"></span> <span class="lit">1</span><span class="pun">:</span> <span class="pln"></span> <span class="kwd">case</span> <span class="pln"></span> <span class="lit">2</span><span class="pun">:</span> <span class="pln">prepareOneOrTwo</span><span class="pun">();</span> <span class="pln"></span> <span class="com">// fall through</span> <span class="pln"></span> <span class="kwd">case</span> <span class="pln"></span> <span class="lit">3</span><span class="pun">:</span> <span class="pln">handleOneTwoOrThree</span><span class="pun">();</span> <span class="pln"></span> <span class="kwd">break</span><span class="pun">;</span> <span class="pln"></span> <span class="kwd">default</span><span class="pun">:</span> <span class="pln">handleLargeNumber</span><span class="pun">(</span><span class="pln">input</span><span class="pun">);</span> <span class="pln"></span> <span class="pun">}</span></pre>

Notice that no comment is needed after `<span class="kwd">case</span> <span class="pln"></span> <span class="lit">1</span><span class="pun">:</span>`, only at the end of the statement group.

##### 4.8.4.3 The `default` case is present

Each switch statement includes a `<span class="kwd">default</span>` statement group, even if it contains no code.

<a name="annotations"></a>

#### 4.8.5 Annotations[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.8.5-annotations)

Annotations applying to a class, method or constructor appear immediately after the documentation block, and each annotation is listed on a line of its own (that is, one annotation per line). These line breaks do not constitute line-wrapping (Section 4.5, [Line-wrapping](http://google.github.io/styleguide/javaguide.html#s4.5-line-wrapping)), so the indentation level is not increased. Example:

<pre class="prettyprint lang-java prettyprinted"><span class="lit">@Override</span> <span class="pln"></span> <span class="lit">@Nullable</span> <span class="pln"></span> <span class="kwd">public</span> <span class="pln"></span> <span class="typ">String</span> <span class="pln">getNameIfPresent</span><span class="pun">()</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="pun">...</span> <span class="pln"></span> <span class="pun">}</span></pre>

**Exception:** A _single_ parameterless annotation _may_ instead appear together with the first line of the signature, for example:

<pre class="prettyprint lang-java prettyprinted"><span class="lit">@Override</span> <span class="pln"></span> <span class="kwd">public</span> <span class="pln"></span> <span class="kwd">int</span> <span class="pln">hashCode</span><span class="pun">()</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="pun">...</span> <span class="pln"></span> <span class="pun">}</span></pre>

Annotations applying to a field also appear immediately after the documentation block, but in this case, _multiple_ annotations (possibly parameterized) may be listed on the same line; for example:

<pre class="prettyprint lang-java prettyprinted"><span class="lit">@Partial</span> <span class="pln"></span> <span class="lit">@Mock</span> <span class="pln"></span> <span class="typ">DataLoader</span> <span class="pln">loader</span><span class="pun">;</span></pre>

There are no specific rules for formatting annotations on parameters, local variables, or types.

<a name="comments"></a>

#### 4.8.6 Comments[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.8.6-comments)

This section addresses _implementation comments_. Javadoc is addressed separately in Section 7, [Javadoc](http://google.github.io/styleguide/javaguide.html#s7-javadoc).

##### 4.8.6.1 Block comment style

Block comments are indented at the same level as the surrounding code. They may be in `<span class="com">/* ... */</span>` style or `<span class="com">// ...</span>` style. For multi-line `<span class="com">/* ... */</span>` comments, subsequent lines must start with `*` aligned with the `*` on the previous line.

<pre class="prettyprint lang-java prettyprinted"><span class="com">/*
 * This is          // And so           /* Or you can
 * okay.            // is this.          * even do this. */</span> <span class="pln"></span> <span class="pun">*/</span></pre>

Comments are not enclosed in boxes drawn with asterisks or other characters.

**Tip:** When writing multi-line comments, use the `<span class="com">/* ... */</span>` style if you want automatic code formatters to re-wrap the lines when necessary (paragraph-style). Most formatters don't re-wrap lines in `<span class="com">// ...</span>` style comment blocks.

<a name="modifiers"></a>

#### 4.8.7 Modifiers[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.8.7-modifiers)

Class and member modifiers, when present, appear in the order recommended by the Java Language Specification:

<pre>public protected private abstract default static final transient volatile synchronized native strictfp
</pre>

#### 4.8.8 Numeric Literals[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s4.8.8-numeric-literals)

`long`-valued integer literals use an uppercase `L` suffix, never lowercase (to avoid confusion with the digit `1`). For example, `3000000000L` rather than `3000000000l`.

<a name="naming"></a>

## 5 Naming[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s5-naming)

### 5.1 Rules common to all identifiers[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s5.1-identifier-names)

Identifiers use only ASCII letters and digits, and, in a small number of cases noted below, underscores. Thus each valid identifier name is matched by the regular expression `\w+` .

In Google Style special prefixes or suffixes, like those seen in the examples `name_`, `mName`, `s_name` and `kName`, are **not** used.

### 5.2 Rules by identifier type[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s5.2-specific-identifier-names)

#### 5.2.1 Package names[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s5.2.1-package-names)

Package names are all lowercase, with consecutive words simply concatenated together (no underscores). For example, `com.example.deepspace`, not `com.example.deepSpace` or `com.example.deep_space`.

#### 5.2.2 Class names[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s5.2.2-class-names)

Class names are written in [UpperCamelCase](http://google.github.io/styleguide/javaguide.html#s5.3-camel-case).

Class names are typically nouns or noun phrases. For example, `<span class="typ">Character</span>` or `<span class="typ">ImmutableList</span>`. Interface names may also be nouns or noun phrases (for example, `<span class="typ">List</span>`), but may sometimes be adjectives or adjective phrases instead (for example, `<span class="typ">Readable</span>`).

There are no specific rules or even well-established conventions for naming annotation types.

_Test_ classes are named starting with the name of the class they are testing, and ending with `<span class="typ">Test</span>`. For example, `<span class="typ">HashTest</span>` or `<span class="typ">HashIntegrationTest</span>`.

#### 5.2.3 Method names[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s5.2.3-method-names)

Method names are written in [lowerCamelCase](http://google.github.io/styleguide/javaguide.html#s5.3-camel-case).

Method names are typically verbs or verb phrases. For example, `<span class="pln">sendMessage</span>` or `<span class="pln">stop</span>`.

Underscores may appear in JUnit _test_ method names to separate logical components of the name. One typical pattern is `test_<MethodUnderTest>___<state>_`, for example `<span class="pln">testPop_emptyStack</span>`. There is no One Correct Way to name test methods.

<a name="constants"></a>

#### 5.2.4 Constant names[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s5.2.4-constant-names)

Constant names use `<span class="pln">CONSTANT_CASE</span>`: all uppercase letters, with words separated by underscores. But what _is_ a constant, exactly?

Every constant is a static final field, but not all static final fields are constants. Before choosing constant case, consider whether the field really _feels like_ a constant. For example, if any of that instance's observable state can change, it is almost certainly not a constant. Merely _intending_ to never mutate the object is generally not enough. Examples:

<pre class="prettyprint lang-java prettyprinted"><span class="com">// Constants</span> <span class="pln"></span> <span class="kwd">static</span> <span class="pln"></span> <span class="kwd">final</span> <span class="pln"></span> <span class="kwd">int</span> <span class="pln">NUMBER</span> <span class="pun">=</span> <span class="pln"></span> <span class="lit">5</span><span class="pun">;</span> <span class="pln"></span> <span class="kwd">static</span> <span class="pln"></span> <span class="kwd">final</span> <span class="pln"></span> <span class="typ">ImmutableList</span><span class="pun"><</span><span class="typ">String</span><span class="pun">></span> <span class="pln">NAMES</span> <span class="pun">=</span> <span class="pln"></span> <span class="typ">ImmutableList</span><span class="pun">.</span><span class="pln">of</span><span class="pun">(</span><span class="str">"Ed"</span><span class="pun">,</span> <span class="pln"></span> <span class="str">"Ann"</span><span class="pun">);</span> <span class="pln"></span> <span class="kwd">static</span> <span class="pln"></span> <span class="kwd">final</span> <span class="pln"></span> <span class="typ">Joiner</span> <span class="pln">COMMA_JOINER</span> <span class="pun">=</span> <span class="pln"></span> <span class="typ">Joiner</span><span class="pun">.</span><span class="pln">on</span><span class="pun">(</span><span class="str">','</span><span class="pun">);</span> <span class="pln"></span> <span class="com">// because Joiner is immutable</span> <span class="pln"></span> <span class="kwd">static</span> <span class="pln"></span> <span class="kwd">final</span> <span class="pln"></span> <span class="typ">SomeMutableType</span><span class="pun">[]</span> <span class="pln">EMPTY_ARRAY</span> <span class="pun">=</span> <span class="pln"></span> <span class="pun">{};</span> <span class="pln"></span> <span class="kwd">enum</span> <span class="pln"></span> <span class="typ">SomeEnum</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln">ENUM_CONSTANT</span> <span class="pun">}</span> <span class="pln"></span> <span class="com">// Not constants</span> <span class="pln"></span> <span class="kwd">static</span> <span class="pln"></span> <span class="typ">String</span> <span class="pln">nonFinal</span> <span class="pun">=</span> <span class="pln"></span> <span class="str">"non-final"</span><span class="pun">;</span> <span class="pln"></span> <span class="kwd">final</span> <span class="pln"></span> <span class="typ">String</span> <span class="pln">nonStatic</span> <span class="pun">=</span> <span class="pln"></span> <span class="str">"non-static"</span><span class="pun">;</span> <span class="pln"></span> <span class="kwd">static</span> <span class="pln"></span> <span class="kwd">final</span> <span class="pln"></span> <span class="typ">Set</span><span class="pun"><</span><span class="typ">String</span><span class="pun">></span> <span class="pln">mutableCollection</span> <span class="pun">=</span> <span class="pln"></span> <span class="kwd">new</span> <span class="pln"></span> <span class="typ">HashSet</span><span class="pun"><</span><span class="typ">String</span><span class="pun">>();</span> <span class="pln"></span> <span class="kwd">static</span> <span class="pln"></span> <span class="kwd">final</span> <span class="pln"></span> <span class="typ">ImmutableSet</span><span class="pun"><</span><span class="typ">SomeMutableType</span><span class="pun">></span> <span class="pln">mutableElements</span> <span class="pun">=</span> <span class="pln"></span> <span class="typ">ImmutableSet</span><span class="pun">.</span><span class="pln">of</span><span class="pun">(</span><span class="pln">mutable</span><span class="pun">);</span> <span class="pln"></span> <span class="kwd">static</span> <span class="pln"></span> <span class="kwd">final</span> <span class="pln"></span> <span class="typ">Logger</span> <span class="pln">logger</span> <span class="pun">=</span> <span class="pln"></span> <span class="typ">Logger</span><span class="pun">.</span><span class="pln">getLogger</span><span class="pun">(</span><span class="typ">MyClass</span><span class="pun">.</span><span class="pln">getName</span><span class="pun">());</span> <span class="pln"></span> <span class="kwd">static</span> <span class="pln"></span> <span class="kwd">final</span> <span class="pln"></span> <span class="typ">String</span><span class="pun">[]</span> <span class="pln">nonEmptyArray</span> <span class="pun">=</span> <span class="pln"></span> <span class="pun">{</span><span class="str">"these"</span><span class="pun">,</span> <span class="pln"></span> <span class="str">"can"</span><span class="pun">,</span> <span class="pln"></span> <span class="str">"change"</span><span class="pun">};</span></pre>

These names are typically nouns or noun phrases.

#### 5.2.5 Non-constant field names[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s5.2.5-non-constant-field-names)

Non-constant field names (static or otherwise) are written in [lowerCamelCase](http://google.github.io/styleguide/javaguide.html#s5.3-camel-case).

These names are typically nouns or noun phrases. For example, `<span class="pln">computedValues</span>` or `<span class="pln">index</span>`.

#### 5.2.6 Parameter names[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s5.2.6-parameter-names)

Parameter names are written in [lowerCamelCase](http://google.github.io/styleguide/javaguide.html#s5.3-camel-case).

One-character parameter names in public methods should be avoided.

#### 5.2.7 Local variable names[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s5.2.7-local-variable-names)

Local variable names are written in [lowerCamelCase](http://google.github.io/styleguide/javaguide.html#s5.3-camel-case).

Even when final and immutable, local variables are not considered to be constants, and should not be styled as constants.

#### 5.2.8 Type variable names[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s5.2.8-type-variable-names)

Each type variable is named in one of two styles:

*   A single capital letter, optionally followed by a single numeral (such as `<span class="pln">E</span>`, `<span class="pln">T</span>`, `<span class="pln">X</span>`, `<span class="pln">T2</span>`)
*   A name in the form used for classes (see Section 5.2.2, [Class names](http://google.github.io/styleguide/javaguide.html#s5.2.2-class-names)), followed by the capital letter `<span class="pln">T</span>` (examples: `<span class="typ">RequestT</span>`, `<span class="typ">FooBarT</span>`).

<a name="acronyms"></a><a name="camelcase"></a>

### 5.3 Camel case: defined[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s5.3-camel-case)

Sometimes there is more than one reasonable way to convert an English phrase into camel case, such as when acronyms or unusual constructs like "IPv6" or "iOS" are present. To improve predictability, Google Style specifies the following (nearly) deterministic scheme.

Beginning with the prose form of the name:

1.  Convert the phrase to plain ASCII and remove any apostrophes. For example, "Müller's algorithm" might become "Muellers algorithm".
2.  Divide this result into words, splitting on spaces and any remaining punctuation (typically hyphens).
    *   _Recommended:_ if any word already has a conventional camel-case appearance in common usage, split this into its constituent parts (e.g., "AdWords" becomes "ad words"). Note that a word such as "iOS" is not really in camel case _per se_; it defies _any_ convention, so this recommendation does not apply.
3.  Now lowercase _everything_ (including acronyms), then uppercase only the first character of:
    *   ... each word, to yield _upper camel case_, or
    *   ... each word except the first, to yield _lower camel case_
4.  Finally, join all the words into a single identifier.

Note that the casing of the original words is almost entirely disregarded. Examples:

<table>

<tbody>

<tr>

<th>Prose form</th>

<th>Correct</th>

<th>Incorrect</th>

</tr>

<tr>

<td>"XML HTTP request"</td>

<td>`<span class="typ">XmlHttpRequest</span>`</td>

<td>`XMLHTTPRequest`</td>

</tr>

<tr>

<td>"new customer ID"</td>

<td>`<span class="pln">newCustomerId</span>`</td>

<td>`newCustomerID`</td>

</tr>

<tr>

<td>"inner stopwatch"</td>

<td>`<span class="pln">innerStopwatch</span>`</td>

<td>`innerStopWatch`</td>

</tr>

<tr>

<td>"supports IPv6 on iOS?"</td>

<td>`<span class="pln">supportsIpv6OnIos</span>`</td>

<td>`supportsIPv6OnIOS`</td>

</tr>

<tr>

<td>"YouTube importer"</td>

<td>`<span class="typ">YouTubeImporter</span>`  
`<span class="typ">YoutubeImporter</span>`*</td>

<td></td>

</tr>

</tbody>

</table>

*Acceptable, but not recommended.

**Note:** Some words are ambiguously hyphenated in the English language: for example "nonempty" and "non-empty" are both correct, so the method names `<span class="pln">checkNonempty</span>` and `<span class="pln">checkNonEmpty</span>` are likewise both correct.

## 6 Programming Practices[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s6-programming-practices)

### 6.1 `@Override`: always used[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s6.1-override-annotation)

A method is marked with the `<span class="lit">@Override</span>` annotation whenever it is legal. This includes a class method overriding a superclass method, a class method implementing an interface method, and an interface method respecifying a superinterface method.

**Exception:** `<span class="lit">@Override</span>` may be omitted when the parent method is `<span class="lit">@Deprecated</span>`.

<a name="caughtexceptions"></a>

### 6.2 Caught exceptions: not ignored[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s6.2-caught-exceptions)

Except as noted below, it is very rarely correct to do nothing in response to a caught exception. (Typical responses are to log it, or if it is considered "impossible", rethrow it as an `<span class="typ">AssertionError</span>`.)

When it truly is appropriate to take no action whatsoever in a catch block, the reason this is justified is explained in a comment.

<pre class="prettyprint lang-java prettyprinted"><span class="kwd">try</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="kwd">int</span> <span class="pln">i</span> <span class="pun">=</span> <span class="pln"></span> <span class="typ">Integer</span><span class="pun">.</span><span class="pln">parseInt</span><span class="pun">(</span><span class="pln">response</span><span class="pun">);</span> <span class="pln"></span> <span class="kwd">return</span> <span class="pln">handleNumericResponse</span><span class="pun">(</span><span class="pln">i</span><span class="pun">);</span> <span class="pln"></span> <span class="pun">}</span> <span class="pln"></span> <span class="kwd">catch</span> <span class="pln"></span> <span class="pun">(</span><span class="typ">NumberFormatException</span> <span class="pln">ok</span><span class="pun">)</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="com">// it's not numeric; that's fine, just continue</span> <span class="pln"></span> <span class="pun">}</span> <span class="pln"></span> <span class="kwd">return</span> <span class="pln">handleTextResponse</span><span class="pun">(</span><span class="pln">response</span><span class="pun">);</span></pre>

**Exception:** In tests, a caught exception may be ignored without comment _if_ its name is or begins with `<span class="pln">expected</span>`. The following is a very common idiom for ensuring that the code under test _does_ throw an exception of the expected type, so a comment is unnecessary here.

<pre class="prettyprint lang-java prettyprinted"><span class="kwd">try</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln">emptyStack</span><span class="pun">.</span><span class="pln">pop</span><span class="pun">();</span> <span class="pln">fail</span><span class="pun">();</span> <span class="pln"></span> <span class="pun">}</span> <span class="pln"></span> <span class="kwd">catch</span> <span class="pln"></span> <span class="pun">(</span><span class="typ">NoSuchElementException</span> <span class="pln">expected</span><span class="pun">)</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="pun">}</span></pre>

### 6.3 Static members: qualified using class[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s6.3-static-members)

When a reference to a static class member must be qualified, it is qualified with that class's name, not with a reference or expression of that class's type.

<pre class="prettyprint lang-java prettyprinted"><span class="typ">Foo</span> <span class="pln">aFoo</span> <span class="pun">=</span> <span class="pln"></span> <span class="pun">...;</span> <span class="pln"></span> <span class="typ">Foo</span><span class="pun">.</span><span class="pln">aStaticMethod</span><span class="pun">();</span> <span class="pln"></span> <span class="com">// good</span> <span class="pln"></span> <span class="badcode"><span class="pln">aFoo</span><span class="pun">.</span><span class="pln">aStaticMethod</span><span class="pun">();</span></span> <span class="pln"></span> <span class="com">// bad</span> <span class="pln"></span> <span class="badcode"><span class="pln">somethingThatYieldsAFoo</span><span class="pun">().</span><span class="pln">aStaticMethod</span><span class="pun">();</span></span> <span class="pln"></span> <span class="com">// very bad</span></pre>

<a name="finalizers"></a>

### 6.4 Finalizers: not used[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s6.4-finalizers)

It is **extremely rare** to override `<span class="typ">Object</span><span class="pun">.</span><span class="pln">finalize</span>`.

**Tip:** Don't do it. If you absolutely must, first read and understand [_Effective Java_](http://books.google.com/books?isbn=8131726592) Item 7, "Avoid Finalizers," very carefully, and _then_ don't do it.

<a name="javadoc"></a>

## 7 Javadoc[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s7-javadoc)

### 7.1 Formatting[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s7.1-javadoc-formatting)

#### 7.1.1 General form[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s7.1.1-javadoc-multi-line)

The _basic_ formatting of Javadoc blocks is as seen in this example:

<pre class="prettyprint lang-java prettyprinted"><span class="com">/**
 * Multiple lines of Javadoc text are written here,
 * wrapped normally...
 */</span> <span class="pln"></span> <span class="kwd">public</span> <span class="pln"></span> <span class="kwd">int</span> <span class="pln">method</span><span class="pun">(</span><span class="typ">String</span> <span class="pln">p1</span><span class="pun">)</span> <span class="pln"></span> <span class="pun">{</span> <span class="pln"></span> <span class="pun">...</span> <span class="pln"></span> <span class="pun">}</span></pre>

... or in this single-line example:

<pre class="prettyprint lang-java prettyprinted"><span class="com">/** An especially short bit of Javadoc. */</span></pre>

The basic form is always acceptable. The single-line form may be substituted when there are no at-clauses present, and the entirety of the Javadoc block (including comment markers) can fit on a single line.

#### 7.1.2 Paragraphs[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s7.1.2-javadoc-paragraphs)

One blank line—that is, a line containing only the aligned leading asterisk (`*`)—appears between paragraphs, and before the group of "at-clauses" if present. Each paragraph but the first has `<p>` immediately before the first word, with no space after.

#### 7.1.3 At-clauses[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s7.1.3-javadoc-at-clauses)

Any of the standard "at-clauses" that are used appear in the order `@param`, `@return`, `@throws`, `@deprecated`, and these four types never appear with an empty description. When an at-clause doesn't fit on a single line, continuation lines are indented four (or more) spaces from the position of the `@`.

### 7.2 The summary fragment[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s7.2-summary-fragment)

The Javadoc for each class and member begins with a brief **summary fragment**. This fragment is very important: it is the only part of the text that appears in certain contexts such as class and method indexes.

This is a fragment—a noun phrase or verb phrase, not a complete sentence. It does **not** begin with `A {@code Foo} is a...`, or `This method returns...`, nor does it form a complete imperative sentence like `Save the record.`. However, the fragment is capitalized and punctuated as if it were a complete sentence.

**Tip:** A common mistake is to write simple Javadoc in the form `/** @return the customer ID */`. This is incorrect, and should be changed to `<span class="com">/** Returns the customer ID. */</span>`.

<a name="s7.3.3-javadoc-optional"></a>

### 7.3 Where Javadoc is used[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s7.3-javadoc-where-required)

At the _minimum_, Javadoc is present for every `<span class="kwd">public</span>` class, and every `<span class="kwd">public</span>` or `<span class="kwd">protected</span>` member of such a class, with a few exceptions noted below.

Additional Javadoc content may also be present, as explained in Section 7.3.4, [Non-required Javadoc](http://google.github.io/styleguide/javaguide.html#s7.3.4-javadoc-non-required).

#### 7.3.1 Exception: self-explanatory methods[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s7.3.1-javadoc-exception-self-explanatory)

Javadoc is optional for "simple, obvious" methods like `<span class="pln">getFoo</span>`, in cases where there _really and truly_ is nothing else worthwhile to say but "Returns the foo".

**Important:** it is not appropriate to cite this exception to justify omitting relevant information that a typical reader might need to know. For example, for a method named `<span class="pln">getCanonicalName</span>`, don't omit its documentation (with the rationale that it would say only `/** Returns the canonical name. */`) if a typical reader may have no idea what the term "canonical name" means!

#### 7.3.2 Exception: overrides[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s7.3.2-javadoc-exception-overrides)

Javadoc is not always present on a method that overrides a supertype method.

#### 7.3.4 Non-required Javadoc[![](./Google Java Style Guide_files/link.png)](http://google.github.io/styleguide/javaguide.html#s7.3.4-javadoc-non-required)

Other classes and members have Javadoc _as needed or desired_.

Whenever an implementation comment would be used to define the overall purpose or behavior of a class or member, that comment is written as Javadoc instead (using `/**`).

Non-required Javadoc is not strictly required to follow the formatting rules of Sections 7.1.2, 7.1.3, and 7.2, though it is of course recommended.

</div>

</div>