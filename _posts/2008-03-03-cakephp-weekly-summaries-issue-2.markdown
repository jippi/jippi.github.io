---
title: 'CakePHP Weekly Summaries Issue #2'
author: Christian Winther
layout: post
categories:
  - Cakephp
---
### Welcome

Welcome to the second edition of the CakePHP weekly summaries.
Its quite embarrassing that it had to take so long time to get the second editon out. Too long time has passed and the amount of things that has happend during that period is waaay too big to be covered here.
Therefor I present this half-done 2nd edition of the weekly summaries, with a promise that every week from now on I will give you the latest and greatest from the CakePHP world.
So with no further ado, please enjoy this old and probably rather outdated edition of the <del>weekly</del>monthly summaries. <img src='http://www.cakephp.nu/wp-includes/images/smilies/icon_smile.gif' alt=':)' class='wp-smiley' /> See you at the 3rd edition soon <img src='http://www.cakephp.nu/wp-includes/images/smilies/icon_smile.gif' alt=':)' class='wp-smiley' />

### Trac changes

*   <a target="blank" href="http://trac.cakephp.org/changeset/6321">Changeset #6321</a> (phpnut) Fixes <a title="Some non-executable files in source tree have executable permissions (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3817">Ticket #3817</a>, Some non-executable files in source tree have executable permissions
*   <a target="blank" href="http://trac.cakephp.org/changeset/6322">Changeset #6322</a> (phpnut) Updating controller tests created with the console. Added associated fixtures to model tests
*   **<a target="blank" href="http://trac.cakephp.org/changeset/6323">Changeset #6323</a>** (gwoo) Updating Cache to apply prefix for every key, closes <a title="Namespace Support for Cache (memcached) (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3821">Ticket #3821</a>
*   <a target="blank" href="http://trac.cakephp.org/changeset/6324">Changeset #6324</a> (phpnut) Correcting links generated to additional app tests
*   <a target="blank" href="http://trac.cakephp.org/changeset/6325">Changeset #6325</a> (phpnut) Adding support for test fixture generation when creating models, this will eventually be moved to a task. Currently the $records are hard coded to create field type specific data, this will eventually be changed to create random data based on the field type. Refactored tests that are created for models, 3 working tests are not created when generating tests for the model. Added notice output to terminal when creating a project, the CAKE\_CORE\_INCLUDE_PATH is automatically altered and may need to be changed when moving to a production environment. &#8221;
*   <a target="blank" href="http://trac.cakephp.org/changeset/6326">Changeset #6326</a> (phpnut) Fixes svn file property line
*   <a target="blank" href="http://trac.cakephp.org/changeset/6327">Changeset #6327</a> (phpnut) Removing unneeded &#8216; : &#8216;
*   <a target="blank" href="http://trac.cakephp.org/changeset/6328">Changeset #6328</a> (phpnut) Removing unneeded &#8216; : &#8216;
*   **<a target="blank" href="http://trac.cakephp.org/changeset/6329">Changeset #6329</a>** (nate) Fixing reading and writing in Configure class for references 3 levels deep, fixes <a title="Configure doesnt read/write keys with more than two levels (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3845">Ticket #3845</a>
*   <a target="blank" href="http://trac.cakephp.org/changeset/6330">Changeset #6330</a> (nate) Removing un-needed method from TimeHelper? test
*   <a target="blank" href="http://trac.cakephp.org/changeset/6331">Changeset #6331</a> (phpnut) Removing var $useTable; from generated model when tables follow conventions Fixed issue with model tests and fixtures not being created properly when Model name does not match table name
*   <a target="blank" href="http://trac.cakephp.org/changeset/6332">Changeset #6332</a> (phpnut) Updating controller tests created with the console. Added associated fixtures to model tests
*   **<a target="blank" href="http://trac.cakephp.org/changeset/6333">Changeset #6333</a>** (phpnut) Fixes <a title="Deprecated loadView() call in email component when using theme (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3849">Ticket #3849</a>, Deprecated loadView() call in email component when using theme
*   <a target="blank" href="http://trac.cakephp.org/changeset/6334">Changeset #6334</a> (gwoo) updating HttpSocket? with auth, closes <a title="HttpSocket auth doesn't work (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3838">Ticket #3838</a> removing type casting, fixes <a title="HttpSocket may improberly cast long numbers to ints, changing the value (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3827">Ticket #3827</a> adding socket.group to tests
*   <a target="blank" href="http://trac.cakephp.org/changeset/6335">Changeset #6335</a> (gwoo) updating component, removing use of Router not needed anymore, fixes <a title="Fatal error: Class 'Router' not found (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3858">Ticket #3858</a>
*   <a target="blank" href="http://trac.cakephp.org/changeset/6336">Changeset #6336</a> (nate) Adding non-null association key fix in Model, and updating Model::isUnique() to account for current record, fixes [ticket fixed 38599, closes [ticket fixed #2032]
*   **<a target="blank" href="http://trac.cakephp.org/changeset/6337">Changeset #6337</a>** (nate) Fixing return value in Model::saveAll(), fixes <a title="saveAll() Reporting Incorrect Result (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3852">Ticket #3852</a>
*   <a target="blank" href="http://trac.cakephp.org/changeset/6338">Changeset #6338</a> (phpnut) Fixes <a title="Scaffolding and bake script has problems with tables that has underscore in it's name. (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3829">Ticket #3829</a>, Scaffolding and bake script has problems with tables that has underscore in it&#8217;s name
*   <a target="blank" href="http://trac.cakephp.org/changeset/6339">Changeset #6339</a> (phpnut) Fixes <a title="custom scaffolding file lookup paths inconsistent (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3798">Ticket #3798</a>, custom scaffolding file lookup paths inconsistent
*   <a target="blank" href="http://trac.cakephp.org/changeset/6340">Changeset #6340</a> (phpnut) Fixes <a title="set_time_limit(0) has no effect because of ini_set('max_execution_time', 60 * 5); (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3862">Ticket #3862</a>, set\_time\_limit(0) has no effect because of ini\_set(&#8216;max\_execution\_time&#8217;, 60 * 5); changed max\_execution_time , 0. Since php 4.3 this is the default anyway
*   **<a target="blank" href="http://trac.cakephp.org/changeset/6341">Changeset #6341</a>** (phpnut) Fixes <a title="$_SESSION not found (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3811">Ticket #3811</a>, $\_SESSION not found Fixes [ticked fixed 3823], Session not restarted after instantiating new SessionComponent? Fixes #3850, Configuration Session.start and SessionComponent::\__active aren&#8217;t handle correctly
*   **<a target="blank" href="http://trac.cakephp.org/changeset/6342">Changeset #6342</a>** (phpnut) Fixes <a title="Acl component fails to check() if a permission is denied in action (*) (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3851">Ticket #3851</a>, Acl component fails to check() if a permission is denied in action (*)
*   <a target="blank" href="http://trac.cakephp.org/changeset/6343">Changeset #6343</a> (phpnut) Adding test cases from [ticked closed 3810]
*   <a target="blank" href="http://trac.cakephp.org/changeset/6344">Changeset #6344</a> (phpnut) Reverting [] and [] this commit broke the working implementation. Closes <a title="__doThread function of model_php5/model_php4 is broken (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3810">Ticket #3810</a>
*   <a target="blank" href="http://trac.cakephp.org/changeset/6345">Changeset #6345</a> (phpnut) Fixes <a title="Scaffolding is generating an id field with an empty value for auto_increment primary key (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3854">Ticket #3854</a>, Scaffolding is generating an id field with an empty value for auto_increment primary key
*   <a target="blank" href="http://trac.cakephp.org/changeset/6346">Changeset #6346</a> (phpnut) Fixing bug with scaffold and valid Session id check
*   <a target="blank" href="http://trac.cakephp.org/changeset/6347">Changeset #6347</a> (phpnut) Fixing bug with scaffold and valid Session id check in 1.1.x.x
*   <a target="blank" href="http://trac.cakephp.org/changeset/6348">Changeset #6348</a> (gwoo) updating View error handling for extensions, fixes <a title="Can't change extension of layout file (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3795">Ticket #3795</a>
*   <a target="blank" href="http://trac.cakephp.org/changeset/6349">Changeset #6349</a> (nate) Correcting parameter declaration in API shell
*   **<a target="blank" href="http://trac.cakephp.org/changeset/6350">Changeset #6350</a>** (nate) Fixing database drivers for UPDATE/DELETE changes, updating drivers to comply with model tests, most passing. Fixes <a title="DB support for Aliases in genereted UPDATE SQL (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3794">Ticket #3794</a>
*   <a target="blank" href="http://trac.cakephp.org/changeset/6351">Changeset #6351</a> (nate) Whitespace fixes
*   <a target="blank" href="http://trac.cakephp.org/changeset/6352">Changeset #6352</a> (gwoo) adding connection param to schema shell
*   <a target="blank" href="http://trac.cakephp.org/changeset/6353">Changeset #6353</a> (nate) Enabling alternate titles for PaginatorHelper::sort() links based on sort direction, closes <a title="Introduce different titles for Paginator::sort() depending on direction (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3865">Ticket #3865</a>
*   <a target="blank" href="http://trac.cakephp.org/changeset/6354">Changeset #6354</a> (nate) Removing MySQL-specific schema code from core, improving support for PostgreSQL sequences, most tests passing

### Google group topics

#### Why doesn't Find* return a group of model objects?

This topic has been discussed **many** times before, but Deane felt that it was required to ask yet again: &#8220;<a title="Google group: Why doesn&#39;t Find* return a group of model objects?" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/77794ca01fa52f9f">Why doesn't Find* return a group of model objects?</a>&#8220;. He wanted to be able to work with his models in the view (!BAD DESIGN!), and was confused why he only got an array back from the find* methods. Gwoo replied, and I quote: &#8220;**Speed, simplicity, clarity**&#8221; and pointed out that Cake provide view helpers to work with the arrays in almost any way you can imagine, and that the models provide callback functions (afterFind, afterSave, beforeFind, beforeFind) to format your data.
Deane thanked gwoo for the reply, but &#8220;We couldn&#8217;t disagree more strenuously, and we think you&#8217;re wrong beyond belief in your reasoning, but we appreciate the response&#8221;&#8230;. didnt like gwoo&#8217;s reply at all.
Gwoo replied in a calmly matter that &#8220;Everyone is entitled to their opinion and their choice of frameworks.&#8221;
rtconner joined the discussion, offering a solution based on some old code by gwoo that would enable the [models to return objects][1] (StdClass, not models classes)instead of arrays.
Nick also joined the thread, backing up Deaen&#8217;s point of view (Cake is wrong, symfony lover is right) that its proper OO to use objects instead of arrays for the view data, but also reasoned that cake does indeed have the needed hooks and concepts to achieve Deane&#8217;s initial idea with a minimal effort. He explained that in a project he had created with CakePHP was that relationships (belongsTo, hasMany ect.) get more complicated with the OO styled approach, since the queries often fetched much more data than was really needed in the view. The combination of the controller didnt know wich fields the view required and the complex relation ships was in his opinion, not ideal at all. Their work a round was to create a &#8220;LazyData&#8221; class to handle it.
Robby Anderson dropped in his 2 cents, and agreed that the cake was isnt 100% pure OO, but that the concept of &#8220;having the view incapable of performing any meaningful business logic&#8221; is bad, and will sooner or later lead to an unmanagelbe code base.
Deane, the creater of the thread, posted a public apoligy to gwoo, explaining that he was fustrated at the time when he posted his previous post.

So, the summary must be that while some people dont like the design decission that CakePHP models return arrays instead of objects, others agree that its the right way to encapsulate the buisness logic in a correct Model View Control manner, and if you want to break theese convensions, its rather easy to do with minimal effort.

#### Passing Data To A Form

Travis asked how you are <a title="Google group: Passing Data To A Form" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/92d9341a3bf14699">Passing Data To A Form</a>. A bit unexpted (or perhaps expected given the flood of duplicate / newbie questions hitting the groups daily) nobody answered his question. The answer is pretty simple, and covered in any tutorial aviable on cakephp website AND in the documenation / manual.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
</pre>
      </td>

      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">function</span> update<span style="color: #009900;">&#40;</span><span style="color: #000088;">$employeeID</span><span style="color: #009900;">&#41;</span>  <span style="color: #009900;">&#123;</span>
     <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>data <span style="color: #339933;">=</span>  <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>Employee<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>findAllById<span style="color: #009900;">&#40;</span><span style="color: #000088;">$employeeID</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

#### The Show Is Back!

Jeff Loiselle aka phishy announced that <a target="_blank" href="http://live.cakephp.org">the show is back</a>. No replies, no thing, its sad&#8230; the show rocks !

#### I18n in 1.2 model validation message

Athies asked how does <a title="Google group: i18n in 1.2 model validation message" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/6ac5b6520c7e39df">i18n in 1.2 model validation message</a> work. His iniital attemp was to use the i18n method &#8216;__()&#8217; in the model $validate array, but he was getting syntax errors when doing that.
Since PHP does not support useage of functions in instance delclarations its not possible to use i18n directly in the validate array.
Francky06l pointed at his solution in another google post <a title="Google group: i18n: static language references with __(&quot;My lang key&quot;, true) in models and controllers" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/fa32c81acc043eef">i18n: static language references with __("My lang key", true) in models and controllers</a>, and while the solution will work, its far from ideal when working with i18n.
A CakePHP google group regular, Dr. Tarique Sani, pointed out that the correct way to handle i18n validation messages was in the view, not at the model level. Amit Badkas backed up Tarique up and provided a simple example on how to do it:

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
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span> ?php <span style="color: #b1b100;">echo</span>
<span style="color: #000088;">$form</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>input<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'username'</span><span style="color: #339933;">,</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'error'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span>
    <span style="color: #0000ff;">'alphanumeric'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> __<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Username must contain alpha-numeric characters'</span><span style="color: #339933;">,</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span>
    <span style="color: #0000ff;">'between'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> __<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Username must be between 8 to 20 characters'</span><span style="color: #339933;">,</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
?<span style="color: #339933;">&</span>gt<span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Francky06l seemed to know that, his consern was the if he multiple views where the validation errors should show, it would be convenient to do it at model level.
Robby Anderson wasnt sure why you just couldnt do both, create the validation errors in the model, and wrap them in __() in the view.

And sure, that will work &#8211; but &#8211; you will loose some cake magic with that. The console application

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;">cake i18n <span style="color: #990000;">extract</span></pre>
      </td>
    </tr>
  </table>
</div>

will not add the i18n messages to the pot file automagic. Also, the i18n extract command will not even search your models for any i18n magic. It will only look in controllers and views. You can choose to call this a limit or a feature, but thats how cakephp has decided to do it, to enforce their paradime on how an application should be build and structured.

#### FormHelper Labels

Travis asked how it was possible to disable the automagic label in the FormHelper. Robby Anderson provided the correct solution for this issue, use &#8216;label&#8217; => **false**:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span> ?php <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$form</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>input<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Employee.name'</span><span style="color: #339933;">,</span><span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'label'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>?<span style="color: #339933;">&</span>gt<span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

#### Using model objects in the controllers

[Deane from earlier][2] posted another question on <a title="Google group: Using model objects in the controllers" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/3d03fd90d7fabaea">Using model objects in the controllers</a>. I dont really want to dwell much on this post, since its really attemp to take CakePHP in another direction than its supposed to. Deane clearly shows a lack of insight on how cakephp is supposed to work, and failed to provide any usefull examples that could show the group what he wanted to do.

 [1]: http://bin.cakephp.org/saved/24245
 [2]: #Why_doesn.26.2339.3Bt_Find.2A_return_a_group_of_model_objects.3F
