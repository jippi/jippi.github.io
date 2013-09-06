---
title: 'open_basedir will slow you down &#8211; security vs. speed'
author: Christian Winther
layout: post
tags:
  - lighttpd
  - Random
---

Just a quickie on lighttpd and open_basedir.

I’m working on some security enhancements for my new website project, and in that progress, I have moved away from Apache2.2.3 and now using Lighttpd instead. Lighttpd does not use the same method of invoking php as apache does (mod_php vs. fast-cgi php).

In my eager to make the application as secure and locked down as possible, I went berserk in the php-cgi.ini file and turned on just about any security feature I could find (not safemode!), including the innocent looking switch called “open_basedir”.

That was rather late in the night, so when I resumed my work the following day, I have long forgotten about all the fancy security settings I had enabled in php.

A few hours ago I noticed that the complete render time for the front page suddenly was ~2seconds(!) &#8211; and comparing with apache’s load time for the same page (0.9s) I was quite disappointed at lighttpd and fastcgi, but refused to give up my new found love without a fair trial.

I attacked google with full force without finding any useful resources that might be able to explain my issue.. I was quite sure it was APC that did not function well in a fastcgi environment &#8211; and therefore my google madness was focused around the keywords “apc + fastcgi”

While chatting to PatrickDK in the #lighttpd channel @ freenode, it suddenly hit me &#8211; let’s try to disable everything I have “fixed” last night &#8211; starting with XDebug, some 3rd party php modules (syck, memcache, simplexml, fileinfo) &#8211; and then, open_basedir flag.

**And with just one line commented out in my php-cgi.ini file, the render time went from 2.4 to 0.5 seconds !!(!!) **

So just a little note to you guys out there, beware of the open_basedir setting in a setup where you include many files, it is a rather costly feature to use. And when running fastcgi php in chroot()ed setup, its not really required anyway

**Its another +1 for lighty and fastcgi**

And yes, I’m aware that open_basedir is slow because it has to validate EVERY file or path you work with inside php to check if its within the scope defined.
