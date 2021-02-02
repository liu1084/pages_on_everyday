---
id: 147
title: Web developer must be know 30 CSS selector
date: 2016-01-05T00:28:28+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=147
permalink: /?p=147
categories:
  - CSS
  - front-end
---
<div class="post__header">
  <div class="content-header view content-header--post view--loaded">
    <p class="content-header__title nolinks">
      Do you have been know CSS or do you have been a CSSer?
    </p>
    
    <p class="content-header__title nolinks">
      Let&#8217;s go ahead to learning 30 common CSS selector.
    </p>
  </div>
</div>

<p class="content-header__title nolinks">
  <!--more-->
</p>

<div class="post__header">
  <div class="content-header view content-header--post view--loaded">
    <p class="content-header__title nolinks">
      1. *
    </p>
  </div>
</div>

<div class="post-body view view--loaded">
  <div class="post-body__body">
    <div class="post-body__content">
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    4
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">* {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value"></code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css spaces"> </code><code class="css keyword">padding</code><code class="css plain">: </code><code class="css value"></code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      
      <p>
        首先我们来认识一些简单的选择器，尤其针对初学者，然后再看其他高级的选择器。
      </p>
      
      <p>
        星号可以用来定义页面的所有元素。许多开发者会使用这个技巧来把<code>margin</code>和<code>padding</code>都设为0。在快速开发测试中这种设置固然是好的，但我建议绝对不要在最终的产品代码中使用。因为会给浏览器增加大量不必要的<em>负荷</em>。
      </p>
      
      <p>
        星形<code>*</code>也可以用于子元素选择器（child selectors）。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">#container * {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">1px</code> <code class="css value">solid</code> <code class="css value">black</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      
      <p>
        这段代码会定义<code>#container</code> <code>div</code>所有子元素的样式。跟上面一样，如果可以尽量避免使用这个方法。
      </p>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE6+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-2.#X" class="nolinks">
        2. #X
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    4
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">#container {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">960px</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css spaces"> </code><code class="css keyword">margin</code><code class="css plain">: </code><code class="css value">auto</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      
      <p>
        使用＃号作为前缀可以选择该<code>id</code>的元素。这是最常见的用法，但使用<code>id</code>选择器时要谨慎。
      </p>
      
      <blockquote>
        <p>
          问问自己：是否真的需要使用<code>id</code>来定义元素的样式？
        </p>
      </blockquote>
      
      <p>
        <code>id</code>选择器比较局限，不能重用。如果可以的话，先尝试使用标签名称，HTML5的其中一个新元素，或使用伪类。
      </p>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.1" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE6+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-3..X" class="nolinks">
        3. .X
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">.error {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css keyword">color</code><code class="css plain">: </code><code class="css value">red</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      
      <p>
        这是<code>class</code>类选择器。<code>id</code>和<code>class</code>类选择器的区别是，类选择器可以定义多个元素。当你想定义一组元素的样式时可以使用<code>class</code>选择器。另外，可以使用<code>id</code>选择器来定义某一个特定的元素。
      </p>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.2" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE6+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-4.XY" class="nolinks">
        4. X Y
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">li a {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css keyword">text-decoration</code><code class="css plain">: </code><code class="css value">none</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        下一个最常见的选择器是<code>descendant</code>后代选择器。当你需要更精确地定位时，可以使用后代选择器。例如，假如说你只想选择无序列表里的链接，而不是所有的链接？这种情况下你就应该使用后代选择器。
      </p>
      
      <blockquote>
        <p>
          <strong>经验分享</strong> &#8211; 如果你的选择器看起来像<code>X Y Z A B.error</code>这样就错了。问问自己是否真的需要加入这么多<em>负荷</em>。
        </p>
      </blockquote>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/descend.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.3" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE6+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-5.X" class="nolinks">
        5. X
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">a { </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">red</code><code class="css plain">; }</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css plain">ul { </code><code class="css keyword">margin-left</code><code class="css plain">: </code><code class="css value"></code><code class="css plain">; }</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        假如你想定义页面里所有<code>type</code>标签类型一样的元素，而不使用<code>id</code>或者<code>class</code>呢？可以简单地使用元素选择器。比如选择所有的无序列表，可以用<code>ul {}</code>。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/tagName.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.4" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE6+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-6.X:visitedandX:link" class="nolinks">
        6. X:visited and X:link
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">a:link { </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">red</code><code class="css plain">; }</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css plain">a:visted { </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">purple</code><code class="css plain">; }</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        我们使用<code>:link</code>伪类来定义所有还没点击的链接。
      </p>
      
      <p>
        另外还有<code>:visited</code>伪类可以让我们给<em>曾经</em>点击过或者<em>访问过</em>的链接添加样式。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/links.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.5" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE7+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-7.X+Y" class="nolinks">
        7. X + Y
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">ul + p {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">red</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        这是邻近元素选择器，<em>只会</em>选中紧接在另一个元素后的元素。这上面的示例中，只有每个<code>ul</code>后面的第一个段落是红色的。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/adjacent.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.6" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE7+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-8.X>Y" class="nolinks" style="margin: 30px 0px 0px; padding: 4px 6px 0px; color: #333333; font-size: 22px; font-weight: normal; line-height: 1.5; text-transform: none; border-style: none; border-width: initial; border-bottom-color: #cccccc; font-family: 'Roboto Condensed', sans-serif; background: #f9f9f9;">
        8. X > Y
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">div#container &gt; ul {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css keyword">border</code><code class="css plain">: </code><code class="css value">1px</code> <code class="css value">solid</code> <code class="css value">black</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        <code>X Y</code>和<code>X &gt; Y</code>的区别是后者只会选中直接后代。例如，看看下面的代码：
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords html">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    01
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    02
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    03
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    04
                  </div>
                  
                  <div class="line number5 index4 alt2">
                    05
                  </div>
                  
                  <div class="line number6 index5 alt1">
                    06
                  </div>
                  
                  <div class="line number7 index6 alt2">
                    07
                  </div>
                  
                  <div class="line number8 index7 alt1">
                    08
                  </div>
                  
                  <div class="line number9 index8 alt2">
                    09
                  </div>
                  
                  <div class="line number10 index9 alt1">
                    10
                  </div>
                  
                  <div class="line number11 index10 alt2">
                    11
                  </div>
                  
                  <div class="line number12 index11 alt1">
                    12
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="html plain">&lt;</code><code class="html keyword">div</code> <code class="html color1">id</code><code class="html plain">=</code><code class="html string">"container"</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="html spaces">   </code><code class="html plain">&lt;</code><code class="html keyword">ul</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="html spaces">      </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt; List Item</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                      <code class="html spaces">        </code><code class="html plain">&lt;</code><code class="html keyword">ul</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number5 index4 alt2">
                      <code class="html spaces">           </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt; Child &lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number6 index5 alt1">
                      <code class="html spaces">        </code><code class="html plain">&lt;/</code><code class="html keyword">ul</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number7 index6 alt2">
                      <code class="html spaces">      </code><code class="html plain">&lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number8 index7 alt1">
                      <code class="html spaces">      </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt; List Item &lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number9 index8 alt2">
                      <code class="html spaces">      </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt; List Item &lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number10 index9 alt1">
                      <code class="html spaces">      </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt; List Item &lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number11 index10 alt2">
                      <code class="html spaces">   </code><code class="html plain">&lt;/</code><code class="html keyword">ul</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number12 index11 alt1">
                      <code class="html plain">&lt;/</code><code class="html keyword">div</code><code class="html plain">&gt;</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        <code>#container &gt; ul</code>只会定义<code>id</code>为<code>container</code>的<code>div</code>里的<code>ul</code>元素，而不会定义第一个<code>li</code>里的<code>ul</code>。
      </p>
      
      <p>
        因此，使用这种选择器的效果更佳。实际上，在JavaScript中尤其适用。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/childcombinator.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.7" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE7+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-9.X~Y" class="nolinks">
        9. X ~ Y
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">ul ~ p {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">red</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        这种兄弟选择器跟<code>X + Y</code>很像，但没有那么严格。邻近选择器（<code>ul + p</code>）只会选择<em>紧接</em>在前一个元素后的元素，但兄弟选择器更广泛。比如，在上面的例子中，只要在<code>ul</code>后的<code>p</code>兄弟元素都会被选中。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/generalcombinator.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.8" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE7+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-10.X[title]" class="nolinks">
        10. X[title]
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">a[title] {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">green</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        这种是<em>属性选择器</em>，在上面的例子中，带有<code>title</code>属性的链接标签才会被匹配。没有title属性的标签不会受到影响。但如果想更具体地根据属性的值来选择，就继续往下看吧。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/attributes.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.9" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE7+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-11.X[href=&quot;foo&quot;]" class="nolinks">
        11. X[href=&#8221;foo&#8221;]
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">a[href=</code><code class="css string">"&lt;a class="external-link" href="http://net.tutsplus.com/" rel="nofollow">http://net.example.com&lt;/a>"</code><code class="css plain">] {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css keyword">color</code><code class="css plain">: </code><code class="css value">#1f6053</code><code class="css plain">; </code><code class="css comments">/* nettuts green */</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        上面的代码定义了所以指向<em><a class="external-link" href="http://net.tutsplus.com/" rel="nofollow">http://net.example.com</a></em>的链接都是nettuts品牌的绿色。其他的链接不受影响。
      </p>
      
      <blockquote>
        <p>
          注意我们把赋值放在引号里面，在JavaScript中选择元素的时候也要记住这么使用。尽可能地使用CSS3标准的选择器。
        </p>
      </blockquote>
      
      <p>
        这种方法不错，但还是有点局限。万一链接也是指向Nettuts+，但路径是<em><a class="external-link" href="http://nettuts.com/" rel="nofollow">nettuts.com</a></em>而不是完整的路径呢？这种情况下我们可以使用正则表达式（regular expression）。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/attributes2.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.10" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE7+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-12.X[href*=&quot;nettuts&quot;]" class="nolinks">
        12. X[href*=&#8221;nettuts&#8221;]
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">a[href*=</code><code class="css string">"tuts"</code><code class="css plain">] {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css keyword">color</code><code class="css plain">: </code><code class="css value">#1f6053</code><code class="css plain">; </code><code class="css comments">/* nettuts green */</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        这解决了上面的问题。星号表示赋值出现在属性的<em>任意处</em>。这样就定义了指向<em><a class="external-link" href="http://nettuts.com/" rel="nofollow">nettuts.com</a></em>，<em><a class="external-link" href="http://net.tutsplus.com/" rel="nofollow">net.example.com</a></em>甚至<em><a class="external-link" href="http://tutsplus.com/" rel="nofollow">example.com</a></em>的链接。
      </p>
      
      <p>
        要记住的是这种表达比较宽泛。假如链接包含<em>tuts</em>但指向了不是Envato旗下的网站呢？如果你想更精确，可以使用<code>^</code>和<code>$</code>来匹配前缀和后缀。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/attributes3.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.11" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE7+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-13.X[href^=&quot;http&quot;]" class="nolinks">
        13. X[href^=&#8221;http&#8221;]
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    4
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">a[href^=</code><code class="css string">"http"</code><code class="css plain">] {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">url</code><code class="css plain">(path/to/external/</code><code class="css value">icon</code><code class="css plain">.png) </code><code class="css value">no-repeat</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css spaces"> </code><code class="css keyword">padding-left</code><code class="css plain">: </code><code class="css value">10px</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        你有想过有些网站是怎么在链接旁边加一个小图标指示这是外部链接吗？我相信你一定有见过这样的小图标，它们标示着链接会导向到另外的网站。
      </p>
      
      <p>
        这非常容易做到。通常使用正则表达式来指定字符串的前缀。如果我们想定义所有<code>href</code>属性前缀为<code>http</code>的链接标签，我们可以使用上面代码的选择器。
      </p>
      
      <blockquote>
        <p>
          可以看到我们没有使用<code>http://</code>，因为没有必要，而且这样不能匹配以<code>https://</code>开头的url。
        </p>
      </blockquote>
      
      <p>
        接下来，比如说我们要定义所以指向图片的链接又要怎么办呢？这样可以匹配字符串的<em>后缀</em>。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/attributes4.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.12" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE7+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-14.X[href$=&quot;.jpg&quot;]" class="nolinks">
        14. X[href$=&#8221;.jpg&#8221;]
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">a[href$=</code><code class="css string">".jpg"</code><code class="css plain">] {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">red</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        再来，我们使用正则表达式符号<code>$</code>来表示字符串的后缀。在上面的例子中，我们将匹配所以指向图片或至少以<code>.jpg</code>结尾的url。要记住的是当然这些样式对<code>gif</code>和<code>png</code>是无效的。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/attributes5.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.13" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE7+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-15.X[data-*=&quot;foo&quot;]" class="nolinks">
        15. X[data-*=&#8221;foo&#8221;]
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">a[data-filetype=</code><code class="css string">"image"</code><code class="css plain">] {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">red</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        就像上面所说的，我们怎么匹配所有的图片，包括<code>png</code>，<code>jpeg</code>，<code>jpg</code>和<code>gif</code>？可以使用多个选择器。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    4
                  </div>
                  
                  <div class="line number5 index4 alt2">
                    5
                  </div>
                  
                  <div class="line number6 index5 alt1">
                    6
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">a[href$=</code><code class="css string">".jpg"</code><code class="css plain">],</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css plain">a[href$=</code><code class="css string">".jpeg"</code><code class="css plain">],</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">a[href$=</code><code class="css string">".png"</code><code class="css plain">],</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                      <code class="css plain">a[href$=</code><code class="css string">".gif"</code><code class="css plain">] {</code>
                    </div>
                    
                    <div class="line number5 index4 alt2">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">red</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number6 index5 alt1">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        但这样很麻烦，也没有效率。另一种解决方法是使用自定义属性。比如在图片链接标签中添加<code>data-filetype</code>属性。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords html">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="html plain">&lt;</code><code class="html keyword">a</code> <code class="html color1">href</code><code class="html plain">=</code><code class="html string">"path/to/image.jpg"</code> <code class="html color1">data-filetype</code><code class="html plain">=</code><code class="html string">"image"</code><code class="html plain">&gt; Image Link &lt;/</code><code class="html keyword">a</code><code class="html plain">&gt;</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        这样，我们就可以使用属性选择器来定义链接的样式。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">a[data-filetype=</code><code class="css string">"image"</code><code class="css plain">] {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">red</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/attributes6.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.14" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE7+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-16.X[foo~=&quot;bar&quot;]" class="nolinks">
        16. X[foo~=&#8221;bar&#8221;]
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    4
                  </div>
                  
                  <div class="line number5 index4 alt2">
                    5
                  </div>
                  
                  <div class="line number6 index5 alt1">
                    6
                  </div>
                  
                  <div class="line number7 index6 alt2">
                    7
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">a[data-info~=</code><code class="css string">"external"</code><code class="css plain">] {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">red</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                    </div>
                    
                    <div class="line number5 index4 alt2">
                      <code class="css plain">a[data-info~=</code><code class="css string">"image"</code><code class="css plain">] {</code>
                    </div>
                    
                    <div class="line number6 index5 alt1">
                      <code class="css spaces"> </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">1px</code> <code class="css value">solid</code> <code class="css value">black</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number7 index6 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        这个技巧将会让小伙伴们对你刮目相看。并没有很多人知道这个技巧。波浪符号（<code>~</code>）可以让你定义取值带有空格的属性。
      </p>
      
      <p>
        继续使用前面的自定义属性，创建<code>data-info</code>属性来匹配带有空格的取值。举个例子，这里我们匹配外部链接和图片链接。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords html">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="html plain">"&lt;</code><code class="html keyword">a</code> <code class="html color1">href</code><code class="html plain">=</code><code class="html string">"path/to/image.jpg"</code> <code class="html color1">data-info</code><code class="html plain">=</code><code class="html string">"external image"</code><code class="html plain">&gt; Click Me, Fool &lt;/</code><code class="html keyword">a</code><code class="html plain">&gt;</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        使用上面的代码，现在我们可以用波浪号的技巧来定义包含其中一个值的元素。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    4
                  </div>
                  
                  <div class="line number5 index4 alt2">
                    5
                  </div>
                  
                  <div class="line number6 index5 alt1">
                    6
                  </div>
                  
                  <div class="line number7 index6 alt2">
                    7
                  </div>
                  
                  <div class="line number8 index7 alt1">
                    8
                  </div>
                  
                  <div class="line number9 index8 alt2">
                    9
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css comments">/* Target data-info attr that contains the value "external" */</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css plain">a[data-info~=</code><code class="css string">"external"</code><code class="css plain">] {</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">red</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                      <code class="css plain">}</code>
                    </div>
                    
                    <div class="line number5 index4 alt2">
                    </div>
                    
                    <div class="line number6 index5 alt1">
                      <code class="css comments">/* And which contain the value "image" */</code>
                    </div>
                    
                    <div class="line number7 index6 alt2">
                      <code class="css plain">a[data-info~=</code><code class="css string">"image"</code><code class="css plain">] {</code>
                    </div>
                    
                    <div class="line number8 index7 alt1">
                      <code class="css keyword">border</code><code class="css plain">: </code><code class="css value">1px</code> <code class="css value">solid</code> <code class="css value">black</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number9 index8 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        巧妙吧？
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/attributes7.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.15" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE7+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-17.X:checked" class="nolinks">
        17. X:checked
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">input[type=radio]:checked {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">1px</code> <code class="css value">solid</code> <code class="css value">black</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        很简单，这个伪类可以用来定义<em>选中（checked）</em>的元素，比如单选按钮（radio）或多选按钮（checkbox）。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/checked.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.16" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE9+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-18.X:after" class="nolinks">
        18. X:after
      </h2>
      
      <p>
        伪类<code>before</code>和<code>after</code>属于高级用法。几乎每一天都有人找到高效而有创意的新用法。这两个伪类可以在元素前面和后面添加内容。
      </p>
      
      <p>
        许多人认识到这两个伪类是因为这是清除浮动的技巧。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    01
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    02
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    03
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    04
                  </div>
                  
                  <div class="line number5 index4 alt2">
                    05
                  </div>
                  
                  <div class="line number6 index5 alt1">
                    06
                  </div>
                  
                  <div class="line number7 index6 alt2">
                    07
                  </div>
                  
                  <div class="line number8 index7 alt1">
                    08
                  </div>
                  
                  <div class="line number9 index8 alt2">
                    09
                  </div>
                  
                  <div class="line number10 index9 alt1">
                    10
                  </div>
                  
                  <div class="line number11 index10 alt2">
                    11
                  </div>
                  
                  <div class="line number12 index11 alt1">
                    12
                  </div>
                  
                  <div class="line number13 index12 alt2">
                    13
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">.clearfix:after {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces">  </code><code class="css keyword">content</code><code class="css plain">: </code><code class="css string">""</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css spaces">  </code><code class="css keyword">display</code><code class="css plain">: </code><code class="css value">block</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                      <code class="css spaces">  </code><code class="css keyword">clear</code><code class="css plain">: </code><code class="css value">both</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number5 index4 alt2">
                      <code class="css spaces">  </code><code class="css keyword">visibility</code><code class="css plain">: </code><code class="css value">hidden</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number6 index5 alt1">
                      <code class="css spaces">  </code><code class="css keyword">font-size</code><code class="css plain">: </code><code class="css value"></code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number7 index6 alt2">
                      <code class="css spaces">  </code><code class="css keyword">height</code><code class="css plain">: </code><code class="css value"></code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number8 index7 alt1">
                      <code class="css spaces">  </code><code class="css plain">}</code>
                    </div>
                    
                    <div class="line number9 index8 alt2">
                    </div>
                    
                    <div class="line number10 index9 alt1">
                      <code class="css plain">.clearfix {</code>
                    </div>
                    
                    <div class="line number11 index10 alt2">
                      <code class="css spaces"> </code><code class="css plain">*</code><code class="css keyword">display</code><code class="css plain">: inline-</code><code class="css value">block</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number12 index11 alt1">
                      <code class="css spaces"> </code><code class="css keyword">_height</code><code class="css plain">: </code><code class="css value">1%</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number13 index12 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        这个例子利用<code>:after</code>在元素后面添加间隔和清除浮动的元素。这是你值得拥有的高级技巧，尤其是当<code>overflow: hidden;</code>不管用的时候。
      </p>
      
      <p>
        还有另一种创新的用法，<a class="external-link" href="http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-getting-clever-with-css3-shadows/" rel="nofollow">查看我另一篇快速创建阴影的技巧</a>。
      </p>
      
      <blockquote>
        <p>
          根据CSS3选择器规范，语法上你应该使用双冒号来<code>::</code>来指定伪类。然而，为了兼容多数浏览器，单冒号也被承认。实际上，在目前的情况下，使用单冒号的选择是明智的。
        </p>
      </blockquote>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.17" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE8+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-19.X:hover" class="nolinks">
        19. X:hover
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">div:hover {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#e3e3e3</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        好吧，这个你一定懂。正式的叫法是用户交互伪类<code>user action pseudo class</code>。听起来有些费解，但实际上并非如此。想给用户鼠标划过的元素添加样式？这就派上用场了！
      </p>
      
      <blockquote>
        <p>
          要记住的是在旧版的IE里，<code>:hover</code>只能用于链接标签。
        </p>
      </blockquote>
      
      <p>
        最常见的用法是，比如，当鼠标划过链接，链接会出现下划线（<code>border-bottom</code>）。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">a:hover {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">border-bottom</code><code class="css plain">: </code><code class="css value">1px</code> <code class="css value">solid</code> <code class="css value">black</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <blockquote>
        <p>
          <strong>经验分享</strong> &#8211; <code>border-bottom: 1px solid black;</code>比<code>text-decoration: underline;</code>的效果更好。
        </p>
      </blockquote>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.18" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE6+ （只能用于链接标签）
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-20.X:not(selector)" class="nolinks">
        20. X:not(selector)
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">div:not(#container) {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">blue</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        否定伪类非常有用。比如，我希望选中所有的div元素，除了一个<code>id</code>为<code>container</code>的div。上面的代码就很巧妙地做到了这一点。
      </p>
      
      <p>
        或者，如果我想选中所有不是段落标签的元素，可以像下面这样，但不建议这样使用。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">*:not(p) {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css keyword">color</code><code class="css plain">: </code><code class="css value">green</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/not.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.19" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE9+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-21.X::pseudoElement" class="nolinks">
        21. X::pseudoElement
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    4
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">p::first-line {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">font-weight</code><code class="css plain">: </code><code class="css value">bold</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css spaces"> </code><code class="css keyword">font-size</code><code class="css plain">: </code><code class="css value">1.2em</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        我们可以使用伪元素（用<code>::</code>表示）来定义某些片段元素，比如第一行或第一个字母。要记住的是这只能用于块状（block）元素。
      </p>
      
      <blockquote>
        <p>
          伪元素使用两个冒号<code>::</code>。
        </p>
      </blockquote>
      
      <h4 id="Webdevelopermustbeknow30CSSselector-下面匹配段落的第一个字母：" class="nolinks">
        下面匹配段落的第一个字母：
      </h4>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    4
                  </div>
                  
                  <div class="line number5 index4 alt2">
                    5
                  </div>
                  
                  <div class="line number6 index5 alt1">
                    6
                  </div>
                  
                  <div class="line number7 index6 alt2">
                    7
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">p::first-letter {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">float</code><code class="css plain">: </code><code class="css value">left</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css spaces"> </code><code class="css keyword">font-size</code><code class="css plain">: </code><code class="css value">2em</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                      <code class="css spaces"> </code><code class="css keyword">font-weight</code><code class="css plain">: </code><code class="css value">bold</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number5 index4 alt2">
                      <code class="css spaces"> </code><code class="css keyword">font-family</code><code class="css plain">: </code><code class="css value">cursive</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number6 index5 alt1">
                      <code class="css spaces"> </code><code class="css keyword">padding-right</code><code class="css plain">: </code><code class="css value">2px</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number7 index6 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        上面的代码会先找到所有的段落，然后匹配元素的第一个字母。
      </p>
      
      <p>
        这常用于创建类似报纸文章的样式。
      </p>
      
      <h4 id="Webdevelopermustbeknow30CSSselector-匹配段落的第一行" class="nolinks">
        匹配段落的第一行
      </h4>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    4
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">p::first-line {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">font-weight</code><code class="css plain">: </code><code class="css value">bold</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css spaces"> </code><code class="css keyword">font-size</code><code class="css plain">: </code><code class="css value">1.2em</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        类似地，这里使用<code>::first-line</code>来定义元素的第一行的样式。
      </p>
      
      <blockquote>
        <p>
          “为了兼容现有的样式标准，用户代理必须同时采纳CSS1和CSS2里使用单冒号来表示伪元素的标准（比如:first-line，:first-letter，:before和:after）。但新的伪元素不兼容这种特列。 － <a class="external-link" href="http://www.w3.org/TR/css3-selectors/" rel="nofollow">资料来源</a>”
        </p>
      </blockquote>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/pseudoElements.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.20" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE6+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-22.X:nth-child(n)" class="nolinks">
        22. X:nth-child(n)
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">li:nth-child(</code><code class="css value">3</code><code class="css plain">) {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">red</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        还记得以前我们不可以匹配一组序列元素里的某个元素吗？<code>nth-child</code>伪元素就能解决这个问题！
      </p>
      
      <p>
        要注意的是<code>nth-child</code>指序列里的第n个元素，从1数起。如果你想匹配列表里的第二个元素，可以使用<code>li:nth-child(2)</code>。
      </p>
      
      <p>
        我们甚至可以使用这种方法来选择一系列的子元素。比如<code>li:nth-child(4n)</code>可以选择排在4的倍数的元素。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/nth.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.21" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE9+
        </li>
        <li>
          Firefox 3.5+
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-23.X:nth-last-child(n)" class="nolinks">
        23. X:nth-last-child(n)
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">li:nth-last-child(</code><code class="css value">2</code><code class="css plain">) {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">red</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        假如你有一个无序列表里面有很多子元素，但你只想匹配第三到最后一个元素，那该怎么办？你可以使用伪类<code>nth-last-child</code>。
      </p>
      
      <p>
        这个技巧跟上面的一样，但是从集合的最后一个数起。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/nthLast.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.22" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE9+
        </li>
        <li>
          Firefox 3.5+
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-24.X:nth-of-type(n)" class="nolinks">
        24. X:nth-of-type(n)
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">ul:nth-of-type(</code><code class="css value">3</code><code class="css plain">) {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">1px</code> <code class="css value">solid</code> <code class="css value">black</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        有时候你可能想通过元素的类型<code>type</code>来选择，而不是子元素<code>child</code>。
      </p>
      
      <p>
        假设有5个无序列表。如果你想定义第三个<code>ul</code>的样式，但又没有<code>id</code>来进行匹配，那么可以使用伪类<code>nth-of-type(n)</code>。在上面的代码中，只有第三个<code>ul</code>会有边框。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/nthOfType.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.23" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE9+
        </li>
        <li>
          Firefox 3.5+
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-25.X:nth-last-of-type(n)" class="nolinks">
        25. X:nth-last-of-type(n)
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">ul:nth-last-of-type(</code><code class="css value">3</code><code class="css plain">) {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">border</code><code class="css plain">: </code><code class="css value">1px</code> <code class="css value">solid</code> <code class="css value">black</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        当然，我们也可以使用<code>nth-last-of-type</code>来选择倒数第n个元素。
      </p>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.24" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE9+
        </li>
        <li>
          Firefox 3.5+
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-26.X:first-child" class="nolinks">
        26. X:first-child
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">ul li:first-child {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">border-top</code><code class="css plain">: </code><code class="css value">none</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        这种伪类可以用于选中母元素的第一个子元素，常常用于去掉第一个或最后一个元素的边框。
      </p>
      
      <p>
        例如，假设你有一个序列，每一行的元素都有上边框<code>border-top</code>和下边框<code>border-bottom</code>。这样的话第一个和最后一个元素看来起就没有那么整齐。
      </p>
      
      <p>
        许多设计师就会通过给第一个和最后一个元素添加样式来解决，但实际上可以使用这里提到的伪类。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/firstChild.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.25" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE7+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-27.X:last-child" class="nolinks">
        27. X:last-child
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">ul &gt; li:last-child {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">green</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        <code>last-child</code>是<code>first-child</code>的反面，可以匹配最后一个子元素。
      </p>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-示例" class="nolinks">
        示例
      </h3>
      
      <p>
        下面的例子展示了怎么使用这些伪类。先创建一个无序列表。
      </p>
      
      <h4 id="Webdevelopermustbeknow30CSSselector-代码" class="nolinks">
        代码
      </h4>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords html">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    4
                  </div>
                  
                  <div class="line number5 index4 alt2">
                    5
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="html plain">&lt;</code><code class="html keyword">ul</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="html spaces">   </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt; List Item &lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="html spaces">   </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt; List Item &lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                      <code class="html spaces">   </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt; List Item &lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number5 index4 alt2">
                      <code class="html plain">&lt;/</code><code class="html keyword">ul</code><code class="html plain">&gt;</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        这是一个简单的列表。
      </p>
      
      <h4 id="Webdevelopermustbeknow30CSSselector-CSS" class="nolinks">
        CSS
      </h4>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    01
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    02
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    03
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    04
                  </div>
                  
                  <div class="line number5 index4 alt2">
                    05
                  </div>
                  
                  <div class="line number6 index5 alt1">
                    06
                  </div>
                  
                  <div class="line number7 index6 alt2">
                    07
                  </div>
                  
                  <div class="line number8 index7 alt1">
                    08
                  </div>
                  
                  <div class="line number9 index8 alt2">
                    09
                  </div>
                  
                  <div class="line number10 index9 alt1">
                    10
                  </div>
                  
                  <div class="line number11 index10 alt2">
                    11
                  </div>
                  
                  <div class="line number12 index11 alt1">
                    12
                  </div>
                  
                  <div class="line number13 index12 alt2">
                    13
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">ul {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">width</code><code class="css plain">: </code><code class="css value">200px</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css spaces"> </code><code class="css keyword">background</code><code class="css plain">: </code><code class="css value">#292929</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">white</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number5 index4 alt2">
                      <code class="css spaces"> </code><code class="css keyword">list-style</code><code class="css plain">: </code><code class="css value">none</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number6 index5 alt1">
                      <code class="css spaces"> </code><code class="css keyword">padding-left</code><code class="css plain">: </code><code class="css value"></code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number7 index6 alt2">
                      <code class="css plain">}</code>
                    </div>
                    
                    <div class="line number8 index7 alt1">
                    </div>
                    
                    <div class="line number9 index8 alt2">
                      <code class="css plain">li {</code>
                    </div>
                    
                    <div class="line number10 index9 alt1">
                      <code class="css spaces"> </code><code class="css keyword">padding</code><code class="css plain">: </code><code class="css value">10px</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number11 index10 alt2">
                      <code class="css spaces"> </code><code class="css keyword">border-bottom</code><code class="css plain">: </code><code class="css value">1px</code> <code class="css value">solid</code> <code class="css value">black</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number12 index11 alt1">
                      <code class="css spaces"> </code><code class="css keyword">border-top</code><code class="css plain">: </code><code class="css value">1px</code> <code class="css value">solid</code> <code class="css value">#3c3c3c</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number13 index12 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        这部分代码设置背景颜色，去掉浏览器给<code>ul</code>设置的padding，然后给<code>li</code>加上边框增加深度。
      </p>
      
      <p>
        <span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image confluence-external-resource" src="https://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/extraBorders.png" alt="Styled List" data-image-src="https://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/extraBorders.png" /></span>
      </p>
      
      <blockquote>
        <p>
          给列表增加深度，可以给每个<code>li</code>添加比背景颜色深一点的下边框<code>border-bottom</code>。然后添加比背景颜色<em>浅一点</em>的上边框<code>border-top</code>。
        </p>
      </blockquote>
      
      <p>
        唯一的问题是，上图中无序列表的顶部和底部也会有边框，看起来有点奇怪。可以用伪类<code>:first-child</code>和<code>:last-child</code>来解决。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    4
                  </div>
                  
                  <div class="line number5 index4 alt2">
                    5
                  </div>
                  
                  <div class="line number6 index5 alt1">
                    6
                  </div>
                  
                  <div class="line number7 index6 alt2">
                    7
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">li:first-child {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces">  </code><code class="css keyword">border-top</code><code class="css plain">: </code><code class="css value">none</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                    </div>
                    
                    <div class="line number5 index4 alt2">
                      <code class="css plain">li:last-child {</code>
                    </div>
                    
                    <div class="line number6 index5 alt1">
                      <code class="css spaces"> </code><code class="css keyword">border-bottom</code><code class="css plain">: </code><code class="css value">none</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number7 index6 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        <span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image confluence-external-resource" src="https://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/fixed.png" alt="Fixed" data-image-src="https://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/fixed.png" /></span>这样就好了。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/firstChild.html.1" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.26" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE9+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <p>
        <em>对了，IE8也支持<code>:first-child</code>，但不支持<code>:last-child</code>。</em>
      </p>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-28.X:only-child" class="nolinks">
        28. X:only-child
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">div p:only-child {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">color</code><code class="css plain">: </code><code class="css value">red</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        事实上你很少会用到<code>only-child</code>这个伪类，但是当你需要的时候是可以使用的。
      </p>
      
      <p>
        only-child可以让你匹配唯一的子元素。例如，在上面的代码中，只有当div只有一个p子元素的时候段落字体才是红色的。
      </p>
      
      <p>
        再看下面的代码。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords html">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    4
                  </div>
                  
                  <div class="line number5 index4 alt2">
                    5
                  </div>
                  
                  <div class="line number6 index5 alt1">
                    6
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="html plain">&lt;</code><code class="html keyword">div</code><code class="html plain">&gt;&lt;</code><code class="html keyword">p</code><code class="html plain">&gt; My paragraph here. &lt;/</code><code class="html keyword">p</code><code class="html plain">&gt;&lt;/</code><code class="html keyword">div</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="html plain">&lt;</code><code class="html keyword">div</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                      <code class="html spaces"> </code><code class="html plain">&lt;</code><code class="html keyword">p</code><code class="html plain">&gt; Two paragraphs total. &lt;/</code><code class="html keyword">p</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number5 index4 alt2">
                      <code class="html spaces"> </code><code class="html plain">&lt;</code><code class="html keyword">p</code><code class="html plain">&gt; Two paragraphs total. &lt;/</code><code class="html keyword">p</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number6 index5 alt1">
                      <code class="html plain">&lt;/</code><code class="html keyword">div</code><code class="html plain">&gt;</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        在这种情况下，第二个<code>div</code>里面的段落不会被选中，只有第一个<code>div</code>的段落才被选中。只要母元素含有超过一个子元素，<code>only-child</code>伪类就会失效。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/onlyChild.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.27" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE9+
        </li>
        <li>
          Firefox
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-29.X:only-of-type" class="nolinks">
        29. X:only-of-type
      </h2>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">li:only-of-type {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">font-weight</code><code class="css plain">: </code><code class="css value">bold</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        这个伪类有几种不同的用法。only-of-type会匹配母元素里没有邻近兄弟元素的子元素。例如，匹配所有只有一个列表元素的<code>ul</code>。
      </p>
      
      <p>
        首先想想要怎么做？你可以使用<code>ul li</code>，但这样会匹配<em>所有</em>无序列表的元素，这样<code>only-of-type</code>就是唯一的解决方法。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">ul &gt; li:only-of-type {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">font-weight</code><code class="css plain">: </code><code class="css value">bold</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/onlyOfType.html" class="nolinks">
      </h5>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.28" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE9+
        </li>
        <li>
          Firefox 3.5+
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
      
      <h2 id="Webdevelopermustbeknow30CSSselector-30.X:first-of-type" class="nolinks">
        30. X:first-of-type
      </h2>
      
      <p>
        <code>first-of-type</code>可以用来选择该类型的第一个元素。
      </p>
      
      <h4 id="Webdevelopermustbeknow30CSSselector-练习" class="nolinks">
        练习
      </h4>
      
      <p>
        为了更好地理解，我们来做一个练习。拷贝下面的代码粘贴到你的代码编辑器里：
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords html">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    01
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    02
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    03
                  </div>
                  
                  <div class="line number4 index3 alt1">
                    04
                  </div>
                  
                  <div class="line number5 index4 alt2">
                    05
                  </div>
                  
                  <div class="line number6 index5 alt1">
                    06
                  </div>
                  
                  <div class="line number7 index6 alt2">
                    07
                  </div>
                  
                  <div class="line number8 index7 alt1">
                    08
                  </div>
                  
                  <div class="line number9 index8 alt2">
                    09
                  </div>
                  
                  <div class="line number10 index9 alt1">
                    10
                  </div>
                  
                  <div class="line number11 index10 alt2">
                    11
                  </div>
                  
                  <div class="line number12 index11 alt1">
                    12
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="html plain">&lt;</code><code class="html keyword">div</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="html spaces"> </code><code class="html plain">&lt;</code><code class="html keyword">p</code><code class="html plain">&gt; My paragraph here. &lt;/</code><code class="html keyword">p</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="html spaces"> </code><code class="html plain">&lt;</code><code class="html keyword">ul</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number4 index3 alt1">
                      <code class="html spaces">    </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt; List Item 1 &lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number5 index4 alt2">
                      <code class="html spaces">    </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt; List Item 2 &lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number6 index5 alt1">
                      <code class="html spaces"> </code><code class="html plain">&lt;/</code><code class="html keyword">ul</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number7 index6 alt2">
                    </div>
                    
                    <div class="line number8 index7 alt1">
                      <code class="html spaces"> </code><code class="html plain">&lt;</code><code class="html keyword">ul</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number9 index8 alt2">
                      <code class="html spaces">    </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt; List Item 3 &lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number10 index9 alt1">
                      <code class="html spaces">    </code><code class="html plain">&lt;</code><code class="html keyword">li</code><code class="html plain">&gt; List Item 4 &lt;/</code><code class="html keyword">li</code><code class="html plain">&gt;</code>
                    </div>
                    
                    <div class="line number11 index10 alt2">
                      <code class="html spaces"> </code><code class="html plain">&lt;/</code><code class="html keyword">ul</code><code class="html plain">&gt;  </code>
                    </div>
                    
                    <div class="line number12 index11 alt1">
                      <code class="html plain">&lt;/</code><code class="html keyword">div</code><code class="html plain">&gt;</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        停下来想一下，怎么选中<em>&#8220;List Item 2&#8221;</em>。想到答案了（或者选择放弃）才继续看下面。
      </p>
      
      <h4 id="Webdevelopermustbeknow30CSSselector-方案1" class="nolinks">
        方案1
      </h4>
      
      <p>
        答案有很多种，首先是使用<code>first-of-type</code>。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">ul:first-of-type &gt; li:nth-child(</code><code class="css value">2</code><code class="css plain">) {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">font-weight</code><code class="css plain">: </code><code class="css value">bold</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        上面的代码中，首先找到页面中的第一个无序列表，然后找到它的直接后代，然后选择第二个元素。
      </p>
      
      <h4 id="Webdevelopermustbeknow30CSSselector-方案2" class="nolinks">
        方案2
      </h4>
      
      <p>
        Another option is to use the adjacent selector.
      </p>
      
      <p>
        另一个选择是使用邻近选择器。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">p + ul li:last-child {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">font-weight</code><code class="css plain">: </code><code class="css value">bold</code><code class="css plain">;</code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        这里先找到紧跟在<code>p</code>后面的<code>ul</code>，然后找到最后的元素。
      </p>
      
      <h4 id="Webdevelopermustbeknow30CSSselector-方案3" class="nolinks">
        方案3
      </h4>
      
      <p>
        我们还可以尝试使用不同的组合。
      </p>
      
      <div>
        <div class="syntaxhighlighter noskimlinks noskimwords css">
          <p>
            &nbsp;
          </p>
          
          <div class="table-wrap">
            <table class="confluenceTable">
              <tr>
                <td class="confluenceTd">
                  <div class="line number1 index0 alt2">
                    1
                  </div>
                  
                  <div class="line number2 index1 alt1">
                    2
                  </div>
                  
                  <div class="line number3 index2 alt2">
                    3
                  </div>
                </td>
                
                <td class="confluenceTd">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="css plain">ul:first-of-type li:nth-last-child(</code><code class="css value">1</code><code class="css plain">) {</code>
                    </div>
                    
                    <div class="line number2 index1 alt1">
                      <code class="css spaces"> </code><code class="css keyword">font-weight</code><code class="css plain">: </code><code class="css value">bold</code><code class="css plain">;  </code>
                    </div>
                    
                    <div class="line number3 index2 alt2">
                      <code class="css plain">}</code>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      
      <p>
        这里我们先找到页面的第一个<code>ul</code>，然后找到倒数第一个元素。
      </p>
      
      <h5 id="Webdevelopermustbeknow30CSSselector-http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/firstOfType.html" class="nolinks">
      </h5>
      
      <div class="post__inarticle-ad-template">
        <div class="ad view ad--inarticle">
          <div class="ad__wrapper">
            <div class="ad__label">
              Advertisement
            </div>
          </div>
        </div>
      </div>
      
      <h3 id="Webdevelopermustbeknow30CSSselector-兼容的浏览器.29" class="nolinks">
        兼容的浏览器
      </h3>
      
      <ul>
        <li>
          IE9+
        </li>
        <li>
          Firefox 3.5+
        </li>
        <li>
          Chrome
        </li>
        <li>
          Safari
        </li>
        <li>
          Opera
        </li>
      </ul>
    </div>
  </div>
</div>