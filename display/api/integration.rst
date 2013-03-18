Integration
===========

``Display`` can be integrated with our :doc:`/embed/index`
and :doc:`/extract/index` products to resize and proxy images for any
URL. This integration also includes proxying all images over SSL.

API Query Arguments
-------------------
It is possible to invoke the ``Display`` image proxy through both the
:doc:`/embed/api/endpoints/1/oembed` and :doc:`/extract/api/endpoints/1/extract`
endpoints. These arguments allow you to apply a uniform ``image_width`` and
``image_height`` to every image that Embedly passes back through the API
response. 

If you need different sizes for different images, you should use
:doc:`index` directly.

Example
^^^^^^^
Using the following query arguments will manipulate every image that is passed
back in the Embedly response. Here is an example call::

  http://api.embed.ly/1/extract?url=http%3A%2F%2Fwww.geek.com%2Farticles%2Fmobile%2Fjournalist-goes-undercover-making-the-iphone-5-at-foxconn-20120912%2F&image_height=100&image_method=fill&image_error_url=http%3A%2F%2Fmedia.tumblr.com%2Ftumblr_m9e0vfpA7K1qkbsaa.jpg&image_width=100&key=key

Response::

  {
    "provider_url": "http://www.geek.com",
    "object": {},
    "description": "The news feeds will be filled with talk of the iPhone today, and most of it is probably going to be positive. However, the Chinese new agency Shanghai Evening Post has posted a pretty scathing review of the working conditions at Foxconn, and in particular the iPhone 5 production line.",
    "original_url": "http://www.geek.com/articles/mobile/journalist-goes-undercover-making-the-iphone-5-at-foxconn-20120912/",
    "url": "http://www.geek.com/articles/mobile/journalist-goes-undercover-making-the-iphone-5-at-foxconn-20120912/",
    "images": [
      {
        "url": "http://i.embed.ly/1/display/fill?url=http%3A%2F%2Fwww.geek.com%2Fwp-content%2Fuploads%2F2012%2F09%2Ffoxconn_undercover_01.jpg&key=7ddc31df2ff94c4a45337966a69fa27e&color=000&width=100&height=100&errorurl=http%3A%2F%2Fmedia.tumblr.com%2Ftumblr_m9e0vfpA7K1qkbsaa.jpg",
        "width": 550,
        "size": 116348,
        "height": 415
      }, {
        "url": "http://i.embed.ly/1/display/fill?url=http%3A%2F%2Fwww.geek.com%2Fwp-content%2Fuploads%2F2012%2F09%2Ffoxconn_undercover_03.jpg&key=7ddc31df2ff94c4a45337966a69fa27e&color=000&width=100&height=100&errorurl=http%3A%2F%2Fmedia.tumblr.com%2Ftumblr_m9e0vfpA7K1qkbsaa.jpg",
        "width": 550,
        "size": 30626,
        "height": 366
      }, {
        "url": "http://i.embed.ly/1/display/fill?url=http%3A%2F%2Fwww.geek.com%2Fwp-content%2Fuploads%2F2012%2F09%2Ffoxconn_undercover_02.jpg&key=7ddc31df2ff94c4a45337966a69fa27e&color=000&width=100&height=100&errorurl=http%3A%2F%2Fmedia.tumblr.com%2Ftumblr_m9e0vfpA7K1qkbsaa.jpg",
        "width": 550,
        "size": 63698,
        "height": 366
      }, {
        "url": "http://i.embed.ly/1/display/fill?url=http%3A%2F%2Fwww.geek.com%2Fwp-content%2Fthemes%2Fgeek6%2Fimages%2FGeek-site-logo.png&key=7ddc31df2ff94c4a45337966a69fa27e&color=000&width=100&height=100&errorurl=http%3A%2F%2Fmedia.tumblr.com%2Ftumblr_m9e0vfpA7K1qkbsaa.jpg",
        "width": 235,
        "size": 11186,
        "height": 107
      }
    ],
    "safe": true,
    "provider_display": "www.geek.com",
    "author_name": null,
    "author_url": null,
    "content": null,
    "favicon_url": "http://i.embed.ly/1/display?url=http%3A%2F%2Fwww.geek.com%2Fwp-content%2Fthemes%2Fgeek6%2Ffavicon.ico&key=7ddc31df2ff94c4a45337966a69fa27e",
    "place": {},
    "embeds": [],
    "title": "Journalist goes undercover making the iPhone 5 at Foxconn - Cell Phones & Mobile Device Technology News & Updates | Geek.com",
    "provider_name": "Geek",
    "cache_age": 72019,
    "type": "html",
    "event": {}
  }


Arguments
---------

``image_method``
  Defines what method Embedly will use to resize the image. Valid values are:

    ``resize``
      :doc:`i.embed.ly resize <endpoints/1/crop>`
    ``crop``
      :doc:`i.embed.ly crop <endpoints/1/crop>`
    ``fill``
      :doc:`i.embed.ly fill <endpoints/1/crop>`

  The default value is ``resize``.

``image_width`` (required)
  The width that the image should fill.

``image_height`` (required)
  The height that the image should fill.

``image_grow``
  Set to `true` if growing the image is allowed. Otherwise it will never expand
  beyond it's original size, making width and height behave like max width and
  max height. This is only a valid option when ``image_method=resize``.

``image_color``
  The css color to fill with. Colors should be 3 or 6 hexadecimal characters.
  Some examples of valid colors:

  * 000
  * 4f2a55

  This is only a valid option for the ``image_method=fill``. The default
  color is ``000``.

``image_error_url``
  The URL of the fall back image to use when the image at ``url`` can't be
  processed (or doesn't exist). The URL must be url-encoded to ensure that
  Embedly retrieves the correct link. For example, this Embedly URL::

    http://embed.ly/static/images/squiggle2.png?v=1

  Should be sent as::

    http%3A%2F%2Fembed.ly%2Fstatic%2Fimages%2Fsquiggle2.png%3Fv%3D1

``secure``
  Set to `true` to SSL proxy all images passed back through our 
  :doc:`../../embed/api/index` or :doc:`../../extract/api/index` endpoints.

  You'll notice that any image field such as `thumbnail_url` has changed from::

    http://b.vimeocdn.com/ts/117/311/117311910_1280.jpg

  to::

    https://i.embed.ly/1/display?url=http%3A%2F%2Fb.vimeocdn.com%2Fts%2F117%2F311%2F117311910_1280.jpg&key=<key>

  Note that ``Display`` respects the cache time of the upstream
  image, so we will cache it locally for that period of time. This works for all
  image fields (thumbnail_url, open_graph.image, etc.) passed back.
