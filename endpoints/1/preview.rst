Preview API
===========

This endpoint provides a simple yet powerful solution for previewing a link.
It is designed to allow users to select from a number of different options to
build an embed, because in the end, the user will have the best insight to an 
accurate portrayal of the content.

Example Calls

``http://pro.embed.ly/1/preview?key=:key&url=:url&maxwidth=:maxwidth&maxheight=:maxheight&format=:format&callback=:callback``

``http://pro.embed.ly/1/preview?key=:key&urls=:url1,:url2,:url3&maxwidth=:maxwidth&maxheight=:maxheight&format=:format&callback=:callback``

Response Explorer
-----------------
`explore.embed.ly <http://explore.embed.ly>`_ can be used to get a better
handle on what this API returns. Try these examples:

* `Techcrunch Article <http://explore.embed.ly/preview/?url=http://techcrunch.com/2010/11/18/mark-zuckerberg/>`_
* `Deadspin Post <http://explore.embed.ly/preview/?url=http://deadspin.com/5690535/the-bottom-100-the-worst-players-in-nfl-history-part-1>`_
* `Embedly blog <http://explore.embed.ly/preview/?url=http://blog.embed.ly/31814817>`_

Query Parameters
----------------

``key``
    The API key for your registered account.{% if key != ':key' %} Your key is: **{{key}}** {% endif %}
    
``url``
    The URL to retrieve embedding information for.

``urls``
    A comma separated list of urls for Embedly to process. URLs must be URL
    encoded.  Commas separating URLS must NOT be URL encoded.  It accepts a
    maximum of 20 urls at a time. Embedly processes these urls in parallel, so
    it's much quicker to use ``urls`` for batched processing.

``maxwidth`` (optional)
    The maximum width of the embed in pixels.
    Note: we will attempt to scale the embed to fit within the maximum width.
   
``maxheight`` (optional)
    The maximum height of the embed in pixels.
    Note: we will attempt to scale the embed to fit within the maximum height.
     
``format`` (optional)
    The response format. Accepted values: ``(xml, json)``
 
``callback`` (optional)
    Returns ``(jsonp)`` response format. The callback is the name of the 
    javascript function to execute.

``wmode`` (optional)
    Will append the wmode value to the flash object. Possible values include 
    'window', 'opaque' and 'transparent'. For more information view Adobe's
    `documentation <http://kb2.adobe.com/cps/127/tn_12701.html>`_.

``allowscripts`` (optional)
    By default Embedly does not return script embeds for ``jsonp`` requests.
    They just don't work and cause lots of issues. In some cases you may need
    the script tag for saving and displaying later. To tell Embedly to send the
    script embeds over ``jsonp`` add ``allowscripts=true``. Use with care and
    this option is only valid when a callback is supplied, otherwise it is
    ignored.

``nostyle`` (optional)
    There are a number of embeds that Embedly has created including Amazon.com,
    Foursquare and Formspring. These all have `<style>` elements and inline
    styles associated with them that make the embeds look good. If you wish to
    style these embeds yourself you can add ``nostyle=true`` and Embedly will
    remove the style elements. Note this is global change, so you must account
    for all embeds with styles or only use a subset.

``autoplay`` (optional)
    Will tell the video/rich media to automatically play when the media is
    loaded. Accepted values: ``(true, false)`` Default: ``false``

``videosrc`` (optional)
    If ``true`` Embedly will use the ``video_src`` meta or Open Graph tag to
    create a video object to embed. While Embedly uses the ``video_src`` tag to
    create embeds for supported providers it can create unexpected behavior
    when it's used in a broader context. Videos will autoplay or my contain
    malicious content. Only enable this feature if you know what you are doing.
    Accepted values: ``(true, false)`` Default: ``false``

``width`` (optional)
    Will scale embeds of type `rich` and `video` to the exact width that a
    developers specifies is pixels. Embeds smaller than this width will be
    scaled up and embeds larger than this width will be scaled down. Note that
    using this may cause distortion when scaling up embeds.

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
         
        'place': {}
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
    See :ref:`preview-types`.
    
``cache_age``
    How long Embedly is going to cache the response for. Generally this is for
    a day unless some external factor tells us to reevaluate the resource.

``safe``
    See :ref:`safebrowse`.

``provider_name``
    The name of the resource provider.

``provider_url``
    The url of the resource provider.

``provider_display``
    For display purposes we ``include provider_display`` it's the subdomain,
    hostname and public suffix of the provider.

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

``embeds``
    A list of embeds that Embedly found on the page. They follow the 
    :ref:`object` format.

.. _preview-types:

Preview Types
-------------
Preview types are different then oEmbed types. They closely follow the mimetype
for a given resource. They are as follows.

``html``
    The most common response. The resource is an ``html`` document.

``text``
    The response is a plain ``text`` document.

``image``
    This is a static viewable ``image``.

``video``
    This is a playable ``video``.

``audio``
    This is a playable ``audio``.

``rss``
    The resource is an ``rss`` feed.

``xml``
    The resource is an ``xml`` document.

``atom``
    The resource is an ``atom`` feed.

``json``
    The resource is a ``json`` document.

``ppt``
    The resource is a PowerPoint document.

``link``
    This is a general embed that may not contain HTML.

``error``
    When accessing multiple urls at once Embedly will not throw HTTP errors as
    normal. Instead it will return an 'error' type response that includes the 
    'url', 'error_message' and 'error_code'.

.. _safebrowse:

Safe
----
Safe is an attribute that tells you if the url is on a phishing or malware list
. Embedly uses Google's `Safe Browsing API 
<http://code.google.com/apis/safebrowsing/>`_ to obtain a list of malicious
urls. By using this attribute there are rules that you mush obey that we have
agreed to by offering this information. When the `safe` attribute is set as
`true` you can proceed as normal, but when it's `false` there are a few things
that need to happen. When a url is deemed unsafe there will be two additional
attributes to the response:

`safe_type`
    Will be either `phishing` or `malware`. The `phishing` list is from 
    `antiphishing.org <http://www.antiphishing.org/>`_ and the malware list is
    from `stopbadware.org <http://www.stopbadware.org/>`_. Please visit these
    sites for more information.

`safe_message`.   
    If you are going to display a message to the user notifying them that the
    url they are about to click on is malicious you need to use these messages
    or something slightly modified.
    
    `phishing`::
  
        <b>Warning- Suspected phishing page.</b> This page may be a forgery or 
        imitation of another website, designed to trick users into sharing 
        personal or financial information. Entering any personal information on
        this page may result in identity theft or other abuse. You can find out
        more about phishing from <a href="http://www.antiphishing.org">
        www.antiphishing.org</a>. Advisory provided by <a href=
        "http://code.google.com/apis/safebrowsing/safebrowsing_faq.html#whyAdvisory"
        >Google</a>
      
    `malware`::
  
        <b>Warning- Visiting this web site may harm your computer.</b> This
        page appears to contain malicious code that could be downloaded to your
        computer without your consent. You can learn more about harmful web 
        content including viruses and other malicious code and how to protect
        your computer at <a href="http://www.stopbadware.org">StopBadware.org
        </a>. Advisory provided by <a href=
        "http://code.google.com/apis/safebrowsing/safebrowsing_faq.html#whyAdvisory"
        >Google</a>

We need to make clear that the page is not known with 100% certainty to be a
phishing site or a distributor of malware, and that the warnings merely
identify possible risk. Once a url is flagged as malicious you must respect the
`cache_age` attribute. When `cache_age` expires you must not show the message
again until you have reevaluated that url with Embedly. We take care of
updating the list in the background and making sure that you are in compliance
with the Safe Browsing API.


.. _object:

Object
------
An object is the primary piece of media that is associated with a ``url``. It
follows the general pattern of the :doc:`oembed`, but with only a limited set
of attributes.

``type``
    The resource type. Valid values, along with value-specific parameters, are
    described below.


The 'photo' type
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

    
The 'video' type
^^^^^^^^^^^^^^^^^^
This type is used for representing playable videos. The following parameters
are defined:

``html``
    The HTML required to embed a video player. The HTML should have no padding
    or margins. Consumers may wish to load the HTML in an off-domain iframe to
    avoid XSS vulnerabilities.
    
``width``
    The width in pixels required to display the HTML.
    
``height``
    The height in pixels required to display the HTML.


The 'rich' type
^^^^^^^^^^^^^^^^^
This type is used for rich HTML content that does not fall under one of the
other categories. The following parameters are defined:

``html`` (required)
    The HTML required to display the resource. The HTML should have no padding
    or margins. Consumers may wish to load the HTML in an off-domain iframe to
    avoid XSS vulnerabilities. The markup should be valid XHTML 1.0 Basic.
    
``width`` (required)
    The width in pixels required to display the HTML.

``height`` (required)
    The height in pixels required to display the HTML.


.. _place:

Place
-----
The place object gives location data that is associated with the url. An
example ``place`` value for a Foursquare venue would be::

    {
        "title": "Dupont Circle Metro Station", 
        "url": "http://foursquare.com/venue/46205", 
        "region": "DC", 
        "locality": "Washington", 
        "longitude": -77.043256759643555, 
        "postal_code": "20036", 
        "provider": "Foursquare", 
        "latitude": 38.909669137703268, 
        "id": "46205", 
        "street_address": "1525 20th St NW"
    }

``title``
    Title of the location

``url``
    Resource associated with the ``place``
 
``id``
    Unique identifier for the ``place`` by the ``provider``

``provider``
    Provider name
    
``street_address``
    Street Address

``locality``
    Locality, most often the city.

``region``
    Region, most often a state.

``postal_code``
    Postal Code

``country_code``
    Country Code

``latitude``
    Latitude associated with the place.

``longitude``
    Longitude associated with the place.
    
Preview Examples
----------------
Some sample usages of the API.
    
API Example Calls
^^^^^^^^^^^^^^^^^
Article w/ images
    `http://pro.embed.ly/1/preview?key={{key}}&url=http://deadspin.com/5690535/the-bottom-100-the-worst-players-in-nfl-history-part-1`
Article w/ video and images
    `http://pro.embed.ly/1/preview?key={{key}}&url=http://techcrunch.com/2010/11/18/mark-zuckerberg/`    


