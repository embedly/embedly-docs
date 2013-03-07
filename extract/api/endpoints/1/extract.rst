Extract API
===========

The Extract endpoint is designed to provide users with as much content as possible,
this includes the article text, keywords, related links, and much more.

Example call (1 URL)::

    http://api.embed.ly/1/extract?key=:key&url=:url&maxwidth=:maxwidth&maxheight=:maxheight&format=:format&callback=:callback

Example call (multiple URLs)::

    http://api.embed.ly/1/extract?key=:key&urls=:url1,:url2,:url3&maxwidth=:maxwidth&maxheight=:maxheight&format=:format&callback=:callback

Examples
--------
`Embedly Explore </docs/explore/extract>`_ can be used to get a better handle
on what this API returns. Try these:

* `Techcrunch Article </docs/explore/extract/?url=http://techcrunch.com/2010/11/18/mark-zuckerberg/>`_
* `Deadspin Post <http://embed.ly/docs/explore/extract/?url=http://deadspin.com/5690535/the-bottom-100-the-worst-players-in-nfl-history-part-1>`_
* `Embedly blog <http://embed.ly/docs/explore/extract/?url=http://blog.embed.ly/31814817>`_

Arguments
----------------
See the :doc:`Query Arguments <../arguments>` documentation.

Response
--------

Example response
^^^^^^^^^^^^^^^^

.. code-block:: json

{
  "provider_url": "http://blog.embed.ly",
  "lead": null,
  "language": "English",
  "original_url": "http://blog.embed.ly/javascript-hackathon-downcityjs-betaspring",
  "url": "http://blog.embed.ly/javascript-hackathon-downcityjs-betaspring",
  
  "entities": [{"count": 4,
  "name": "Aaron"}, {"count": 1,
  "name": "Vinh"}, {"count": 1,
  "name": "Reddit"}, {"count": 1,
  "name": "Kyle Nichols"}, {"count": 1,
  "name": "Kawan"}, {"count": 1,
  "name": "Samuel"}, {"count": 1,
  "name": "Thom Nichols"}, {"count": 1,
  "name": "Tumblr"}, {"count": 1,
  "name": "Giles"}, {"count": 1,
  "name": "Andy"}, {"count": 1,
  "name": "Gabe"}, {"count": 1,
  "name": "Graham"}, {"count": 1,
  "name": "Liz Neu"}, {"count": 1,
  "name": "Ryan Laughlin"}],

  "safe": true,
  "provider_display": "blog.embed.ly",
  "related": [],

  "keywords": [{"score": 31,
  "name": "api"}, {"score": 28,
  "name": "embed"}, {"score": 21,
  "name": "aaron"}, {"score": 14,
  "name": "best"}, {"score": 13,
  "name": "nichols"}, {"score": 11,
  "name": "solo"}, {"score": 11,
  "name": "meet"}, {"score": 10,
  "name": "kawan"}, {"score": 10,
  "name": "thumbwar"}, {"score": 10,
  "name": "friends"}],

  "content": "<div>\n<strong>We provided our API for the event and some prizes
  for best use of our API as a solo participant and as a group, we were pleased
  with the outcome! </strong> <p><strong>Best use of our API:  </strong>
  <strong>Cheer Me \u00dcp, a service which allows you to send a friendly
  and uplifting message to someone having a tough time. They'll receive it with
  cat gifs and all, embedded from sites like Tumblr and Reddit using the
  Embedly API. </strong></p>\n<strong>Best Solo: Thom Nichols for
  <a href=\"https://github.com/tomstrummer\">Xirq.us </a>, they used Embedly
  to embed photos and media within curated tweets by the location they're
  near to let you know in one convenient spot what exactly is going on in
  an area. </strong> <strong>Best Design: Aaron and Aaron created Meet, a
  dating app that won't allow you to talk to your match before meeting up
  with them, it cuts to the chase by only providing the option to meet
  your match. </strong> <strong>Best Team: Ryan Laughlin, Liz Neu, and
  Kyle Nichols for <a href=\"http://thumbwar.me/\">Thumbwar </a>, which
  allows users to sync up with a friend over mobile, tablet or laptop connection
  to play a bundle of mini games with each other to pass the time or to unleash
  that competitive side if only for a few seconds. </strong> <strong><br>
  The bottom line is, we had a blast! The four of us, Art, Andy, Kawan
  and myself enjoyed an engaging and often silly weekend with some new
  friends and replenished our creativity tanks. Shout out to
  <a href=\"https://github.com/GabeLoins\">Gabe </a>,
  <a href=\"https://github.com/gilesvangruisen\">Giles </a>,
  <a href=\"https://github.com/SDooman\">Samuel </a>,
  <a href=\"https://github.com/gbc1230\">Graham </a>and
  <a href=\"https://github.com/vtran008\">Vinh</a> 
  </strong><strong>of Cheer Me \u00dcp </strong><strong>and
  <a href=\"https://github.com/LtCmdDudefellah\">Aaron </a>and
  <a href=\"https://github.com/aesnyder\">Aaron </a>for Meet.
  We're looking forward to seeing the real thing and will
  definitely be sending some pleasant messages to some
  unsuspecting mopes.
  <img src=\"https://lh3.googleusercontent.com/MaaMmP0N4psfPqQOUqegiz3q-
  SxnRd3sFn-XNKy92XLXo-R6dZIcFv7PkvgleeCqynGsUj4s9GUTnL__W77OpjmaTcBgis98nh
  udlkwsZp7-CNCqihX1zalDbQ\"></strong> <p> </p>\n</div>",
  "favicon_url": "http://blog.embed.ly/images/favicon.png",
  "authors": [{"url": "http://posterous.com/users/iHySgjJhRuY0q",
  "name": "Nina Stepanov"}],


  "oembed": {"provider_url": "http://blog.embed.ly",
  "description": "We provided our API for the event and some prizes for
  best use of our API as a solo participant and as a group, we were pleased
  with the outcome! Best use of our API: Cheer Me \u00dcp, a service which
  allows you to send a friendly and uplifting message to someone having a
  tough time.",
  "title": "DowncityJS Hackathon Recap - Embedly",
  "dominant_colors": [{"color": [26, 12, 27],
  "weight": 0.497314453125}, {"color": [98, 54, 45],
  "weight": 0.16064453125}, {"color": [135, 91, 76],
  "weight": 0.09033203125}, {"color": [80, 65, 83],
  "weight": 0.0849609375}, {"color": [191, 193, 184],
  "weight": 0.059326171875}],
  "author_name": "Nina Stepanov",
  "thumbnail_width": 100,
  "url": "http://blog.embed.ly/javascript-hackathon-downcityjs-betaspring",
  "thumbnail_url": "http://getfile8.posterous.com/getfile/files.posterous.com/
  temp-2013-02-05/EDhdHbCefGlloIfwtzggzsppinpxHGhtsIDugJFBbhEzzBzdjohzFDIJfAaH/
  kawan.JPG.thumb100.jpg",
  "entropy": 6.27898780616,
  "author_url": "http://posterous.com/users/iHySgjJhRuY0q",
  "provider_name": "Embed",
  "type": "link",
  "thumbnail_height": 100},

  "offset": null,
  "published": 1360022400000,

  "images": [{"url": "https://lh3.googleusercontent.com/MaaMmP0N4psfPqQOUqegiz3q-SxnRd3sFn-
  XNKy92XLXo-R6dZIcFv7PkvgleeCqynGsUj4s9GUTnL__W77OpjmaTcBgis98nhudlkwsZp7-CNCqihX1zalDbQ",
  "width": 1024,
  "size": 228025,
  "caption": null,
  "height": 768}, {"url": "http://getfile8.posterous.com/getfile/files.posterous.com/temp-2013-02-05
  /EDhdHbCefGlloIfwtzggzsppinpxHGhtsIDugJFBbhEzzBzdjohzFDIJfAaH/kawan.JPG.thumb100.jpg",
  "width": 100,
  "size": 4768,
  "caption": null,
  "height": 100}, {"url": "http://getfile3.posterous.com/getfile/files.posterous.com/temp-2013-02-05
  /GgnkkkteuCubCfIrtEooDcnsaHJBqlxuDlJpiswlAvxfHfABzxstGfkFIvka/hack1.JPG.thumb.jpg",
  "width": 36,
  "size": 13735,
  "caption": null,
  "height": 36}, {"url": "http://getfile9.posterous.com/getfile/files.posterous.com/temp-2013-02-05
  /EDhdHbCefGlloIfwtzggzsppinpxHGhtsIDugJFBbhEzzBzdjohzFDIJfAaH/kawan.JPG.thumb.jpg",
  "width": 36,
  "size": 1227,
  "caption": null,
  "height": 36}, {"url": "http://getfile8.posterous.com/getfile/files.posterous.com/temp-2013-02-05
  /kFtyfIkbuAuHHmGllFkIhHlApCFHDaiivqtCkgkkDtDJxlFdFBghfuAoEHHC/hack2.JPG.thumb.jpg",
  "width": 36,
  "size": 1181,
  "caption": null,
  "height": 36}],
  "provider_name": "Embed",
  "cache_age": 86301,
  "type": "html"
}

Response Attributes
^^^^^^^^^^^^^^^^^^^

``original_url``
    The url that was passed into Embedly. This will be something like a bit.ly
    shortened link or if there is no redirect it will be the same as the
    ``url`` attribute.

``url``
    The effective url of the request. Whatever Embedly found at the end of any
    redirects.

``type``
    See :ref:`response-types`.

``cache_age``
    How long Embedly is going to cache the response for? Generally, this is for
    a day, unless some external factor tells us to reevaluate the resource.

``safe``
        See :doc:`../../../features/safe`

``provider_name``
    The name of the resource provider.

``provider_url``
    The url of the resource provider.

``provider_display``
    For display purposes we ``include provider_display``, it's the subdomain,
    hostname, and public suffix of the provider.

``favicon_url``
    The url of the favicon.

``title``
    The title of the resource. It's picked in the following order:

    * The rss entry's title
    * The oEmbed title
    * The open graph title
    * The ``meta`` title tag
    * The ``title`` attribute in the ``head`` element

``description``
    The description of the resource. It's picked in the following order:

    * The rss entry's summary
    * The oEmbed description
    * The open graph description
    * The ``meta`` description tag
    * An excerpt pulled programmaticly by Embedly

``author_name``
    The name of the author/owner of the resource.

``author_url``
    A URL for the author/owner of the resource.

``oembed``
    The oEmbed response for a url. More information on the :doc:`../1/oembed`.

``article``
    See :doc:`../../../features/article`

``keywords``
    See :doc:`../../../features/keywords`

``entities``
    See :doc:`../../../features/entities`

``object``
    See :ref:`object`

``images``
    See :ref:`images`

``embeds``
    A list of embeds that Embedly found on the page. They follow the
    :ref:`object` format.

``original_url``
    The url that was passed into Embedly. This will be something like a bit.ly
    shortened link or if there is no redirect it will be the same as the
    ``url`` attribute.

``url``
    The effective url of the request. Whatever Embedly found at the end of any
    redirects.

``meta``
    The meta attributes of the document. Possible attributes include:
    
    * ``content_type``
    * ``author``
    * ``title``
    * ``keywords``
    * ``description``
    * ``rss``
    * ``oembeds``
    * ``open_search``
    * ``shortcut_icon``
    * ``icon``
    * ``apple_touch_icon``
    * ``generator``
    * ``shortlink``
    * ``canonical``
    * ``medium``
    * ``video_src``
    * ``video_height``
    * ``video_width``
    * ``video_type``
    * ``image_src``
    * ``image_height``
    * ``image_width``
    * ``audio_src``
    * ``audio_type``
    * ``audio_title``
    * ``audio_artist``
    * ``audio_album``

``open_graph``
    The Open Graph attributes of the document. Possible attributes include:
 
    * ``title``
    * ``type``
    * ``site_name``
    * ``description``
    * ``url``
    * ``image``
    * ``image_width``
    * ``image_height``
    * ``latitude``
    * ``longitude``
    * ``street_address``
    * ``locality``
    * ``region``
    * ``postal_code``
    * ``country_name``
    * ``email``
    * ``phone_number``
    * ``fax_number``
    * ``upc``
    * ``isbn``

``microformats``
    See :ref:`microformats`

.. _object:

Object
------
An object is the primary piece of media that is associated with a ``url``. It
follows the general pattern of the :doc:`/embed/api/endpoints/1/oembed`, but with only a limited set
of attributes.

``type``
    The resource type. Valid values, along with value-specific parameters, are
    described below.


The photo type
^^^^^^^^^^^^^^
This type is used for representing static photos. The following parameters are
defined:

``url``
    The source URL of the image. Consumers should be able to insert this URL
    into an``<img>``element. Only HTTP and HTTPS URLs are valid.

``width``
    The width in pixels of the image specified in the ``url`` parameter.

``height``
    The height in pixels of the image specified in the ``url`` parameter.


The video type
^^^^^^^^^^^^^^
This type is used for representing playable videos. The following parameters
are defined:

``html``
    The HTML required to embed a video player. The HTML should have no padding
    or margins. Consumers may wish to load the HTML in an off-domain iframe to
    avoid XSS vulnerabilities.

``width``
    The width in pixels required to display the HTML. If not supplied
    the HTML returned will expand horizontally to the size of its parent
    container.

``height``
    The height in pixels required to display the HTML. If not supplied,
    the HTML returned will expand vertically to the size of its parent
    container.


The rich type
^^^^^^^^^^^^^
This type is used for rich HTML content that does not fall under one of the
other categories. The following parameters are defined:

``html`` (required)
    The HTML required to display the resource. The HTML should have no padding
    or margins. Consumers may wish to load the HTML in an off-domain iframe to
    avoid XSS vulnerabilities. The markup should be valid XHTML 1.0 Basic.

``width`` (required)
    The width in pixels required to display the HTML. If not supplied
    the HTML returned will expand horizontally to the size of its parent
    container.

``height`` (required)
    The height in pixels required to display the HTML. If not supplied
    the HTML returned will expand vertically to the size of its parent
    container.


Error Codes
-----------

JSON Requests
^^^^^^^^^^^^^

400 Bad Request
  * Required "url" parameter is missing.
  * Either "url" or "urls" parameter is reqiured.
  * Invalid URL format.
  * Invalid "maxheight" parameter.
  * Invalid "maxwidth" parameter.
  * Invalid "urls" parameter, exceeded max count of 20.

401 Unauthorized
  * Invalid key or oauth_consumer_key provided: <key>, contact: support@embed.ly.
  * The provided key does not support this endpoint: <key>, contact: support@embed.ly. More details: http://embed.ly/pricing#starter.

403 Forbidden
  * This service requires an embedly key parameter, contact: support@embed.ly or sign up: http://embed.ly/signup.
  * Invalid IP provided: <ip>, contact: support@embed.ly.
  * Invalid referrer provided: <referrer>, contact: support@embed.ly.

404 Not Found
  URL Not Found, we will log this and determine if usable.

500 Server issues
   Embed.ly is having trouble with this url. Please try again or contact us, support@embed.ly.

501 Not Implemented
   Not implemented for format: acceptable values are ``{json}``.

503 Service Unavailable
  ``Note``: This happens if our service is down, please contact us immediately: support@embed.ly.

JSONP Requests
^^^^^^^^^^^^^^

Format
    ``callbackFunction({"url": "url with error", "error_code": "error code",
    "error_message": "error message", "type": "error"})``

Error Response
    ``jsonp1273162787542({"url": "http://flickr.com/embedly", "error_code": 404, "error_message":
    "HTTP 404: Not Found", "type": "error"})``
