Mirage Image Fill API
=====================
The image will be resized and centered on the canvas so that the entire image
fits within the width and height bounds. Any extra space will be filled with
the specified color.

Example call (1 URL)::

    https://i.embed.ly/1/image/fill?key=:key&url=:url1&errorUrl=:url2&height=:height&width=:width&color=:color

Example
--------
* `<https://i.embed.ly/1/image/fill?url=http%3A%2F%2Fembed.ly%2Fstatic%2Fimages%2Fsquiggle2.png&key=xxxxx&height=200&width=200&color=fff>`_

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
    The URL of the fallback image to use when ``url`` fails. The URL must be
    urlencoded to insure that Embedly retrieves the correct link. For example,
    this Embedly URL::

        http://embed.ly/static/images/squiggle2.png?v=1

    Should be sent as::

        http%3A%2F%2Fembed.ly%2Fstatic%2Fimages%2Fsquiggle2.png%3Fv%3D1

``width`` (required)
    The width that the image should fill.

``height`` (required)
    The height that the image should fill.

``color`` (required)
    The css color to fill with. Colors should be 3 or 6 hexidecimal characters.
    Some examples of valid colors:
      * 000
      * 4f2a55

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
