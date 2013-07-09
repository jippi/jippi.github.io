---
title: A quick tutorial on CakePHP Set class (Part 1)
author: Christian Winther
layout: post
permalink: /quick-tutorial-cakephp-set-class-part-1
old_slug:
  - quick-turtorial-cakephp-set-class-part-1
categories:
  - Cakephp
---
### Test data

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
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000088;">$data</span> <span style="color: #339933;">=</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
    <span style="color: #cc66cc;">1</span> <span style="color: #339933;">=&gt;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Post'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
            <span style="color: #0000ff;">'id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">1</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'post_comment_count'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">2</span><span style="color: #339933;">,</span> 
            <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My first title'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'body'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My first body'</span> 
        <span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> 
        <span style="color: #0000ff;">'PostComment'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
            <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
                <span style="color: #0000ff;">'id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">1</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'post_id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">1</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'is_active'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">1</span><span style="color: #339933;">,</span> 
                <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My first comment'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'body'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My first comment'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> 
            <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
                <span style="color: #0000ff;">'id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">2</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'post_id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">2</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'is_active'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">1</span><span style="color: #339933;">,</span> 
                <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My second comment'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'body'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My second comment'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> 
            <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
                <span style="color: #0000ff;">'id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">3</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'post_id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">2</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'is_active'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">1</span><span style="color: #339933;">,</span> 
                <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My third comment'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'body'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My third comment'</span><span style="color: #009900;">&#41;</span> 
        <span style="color: #009900;">&#41;</span> 
    <span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> 
    <span style="color: #cc66cc;">2</span> <span style="color: #339933;">=&gt;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Post'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
            <span style="color: #0000ff;">'id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">2</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'post_comment_count'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">1</span><span style="color: #339933;">,</span> 
            <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My second title'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'body'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My second title'</span> 
        <span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> 
        <span style="color: #0000ff;">'PostComment'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
            <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
                <span style="color: #0000ff;">'id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">4</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'post_id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">2</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'is_active'</span> <span style="color: #339933;">=&gt;</span> 
                <span style="color: #cc66cc;">1</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My fourth comment'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'body'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My fourth comment'</span> 
            <span style="color: #009900;">&#41;</span> 
        <span style="color: #009900;">&#41;</span> 
    <span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> 
    <span style="color: #cc66cc;">3</span> <span style="color: #339933;">=&gt;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Post'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
            <span style="color: #0000ff;">'id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">3</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'post_comment_count'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;"></span><span style="color: #339933;">,</span> 
            <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My third title'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'body'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My third title'</span> 
        <span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> 
        <span style="color: #0000ff;">'PostComment'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span>                   
&nbsp;
        <span style="color: #009900;">&#41;</span> 
    <span style="color: #009900;">&#41;</span> 
<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>                   
&nbsp;
<span style="color: #000088;">$dataExtra</span> <span style="color: #339933;">=</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
    <span style="color: #cc66cc;">4</span> <span style="color: #339933;">=&gt;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Post'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
            <span style="color: #0000ff;">'id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">4</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'post_comment_count'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">1</span><span style="color: #339933;">,</span> 
            <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My fourth title'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'body'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My fourth title'</span> 
        <span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> 
        <span style="color: #0000ff;">'PostComment'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
            <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
                <span style="color: #0000ff;">'id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">5</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'post_id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">4</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'is_active'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">1</span><span style="color: #339933;">,</span> 
                <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My fifth comment'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'bdoy'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My fifth comment'</span> 
            <span style="color: #009900;">&#41;</span> 
        <span style="color: #009900;">&#41;</span> 
    <span style="color: #009900;">&#41;</span> 
<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

### Set::merge

**PHP doc blcok**

<pre>This function can be thought of as a hybrid between PHP's array_merge and 
array_merge_recursive. The difference to the two is that if an array key 
contains another array then the function behaves recursive (unlike array_merge) 
but does not do if for keys containing strings (unlike array_merge_recursive). 
See the unit test for more information.         

Note: This function will work with an unlimited amount of arguments and 
typecasts non-array parameters into arrays.</pre>

A bit like <a target="_blank" href="http://php.net/array_merge_recursive">array_merge_recursive</a>. Merge joins two arrays on their keys.  
If we want to add the **$extraData** array into the **$dat** most people would probably think, hey, lets merge them using Set::merge&#8230; but.. no, dont, unless you know what your doing.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;">pr<span style="color: #009900;">&#40;</span>Set<span style="color: #339933;">::</span><span style="color: #004000;">merge</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$data</span><span style="color: #339933;">,</span> <span style="color: #000088;">$dataExtra</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

The above cod will only produce the &#8216;expected&#8217;(?) result because I have added the numeric key **4** in the $extraData array (Line 40). If I had, as I did the first time around, just let php auto-increment the keys for me, both $datad and $extraData would contain the numeric index key ****, and since Set::merge works on keys, $extraData&#8217;s **Fourth post** would overwrite $data&#8217;s **First post** where they had anything in common (id, name, post\_comment\_count, body **and** everything in the first PostComment (My first comment)).

In case I had let php handle the index keys, I would have to use Set::insert to append the fourth comment to the list.

A better use of Set::merge is in CAKE/libs/model/model.php where is automagic merges &#8216;actsAs&#8217; from your current model (PostComment) and your AppModel, so you automagic inherit the global behaviors from AppModel:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>384
385
386
387
388
389
390
391
392
393
394
395
396
397
398
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #666666; font-style: italic;">// model.php </span>
<span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">is_subclass_of</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'AppModel'</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> 
    <span style="color: #000088;">$appVars</span> <span style="color: #339933;">=</span> <span style="color: #990000;">get_class_vars</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'AppModel'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
    <span style="color: #000088;">$merge</span> <span style="color: #339933;">=</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>             
&nbsp;
    <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">actsAs</span> <span style="color: #339933;">!==</span> <span style="color: #009900; font-weight: bold;">null</span> <span style="color: #339933;">||</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">actsAs</span> <span style="color: #339933;">!==</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> 
        <span style="color: #000088;">$merge</span><span style="color: #009900;">&#91;</span><span style="color: #009900;">&#93;</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'actsAs'</span><span style="color: #339933;">;</span> 
    <span style="color: #009900;">&#125;</span>             
&nbsp;
    <span style="color: #b1b100;">foreach</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$merge</span> <span style="color: #b1b100;">as</span> <span style="color: #000088;">$var</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> 
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$appVars</span><span style="color: #009900;">&#91;</span><span style="color: #000088;">$var</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&&</span> <span style="color: #339933;">!</span><span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$appVars</span><span style="color: #009900;">&#91;</span><span style="color: #000088;">$var</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&&</span> <span style="color: #990000;">is_array</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&gt;</span><span style="color: #009900;">&#123;</span><span style="color: #000088;">$var</span><span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> 
            <span style="color: #000088;">$this</span><span style="color: #339933;">-&gt;</span><span style="color: #009900;">&#123;</span><span style="color: #000088;">$var</span><span style="color: #009900;">&#125;</span> <span style="color: #339933;">=</span> Set<span style="color: #339933;">::</span><span style="color: #004000;">merge</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$appVars</span><span style="color: #009900;">&#91;</span><span style="color: #000088;">$var</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">,</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&gt;</span><span style="color: #009900;">&#123;</span><span style="color: #000088;">$var</span><span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
        <span style="color: #009900;">&#125;</span> 
    <span style="color: #009900;">&#125;</span> 
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

A funny thing is that Set::merge is still rarely used in the core code yet. Probably because array_merge (or **am()**) is faster for simple operations like just merging two simple 1 level arrays like a config array.

### Set::filter

**PHP doc blcok**

<pre>Filters empty elements out of a route array, excluding '0'.</pre>

This method is **not** recursive. So doing

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&lt;</span> ?php 
pr<span style="color: #009900;">&#40;</span>Set<span style="color: #339933;">::</span><span style="color: #004000;">filter</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$data</span><span style="color: #339933;">,</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

wont change anything in the array sinc no elements in first level is empty.

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
6
7
8
9
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;">pr<span style="color: #009900;">&#40;</span>Set<span style="color: #339933;">::</span><span style="color: #004000;">filter</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$data</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">3</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">,</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>      
&nbsp;
<span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Post'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> 
    <span style="color: #0000ff;">'id'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">3</span><span style="color: #339933;">,</span> 
    <span style="color: #0000ff;">'post_comment_count'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;"></span><span style="color: #339933;">,</span> 
    <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My third title'</span><span style="color: #339933;">,</span> 
    <span style="color: #0000ff;">'body'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'My third title'</span> 
    <span style="color: #009900;">&#41;</span> 
<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

We will notice that the PostComment array is gone, since its empty

### Set::pushDiff

**PHP doc blcok**

<pre>Pushes the differences in $array2 onto the end of $array</pre>

That sounds simple enough, and it really is.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;">pr<span style="color: #009900;">&#40;</span>Set<span style="color: #339933;">::</span><span style="color: #004000;">pushDiff</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$data</span><span style="color: #339933;">,</span> <span style="color: #000088;">$dataExtra</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

just pushes the $dataExtra on the end of $data, since they have nothing in common. Again, this method operates on the array keys when comparing arrays.

### Set::map

**PHP doc block**

<pre>Maps the contents of the Set object to an object hierarchy. 
Maintains numeric keys as arrays of objects</pre>

That sounds very fancy, and it is! A lot of people migrating to CakePHP from Symfony (PHPDoctrine, Propel) will probably be confused at first that all model data in CakePHP is arrays, and not objects like other frameworks. This method attemps to 'fix' this issue by converting a model data array to a set of objects (StdClass). StdClass is a build-in dummy class in PHP, and it doesnt really do anything but contain data, no methods or fancy magic there.

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
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&lt;</span> ?php 
<span style="color: #666666; font-style: italic;">// Convert to objects </span>
<span style="color: #000088;">$map</span> <span style="color: #339933;">=</span> Set<span style="color: #339933;">::</span><span style="color: #004000;">map</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$data</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
<span style="color: #666666; font-style: italic;">// id of first post (Object style) </span>
<span style="color: #b1b100;">echo</span> <span style="color: #000088;">$map</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;"></span><span style="color: #009900;">&#93;</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">id</span><span style="color: #339933;">;</span> 
<span style="color: #666666; font-style: italic;">// name of first comment to first post (Object style) </span>
<span style="color: #b1b100;">echo</span> <span style="color: #000088;">$map</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;"></span><span style="color: #009900;">&#93;</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">PostComment</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;"></span><span style="color: #009900;">&#93;</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">name</span><span style="color: #339933;">;</span> 
<span style="color: #666666; font-style: italic;">// name of first comment to first post (array style) </span>
<span style="color: #b1b100;">echo</span> <span style="color: #000088;">$map</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;"></span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'PostComment'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;"></span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'name'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// WONT WORK, Cannot access StdClass as an array</span></pre>
      </td>
    </tr>
  </table>
</div>

As you can see above, its important to decide what method you want to use, Object or Array style, since they cannot be mixed.  
Also, the return from Set::map is a mix of arrays and StdClass, thats why I can access $map\[0] as array, but not access $map[0\]\['name'\].

### Set::numeric

**PHP doc blcok**

<pre>Checks to see if all the values in the array are numeric</pre>

Not much to say on this one, because it doesnt do more or less than the name implies.

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
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #666666; font-style: italic;">// false </span>
<span style="color: #990000;">var_dump</span><span style="color: #009900;">&#40;</span>Set<span style="color: #339933;">::</span><span style="color: #004000;">numeric</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$data</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
<span style="color: #666666; font-style: italic;">// false </span>
<span style="color: #990000;">var_dump</span><span style="color: #009900;">&#40;</span>Set<span style="color: #339933;">::</span><span style="color: #004000;">numeric</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$data</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">1</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
<span style="color: #666666; font-style: italic;">// false </span>
<span style="color: #990000;">var_dump</span><span style="color: #009900;">&#40;</span>Set<span style="color: #339933;">::</span><span style="color: #004000;">numeric</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$data</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">1</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'PostComment'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
<span style="color: #666666; font-style: italic;">// true </span>
<span style="color: #990000;">var_dump</span><span style="color: #009900;">&#40;</span>Set<span style="color: #339933;">::</span><span style="color: #004000;">numeric</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #cc66cc;">1</span><span style="color: #339933;">,</span><span style="color: #cc66cc;">2</span><span style="color: #339933;">,</span><span style="color: #cc66cc;">3</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

\---\----

Thats it for now, next time I will look at:

Set::enum, Set::format, Set::extract, Set::insert, Set::remove, Set::check, Set::diff, Set::isEqual, Set::contains, Set::countDim, Set::normalize, Set::combine and Set::reverse.

Look forward to it