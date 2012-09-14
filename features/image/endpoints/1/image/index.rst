Image API
=========
Image is a simple proxy that allows you to embed insecure images into
secure pages without warning and use a fall back image for images not found.

Example call (1 URL)::

    https://i.embed.ly/1/image?key=<key>&url=<url1>&errorurl=<url2>

Example
--------
* `<https://i.embed.ly/1/image?url=http%3A%2F%2Fembed.ly%2Fstatic%2Fimages%2Fsquiggle2.png&key=xxxxx>`_

Arguments
---------

``key`` (required)
    The :doc:`API key </authentication>` for your registered account. OAuth is
    not currently supported.

``url`` (required)
    The URL of the image to proxy. The URL must be url-encoded to ensure that
    Embedly retrieves the correct link. For example, this Embedly
    URL::

        http://embed.ly/static/images/squiggle2.png?v=1

    Should be sent as::

        http%3A%2F%2Fembed.ly%2Fstatic%2Fimages%2Fsquiggle2.png%3Fv%3D1

``errorurl``
    The URL of the fall back image to use when ``url`` fails. The URL must be
    url-encoded to ensure that Embedly retrieves the correct link. For example,
    this Embedly URL::

        http://embed.ly/static/images/squiggle2.png?v=1

    Should be sent as::

        http%3A%2F%2Fembed.ly%2Fstatic%2Fimages%2Fsquiggle2.png%3Fv%3D1

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
  No image was found at the given url.

500 Server Error
  i.embed.ly is having trouble with the image. Please try again or contact us,
  support@embed.ly
