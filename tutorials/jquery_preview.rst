.. _jquery_preview:

JQuery Preview
==============
jQuery Preview is a plugin by `Embedly <http://embed.ly>`_ that allows
developers to create tools that enable users to share links with rich previews
attached. This method of letting users select thumbnails, edit title and
description has been adopted as the norm across the web. This plugin allows
developers to easily implement this functionality without building the entire
infrastructure themselves. Instead relying on on Embedly to generate the
metadata.

.. image:: ../images/jquery_preview.png

We have made this plugin overly verbose and infinitely customizable. Our goal
is not to dictate design, merely give a set of tools to make it easy to create
a custom experience. There are 5 different demos that you should take a look at
before getting started. It will give you a quick overview of what you should be
able to build.

* `Link <http://embedly.github.com/jquery-preview/demo/link.html>`_
* `Status <http://embedly.github.com/jquery-preview/demo/status.html>`_
* `Large Embeds <http://embedly.github.com/jquery-preview/demo/large.html>`_
* `Rich Embeds <http://embedly.github.com/jquery-preview/demo/rich.html>`_
* `Multipe Inputs <http://embedly.github.com/jquery-preview/demo/multi.html>`_

Basic Setup
-----------
To get started you need to put `jQuery <http://jquery.com/>`_,
`jquery.preview.full.js
<https://github.com/embedly/jquery-preview/blob/master/jquery.preview.full.js>`_
and `preview.css
<https://github.com/embedly/jquery-preview/blob/master/css/preview.css>`_. into
the ``head`` of your page::

    <head>
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
      <script src="http://scripts.embed.ly/p/0.1/jquery.preview.full.min.js" type="text/javascript"></script>
      <link rel="stylesheet" href="http://scripts.embed.ly/p/0.1/css/preview.css" />
    </head>

jquery.preview.full.js bundles `Underscore.js
<http://documentcloud.github.com/underscore/>`_ and `Mustache.js
<https://github.com/janl/mustache.js/>`_ in with jquery.preview.js. If you
already have or use these two libs you can see up the ``head`` of the document
like so::

    <head>
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
      <script src="lib/mustache.js" type="text/javascript"></script>
      <script src="lib/underscore.js" type="text/javascript"></script>
      <script src="http://scripts.embed.ly/p/0.1/jquery.preview.min.js" type="text/javascript"></script>
      <link rel="stylesheet" href="http://scripts.embed.ly/p/0.1/css/preview.css" />
    </head>

Next set up a simple form that allows a user to input link::

    <form action="/update" method="POST">
        <input id="url" type="text" name="url"/>
    </form>

You then need to tell preview what field to listen to::

    <script>
        $('#url').preview({key:'your_embedly_key'})
    </script>

And you are done setting up the front end solution for jQuery Preview!

Note that the `Preview <http://embed.ly/docs/endpoints/1/preview>`_ endpoint is
only available to Embedly developers with a Starter plan or above. You can sign
up for a Starter plan at `embed.ly/pricing <http://embed.ly/pricing>`_.

The full demo and documentation for jQuery Preview can be found at
`github.com/embedly/jquery-preview
<https://github.com/embedly/jquery-preview/>`_.