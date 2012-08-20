Objectify API
=============

This endpoint is the kitchen sink of Embedly's offerings. It pretty much dumps
everything we know about a URL out so you can use as you like. If you don't
need this much information, we suggest using the :doc:`../1/oembed` or
:doc:`../1/preview`.

Example call (1 URL)::

    http://api.embed.ly/2/objectify?key=:key&url=:url&maxwidth=:maxwidth&maxheight=:maxheight&format=:format&callback=:callback

Example call (multiple URLs)::

    http://api.embed.ly/2/objectify?key=:key&urls=:url1,:url2,:url3&maxwidth=:maxwidth&maxheight=:maxheight&format=:format&callback=:callback

Examples
--------
`Embedly Explore </docs/explore/objectify>`_ can be used to get a better 
handle on what the Objectify API returns. Try these:

* `Foursquare <http://embed.ly/docs/explore/objectify/?url=http://foursquare.com/venue/49547>`_
* `Tumblr <http://embed.ly/docs/explore/objectify/?url=http://doctorswithoutborders.tumblr.com/post/820310165/tune-in-tonight-starved-for-attention-on-pbs-need-to>`_
* `YouTube <http://embed.ly/docs/explore/objectify/?url=http://www.youtube.com/watch%3Fv%3D-oElH6M_5i4>`_

Arguments
---------
See the :doc:`Query Arguments </arguments>` documentation.

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
    See :ref:`response-types` 

``safe``
    See :ref:`safebrowse`.

``provider_name``
    The name of the resource provider.

``provider_url``
    The url of the resource provider.

``provider_display``
    For display purposes we ``include provider_display``. It's the subdomain,
    hostname, and public suffix of the provider.

``favicon_url``
    The url of the favicon.

``title``
    The title of the resource. It's picked in the following order:

    * The RSS entry's title
    * The oEmbed title
    * The open graph title
    * The ``meta`` title tag
    * The ``title`` attribute in the ``head`` element

``description``
    The description of the resource. It's picked in the following order:
    
    * The RSS entry's summary
    * The oEmbed description
    * The open graph description
    * The ``meta`` description tag
    * An excerpt pulled programmaticly by Embedly

``oembed``
    The oEmbed response for a url. More information on the :doc:`../1/oembed`.
    
``meta``
    The meta attributes of the document. Possible attributes include:
    
    * ``content_type``
    * ``author``
    * ``title``
    * ``keywords``
    * ``description``
    * ``rss``
    * ``oembeds``
    * ``open_search``
    * ``shortcut_icon``
    * ``icon``
    * ``apple_touch_icon``
    * ``generator``
    * ``shortlink``
    * ``canonical``
    * ``medium``
    * ``video_src``
    * ``video_height``
    * ``video_width``
    * ``video_type``
    * ``image_src``
    * ``image_height``
    * ``image_width``
    * ``audio_src``
    * ``audio_type``
    * ``audio_title``
    * ``audio_artist``
    * ``audio_album``

``open_graph``
    The Open Graph attributes of the document. Possible attributes include:
 
    * ``title``
    * ``type``
    * ``site_name``
    * ``description``
    * ``url``
    * ``image``
    * ``image_width``
    * ``image_height``
    * ``latitude``
    * ``longitude``
    * ``street_address``
    * ``locality``
    * ``region``
    * ``postal_code``
    * ``country_name``
    * ``email``
    * ``phone_number``
    * ``fax_number``
    * ``upc``
    * ``isbn``

``entry``
    The RSS entry for the url

``images``
    See :ref:`images`

``place``
    See :ref:`place`
    
``event``
    See :ref:`event`
    
``microformats``
    See :ref:`microformats`

``embeds``
    A list of embeds that Embedly found in the document.

``payload``
    A JSON formatted API response from provider, if available.

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
    * This service requires an embedly key parameter, contact: support@embed.ly or sign up here: http://embed.ly/signup.
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
