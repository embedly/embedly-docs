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

``authors``

  A list of all the authors that are associated with this article. Each author
  has a ``url`` and ``name``. Here is an example response::

    [{
      "name": "Sean Creeley"
      "url": "http://blog.embed.ly/screeley"
    }]

  Most articles have only one author, but ``authors`` makes it flexible enough
  to add more if necessary.

``oembed``
    The oEmbed response for a url. Contains title, description, embed code,
    thumbnail images, and more.
    More information on the :doc:`oEmbed Response <../../../../embed/api/endpoints/1/oembed>`.

``published``

  A representation of the date which the article was published in milliseconds.
  If an ``offset`` is present, then there was timezone data present, otherwise
  we assume the Date is in UTC. Like all dates, this is a little confusing, so
  we will explain. Say the Embedly parser came across the following HTML::

    <span class="pubdate">Aug 24, 2012</span>

  Because there is no timezone information, Embedly will not return an
  ``offset`` and the ``published`` attribute will be in UTC. We will return the
  following response::

    "published": 1345766400000

``offset``

  The UTC offset of the date in milliseconds. See the above section for more
  information about ``offset`` and how to use it with the ``published`` time.

``description``

  This is much like the ``excerpt`` of the article, but with a few changes that
  make it better to use in an index view of the articles. The length of the
  description is controlled by the ``words`` :doc:`query argument
  <../api/arguments>`. Unlike the ``excerpt``, ``description`` has the correct line
  breaks added. For example, imagine the following article ``content``::

    <div>
      <p>Text 1</p>
      <p>Text 2</p>
      <p>Text 3</p>
    </div>

  The description for the above would be::

    Text 1
    Text 2
    Text 3

``lead``

  Often there is a lead paragraph that is a brief summary of the rest of the
  article. Embedly tries to pull this lead paragraph out for a better reading
  experience. It is always a ``p`` tag, i.e.::

    "lead": "<p>This is a summary of the below article</p>"

``content``

  This is the html that we pulled from the URL. It's been sanitized, so it will
  only contain the following tags::

    'a', 'abbr', 'acronym', 'b', 'big', 'blockquote', 'br', 'cite', 'code',
    'del', 'dfn', 'em', 'i', 'ins', 'kbd', 'mark', 'pre', 'q', 's', 'samp',
    'small', 'span', 'strike', 'strong', 'sub', 'sup', 'time', 'tt', 'u',
    'var', 'p', 'div', 'a', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'ol', 'ul',
    'li'

  All tag attributes have been removed as well. The only effective
  attributes are:

    * ``href`` on an ``a`` tag
    * ``src`` on an ``img`` tag

``keywords``
    See :doc:`../../../features/keywords`

``entities``
    See :doc:`../../../features/entities`

``images``
    See :ref:`images`


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
