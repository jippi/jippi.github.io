---
title: CakePHP 1.2 beta has been released
author: Christian Winther
layout: post
tags:
  - CakePHP
---

Finally it happened ! **CakePHP 1.2 beta** has been released.

Some of the new stuff includes:

*   Reverse routing for array based urls
*   RESTful automagic
*   Forms are easier to create and maintain
*   Security enhancements for better CSRF prevention and HTTP Authentication
*   CookieComponent for securely storing persistent data on the client side
*   Model behaviors
*   The &#8220;with&#8221; key allows you to define a dynamic join table model
*   Pagination of model records with an extensive helper
*   Internationalization and Localization
*   Authentication component
*   Configure class to provide dynamic handling of configuration settings
*   Cache Engine (memcache, xcache, apc, model, file)
*   Console

View the rest of the changes at <a target="_blank" href="http://bakery.cakephp.org/articles/view/new-year-new-beta">the bakery announcement</a> made by PHPnut

I have been using the 1.2 branch for more than a year now, and it has been a real pleasure to see how development has moved in a very interested direction. Being in the -dev channel I have also been able to follow some of the discussions on what can stay and what can go. The result, a very clean codebase with a lot of cool features, that is very easy (and **fast!**) to use.

One of my personal favorites has to be the new ModelBehavior feature. Its incredible easy to work with, and makes its very easy to add new features to a already running project without having to hack your way into either Cake or App code :)

One of the few things I miss is the possibility to return a result set in Model::beforeFind &#8211; so it would be possible to create a simple cache mechanism for your query data (together with the new cache engines). Its possible, but requires a little bit of overloading of Model::find to get it to play nicely, oh well :)
