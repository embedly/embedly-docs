Button
======
The Embed Button allows you to allow users to embed your site's content with a
single click. Get more impressions from all over the web. To create a Button
for your site visit the `Button Generator </button>`_.

The follow explains how to use ``platform.js`` to programmatically create the
button programatically.

Install Platform.js
-------------------
To install platform.js use the following code::

  <script>
    (function(w, d){
     var id='embedly-platform', n = 'script';
     if (!d.getElementById(id)){
       w.embedly = w.embedly || function() {(w.embedly.q = w.embedly.q || []).push(arguments);};
       var e = d.createElement(n); e.id = id; e.async=1;
       e.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cdn.embedly.com/widgets/platform.js';
       var s = d.getElementsByTagName(n)[0];
       s.parentNode.insertBefore(e, s);
     }
    })(window, document);
  </script>

This adds ``platform.js`` to your site and loads the script asynchronously. By
default ``platform.js`` will create a button for an ``A`` tag with the class
``embedly-button``. For example, this will create a button::

  <a class="embedly-button" href="http://embed.ly/code">Embed</a>

If you would like to specify a URL to embed, you can use the ``data-url``
property like so::

	<a class="embedly-button" data-url="http://apple.com"
		href="http://embed.ly/code">Embed</a>


Customize
---------
There are a number of ``data-card-*`` attributes that you can use to customize
the card. They are as follows:

+------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+
|    Attribute     |        Value                                        |       Description                                                                      |
+==================+=====================================================+========================================================================================+
| data-url         | URL i.e http://embed.ly                             | Specifies the URL to embed, by default it uses the URL of the page it is placed on     |
+------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+
| data-theme       | "round", "flat", "light-round", "light-flat"        | Sets the look of the button. The default it "round"                                    |
+------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+
| data-lang        | "en", "de", "tr", "es"                              | The language of the Embed button, by default we use the browser's locale.              |
+------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+
| data-target      | "window" (defaults to modal)                        | Opens the embed dialog in a new window instead of a modal.                             |
+------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+

Javascript
----------
With ``Platform.js`` allows you to control buttons programatically. For
instance to use a different class name for the button you can use the the
following code::

  embedly('button', 'embed-this');

If you would like to create a button from a single element you can do the
following::

  var a = document.getElementById('#myCard');
  embedly('button', a, {
    target: 'window'
  });

If ``platform.js`` has not loaded yet, it will queue actions till we are ready
to act on them.


Modal
-----
If you would like to manually trigger the Embed Modal you can do this via the
following javascript::

  embedly('modal', 'http://embed.ly');

This will bring up a modal in which the user can choose to copy the Embed code.
If you wish to open the dialog in a new window instead, you may use the
following code::

  embedly('modal', {
    url: 'http://embed.ly',
    target: 'window'
  });

For more information on the cards that button and modals generate, check out
the :doc:`cards documentation <../cards/index>`.
