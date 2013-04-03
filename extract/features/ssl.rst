SSL
===

If your site runs via SSL it can often be hard to obtain the level of richness
you desire. 3rd party assets are very rarely served via HTTPS so you often have
to download all the images yourself and limit the number of providers you
support. 

``Extract`` with SSL support allows you to serve all embeds within
a secure iframe. This will mitigate the mixed content errors that scare users
off your site.

Add the :doc:`Display <../../display/index>` product and you can even proxy all
images via SSL, read about the
:doc:`integration <../../display/api/integration>`.



Enabling SSL
------------
Add the query parameters ``secure=true`` and ``frame=true`` to any API call::

  http://api.embed.ly/1/extract?secure=true&frame=true&url=http%3A%2F%2Fvimeo.com%2F18150336&key=<key>&maxwidth=500

The response will look like this:

.. code-block:: json

  {
    "provider_url":"http://blog.embed.ly",
    "lead":null,
    "language":null,
    "original_url":"http://blog.embed.ly/javascript-hackathon-downcityjs-betaspring",
    "url":"http://blog.embed.ly/javascript-hackathon-downcityjs-betaspring",
    "entities": [{"count": 4,
    "name": "Aaron"}, {"count": 1,
    "name": "Vinh"}, {"count": 1,
    "name": "Reddit"}, {"count": 1,
    "name": "Kyle Nichols"}],

    "safe": true,
    "provider_display": "blog.embed.ly",
    "related": [],

    "keywords": [{"score": 31,
    "name": "api"}, {"score": 28,
    "name": "embed"}, {"score": 21,
    "name": "aaron"}, {"score": 14,
    "name": "best"}],

    "content":"<div>\n<strong>We provided our API for the event and some prizes
    for best use of our API as a solo participant and as a group, we were 
    pleased with the outcome! </strong> <p><strong>Best use of our API:</strong>
    CheerMeUp...</div>",
    "favicon_url":"https://i.embed.ly/1/image?url=
    http%3A%2F%2Fblog.embed.ly%2Fimages%2Ffavicon.
    png&key=<key>",
    "authors":[
      {
        "url":"http://posterous.com/users/iHySgjJhRuY0q",
        "name":"Nina Stepanov"
      }
    ],
    "oembed":{
      "provider_url":"http://blog.embed.ly",
      "description":"We provided our API for the event and some prizes 
      for best use of our API as a solo participant and as a group...",
      "title":"DowncityJS Hackathon Recap - Embedly",
      "author_name":"Nina Stepanov",
      "thumbnail_width":100,
      "url":"http://blog.embed.ly/javascript-hackathon-downcityjs-betaspring",
      "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fembed.ly%2F
      static%2Fimages%2Flogo.png&key=<key>",
      "entropy":6.2587237697,
      "author_url":"http://posterous.com/users/iHySgjJhRuY0q",
      "provider_name":"Embed",
      "type":"link",
      "thumbnail_height":100
    },
    "offset":null,
    "published":1360022400000,
    "images":[
      {
        "url":"https://i.embed.ly/1/image?url=https%3A%2F%2Flh3.googleusercontent
        .com%2FMaaMmP0N4psfPqQOUqegiz3q-SxnRd3sFn-XNKy92XLXo-R6dZIcFv7PkvgleeCqyn
        GsUj4s9GUTnL__W77OpjmaTcBgis98nhudlkwsZp7-CNCqihX1zalDbQ&key=<key>",
        "width":1024,
        "caption":null,
        "height":768,
        "colors":[
          {
            "color":[ 14, 16, 18],
            "weight":0.311767578125
          },
          {
            "color":[238, 232, 203],
            "weight":0.131103515625
          },
        ],
        "entropy":6.568857137759403,
        "size":228025 
      },...
    ],
    "provider_name":"Embed",
    "cache_age":86203,
    "type":"html"
  }

Images
------
For proxying images over SSL you will need to have
:doc:`Display <../../display/index>`. You can add it
easily through `your dashboard <https://app.embed.ly>`_.

|more| Read the :doc:`Display integration <../../display/api/integration>`.

Video and Rich Media Embeds
---------------------------
Secure will also modify all video and rich embed fields (article.html,
object.html, etc.) passed back iin the ``oembed`` field of the
:doc:`Extract API endpoints <../api/endpoints/index>`. Each embed will 
now be wrapped in an HTTPS iframe::

  <iframe src="https://media.embed.ly/1/frame?url=http%3A%2F%2Fvimeo.
  com%2F18150336&width=500&secure=true&key=<key>&height=281"
  width="500" height="281" border="0" scrolling="no" frameborder="0"></iframe>

Secure utilizes Embedly's :doc:`XSS Protection <frame>` to accomplish this.
There are a few things to note here when dealing with HTTPS embeds, as the
implementation depends on the provider and the browser.

Secure Providers
^^^^^^^^^^^^^^^^
There are only a few sites that serve embeds over HTTPS, they are as follows:

  * `YouTube <http://youtube.com>`_
  * `Vimeo <http://vimeo.com>`_
  * `SoundCloud <http://soundcloud.com/>`_

For these embeds you will not see any mixed content warnings, and they will
show as embedded media in IE. We are actively working on adding more
secure providers.

Insecure Providers
^^^^^^^^^^^^^^^^^^
Every other `provider <http://embed.ly/providers>`_ falls in this category. In
order to have the best of both worlds, Embedly will still serve the insecure
content within a secure iframe. This will cause the mild security warning that
you see on most HTTPS sites that serve embeds, like Twitter.

.. image:: /images/twitter_insecure.png
  :class: exampleimg

This works for Chrome, Firefox and Safari. If you wish to avoid these warnings,
use only the providers listed in the secure providers section.

Internet Explorer
^^^^^^^^^^^^^^^^^
IE has the strictest warning when dealing with HTTPS content, if you haven't
seen it it looks like this:

.. image:: /images/https_warning_in_IE.jpg
  :class: exampleimg

The user must click 'yes' before proceeding to the site. To get around this,
Embedly will switch out the embed with a secure representation. It looks like
this:

.. image:: /images/ie_insecure_embed.png
  :class: exampleimg

When the user clicks that giant play button, they are taken to the embed's URL.
If you would like to see what any one embed looks like in IE mode you can add
``browser=Explorer`` to any media.embed.ly URL like so::

  https://media.embed.ly/1/frame?browser=Explorer
  &url=http%3A%2F%2Fwww.rdio.com%2Fartist%2FBon_Iver%2Falbum%2FBon_Iver%2F
  &width=500&secure=true&key=internal&height=250

Script Tags
^^^^^^^^^^^
Like :doc:`XSS Protection <frame>`, Secure will not embed content that is
generated via script tags. It's impossible to determine the embed dimensions
and ensure that everything is served over HTTPs.

Examples
--------
Here are a few API calls that return the SSL feature::

  http://api.embed.ly/1/extract?url=www.khanacademy.org%2Fmath%2Farithmetic%2Faddition-subtraction%2Fv%2Fbasic-addition&secure=true&key=<key>
  http://api.embed.ly/1/extract?url=http%3A%2F%2Fitunes.apple.com%2Fus%2Falbum%2Fdrop-it-like-its-hot-single%2Fid21807343&secure=true&key=<key>

NOTE: You will need to add your key and have be on a paid version of the product.
