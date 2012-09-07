Mirage Image Resize API
=======================
Resize images to a specified width or height. Aspect ratio will always be
preserved, so you shouldn't expect to receive an image with the exact specified
dimensions. If width and height are omitted, then the image will simply be
proxied.

Example call (1 URL)::

    https://i.embed.ly/1/image/resize?key=:key&url=:url1&errorUrl=:url2&height=:height&grow=:bool

Example
--------
* `<https://i.embed.ly/1/image/resize?url=http%3A%2F%2Fembed.ly%2Fstatic%2Fimages%2Fsquiggle2.png&key=xxxxx&height=400&grow=true>`_

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

``errorUrl``
    The URL of the fall back image to use when ``url`` fails. The URL must be
    urlencoded to insure that Embedly retrieves the correct link. For example,
    this Embedly URL::

        http://embed.ly/static/images/squiggle2.png?v=1

    Should be sent as::

        http%3A%2F%2Fembed.ly%2Fstatic%2Fimages%2Fsquiggle2.png%3Fv%3D1

``width``
    The width that the image should fill.

``height``
    The height that the image should fill.

``grow``
    Set to `true` if growing the image is allowed. Otherwise it will never expand
    beyond it's original size, making width and height behave like max width and
    max height.

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
  Resource not found.

500 Server Error
  i.embed.ly is having trouble with the image. Please try again or contact us,
  support@embed.ly
