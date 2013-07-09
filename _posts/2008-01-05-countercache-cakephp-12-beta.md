---
title: CounterCache in CakePHP 1.2 beta
author: Christian Winther
layout: post
permalink: /countercache-cakephp-12-beta
categories:
  - Cakephp
---
**Update**  
*05.01.2008* At the moment the counterCache code is only executed on CREATE, not on UPDATE &#8211; a patch is under way

Hello,

Just a little turtorial to demonstrate the new model counterCache feature.

CounterCache is a very fancy little addition to our beloved CakePHP framework.  
Simply put, all it does is make sure that your belongsTo associations always have an updated field with the count of elements belonging to the parent.

Lets use this simple example, just two models and controllers:

*   Posts (posts_controller) (hasMany PostComment) 
*   PostComments (post\_comments\_controller) (belongsTo Post) 

### SQL

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
</pre>
      </td>
      
      <td class="code">
        <pre class="sql" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">-- our posts </span>
<span style="color: #993333; font-weight: bold;">CREATE</span> <span style="color: #993333; font-weight: bold;">TABLE</span> <span style="color: #ff0000;">`posts`</span> <span style="color: #66cc66;">&#40;</span> 
  <span style="color: #ff0000;">`id`</span> <span style="color: #993333; font-weight: bold;">INT</span><span style="color: #66cc66;">&#40;</span><span style="color: #cc66cc;">11</span><span style="color: #66cc66;">&#41;</span> <span style="color: #993333; font-weight: bold;">UNSIGNED</span> <span style="color: #993333; font-weight: bold;">NOT</span> <span style="color: #993333; font-weight: bold;">NULL</span> <span style="color: #993333; font-weight: bold;">AUTO_INCREMENT</span><span style="color: #66cc66;">,</span> 
  <span style="color: #ff0000;">`post_comment_count`</span> <span style="color: #993333; font-weight: bold;">INT</span><span style="color: #66cc66;">&#40;</span><span style="color: #cc66cc;">11</span><span style="color: #66cc66;">&#41;</span> <span style="color: #993333; font-weight: bold;">UNSIGNED</span> <span style="color: #993333; font-weight: bold;">DEFAULT</span> <span style="color: #993333; font-weight: bold;">NULL</span><span style="color: #66cc66;">,</span> 
  <span style="color: #ff0000;">`title`</span> <span style="color: #993333; font-weight: bold;">VARCHAR</span><span style="color: #66cc66;">&#40;</span><span style="color: #cc66cc;">100</span><span style="color: #66cc66;">&#41;</span> <span style="color: #993333; font-weight: bold;">NOT</span> <span style="color: #993333; font-weight: bold;">NULL</span><span style="color: #66cc66;">,</span> 
  <span style="color: #ff0000;">`body`</span> text <span style="color: #993333; font-weight: bold;">NOT</span> <span style="color: #993333; font-weight: bold;">NULL</span><span style="color: #66cc66;">,</span> 
  <span style="color: #993333; font-weight: bold;">PRIMARY</span> <span style="color: #993333; font-weight: bold;">KEY</span>  <span style="color: #66cc66;">&#40;</span><span style="color: #ff0000;">`id`</span><span style="color: #66cc66;">&#41;</span> 
<span style="color: #66cc66;">&#41;</span> ENGINE<span style="color: #66cc66;">=</span>MyISAM <span style="color: #993333; font-weight: bold;">AUTO_INCREMENT</span><span style="color: #66cc66;">=</span><span style="color: #cc66cc;">1</span> <span style="color: #993333; font-weight: bold;">DEFAULT</span> CHARSET<span style="color: #66cc66;">=</span>utf8 ROW_FORMAT<span style="color: #66cc66;">=</span>DYNAMIC;             
&nbsp;
<span style="color: #808080; font-style: italic;">-- comments to our post </span>
<span style="color: #993333; font-weight: bold;">CREATE</span> <span style="color: #993333; font-weight: bold;">TABLE</span> <span style="color: #ff0000;">`post_comments`</span> <span style="color: #66cc66;">&#40;</span> 
  <span style="color: #ff0000;">`id`</span> <span style="color: #993333; font-weight: bold;">INT</span><span style="color: #66cc66;">&#40;</span><span style="color: #cc66cc;">11</span><span style="color: #66cc66;">&#41;</span> <span style="color: #993333; font-weight: bold;">UNSIGNED</span> <span style="color: #993333; font-weight: bold;">NOT</span> <span style="color: #993333; font-weight: bold;">NULL</span> <span style="color: #993333; font-weight: bold;">AUTO_INCREMENT</span><span style="color: #66cc66;">,</span> 
  <span style="color: #ff0000;">`post_id`</span> <span style="color: #993333; font-weight: bold;">INT</span><span style="color: #66cc66;">&#40;</span><span style="color: #cc66cc;">11</span><span style="color: #66cc66;">&#41;</span> <span style="color: #993333; font-weight: bold;">UNSIGNED</span> <span style="color: #993333; font-weight: bold;">NOT</span> <span style="color: #993333; font-weight: bold;">NULL</span><span style="color: #66cc66;">,</span> 
  <span style="color: #ff0000;">`is_active`</span> tinyint<span style="color: #66cc66;">&#40;</span><span style="color: #cc66cc;">1</span><span style="color: #66cc66;">&#41;</span> <span style="color: #993333; font-weight: bold;">UNSIGNED</span> <span style="color: #993333; font-weight: bold;">NOT</span> <span style="color: #993333; font-weight: bold;">NULL</span> <span style="color: #993333; font-weight: bold;">DEFAULT</span> <span style="color: #ff0000;">'0'</span><span style="color: #66cc66;">,</span> 
  <span style="color: #ff0000;">`name`</span> <span style="color: #993333; font-weight: bold;">VARCHAR</span><span style="color: #66cc66;">&#40;</span><span style="color: #cc66cc;">100</span><span style="color: #66cc66;">&#41;</span> <span style="color: #993333; font-weight: bold;">NOT</span> <span style="color: #993333; font-weight: bold;">NULL</span><span style="color: #66cc66;">,</span> 
  <span style="color: #ff0000;">`body`</span> text <span style="color: #993333; font-weight: bold;">NOT</span> <span style="color: #993333; font-weight: bold;">NULL</span><span style="color: #66cc66;">,</span> 
  <span style="color: #993333; font-weight: bold;">PRIMARY</span> <span style="color: #993333; font-weight: bold;">KEY</span>  <span style="color: #66cc66;">&#40;</span><span style="color: #ff0000;">`id`</span><span style="color: #66cc66;">&#41;</span><span style="color: #66cc66;">,</span> 
  <span style="color: #993333; font-weight: bold;">KEY</span> <span style="color: #ff0000;">`post_id`</span> <span style="color: #66cc66;">&#40;</span><span style="color: #ff0000;">`post_id`</span><span style="color: #66cc66;">&#41;</span> 
<span style="color: #66cc66;">&#41;</span> ENGINE<span style="color: #66cc66;">=</span>MyISAM <span style="color: #993333; font-weight: bold;">AUTO_INCREMENT</span><span style="color: #66cc66;">=</span><span style="color: #cc66cc;">1</span> <span style="color: #993333; font-weight: bold;">DEFAULT</span> CHARSET<span style="color: #66cc66;">=</span>utf8 ROW_FORMAT<span style="color: #66cc66;">=</span>DYNAMIC;</pre>
      </td>
    </tr>
  </table>
</div>

To keep things simple, we are just going to use scaffolding in controllers.

### Controllers

#### Posts controller

Put in APP/controllers/posts_controller.php

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
4
5
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span>?php 
<span style="color: #666666; font-style: italic;">// Posts controller </span>
<span style="color: #000000; font-weight: bold;">class</span> PostsController <span style="color: #000000; font-weight: bold;">extends</span> AppController <span style="color: #009900;">&#123;</span> 
    <span style="color: #000000; font-weight: bold;">var</span> <span style="color: #000088;">$scaffold</span><span style="color: #339933;">;</span> 
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

#### PostComments controller

Put in APP/controllers/post\_comments\_controller.php

<pre></pre>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
4
5
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span>?php 
<span style="color: #666666; font-style: italic;">// Post comments controller </span>
<span style="color: #000000; font-weight: bold;">class</span> PostCommentsController <span style="color: #000000; font-weight: bold;">extends</span> AppController <span style="color: #009900;">&#123;</span> 
    <span style="color: #000000; font-weight: bold;">var</span> <span style="color: #000088;">$scaffold</span><span style="color: #339933;">;</span> 
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

### Models

#### Post model

Put in APP/models/post.php

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
4
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span>?php 
<span style="color: #000000; font-weight: bold;">class</span> Post <span style="color: #000000; font-weight: bold;">extends</span> AppModel <span style="color: #009900;">&#123;</span> 
    <span style="color: #000000; font-weight: bold;">var</span> <span style="color: #000088;">$hasMany</span> <span style="color: #339933;">=</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'PostComment'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

#### PostComment model

Put in APP/models/post_comment.php

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
4
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span>?php 
<span style="color: #000000; font-weight: bold;">class</span> PostComment <span style="color: #000000; font-weight: bold;">extends</span> AppModel <span style="color: #009900;">&#123;</span> 
    <span style="color: #000000; font-weight: bold;">var</span> <span style="color: #000088;">$belongsTo</span> <span style="color: #339933;">=</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Post'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'counterCache'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

The interesting thing is the above **PostComment** model. A you can see, a new options key is added, **counterCache** and is set to <u>(bool) true</u>. This informs cake that it should use counterCache on the class (Post) it belongs to.  
This is three possible variables to assign **counterCache**

*   **(bool) true** means enabled, and that cake should auto-generate the count field automagic 
*   **(string) fieldname** tells cake to use your custom field in Post (posts) model and table. 
*   **any value that is considered &#8216;empty&#8217;**disable the feature (this is default, NULL) 

Its important to understand, that the field we specify here, is a field in the REMOTE model / table, not in the local table, so in this case, the field name is in **posts** table.!

As said earlier, cake will automagic generate the remote field name if you only provide a boolean true value, in this case the field will be named **Inflector::underscore($this->alias) . &#8216;_count&#8217;** &#8211; meaning the alias of the **LOCAL** model (PostComment) and a suffix &#8216;_count&#8217;. All is that is converted to a lowercase, underscored value. When these rules are applied to our example above, the remote field in posts will be named **post\_comment\_count** (line 4 in SQL section)

With the code above, you have a very basic scaffolding setup running with couterCache enabled. Very simple stuff <img src='http://www.cakephp.nu/wp-includes/images/smilies/icon_smile.gif' alt=':-)' class='wp-smiley' /> As always when its from the CakePHP team.

### Using counterCache scope

As you might have noticed in the SQL table above, the post_comments table have a field called **is_active** (SQL line 14). This is a sample on how you could moderate your comments. Lets change a bit of code in our models to make this work.

Put in APP/models/post.php (Updated)

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
4
5
6
7
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span>?php 
<span style="color: #666666; font-style: italic;">// Updated Post model </span>
<span style="color: #000000; font-weight: bold;">class</span> Post <span style="color: #000000; font-weight: bold;">extends</span> AppModel <span style="color: #009900;">&#123;</span> 
<span style="color: #000000; font-weight: bold;">var</span> <span style="color: #000088;">$hasMany</span> <span style="color: #339933;">=</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'PostComment'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
        <span style="color: #0000ff;">'conditions'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'is_active'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> <span style="color: #cc66cc;">1</span><span style="color: #009900;">&#41;</span> 
    <span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Notice that I have added a **conditions** array to the **hasMany** relation to **PostComment**.  
This will tell cake to only fetch comments from PostComment where is_active is 1 (aka. is active).

Put in APP/models/post_comment.php (Updated)

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
4
5
6
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span>?php 
<span style="color: #000000; font-weight: bold;">class</span> PostComment <span style="color: #000000; font-weight: bold;">extends</span> AppModel <span style="color: #009900;">&#123;</span> 
    <span style="color: #000000; font-weight: bold;">var</span> <span style="color: #000088;">$belongsTo</span> <span style="color: #339933;">=</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Post'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
        <span style="color: #0000ff;">'counterCache'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">,</span> 
        <span style="color: #0000ff;">'counterScope'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'is_active'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> <span style="color: #cc66cc;">1</span><span style="color: #009900;">&#41;</span> 
    <span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Notice that I have added another field to the **Post** relation called **counterScope**, this is the conditions that cake uses in the **find(&#8216;count&#8217;)**query it creates to find the amount of comments to the Post. By adding this simple array, our counterCache now only count active comments <img src='http://www.cakephp.nu/wp-includes/images/smilies/icon_smile.gif' alt=':)' class='wp-smiley' /> 

Easy done