Image Resize API
================
Resize images to a specified width or height. Aspect ratio will always be
preserved, so you shouldn't expect to receive an image with the exact specified
dimensions. If width and height are omitted, then the image will simply be
proxied.

Example call (1 URL)::

    https://i.embed.ly/1/display/resize?key=<key>&url=<url1>&errorUrl=<url2>&height=<height>&grow=<true|false>

Example
--------
::

  http://i.embed.ly/1/display/resize?height=200&width=200&url=http%3A%2F%2Ffarm8.staticflickr.com%2F7196%2F7070072209_d1f393c797_b.jpg&key=xxxxx

.. image:: /images/resize_1.png
  :class: exampleimg
  :width: 200
  :height: 149

::

    http://i.embed.ly/1/display/resize?height=200&width=400&url=http%3A%2F%2Ffarm8.staticflickr.com%2F7196%2F7070072209_d1f393c797_b.jpg&key=xxxxx

.. image:: /images/resize_2.png
  :class: exampleimg
  :width: 268
  :height: 200


Arguments
---------

``key`` (required)
    The :doc:`API key </api/authentication>` for your registered account. OAuth is
    not currently supported.

``url`` (required)
    The URL of the image to proxy. The URL must be url-encoded to ensure that
    Embedly retrieves the correct link. For example, this Embedly
    URL::

        http://embed.ly/static/images/squiggle2.png?v=1

    Should be sent as::

        http%3A%2F%2Fembed.ly%2Fstatic%2Fimages%2Fsquiggle2.png%3Fv%3D1

``errorUrl``
    The URL of the fall back image to use when ``url`` fails. The URL must be
    url-encoded to ensure that Embedly retrieves the correct link. For example,
    this Embedly URL::

        http://embed.ly/static/images/squiggle2.png?v=1

    Should be sent as::

        http%3A%2F%2Fembed.ly%2Fstatic%2Fimages%2Fsquiggle2.png%3Fv%3D1

``width``
    The width that the image should fill.

``height``
    The height that the image should fill.

``grow``
    Set to `true` if growing the image is allowed. Otherwise the image will
    never expand beyond it's original dimensions, making width and height
    behave like max width and max height.

Response
--------

200 OK
  Image returned successfully.

400 Bad Request
  * The resource found was either not an image or not publicly accessible and
    no ``errorUrl`` was specified.
  * An invalid ``key`` was passed.
  * A required parameter was not specified.

404 Not Found
  No image was found at the given url.

500 Server Error
  i.embed.ly is having trouble with the image. Please try again or contact us,
  support@embed.ly
