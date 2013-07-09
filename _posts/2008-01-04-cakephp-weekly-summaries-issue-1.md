---
title: 'CakePHP Weekly Summaries Issue #1'
author: Christian Winther
layout: post
permalink: /cakephp-weekly-summaries-issue-1
categories:
  - Cakephp
---
Welcome to the first issue of CakePHP Weekly Summary. Below you&#8217;ll find all sorts of interesting topics that were discussed on the CakePHP mailing list and on <a target="_blank" href="http://trac.cakephp.org/timeline">SVN</a>.

This week alot happened, but the biggest news is that CakePHP 1.2 have entered **BETA** phase, and with that &#8211; we are close to a feature (API) freeze of the 1.2 branch.

<p align="center">
  •••••••••••••••••••••••••••••••••••••••••••••••••••••••
</p>

### CakePHP 1.2 beta

Yes, finally it happened. Please look at my post about the <!--intlink id="4" text="release of CakePHP 1.2 beta"-->.

### Trac changes

*   <a target="blank" href="http://trac.cakephp.org/changeset/6288">Changeset #6288</a> (gwoo) Added support for stored procedues in DboMysqli, fixes <a title="Passing null to Session->setFlash() params causes error. (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/2340">Ticket #2340</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6289">Changeset #6289</a> (gwoo) Updating controller task with i18n wrappers, closes <a title="i18n-friendly flash messages in baked controller. (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3490">Ticket #3490</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6290">Changeset #6290</a> (nate) Updating help text for ACL shell interface, fixes <a title="acl help grant: use of aco_id, aro_id is confusing (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3790">Ticket #3790</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6291">Changeset #6291</a> (phpnut) Moved merging of components, helpers, and uses vars to Controller::_mergeVars(); fixes bug with PluginAppController? vars not being merged before components are loaded. Fixed <a title="BindableBehaviour - Essential functionality (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3760">Ticket #3760</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6292">Changeset #6292</a> (phpnut) Missing keys when Model merges actsAs. Fixed <a title="[Patch] Missing keys when Model merges actsAs (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3786">Ticket #3786</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6293">Changeset #6293</a> (nate) Adding quoting and name-resolving fields in TreeBehavior. Fixed <a title="Tree behavior SQL bug (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3778">Ticket #3778</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6295">Changeset #6295</a> A few new exciting features was pushed into the repository: 
    *   <!--intlink id="8" text="CounterCache (view my article on counterCache)"-->
    
    *   Model::generateList() was deprecated, and replaced by the new 1.2 cake find syntac. Model::find(&#8216;list&#8217;) 
    *   Model::saveAll() was enhanced to save multiple records and associated records 
    *   Some transactional methods (begin, commit, rollback) was added to DataSource class as well 
    *   bindModel now support to change the bind settings on the fly if the model has already been bound 
    *   Fixed <a title="A bug about magic fields in $whitelist (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3720">Ticket #3720</a>, <a title="bindModel (or similar) to modify existing model binding options, rather than replacing entirely (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/2355">Ticket #2355</a>, <a title="Save associated models along with the model. (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3615">Ticket #3615</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6296">Changeset #6296</a> Implemented Validation::extension(); and Vaidation::range(); Fixed <a title="Built-in file validation (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/2897">Ticket #2897</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6297">Changeset #6297</a> Some optimization in code. Fixed <a title="Some optimization in code (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3653">Ticket #3653</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6298">Changeset #6298</a> Adding test for root path caching. Fixed <a title="View Caching and Routing (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/1349">Ticket #1349</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6299">Changeset #6299</a> Adding full join model support. Fixed <a title="Storing additional data on join tables (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/828">Ticket #828</a>, <a title="HTML ID property for controller's dump DIV (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/1045">Ticket #1045</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6300">Changeset #6300</a> Adding Debugger::log and test cases. Fixed [ticket tixed 995] 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6301">Changeset #6301</a> CSRF usability problems, Security Component and multiple instances of the webapp. Fixed <a title="CSRF usability problems (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/2608">Ticket #2608</a>, <a title="Scurity Compontent and multiple instances of the webapp (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3436">Ticket #3436</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6302">Changeset #6302</a> Adding new URL to validation test 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6303">Changeset #6303</a> Renaming domains in test to generic names 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6304">Changeset #6304</a> Fixing Model::find(&#8216;list&#8217;) when using self-joins 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6306">Changeset #6306</a> Refactoring, fixing SessionComponent test, adding String::tokenize() 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6307">Changeset #6307</a> Adding regular expression support to Set::extract() [ Set::map($data, '{s}.{n}.{[0-9]} ]. Fixed <a title="[Patch][Test] Set::extract enhancements (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3263">Ticket #3263</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6308">Changeset #6308</a> Fixing paths returned by Debugger::trimPath(); 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6309">Changeset #6309</a> Fixing paths in debugger tests 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6310">Changeset #6310</a> Fixing paths in debugger tests 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6312">Changeset #6312</a> Adding String class to shell boostrap. Fixed <a title="Set::extract missing String object (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3793">Ticket #3793</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6313">Changeset #6313</a> Fixing JavascriptHelper::link() for script files outside of webroot/js (i.e. plugins). Fixed <a title="$javascript->link() incorrectly formatting paths for plugin vendors files (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3799">Ticket #3799</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6314">Changeset #6314</a> Removing unused directories from app/pages. Merging changes from app/ to skel/ 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6315">Changeset #6315</a> Fixing after filters for Model::find(&#8216;list&#8217;). Fixed <a title="model->find('list', ...) does not work with i18n (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3805">Ticket #3805</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6316">Changeset #6316</a> Updating TimeHelper. Fixed <a title="TimeHelper has undefined variable (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3801">Ticket #3801</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6317">Changeset #6317</a> Bug in hasAndBelongsToMany. Fixed <a title="Bug in hasAndBelongsToMany (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3814">Ticket #3814</a> 
*   <a target="blank" href="http://trac.cakephp.org/changeset/6320">Changeset #6320</a> updating Set::map() handling of deeply nested arrays, thanks to speedmax for an updated test case. Fixed <a title="Set::__map() mapping nested array in a unexpected way. (closed and fixed)" style="color: green" target="blank" href="https://trac.cakephp.org/ticket/3809">Ticket #3809</a> 

### Google group topics

#### How to find referrer url?

A guy called &#8216;krr&#8217; opened a question <a title="Google group: how to find referrer url?" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/25c4f95a44bc00db">how to find referrer url?</a>, and Daniel Hofstetter quickly replied that Controller::referer() would return the referer.

#### Will CakePHP be able to survive as the Zend Framework matures?

The framework war ignited yet again when &#8220;Action&#8221; created <a title="Google group: Will CakePHP be able to survive as the Zend Framework matures?" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/15d5a0b5a4a312b8">Will CakePHP be able to survive as the Zend Framework matures?</a>.

#### Upgrade problems

Following the release of 1.2 beta &#8220;Mech7&#8243; <a title="Google group: Upgrade problems" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/c6d34dc297233424">Upgrade problems</a> after upgrading his application to the new beta verion. Chris Hartjes quite replied that Mech7 should check his apache and php error logs. Mech7 however, quickly replied that the error was solved (after only 9 minutes), and his solution was to clear the app/tmp/cache folder in this app.  
I had however already written a list of steps I follow when my application suffers from the White Screen Of Death:

*   Check that debug > 0 
*   Clear app/tmp/cache/persistent/* 
*   Check local vhost error log 
*   Check global httpd-error log 
*   Restart apache, (stop, start), restart cache services (memcached ect.) 
*   Enter the world of die(&#8216;stop&#8217;); from app/webroot/index.php and downward in your application 

#### Table inheritance, multiple schemas, and associations

Brian had a interesting question, well, for us postgresql users at least, <a title="Google group: table inheritance, multiple schemas, and associations" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/4f3fcad44af52cb2">table inheritance, multiple schemas, and associations</a>. There we no response to this thread, but after a few hours, he returned with a working solution, very interesting stuff. <img src='http://www.cakephp.nu/wp-includes/images/smilies/icon_smile.gif' alt=':)' class='wp-smiley' /> 

#### Depricated ListControllers

Ronald Chaplin asked what the &#8216;new&#8217; way was in 1.2 to get a list of controllers in your application, since 1.2 had <a title="Google group: Depricated ListControllers" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/a51351910a6b3eed">Depricated ListControllers</a> ( listClasses( CONTROLLERS ); ). He had tried Configure::listObjects(&#8216;controller&#8217;, &#8216;/app/controller&#8217;);, but without success.  
Arno Esterhuizen quickly pointed Ronald in the right direction, [the CakePHP 1.2 api][1]

#### OthAuth looses session &#8211; upgrading to new 1.2.0.6311 (2008)

Klaus had a problem, <a title="Google group: othAuth looses session - upgrading to new 1.2.0.6311 (2008)" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/e45060caa0af039f">othAuth looses session &#8211; upgrading to new 1.2.0.6311 (2008)</a>, but so far no replies, might be a local issue on his setup?

#### Themes management for an app ?

Max asked if anyone had a component/helper for <a title="Google group: Themes management for an app ?" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/9514a0ce300fdb3">Themes management for an app ?</a>. Tarique shamelessly pointed to his own blog, where there is <a target="_blank" href="http://www.sanisoft.com/blog/2007/12/29/theming-your-cakephp-apps-v12/">quick guide on how to make cakephp use ThemeView</a>.

#### Cakephp with PHP 5 and Mysql 5

One of the too often asked questions on the group was asked yet again, <a title="Google group: Cakephp with PHP 5 and Mysql 5" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/4b3dc455f326210a">Cakephp with PHP 5 and Mysql 5</a>, and yes. **CakePHP works fine with both MySQL5 and PHP5!!**. Its rather funny, or sad depending on who you are, that the same questions is asked over and over on the **google**groups&#8230;. I&#8217;m sure the CakePHP guys chose google for a reason <img src='http://www.cakephp.nu/wp-includes/images/smilies/icon_wink.gif' alt=';)' class='wp-smiley' /> 

#### Bug for find('All'

Another of repeating posts on the mailing list is the &#8220;I think I have found a bug&#8221; or just <a title="Google group: bug for find(&#39;All&#39;" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/21dabf1a2c6c3a25">bug for find('All'</a> in this case. And as always, people always point directly to <a target="_blank" href="https://trac.cakephp.org/">Trac bugtracket</a>, as its the one and only place to submit possible bugs..

#### CakeFest website Launched

Mariano Iglesias announced that the <a title="Google group: CakeFest website Launched" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/9c4eff22ea10190d">CakeFest website Launched</a>! There was no replies or reactions on the list, I just hope that people did not overlook this little gem <img src='http://www.cakephp.nu/wp-includes/images/smilies/icon_smile.gif' alt=':)' class='wp-smiley' /> 

#### Bakery hates me

Adam Royle claimed that &#8220;<a title="Google group: bakery hates me" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/6fc38a1062e033a3">bakery hates me</a>&#8220;, because he was not able to comment on a bakery article. Mariano Iglesias was quick to point to <a target="_blank" href="http://trac.cakephp.org">trac</a>website, but a Dr. Hannibal Lecter was snappy, and said &#8220;I don&#8217;t think posting links to Trac solves anything, it is a fact that bakery has many issues (some minor and some..not so minor). Some things should be seriously reconsidered and rewritten. But that&#8217;s just my 2c.&#8221;.

As much as Chris Hartjes agreed with Dr. Hannibal Lecter, he pointed out the important fact that trac is still the one and only place for bugs on cakephp related projects.  
Dr. Hannibal Lecter hoped that someone from the core team was following the group, since it wouldn&#8217;t be very (And I quote) &#8220;userfriendly community&#8221; if they didnt.  
Dr. Tarique Sani (Whats up with all those doctors?) replied that it was unfair against the php team to mark the community less userfriendly because users finding bugs wouldn&#8217;t bother to create tickets on trac, and just posting the errors on the mailing list.  
And FWIW my personal experience is that posting in trac works

Adam Royle said that the reason why he hadn&#8217;t posted a bug report on trac yet was because he didn&#8217;t like opening tickets without a patch or solid way to reproduce the error.  
Dr. Hannibal Lecter returned a apologized that it was not his intention to be unfair against the CakePHP team, and that he really appreciated their efforts. He was however puzzled that the creators of such a great framework as CakePHP would neglect <a target="_blank" href="http://bakery.cakephp.org">The Bakery</a>and made a rather good point: If new users use the bakery, and its full of errors, what would they think of the underlying framework as well?  
Adam Royle returned to the discussion and tried to get answers on his two original questions

*   He was unhappy wit the quality of <a target="_blank" href="http://bakery.cakephp.org/articles/view/want-to-order-your-sql">this article on the bakery</a> 
*   What version of cake is the bakery running on? (1.2 pre-historic afaik) 

Chris Hartjes, our favorite grumpy Canadian, closed the thread with a few harsh comments I&#8217;m not going to quote here <img src='http://www.cakephp.nu/wp-includes/images/smilies/icon_smile.gif' alt=':)' class='wp-smiley' /> Larry E. Masters aka PhpNut posted his announcement on the new 1.2 beta at: <a title="Google group: New Year, New Beta" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/d57865a5fb1dbd2e">New Year, New Beta</a>, that received a few &#8220;thanks&#8221;, but nothing else of interested.

#### Require SSL for entire site?

Bryan Encina asked if it was possible to <a title="Google group: Require SSL for entire site?" target="blank" href="http://groups.google.com/group/cake-php/browse_thread/thread/6420e8565e15cf29">Require SSL for entire site?</a>. His own idea was to check $\_SERVER\['HTTPS'] in his AppController, and then redirect based on this. Chris Hartjes questioned the safety of $\_SERVER['HTTPS'\] (its perfectly safe), to his understanding, it was possible to spoof (its not) this variable. His suggestion was to limit access on webserver level instead of application level.

I (Christian Winther) pointed out that mod\_rewrite would be a perfect solution for this problem, since the RewriteCond directive could check for both SERVER\_PORT (port 80 = non ssl, port 443 = ssl) and SERVER_PROTOCOL (http = non ssl, https = ssl)  
. Robby Anderson suggested using the SecurityComponent::requireSecure() method instead, also a possible solution if you wish to let ssl management be up to the application (htaccess will most likely perform alot better if its just for redirect).  
Chris Hartjes returned to the thread because he had felt a bit wierd about his earlier reply to the group, and confirmed that $_SERVER['HTTPS'] indeed cannot be spoofed. He suggested using Robby&#8217;s solution.

 [1]: http://api.cakephp.org/1.2/class_configure.html#a031c880ff156d79b6402327cda04330