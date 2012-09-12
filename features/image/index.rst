Image Proxy
===========

This feature is currently in :ref:`Beta <beta>`.

The image proxying service allows:

* Manipulating images to fit the needs of your website, including cropping,
  resizing and filling images.
* Proxying images over HTTPS.
* Specifying a fall back image if an image fails.
* Integration with the Embedly API.

Integration
-----------
There are a couple of different ways to integrate the Image Proxy. You can
either create the image URLs yourself via :ref:`i.embed.ly <i_embed_ly>` or
have Embedly do it via API :ref:`query arguments <i_query_args>`. If you need
different image sizes on different parts of your application, we suggest using
:ref:`i.embed.ly <i_embed_ly>`. Otherwise you may use the :ref:`query arguments
<i_query_args>`.


.. _i_embed_ly:

i.embed.ly
----------
i.embed.ly offers four different API endpoints:

* :doc:`Image <endpoints/1/image/index>`
* :doc:`Resize <endpoints/1/image/resize>`
* :doc:`Crop <endpoints/1/image/crop>`
* :doc:`Fill <endpoints/1/image/fill>`

Image
^^^^^

Image is a simple proxy that allows you to embed unsecure images into secure
pages and use a fall back image for images not found. The image endpoint
doesn't manipulate the image in anyway.

|more| Read the :doc:`endpoints/1/image/index`

Resize
^^^^^^

Resize is a specialized version of image that allows simple resizing of the
image. Aspect ratio is always preserved, which means it's hard to predict the
exact dimensions of the image ahead of time.

|more| Read the :doc:`endpoints/1/image/resize`

Crop
^^^^

Like resize, crop allows you to resize images to your needs, but offers precise
control over the resulting images dimensions by cropping any excess image.

|more| Read the :doc:`endpoints/1/image/crop`

Fill
^^^^

Similar to crop, fill allows precise control over an images dimensions, but
instead of cropping the image, it will be fitted to the canvas size and any
surrounding space will be filled in with a specified color.

|more| Read the :doc:`endpoints/1/image/fill`


.. _i_query_args:

API Query Arguments
-------------------
Like the other features, it's possible to invoke the Image Proxy through the
API. These arguments allow you to apply a uniform ``image_width`` and
``image_height`` to every image that Embedly passes back through the API
response. Again, if you need different thumbnail and photo sizes you should use
:ref:`i.embed.ly <i_embed_ly>` directly.

Example
^^^^^^^
Using the following query arguments, will manipulate every image that is passed
back in the Embedly response. Here is an example call::

  http://api.embed.ly/1/preview?url=http%3A%2F%2Fwww.geek.com%2Farticles%2Fmobile%2Fjournalist-goes-undercover-making-the-iphone-5-at-foxconn-20120912%2F&image_height=100&image_method=fill&image_error_url=http%3A%2F%2Fmedia.tumblr.com%2Ftumblr_m9e0vfpA7K1qkbsaa.jpg&image_width=100&key=key

Response::

  {
    "provider_url": "http://www.geek.com",
    "object": {},
    "description": "The news feeds will be filled with talk of the iPhone today, and most of it is probably going to be positive. However, the Chinese new agency Shanghai Evening Post has posted a pretty scathing review of the working conditions at Foxconn, and in particular the iPhone 5 production line.",
    "original_url": "http://www.geek.com/articles/mobile/journalist-goes-undercover-making-the-iphone-5-at-foxconn-20120912/",
    "url": "http://www.geek.com/articles/mobile/journalist-goes-undercover-making-the-iphone-5-at-foxconn-20120912/",
    "images": [
      {
        "url": "http://i.embed.ly/1/image/fill?url=http%3A%2F%2Fwww.geek.com%2Fwp-content%2Fuploads%2F2012%2F09%2Ffoxconn_undercover_01.jpg&key=7ddc31df2ff94c4a45337966a69fa27e&color=000&width=100&height=100&errorurl=http%3A%2F%2Fmedia.tumblr.com%2Ftumblr_m9e0vfpA7K1qkbsaa.jpg",
        "width": 550,
        "size": 116348,
        "height": 415
      }, {
        "url": "http://i.embed.ly/1/image/fill?url=http%3A%2F%2Fwww.geek.com%2Fwp-content%2Fuploads%2F2012%2F09%2Ffoxconn_undercover_03.jpg&key=7ddc31df2ff94c4a45337966a69fa27e&color=000&width=100&height=100&errorurl=http%3A%2F%2Fmedia.tumblr.com%2Ftumblr_m9e0vfpA7K1qkbsaa.jpg",
        "width": 550,
        "size": 30626,
        "height": 366
      }, {
        "url": "http://i.embed.ly/1/image/fill?url=http%3A%2F%2Fwww.geek.com%2Fwp-content%2Fuploads%2F2012%2F09%2Ffoxconn_undercover_02.jpg&key=7ddc31df2ff94c4a45337966a69fa27e&color=000&width=100&height=100&errorurl=http%3A%2F%2Fmedia.tumblr.com%2Ftumblr_m9e0vfpA7K1qkbsaa.jpg",
        "width": 550,
        "size": 63698,
        "height": 366
      }, {
        "url": "http://i.embed.ly/1/image/fill?url=http%3A%2F%2Fwww.geek.com%2Fwp-content%2Fthemes%2Fgeek6%2Fimages%2FGeek-site-logo.png&key=7ddc31df2ff94c4a45337966a69fa27e&color=000&width=100&height=100&errorurl=http%3A%2F%2Fmedia.tumblr.com%2Ftumblr_m9e0vfpA7K1qkbsaa.jpg",
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
    "favicon_url": "http://i.embed.ly/1/image?url=http%3A%2F%2Fwww.geek.com%2Fwp-content%2Fthemes%2Fgeek6%2Ffavicon.ico&key=7ddc31df2ff94c4a45337966a69fa27e",
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
      :doc:`i.embed.ly resize <endpoints/1/image/crop>`
    ``crop``
      :doc:`i.embed.ly crop <endpoints/1/image/crop>`
    ``fill``
      :doc:`i.embed.ly fill <endpoints/1/image/crop>`

  The default value is ``resize``.

``image_width`` (required)
  The width that the image should fill.

``image_height`` (required)
  The width that the image should fill.

``image_grow``
  Set to `true` if growing the image is allowed. Otherwise it will never expand
  beyond it's original size, making width and height behave like max width and
  max height. This is only a valid option for the `resize` ``image_method``.

``image_color``
  The css color to fill with. Colors should be 3 or 6 hexadecimal characters.
  Some examples of valid colors:

  * 000
  * 4f2a55

  This is only a valid option for the `fill` ``image_method``. The default
  color is ``000``.

``image_error_url``
  The URL of the fall back image to use when ``url`` fails. The URL must be
  urlencoded to insure that Embedly retrieves the correct link. For example,
  this Embedly URL::

    http://embed.ly/static/images/squiggle2.png?v=1

  Should be sent as::

    http%3A%2F%2Fembed.ly%2Fstatic%2Fimages%2Fsquiggle2.png%3Fv%3D1

