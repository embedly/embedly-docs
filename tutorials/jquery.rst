Embedly jQuery Tutorial
=======================

This tutorial will walk you through embedding a video into a blog post
using `Embedly jQuery <https://github.com/embedly/embedly-jquery>`_.
You'll need some familiarity with JavaScript and jQuery.

Make sure you have an API key before you begin. Just `sign up </pricing>`_ 
for a free account.

Introduction
------------

Say, for example, you have a blog post with a link to a YouTube video:

.. code-block:: html

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

You want your blog's readers to be able to watch that video without leaving
your site. Of course, you could just paste in some embed code from YouTube,
but using Embedly instead will give you more flexibility and control.

Load JS Libraries
-----------------

We need to load jQuery (1.3.1+) and the Embedly jQuery plugin. The latest
Embedly jQuery can be found at
``http://scripts.embed.ly/jquery.embedly.min.js``. You can add these
dependencies anywhere in your page, as long as you add them in the right
order. We'll just put them in the ``<head>``:

.. code-block:: html

  <head>
    <title>Page Title</title>
    ...
    <script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
    <script src="http://cdn.embed.ly/jquery.embedly-3.0.5.min.js"></script>
  </head>

Call the Script
---------------

Once the Embedly jQuery plugin is loaded, all you have to do is call

.. code-block:: javascript

    $(selector).embedly({key: your_api_key});

The selector should be a string like ``"div.content"`` that limits the scope
of Embedly jQuery to the content of your page, preventing embeds from being
added to your site's navigation elements. Embedly jQuery will search for all 
``<a>`` tags inside of the selected element(s) and replace those links with
embeds.

Here's a complete implementation:

.. code-block:: html

  <head>
    <title>Page Title</title>
    ...
    <script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
    <script src="http://cdn.embed.ly/jquery.embedly-3.0.5.min.js"></script>
    <script type="text/javascript">
      $('document').ready(function(){
        $('div.content').embedly({key: your_api_key});
      });
    </script>
  </head>

We wrap the call to Embedly within ``$('document').ready()`` to ensure that
the page is fully loaded before the ``div.content`` selector runs.

Advanced Options
----------------

This is all well and good for basic usage, but you may find that you want to
customize your embeds a little bit more. This is fairly easy to do with some
optional parameters you can pass into the Embedly jQuery script. Let's take
a look at a few of them:

.. code-block:: javascript

    $('div.content').embedly({
      query: { maxwidth: 450, wmode: 'transparent' },
      method: 'after',
      key: your_api_key
    });

By default, Embedly will replace the link with the embed. By changing the 
``method`` parameter to ``after`` we're telling Embedly to insert the embed
after the link. This way the URL is still visible and the embed shows up as
well. Additionally, I set the wmode to "transparent." This is important for
flash video in case you have any fancy JavaScript popups.  I also set the
``maxwidth`` to 450 pixels.  This will shrink any larger embeds to fit within our
column but leave any smaller ones at their original size. This is particularly
important for photo embeds. Try popping a flickr url in your page. Those photos
are huge, and generally look strange unless you tweak them in to a manageable
size.

Complete Example
----------------

If you want to see the final result of this tutorial, copy the code from
https://gist.github.com/5131044 into an HTML file and open it up in your 
browser.

Related Links
-------------

* `On Integrating Embedly <http://blog.embed.ly/on-integrating-embedly>`_
* `Building a Twitter Web Client with @Anywhere and Embedly 
  <http://blog.embed.ly/creating-a-twitter-web-client-with-anywhere-a>`_
* `Sharedy.com: How To Create Facebook's Status Messages Timeline with Embedly, 
  jQuery and Google App Engine 
  <http://blog.embed.ly/how-to-create-facebooks-status-messages-timel>`_
* `Findpit.com: Building a Twitter Image Search with Embedly and jQuery. 
  <http://blog.embed.ly/findpitcom-building-a-twitter-image-search-wi>`_
  
