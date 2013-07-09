---
title: 'Faster Page Loads &#8211; Bundle Your CSS and Javascript with lighttpd'
author: Christian Winther
layout: post
categories:
  - lighttpd
  - lua
---
Hello again,

### Preface

This time I have been busy playing with <a target="_blank" href="http://www.lighttpd.net/">Lighttpd</a> and <a target="_blank" href="http://trac.lighttpd.net/trac/wiki/Docs:ModMagnet">mod_magnet</a>. I found <a target="_blank" href="http://nordisch.org/2007/4/10/hah-it-s-not-only-me">a blog post </a>where <a target="_blank" href="http://nordisch.org/">darix </a> mentions a post from sitepoint where they demostrate <a target="_blank" href="http://www.sitepoint.com/blogs/2007/04/10/faster-page-loads-bundle-your-css-and-javascript/">a technique to speed up the HTTP GET of javascript and CSS files</a>.

Its quite simple really, instead of doing

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;link href="/css/styles1.css" rel="stylesheet" type="text/css" /&gt;
&lt;link href="/css/styles2.css" rel="stylesheet" type="text/css" /&gt;
&lt;link href="/css/styles3.css" rel="stylesheet" type="text/css" /&gt;</pre>
      </td>
    </tr>
  </table>
</div>

you simply do

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;link href="/css/styles1.css,styles2.css,styles3.css" rel="stylesheet" type="text/css" /&gt;</pre>
      </td>
    </tr>
  </table>
</div>

and then this script will automagic concat them together into one big file, and make lighty serve that one instead. (The same goes for javascript files, or anything really)

This could save ALOT of HTTP GET&#8217;s to your server, and increase the overall loadtime and performance of your site alot, especially if you use alot of Web2.0 stuff <img src='http://www.cakephp.nu/wp-includes/images/smilies/icon_smile.gif' alt=':)' class='wp-smiley' />

However, the Lua source for their script was not made public, so nobody could benifit from their otherwise impressive speed gains. <img src='http://www.cakephp.nu/wp-includes/images/smilies/icon_sad.gif' alt=':(' class='wp-smiley' />

Until now.. or, well, almost &#8211; its not their script, but my own attempt to mimic what they did in pure <a target="_blank" href="http://www.lua.org/">Lua</a> <img src='http://www.cakephp.nu/wp-includes/images/smilies/icon_smile.gif' alt=':)' class='wp-smiley' />

I tried to keep the dependencies down to a minimum, however I decided to use one, md5.
You can find the source <a target="_blank" href="http://www.tecgraf.puc-rio.br/~lhf/ftp/lua/#lmd5">here</a> ([5.1][1], [5.0][2])

### Config

charset (Line 42)
:   Set it so it matches the headers in your lighttpd.conf file. Must match your mod_compress settings aswell to utilize that feature

prefix (Line 43)
:   Could be anything really, its just a mean to &#8220;namespace&#8221; your cached files so you can run the script with multiple configs

rootPath (Line 44)
:   The path to look for the files to concat, default should be fine for most DOC\_ROOT/js and DOC\_ROOT/css

concatRoot (Line 45)
:   The folder to store the concated files, can be anywhere <img src='http://www.cakephp.nu/wp-includes/images/smilies/icon_smile.gif' alt=':)' class='wp-smiley' />

### Setup

*   Put the source below somewhere on your disk, I asume you name it bundle.lua
*   Enable mod_magnet in lighttpd.conf
*   Add <u>magnet.attract-physical-path-to = ( &#8220;YOUR_PATH/bundle.lua&#8221; )</u> to your config where needed
*   Restart lighttpd
*   Modify your css/js links to utilize the new feature:)

Optimal you can enable mod_compress aswell, bundle.lua works out of the box with any other lighttpd module you may have <img src='http://www.cakephp.nu/wp-includes/images/smilies/icon_smile.gif' alt=':)' class='wp-smiley' />

### Source

<a target="_blank" href="http://www.cakephp.nu/files/mod_magnet/bundle_0.1.lua">download source</a>

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
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
</pre>
      </td>

      <td class="code">
        <pre class="lua" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">--- get stat information on a path</span>
<span style="color: #808080; font-style: italic;">-- @param path to stat</span>
<span style="color: #808080; font-style: italic;">-- @param the ftype to return</span>
<span style="color: #808080; font-style: italic;">-- @return false if ftype or path does not exist</span>
<span style="color: #aa9900; font-weight: bold;">function</span> file_info<span style="color: #66cc66;">&#40;</span>path<span style="color: #66cc66;">,</span> ftype<span style="color: #66cc66;">&#41;</span>
    <span style="color: #aa9900; font-weight: bold;">local</span> attr <span style="color: #66cc66;">=</span> lighty<span style="color: #66cc66;">.</span>stat<span style="color: #66cc66;">&#40;</span>path<span style="color: #66cc66;">&#41;</span>
    <span style="color: #aa9900; font-weight: bold;">if</span> attr <span style="color: #aa9900; font-weight: bold;">and</span> attr<span style="color: #66cc66;">&#91;</span>ftype<span style="color: #66cc66;">&#93;</span> <span style="color: #aa9900; font-weight: bold;">then</span>
        <span style="color: #aa9900; font-weight: bold;">return</span> attr<span style="color: #66cc66;">&#91;</span>ftype<span style="color: #66cc66;">&#93;</span>
    <span style="color: #aa9900; font-weight: bold;">end</span>
    <span style="color: #aa9900; font-weight: bold;">return</span> <span style="color: #aa9900;">false</span>
<span style="color: #aa9900; font-weight: bold;">end</span>
&nbsp;
<span style="color: #808080; font-style: italic;">--- Wrapper for reading a full file into a string</span>
<span style="color: #808080; font-style: italic;">-- @param filename Full path to the file</span>
<span style="color: #808080; font-style: italic;">-- @return a string with the content of the file</span>
<span style="color: #aa9900; font-weight: bold;">function</span> read_file<span style="color: #66cc66;">&#40;</span>filename<span style="color: #66cc66;">&#41;</span>
    <span style="color: #aa9900; font-weight: bold;">local</span> content <span style="color: #66cc66;">=</span> <span style="color: #ff6666;">""</span>
    <span style="color: #aa9900; font-weight: bold;">if</span> file_info<span style="color: #66cc66;">&#40;</span>filename<span style="color: #66cc66;">,</span> <span style="color: #ff6666;">"is_file"</span><span style="color: #66cc66;">&#41;</span> <span style="color: #aa9900; font-weight: bold;">then</span>
        <span style="color: #aa9900; font-weight: bold;">local</span> file <span style="color: #66cc66;">=</span> <span style="color: #0000aa;">io.open</span><span style="color: #66cc66;">&#40;</span>filename<span style="color: #66cc66;">,</span> <span style="color: #ff6666;">"r"</span><span style="color: #66cc66;">&#41;</span>
        content <span style="color: #66cc66;">=</span> file<span style="color: #66cc66;">:</span><span style="color: #0000aa;">read</span><span style="color: #66cc66;">&#40;</span><span style="color: #ff6666;">"*a"</span><span style="color: #66cc66;">&#41;</span>
        <span style="color: #0000aa;">io.close</span><span style="color: #66cc66;">&#40;</span>file<span style="color: #66cc66;">&#41;</span>
    <span style="color: #aa9900; font-weight: bold;">end</span>
    <span style="color: #aa9900; font-weight: bold;">return</span> content
<span style="color: #aa9900; font-weight: bold;">end</span>
&nbsp;
<span style="color: #808080; font-style: italic;">--- Wrapper for writeing content to a file</span>
<span style="color: #808080; font-style: italic;">-- @param filename Full path to the destionation file</span>
<span style="color: #808080; font-style: italic;">-- @param content The string to write</span>
<span style="color: #aa9900; font-weight: bold;">function</span> write_cache<span style="color: #66cc66;">&#40;</span>filename<span style="color: #66cc66;">,</span> content<span style="color: #66cc66;">&#41;</span>
    <span style="color: #aa9900; font-weight: bold;">local</span> file <span style="color: #66cc66;">=</span> <span style="color: #0000aa;">io.open</span><span style="color: #66cc66;">&#40;</span>filename<span style="color: #66cc66;">,</span> <span style="color: #ff6666;">"w"</span><span style="color: #66cc66;">&#41;</span>
    file<span style="color: #66cc66;">:</span><span style="color: #0000aa;">write</span><span style="color: #66cc66;">&#40;</span>content<span style="color: #66cc66;">&#41;</span>
    <span style="color: #0000aa;">io.close</span><span style="color: #66cc66;">&#40;</span>file<span style="color: #66cc66;">&#41;</span>
<span style="color: #aa9900; font-weight: bold;">end</span>
&nbsp;
<span style="color: #808080; font-style: italic;">--- Concat multiple files into one file </span>
<span style="color: #808080; font-style: italic;">-- @param lighty lighty global variable passed to the method</span>
<span style="color: #808080; font-style: italic;">-- @param match The files that will be concat into a file</span>
<span style="color: #808080; font-style: italic;">-- @param fileExtension Do !NOT! include the dot ( . )</span>
<span style="color: #aa9900; font-weight: bold;">function</span> combine_files<span style="color: #66cc66;">&#40;</span>lighty<span style="color: #66cc66;">,</span> files<span style="color: #66cc66;">,</span> fileExtension<span style="color: #66cc66;">&#41;</span>
    <span style="color: #0000aa;">require</span> <span style="color: #ff6666;">"md5"</span>
&nbsp;
    <span style="color: #aa9900; font-weight: bold;">local</span> charset       <span style="color: #66cc66;">=</span> <span style="color: #ff6666;">"; charset=utf-8"</span>
    <span style="color: #aa9900; font-weight: bold;">local</span> prefix        <span style="color: #66cc66;">=</span> <span style="color: #ff6666;">"cache-"</span>
    <span style="color: #aa9900; font-weight: bold;">local</span> rootPath      <span style="color: #66cc66;">=</span> lighty<span style="color: #66cc66;">.</span>env<span style="color: #66cc66;">&#91;</span><span style="color: #ff6666;">"physical.doc-root"</span><span style="color: #66cc66;">&#93;</span> <span style="color: #66cc66;">..</span> fileExtension <span style="color: #66cc66;">..</span> <span style="color: #ff6666;">"/"</span>
    <span style="color: #aa9900; font-weight: bold;">local</span> concatRoot     <span style="color: #66cc66;">=</span> <span style="color: #ff6666;">"/tmp/cache/"</span>
    <span style="color: #aa9900; font-weight: bold;">local</span> lastModified  <span style="color: #66cc66;">=</span> <span style="color: #cc66cc;"></span>
&nbsp;
    <span style="color: #aa9900; font-weight: bold;">for</span> file <span style="color: #aa9900; font-weight: bold;">in</span> <span style="color: #0000aa;">string</span><span style="color: #66cc66;">.</span>gmatch<span style="color: #66cc66;">&#40;</span>files<span style="color: #66cc66;">,</span> <span style="color: #ff6666;">"(.-\."</span> <span style="color: #66cc66;">..</span> fileExtension <span style="color: #66cc66;">..</span> <span style="color: #ff6666;">"),?"</span><span style="color: #66cc66;">&#41;</span> <span style="color: #aa9900; font-weight: bold;">do</span>
        <span style="color: #aa9900; font-weight: bold;">local</span> fullPath <span style="color: #66cc66;">=</span> rootPath <span style="color: #66cc66;">..</span> file
        modTime <span style="color: #66cc66;">=</span> file_info<span style="color: #66cc66;">&#40;</span>fullPath<span style="color: #66cc66;">,</span> <span style="color: #ff6666;">"st_mtime"</span><span style="color: #66cc66;">&#41;</span>
        <span style="color: #aa9900; font-weight: bold;">if</span> <span style="color: #0000aa;">type</span><span style="color: #66cc66;">&#40;</span>modTime<span style="color: #66cc66;">&#41;</span> <span style="color: #66cc66;">==</span> <span style="color: #ff6666;">"number"</span> <span style="color: #aa9900; font-weight: bold;">then</span>
            lastModified <span style="color: #66cc66;">=</span> <span style="color: #0000aa;">math.max</span><span style="color: #66cc66;">&#40;</span>lastModified<span style="color: #66cc66;">,</span> modTime<span style="color: #66cc66;">&#41;</span>
        <span style="color: #aa9900; font-weight: bold;">end</span>
     <span style="color: #aa9900; font-weight: bold;">end</span>
&nbsp;
     <span style="color: #aa9900; font-weight: bold;">local</span> hash <span style="color: #66cc66;">=</span> lastModified <span style="color: #66cc66;">..</span> <span style="color: #ff6666;">"-"</span> <span style="color: #66cc66;">..</span> md5<span style="color: #66cc66;">.</span>sumhexa<span style="color: #66cc66;">&#40;</span>files<span style="color: #66cc66;">&#41;</span>
     lighty<span style="color: #66cc66;">.</span>header<span style="color: #66cc66;">&#91;</span><span style="color: #ff6666;">"Etag"</span><span style="color: #66cc66;">&#93;</span> <span style="color: #66cc66;">=</span> <span style="color: #ff6666;">'"'</span> <span style="color: #66cc66;">..</span> hash <span style="color: #66cc66;">..</span><span style="color: #ff6666;">'"'</span>
&nbsp;
    <span style="color: #aa9900; font-weight: bold;">local</span> cacheFile <span style="color: #66cc66;">=</span> prefix <span style="color: #66cc66;">..</span> hash <span style="color: #66cc66;">..</span> <span style="color: #ff6666;">'.'</span> <span style="color: #66cc66;">..</span> fileExtension
    <span style="color: #aa9900; font-weight: bold;">if</span> <span style="color: #aa9900; font-weight: bold;">not</span> file_info<span style="color: #66cc66;">&#40;</span>concatRoot <span style="color: #66cc66;">..</span> cacheFile<span style="color: #66cc66;">,</span> <span style="color: #ff6666;">"is_file"</span><span style="color: #66cc66;">&#41;</span> <span style="color: #aa9900; font-weight: bold;">then</span>
        <span style="color: #aa9900; font-weight: bold;">local</span> content <span style="color: #66cc66;">=</span> <span style="color: #ff6666;">""</span>
        <span style="color: #aa9900; font-weight: bold;">for</span> file <span style="color: #aa9900; font-weight: bold;">in</span> <span style="color: #0000aa;">string</span><span style="color: #66cc66;">.</span>gmatch<span style="color: #66cc66;">&#40;</span>match<span style="color: #66cc66;">,</span> <span style="color: #ff6666;">"(.-\."</span> <span style="color: #66cc66;">..</span> fileExtension <span style="color: #66cc66;">..</span> <span style="color: #ff6666;">"),?"</span><span style="color: #66cc66;">&#41;</span> <span style="color: #aa9900; font-weight: bold;">do</span>
            content <span style="color: #66cc66;">=</span> content <span style="color: #66cc66;">..</span> <span style="color: #ff6666;">"<span style="color: #000099; font-weight: bold;">\n</span>"</span>
            content <span style="color: #66cc66;">=</span> content <span style="color: #66cc66;">..</span> <span style="color: #ff6666;">"/**<span style="color: #000099; font-weight: bold;">\n</span>"</span>
            content <span style="color: #66cc66;">=</span> content <span style="color: #66cc66;">..</span> <span style="color: #ff6666;">" *<span style="color: #000099; font-weight: bold;">\n</span>"</span>
            content <span style="color: #66cc66;">=</span> content <span style="color: #66cc66;">..</span> <span style="color: #ff6666;">" *  "</span> <span style="color: #66cc66;">..</span> file <span style="color: #66cc66;">..</span> <span style="color: #ff6666;">"<span style="color: #000099; font-weight: bold;">\n</span>"</span>
            content <span style="color: #66cc66;">=</span> content <span style="color: #66cc66;">..</span> <span style="color: #ff6666;">" *<span style="color: #000099; font-weight: bold;">\n</span>"</span>
            content <span style="color: #66cc66;">=</span> content <span style="color: #66cc66;">..</span> <span style="color: #ff6666;">" */<span style="color: #000099; font-weight: bold;">\n</span>"</span>
            content <span style="color: #66cc66;">=</span> content <span style="color: #66cc66;">..</span> <span style="color: #ff6666;">"<span style="color: #000099; font-weight: bold;">\n</span>"</span>
            content <span style="color: #66cc66;">=</span> content <span style="color: #66cc66;">..</span> read_file<span style="color: #66cc66;">&#40;</span>rootPath <span style="color: #66cc66;">..</span> file<span style="color: #66cc66;">&#41;</span>
        <span style="color: #aa9900; font-weight: bold;">end</span>
        write_cache<span style="color: #66cc66;">&#40;</span>concatRoot <span style="color: #66cc66;">..</span> cacheFile<span style="color: #66cc66;">,</span> content <span style="color: #66cc66;">&#41;</span>
    <span style="color: #aa9900; font-weight: bold;">end</span>
    lighty<span style="color: #66cc66;">.</span>env<span style="color: #66cc66;">&#91;</span><span style="color: #ff6666;">"physical.path"</span><span style="color: #66cc66;">&#93;</span> <span style="color: #66cc66;">=</span> concatRoot <span style="color: #66cc66;">..</span> cacheFile
<span style="color: #aa9900; font-weight: bold;">end</span>
&nbsp;
<span style="color: #aa9900; font-weight: bold;">if</span> <span style="color: #66cc66;">&#40;</span><span style="color: #aa9900; font-weight: bold;">not</span> file_info<span style="color: #66cc66;">&#40;</span>lighty<span style="color: #66cc66;">.</span>env<span style="color: #66cc66;">&#91;</span><span style="color: #ff6666;">"physical.path"</span><span style="color: #66cc66;">&#93;</span><span style="color: #66cc66;">,</span> <span style="color: #ff6666;">"is_file"</span><span style="color: #66cc66;">&#41;</span><span style="color: #66cc66;">&#41;</span> <span style="color: #aa9900; font-weight: bold;">then</span>
    css <span style="color: #66cc66;">=</span> <span style="color: #0000aa;">string</span><span style="color: #66cc66;">.</span>match<span style="color: #66cc66;">&#40;</span>lighty<span style="color: #66cc66;">.</span>env<span style="color: #66cc66;">&#91;</span><span style="color: #ff6666;">"physical.path"</span><span style="color: #66cc66;">&#93;</span><span style="color: #66cc66;">,</span> <span style="color: #ff6666;">"css/(.*\.css)"</span><span style="color: #66cc66;">&#41;</span>
	<span style="color: #aa9900; font-weight: bold;">if</span> css <span style="color: #aa9900; font-weight: bold;">then</span>
        <span style="color: #aa9900; font-weight: bold;">return</span> combine_files<span style="color: #66cc66;">&#40;</span>lighty<span style="color: #66cc66;">,</span> css<span style="color: #66cc66;">,</span> <span style="color: #ff6666;">"css"</span><span style="color: #66cc66;">&#41;</span>
    <span style="color: #aa9900; font-weight: bold;">end</span>
&nbsp;
    js <span style="color: #66cc66;">=</span> <span style="color: #0000aa;">string</span><span style="color: #66cc66;">.</span>match<span style="color: #66cc66;">&#40;</span>lighty<span style="color: #66cc66;">.</span>env<span style="color: #66cc66;">&#91;</span><span style="color: #ff6666;">"physical.path"</span><span style="color: #66cc66;">&#93;</span><span style="color: #66cc66;">,</span> <span style="color: #ff6666;">"js/(.*\.js)"</span><span style="color: #66cc66;">&#41;</span>
	<span style="color: #aa9900; font-weight: bold;">if</span> js <span style="color: #aa9900; font-weight: bold;">then</span>
        <span style="color: #aa9900; font-weight: bold;">return</span> combine_files<span style="color: #66cc66;">&#40;</span>lighty<span style="color: #66cc66;">,</span> js<span style="color: #66cc66;">,</span> <span style="color: #ff6666;">"js"</span><span style="color: #66cc66;">&#41;</span>
	<span style="color: #aa9900; font-weight: bold;">end</span>
<span style="color: #aa9900; font-weight: bold;">end</span></pre>
      </td>
    </tr>
  </table>
</div>

 [1]: http://www.tecgraf.puc-rio.br/~lhf/ftp/lua/5.1/lmd5.tar.gz
 [2]: http://www.tecgraf.puc-rio.br/~lhf/ftp/lua/5.0/lmd5.tar.gz
