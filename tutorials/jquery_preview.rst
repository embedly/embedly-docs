jQuery Preview
==============

Embedly's jQuery Preview is a jQuery plugin that allows a site's users to 
share links with rich, customized previews attached.

Unlike the standard :doc:`Embedly jQuery <jquery>` plugin, which generates 
previews in a preset format, jQuery Preview allows users to select a thumbnail 
image and edit the title and description. Additionally, jQuery Preview takes
advantage of the :doc:`Preview endpoint </endpoints/1/preview>`, which provides
precise control over how embeds are displayed on the page.

.. image:: ../images/jquery_preview.png

Demos
-----

* `Link <http://embedly.github.com/jquery-preview/demo/link.html>`_
* `Status <http://embedly.github.com/jquery-preview/demo/status.html>`_
* `Large Embeds <http://embedly.github.com/jquery-preview/demo/large.html>`_
* `Rich Embeds <http://embedly.github.com/jquery-preview/demo/rich.html>`_
* `Multiple Inputs <http://embedly.github.com/jquery-preview/demo/multi.html>`_

Basic Setup
-----------
To get started you need to put `jQuery <http://jquery.com/>`_,
`jquery.preview.full.js
<https://github.com/embedly/jquery-preview/blob/master/jquery.preview.full.js>`_
and `preview.css
<https://github.com/embedly/jquery-preview/blob/master/css/preview.css>`_. into
the ``head`` of your page:

.. code-block:: html

    <head>
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
      <script src="http://scripts.embed.ly/p/0.1/jquery.preview.full.min.js" type="text/javascript"></script>
      <link rel="stylesheet" href="http://scripts.embed.ly/p/0.1/css/preview.css" />
    </head>

jquery.preview.full.js bundles `Underscore.js
<http://documentcloud.github.com/underscore/>`_ and `Mustache.js
<https://github.com/janl/mustache.js/>`_ in with jquery.preview.js. If you
already have or use these two libs you can see up the ``head`` of the document
like so:

.. code-block:: html

    <head>
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
      <script src="lib/mustache.js" type="text/javascript"></script>
      <script src="lib/underscore.js" type="text/javascript"></script>
      <script src="http://scripts.embed.ly/p/0.1/jquery.preview.min.js" type="text/javascript"></script>
      <link rel="stylesheet" href="http://scripts.embed.ly/p/0.1/css/preview.css" />
    </head>

Next set up a simple form that allows a user to input link:

.. code-block:: html

    <form action="/update" method="POST">
        <input id="url" type="text" name="url"/>
    </form>

You then need to tell preview what field to listen to:

.. code-block:: html

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
