---
title: Generic non-www to www (and vice versa) 301 redirect using .htaccess
author: Biesbjerg
layout: post
tags:
  - CakePHP
---

I&#8217;ve always hardcoded the domain name in my htaccess&#8217;es, requiring me to make changes each time I deploy a new website.

## The solution:

Behold, an alternate, generic method of redirecting non-www to www and www to non-www, requiring no changes between deployments!

### Non-www to www

{% highlight text %}
RewriteCond %{HTTP_HOST} !^www\.
RewriteRule (.*) http://www.%{HTTP_HOST}/$1 [R=301,L]
{% endhighlight %}

### www to non-www

{% highlight text %}
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^/(.*)$ http://%1/$1 [R=301,L]
{% endhighlight %}

### Bonus tip: Remove trailing slash from address line

RewriteRule ^(.+)/$ http://%{HTTP_HOST}/$1 [R=301,L]
