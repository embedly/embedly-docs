Preview API
===========

This endpoint provides a simple, yet powerful solution for previewing a link.
It is designed to allow users to select from a number of different options to
build an embed because in the end, the user will have the best insight to an 
accurate portrayal of the content.

Example Calls:

``http://api.embed.ly/1/preview?key=:key&url=:url&maxwidth=:maxwidth&maxheight=:maxheight&format=:format&callback=:callback``

``http://api.embed.ly/1/preview?key=:key&urls=:url1,:url2,:url3&maxwidth=:maxwidth&maxheight=:maxheight&format=:format&callback=:callback``

Response Explorer
-----------------
:doc:`Embedly Explore <../../explore>` can be used to get a better handle on
what this API returns. Try these examples:

* `Techcrunch Article <http://embed.ly/docs/explore/preview/?url=http://techcrunch.com/2010/11/18/mark-zuckerberg/>`_
* `Deadspin Post <http://embed.ly/docs/explore/preview/?url=http://deadspin.com/5690535/the-bottom-100-the-worst-players-in-nfl-history-part-1>`_
* `Embedly blog <http://embed.ly/docs/explore/preview/?url=http://blog.embed.ly/31814817>`_

Query Arguments
----------------
As specified in the :doc:`Query Arguments documentation<../arguments>`

Example Response::

    {
        'original_url': 'http://bit.ly/detr0',
        'url': 'http://www.youtube.com/watch?v=B-m6JDYRFvk'
        'type': 'html',
        
        'cache_age' : 86400,
        'safe' : true,

        'provider_url': 'http://www.youtube.com/',
        'provider_display': 'www.youtube.com',
        'provider_name': 'YouTube',
        'favicon_url': 'http://s.ytimg.com/yt/favicon-vflZlzSbU.ico',
 
        'title': 'Coder Girl',
        'description': 'An ode to female programmers.\r\n\r\nEP Available on iTunes!\r\n
                        http://bit.ly/4sebjr\r\n
                        Find more great music @ http://dalechase.com  http://twitter.com/daleochase\r\n
                        Song lyrics here: http://bit.ly/7eOilA',
        
        'author_name': 'dalechase',
        'author_url': 'http://www.youtube.com/user/dalechase',
        
        'content': null,
        
        'embeds': [],
         
        'images': [{'height': 360,
                     'url': 'http://i3.ytimg.com/vi/B-m6JDYRFvk/hqdefault.jpg',
                     'width': 480}],
        'object': {'height': 360,
                    'html': '<object width="640" height="360">
                               <param name="movie" value="http://www.youtube.com/v/B-m6JDYRFvk?fs=1">
                               <param name="allowFullScreen" value="true">
                               <param name="allowscriptaccess" value="always">
                               <embed src="http://www.youtube.com/v/B-m6JDYRFvk?fs=1" 
                                      type="application/x-shockwave-flash" 
                                      width="640" height="360" allowscriptaccess="always" 
                                      allowfullscreen="true"></embed>
                            </object>',
                    'type': 'video',
                    'width': 640},
         
        'place': {},
        
        'event': {}
    }


Response
--------
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
    See :ref:`safebrowse`.

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

``object``
    See :ref:`object` 

``images``
    A list of, at most, 5 images that Embedly found while processing the url.
    They are listed in the following order:
    
    * If the oEmbed type is ``photo`` the url of the oEmbed object
    * The ``thubnail_url`` of the oEmbed object if the oEmbed type is not
      ``photo``
    * The Open Graph ``image`` property
    * The ``meta`` ``image_src`` tag.
    
    The rest of the list is filled in by images that Embedly found within the 
    html. They are ranked by size and position on the page.

``content``
    The content of the rss entry. 

``place``
    See :ref:`place`

``event``
    See :ref:`event`

``embeds``
    A list of embeds that Embedly found on the page. They follow the 
    :ref:`object` format.


.. _object:

Object
------
An object is the primary piece of media that is associated with a ``url``. It
follows the general pattern of the :doc:`oembed`, but with only a limited set
of attributes.

``type``
    The resource type. Valid values, along with value-specific parameters, are
    described below.


The ``photo`` type
^^^^^^^^^^^^^^^^^^
This type is used for representing static photos. The following parameters are
defined:

``url``
    The source URL of the image. Consumers should be able to insert this URL
    into an``<img>``element. Only HTTP and HTTPS URLs are valid.

``width``
    The width in pixels of the image specified in the ``url`` parameter.

``height``
    The height in pixels of the image specified in the ``url`` parameter.


The ``video`` type
^^^^^^^^^^^^^^^^^^
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
    The height in pixels required to display the HTML. If not supplied
    the HTML returned will expand vertically to the size of its parent
    container.


The ``rich`` type
^^^^^^^^^^^^^^^^^
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
  Required "url" parameter is missing.
    
  Either "url" or "urls" parameter is reqiured.
    
  Invalid URL format.
  
  Invalid "maxheight" parameter.
 
  Invalid "maxwidth" parameter.
  
  Invalid "urls" parameter, exceeded max count of 20.

401 Unauthorized
  Invalid key or oauth_consumer_key provided: <key>, contact: support@embed.ly.

  The provided key does not support this endpoint: <key>, contact: support@embed.ly.

403 Forbidden
  This service requires an embedly key parameter, contact: support@embed.ly.

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

Preview Examples
----------------
Some sample usages of the API.
    
API Example Calls
^^^^^^^^^^^^^^^^^

Article w/ images:

``http://api.embed.ly/1/preview?key=:key&url=http://deadspin.com/5690535/the-bottom-100-the-worst-players-in-nfl-history-part-1``

Article w/ video and images:

``http://api.embed.ly/1/preview?key=:key&url=http://techcrunch.com/2010/11/18/mark-zuckerberg/``    


