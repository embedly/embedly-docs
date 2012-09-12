Image Crop API
==============
Resize to width and height, cropping any excess image. The image's center is
always preserved.

Example call (1 URL)::

    https://i.embed.ly/1/image/crop?key=:key&url=:url1&errorurl=:url2&height=:height&width=:width

Example
--------
::

  http://i.embed.ly/1/image/crop?height=200&width=200&url=http%3A%2F%2Ffarm8.staticflickr.com%2F7196%2F7070072209_d1f393c797_b.jpg&key=xxxxx

.. image:: http://i.embed.ly/1/image/crop?url=http%3A%2F%2Ffarm8.staticflickr.com%2F7196%2F7070072209_d1f393c797_b.jpg&key=4b7b2208db3d410bb0033f5253e0da2e&height=200&width=200
  :class: exampleimg
  :width: 200
  :height: 200

::

    http://i.embed.ly/1/image/crop?height=200&width=400&url=http%3A%2F%2Ffarm8.staticflickr.com%2F7196%2F7070072209_d1f393c797_b.jpg&key=xxxxx

.. image:: http://i.embed.ly/1/image/crop?url=http%3A%2F%2Ffarm8.staticflickr.com%2F7196%2F7070072209_d1f393c797_b.jpg&key=4b7b2208db3d410bb0033f5253e0da2e&height=200&width=400
  :class: exampleimg
  :width: 400
  :height: 200



Arguments
---------

``key`` (required)
    The :doc:`API key </authentication>` for your registered account. OAuth is
    not currently supported.

``url`` (required)
    The URL of the image to proxy. The URL must be urlencoded to insure that
    Embedly retrieves the correct link. For example, this Embedly
    URL::

        http://embed.ly/static/images/squiggle2.png?v=1

    Should be sent as::

        http%3A%2F%2Fembed.ly%2Fstatic%2Fimages%2Fsquiggle2.png%3Fv%3D1

``errorurl``
    The URL of the fall back image to use when ``url`` fails. The URL must be
    urlencoded to insure that Embedly retrieves the correct link. For example,
    this Embedly URL::

        http://embed.ly/static/images/squiggle2.png?v=1

    Should be sent as::

        http%3A%2F%2Fembed.ly%2Fstatic%2Fimages%2Fsquiggle2.png%3Fv%3D1

``width`` (required)
    The width that the image should fill.

``height`` (required)
    The height that the image should fill.

Response
--------

200 OK
  Image returned successfully.

400 Bad Request
  * The resource found was either not an image or not publicly accessible and
    no ``errorurl`` was specified.
  * An invalid ``key`` was passed.
  * A required parameter was not specified.

404 Not Found
  Resource not found.

500 Server Error
  i.embed.ly is having trouble with the image. Please try again or contact us,
  support@embed.ly
