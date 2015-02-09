Cards
=====
Cards provide you with responsive and shareable embeds to drive the reach of
your websites, blog posts, and articles. Our `card generator </code>`_ makes it
super simple to create a card of any site.

The follow explains how to use ``platform.js`` to programmatically create cards.

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
default ``platform.js`` will create a card for an ``A`` tag or ``BLOCKQUOTE``
with the class ``embedly-card``. For example, this will create a card for
embed.ly::

  <a href="http://embed.ly" class="embedly-card">Embedly</a>

And this will also create a card::

  <blockquote class="embedly-card">
    <h4><a href="http://embed.ly/docs">Documentation</a></h4>
    <p>
      Embedly's Documentation is the best.
    </p>
  </blockquote>

The difference here, is that the ``H4`` will become the title of the Card and
the ``P`` text will become the description.


Customize
---------
There are a number of ``data-card-*`` attributes that you can use to customize
the card. They are as follows:

+---------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+
|    Attribute        |        Value                                        |       Description                                                                      |
+=====================+=====================================================+========================================================================================+
| data-card-via       | URL i.e http://embed.ly                             | Specifies the via content in the card. It's a great way to do attribution.             |
+---------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+
| data-card-type      | "article-full", "article", "video", "image", "rich" | Will try to put the content into one of these cards.                                   |
+---------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+
| data-card-chrome    |  "1", "0"                                           | Chrome of 0 will remove the left hand colored border.                                  |
+---------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+
| data-card-theme     | 'light', 'dark'                                     | For dark backgrounds it's better to specify the dark theme.                            |
+---------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+
| data-card-image     | URL i.e. http://embed.ly/image.jpg                  | Specify which image to use in article cards.                                           |
+---------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+
| data-card-embed     | URL i.e. https://vimeo.com/62648882                 | Instead of using the static page content, the card will embed the video or rich media. |
+---------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+
| data-card-analytics | "1", "0"                                            | Enable Public Analytics on the card. Default "0"                                       |
+---------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+
| data-card-controls  | "1", "0"                                            | Enable Share Icons. Default "1"                                                        |
+---------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+
| data-card-width     | "100%", "300px", etc.                               | Sets the width of the card. Specifcally the max-width, so card is still responsive.    |
+---------------------+-----------------------------------------------------+----------------------------------------------------------------------------------------+

Javascript
----------
Platform.js has some pretty interesting features for customizing cards further.
For example, if you do not want to use a custom class instead of
``embedly-card`` you can use the following code::

  embedly('card', '.card-this');

If you would like to create a card from a single element you can do the
following::

  var a = document.getElementById('#myCard');
  embedly('card', a);

.. _cards-custom-types:

Lastly if you would like to limit the cards to only embed certain types of
media you can pass in a ``types`` argument::

  embedly('card', {types: ['rich', 'video', 'image']});

or with a custom selector as well::

  embedly('card', {selector: 'a.embed', types: ['article', 'image']});

If ``platform.js`` has not loaded yet, it will queue actions till we are ready
to act on them.

Listeners
---------
When using cards in non-standard displays you may want to listen to some
events. Cards supports the following events.

``card.rendered``
  When the card has actually been rendered.
  ::

    embedly('on', 'card.rendered', function(iframe){
      // iframe is the card iframe that we used to render the event.
      $card = $(iframe);

      // Grab the width and height.
      console.log($card.width(), $card.height());
    });

``card.resize``
  When the card has been resized. We do this fairly often when the browser window
  has changed size, or the content in the card has changed.
  ::

    embedly('on', 'card.resize', function(iframe){
      // iframe is the card iframe that we used to render the event.
      $card = $(iframe);

      // Grab the width and height.
      console.log($card.width(), $card.height());
    });



Button
------
If you would like to get others to embed your content, check out
:doc:`the Button <../button/index>`.

