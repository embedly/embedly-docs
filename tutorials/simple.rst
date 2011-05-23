.. _tutorial:

Tutorial
========

This document is meant to walk you through embedding a video into a blog post.
It is by no means the end all be all of Embedly use cases, but should give you
a firm understanding of how to use Embedly with jQuery. We have a few other
tutorials that we wrote on our blog as well. You can see the full list 
:ref:`here <tutorial-more>`.


Introduction
------------
Say, for example, you have a blog with various posts, some of which have links 
in them. In the example below the first blog post has a YouTube link in an 
article. Exhibit A::

  <div class="content">
    <article>
      <h2>Title</h2>
      <p>Lorizzle ma nizzle dolor sit amizzle, brizzle adipiscing elit. </p>
      <a href="http://www.youtube.com/watch?v=ZbcgyPtYBY0">youtube</a>
      <p>Maecenizzle owned bow wow wow. Nam eros.</p>
    </article>
    <article>
    ...
    </article>
  </div>

Load jQuery
-----------
The first step in integrating Embedly into your website is to make sure that
you have the latest version of jQuery loaded. You should include that in the
<head> of your document.
::

  <head>
    <title>Page Title</title>
    ...
    <script src="http://code.jquery.com/jquery-1.4.4.min.js"></script>
  </head>

Load Embedly
------------
After jQuery is loading, we need to load the latest version of Embedly jQuery.
Embedly jQuery is hosted by us at 
``http://scripts.embed.ly/jquery.embedly.min.js``. You can find more
documentation for this plugin on our `GitHub 
<https://github.com/embedly/embedly-jquery>`_.
::

  <head>
    <title>Page Title</title>
    ...
    <script src="http://code.jquery.com/jquery-1.4.4.min.js"></script>
    <script src="http://scripts.embed.ly/jquery.embedly.min.js"></script>
  </head>

Call the Script
---------------
Once the Embedly jQuery plugin is loaded, all you have to do is point embedly
to the urls you want to embed. In this example I'm setting the scope of embedly
to the container div (div.content) that holds all of the URLs I have to embed. 
By setting the scope like this I prevent Embedly from trying to embed URLs 
outside the main content div. With this div selected Embedly will do a search 
for all <a> tags inside that div and attempt to replace them with an embed. In 
this example that would be the youtube link.
::

  <head>
    <title>Page Title</title>
    ...
    <script src="http://code.jquery.com/jquery-1.4.4.min.js"></script>
    <script src="http://scripts.embed.ly/jquery.embedly.min.js"></script>
    <script type="text/javascript">
      $('document').ready(function(){
        $('div.content').embedly();
      });
    </script>
  </head>

We wrap the call to Embedly inside the $('document').ready() function so that 
we can be sure the DOM elements have loaded to the point that jQuery can find 
the <a> tags. If we just had $('div.content').embedly() in the <head> of the
document it would not return any URLs because the div with class "content" 
hasn't been written to the DOM yet.

Advanced Options
----------------
This is all well and good for basic usage, but you may find that you want to
customize your embeds a little bit more. This is fairly easy to do with some
optional parameters you can pass in to the Embedly jQuery script. Let's take
a look at a few of them.
::

  <head>
    <title>Page Title</title>
    ...
    <script src="http://code.jquery.com/jquery-1.4.4.min.js"></script>
    <script src="http://scripts.embed.ly/jquery.embedly.min.js"></script>
    <script type="text/javascript">
      $('document').ready(function(){
        $('div.content').embedly({
          maxWidth: 450,
          wmode: 'transparent',
          method: 'after'
        });
      });
    </script>
  </head>

By default, embedly will replace the link with the embed. By changing the 
'method' parameter to "after", we're telling Embedly to insert the embed after
the link. This way the URL is still visible and the embed shows up as well. 
Additionally, I set the wmode to "transparent." This is important for flash
video in case you have any fancy JavaScript popups.  I also set the MaxWidth to
450 pixels.  This will shrink any larger embeds to fit within our column but 
leave any smaller ones their original size. This is particularly important for
photo embeds. Try popping a flickr url in your page. Those photos are huge, and
generally look strange unless you wrangle them in to a manageable size.

Final Source
------------
That's it. here's the final sample in case you want to see it running. Copy this
code into an HTML file and pop it up in your browser.

::

  <!DOCTYPE>
  <html>
    <head>
      <title>Page Title</title>
      <script src="http://code.jquery.com/jquery-1.4.4.min.js"></script>
      <script src="http://scripts.embed.ly/jquery.embedly.min.js"></script>
      <script type="text/javascript">
        $('document').ready(function(){
          $('div.content').embedly({
            maxWidth: 450,
            wmode: 'transparent',
            method: 'after'
          });
        });
      </script>
    </head>
    <body>
      <div class="content">
        <article>
          <h2>Title</h2>
          <p>Lorizzle ma nizzle dolor sit amizzle, brizzle adipiscing elit. </p>
          <a href="http://www.youtube.com/watch?v=ZbcgyPtYBY0">youtube</a>
          <p>Maecenizzle owned bow wow wow. Nam eros.</p>
        </article>
        <article>
          <h2>Title 2</h2>
          <p>Lorizzle ma nizzle dolor sit amizzle, brizzle adipiscing elit. </p>
          <a href="http://www.flickr.com/photos/churchclothing/2597225382/">flickr</a>
          <p>Maecenizzle owned bow wow wow. Nam eros.</p>
        </article>
      </div>
    </body>
  </html>

.. _tutorial-more:

More
----

* `On Integrating Embedly <http://blog.embed.ly/on-integrating-embedly>`_
* `Building a Twitter Web Client with @Anywhere and Embedly 
  <http://blog.embed.ly/creating-a-twitter-web-client-with-anywhere-a>`_
* `Sharedy.com: How To Create Facebook's Status Messages Timeline with Embedly, 
  jQuery and Google App Engine 
  <http://blog.embed.ly/how-to-create-facebooks-status-messages-timel>`_
* `Findpit.com: Building a Twitter Image Search with Embedly and jQuery. 
  <http://blog.embed.ly/findpitcom-building-a-twitter-image-search-wi>`_

