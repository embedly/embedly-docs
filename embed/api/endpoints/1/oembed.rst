.. _oembed_1:

oEmbed API
==========
oEmbed is Embedly's basic offering, providing a simple API for embedding
content from any URL. This method follows the `oEmbed <http://oembed.com>`_
standard.

Example call (1 URL)::

    http://api.embed.ly/1/oembed?key=:key&url=:url&maxwidth=:maxwidth&maxheight=:maxheight&format=:format&callback=:callback

Example call (multiple URLs)::

    http://api.embed.ly/1/oembed?key=:key&urls=:url1,:url2,:url3&maxwidth=:maxwidth&maxheight=:maxheight&format=:format&callback=:callback

Examples
--------
`Embedly Explore </docs/explore/oembed>`_ can be used to get a better handle
on what the oEmbed API returns. Try these:

* `YFrog <http://embed.ly/docs/explore/oembed?url=http://yfrog.com/ng41306327j>`_
* `Twitter <http://embed.ly/docs/explore/oembed/?url=http://twitter.com/embedly/status/29481593334>`_
* `Embedly blog <http://embed.ly/docs/explore/oembed/?url=http://blog.embed.ly/31814817>`_
* `SoundCloud <http://embed.ly/docs/explore/oembed/?url=http://soundcloud.com/mrenti/merenti-la-karambaa>`_
* `YouTube (bitly short link) <http://embed.ly/docs/explore/oembed/?url=http://bit.ly/cXVifg>`_

Arguments
---------
See the :doc:`Query Arguments <../../arguments>` documentation.

oEmbed Types
------------

``photo``
    This is a static viewable image.

``video``
    This is a playable video.

``rich``
    This is rich HTML that may contain images and videos.

``link``
    This is a general embed that may not contain HTML.

``error``
    When accessing multiple urls at once, Embedly will not throw HTTP errors as
    normal. Instead it will return an 'error' type response that includes the
    'url', 'error_message' and 'error_code'.

Response
--------

``type`` (required)
    The resource type. Valid values, along with value-specific parameters are
    described below.

``version`` (required)
    The oEmbed version number. This must be 1.0.

``title`` (optional)
    A text title describing the resource.

``author_name`` (optional)
    The name of the author/owner of the resource.

``author_url`` (optional)
    A URL for the author/owner of the resource.

``provider_name`` (optional)
    The name of the resource provider.

``provider_url`` (optional)
    The url of the resource provider.

``cache_age`` (optional)
    The suggested cache lifetime for this resource, in seconds. Consumers may
    choose to ignore this value.

``thumbnail_url`` (optional)
    A URL to a thumbnail image representing the resource. The thumbnail must
    respect any maxwidth and maxheight parameters. If this parameter is present,
    thumbnail_width and thumbnail_height must also be present.

``thumbnail_width`` (optional)
    The width of the optional thumbnail. If this parameter is present,
    thumbnail_url and thumbnail_height must also be present.

``thumbnail_height`` (optional)
    The height of the optional thumbnail. If this parameter is present,
    thumbnail_url and thumbnail_width must also be present.

``description``
    We support and pass back a description for all oEmbed types.


The photo type
^^^^^^^^^^^^^^
This type is used for representing static photos. The following parameters are
defined:

``url`` (required)
    The source URL of the image. Consumers should be able to insert this URL
    into an``<img>``element. Only HTTP and HTTPS URLs are valid.

``width`` (required)
    The width in pixels of the image specified in the ``url`` parameter.

``height`` (required)
    The height in pixels of the image specified in the ``url`` parameter.


The video type
^^^^^^^^^^^^^^
This type is used for representing playable videos. The following parameters
are defined:

``html`` (required)
    The HTML required to embed a video player. The HTML should have no padding
    or margins. Consumers may wish to load the HTML in an off-domain iframe to
    avoid XSS vulnerabilities.

``width``
    The width in pixels required to display the HTML. If not supplied
    the HTML returned will expand horizontally to the size of its parent
    container.

``height``
    The height in pixels required to display the HTML. If not supplied
    the HTML returned will expand vertically to the size of its parent
    container.


The link type
^^^^^^^^^^^^^
Responses of this type allow a provider to return any generic embed data (such
as title and author_name), without providing either the url or html parameters.
The consumer may then link to the resource, using the URL specified in the
original request.

The rich type
^^^^^^^^^^^^^
This type is used for rich HTML content that does not fall under one of the
other categories. The following parameters are defined:

``html`` (required)
    The HTML required to display the resource. The HTML should have no padding
    or margins. Consumers may wish to load the HTML in an off-domain iframe to
    avoid XSS vulnerabilities. The markup should be valid XHTML 1.0 Basic.

``width``
    The width in pixels required to display the HTML. If not supplied
    the HTML returned will expand horizontally to the size of its parent
    container.

``height``
    The height in pixels required to display the HTML. If not supplied
    the HTML returned will expand vertically to the size of its parent
    container.



Error Codes
-----------

JSON or XML Requests
^^^^^^^^^^^^^^^^^^^^

400 Bad Request
  * Required "url" parameter is missing.
  * Either "url" or "urls" parameter is reqiured.
  * Invalid URL format.
  * Invalid "maxheight" parameter.
  * Invalid "maxwidth" parameter.
  * Invalid "urls" parameter, exceeded max count of 20.

401 Unauthorized
  * Invalid key or oauth_consumer_key provided: <key>, contact: support@embed.ly.
  * The provided key does not support this endpoint: <key>, contact: support@embed.ly.
  * URL is private or restricted.

403 Forbidden
  * This service requires an embedly key parameter, contact: support@embed.ly or sign up: http://embed.ly/signup.
  * Invalid IP provided: <ip>, contact: support@embed.ly.
  * Invalid referrer provided: <referrer>, contact: support@embed.ly.

404 Not Found
  URL Not Found, we will log this and determine if usable.

500 Server issues
   Embed.ly is having trouble with this url. Please try again or contact us, support@embed.ly.

501 Not Implemented
   Not implemented for format: acceptable values are ``{json or xml}``.

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
