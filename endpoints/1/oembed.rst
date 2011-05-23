.. _oembed_1:

oEmbed API
==========
Embedly's oEmbed API is a single endpoint that allows you to embed content from
`any` URL, including short urls. This method follows the `oEmbed 
<http://oembed.com>`_ standard and returns the JSON format by default.

Example Calls:

``http://pro.embed.ly/1/oembed?key=:key&url=:url&maxwidth=:maxwidth&maxheight=:maxheight&format=:format&callback=:callback``

``http://pro.embed.ly/1/oembed?key=:key&urls=:url1,:url2,:url3&maxwidth=:maxwidth&maxheight=:maxheight&format=:format&callback=:callback``

Response Explorer
-----------------
`explore.embed.ly <http://explore.embed.ly>`_ can be used to get a better
handle on what this API returns. Try these examples:

* `YFrog <http://explore.embed.ly/oembed?url=http://yfrog.com/ng41306327j>`_
* `Twitter <http://explore.embed.ly/oembed/?url=http://twitter.com/embedly/status/29481593334>`_
* `Embedly blog <http://explore.embed.ly/oembed/?url=http://blog.embed.ly/31814817>`_
* `SoundCloud <http://explore.embed.ly/oembed/?url=http://soundcloud.com/mrenti/merenti-la-karambaa>`_
* `YouTube (bitly short link) <http://explore.embed.ly/oembed/?url=http://bit.ly/cXVifg>`_

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

oEmbed Types
------------

``photo``
    This is a static viewable image.

``video``
    This is a playable video.

``rich``
    This is rich HTML, which may contain images and videos.

``link``
    This is a general embed that may not contain HTML.

``error``
    When accessing multiple urls at once, Embedly will not throw HTTP errors as
    normal. Instead it will return an 'error' type response that includes the 
    'url', 'error_message' and 'error_code'.

Response
--------

``type`` (required)
    The resource type. Valid values, along with value-specific parameters, are
    described below.

``version`` (required)
    The oEmbed version number. This must be 1.0.

``title`` (optional)
    A text title, describing the resource.

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
    respect any maxwidth and maxheight parameters. If this parameter is present
    , thumbnail_width and thumbnail_height must also be present.

``thumbnail_width`` (optional)
    The width of the optional thumbnail. If this parameter is present, 
    thumbnail_url and thumbnail_height must also be present.

``thumbnail_height`` (optional)
    The height of the optional thumbnail. If this parameter is present, 
    thumbnail_url and thumbnail_width must also be present.

``description``
    We support and pass back a description for all oEmbed types.

 
The 'photo' type
^^^^^^^^^^^^^^^^^^
This type is used for representing static photos. The following parameters are
defined:

``url`` (required)
    The source URL of the image. Consumers should be able to insert this URL
    into an``<img>``element. Only HTTP and HTTPS URLs are valid.

``width`` (required)
    The width in pixels of the image specified in the ``url`` parameter.

``height`` (required)
    The height in pixels of the image specified in the ``url`` parameter.

    
The 'video' type
^^^^^^^^^^^^^^^^^^
This type is used for representing playable videos. The following parameters
are defined:

``html`` (required)
    The HTML required to embed a video player. The HTML should have no padding
    or margins. Consumers may wish to load the HTML in an off-domain iframe to
    avoid XSS vulnerabilities.
    
``width`` (required)
    The width in pixels required to display the HTML.
    
``height`` (required)
    The height in pixels required to display the HTML.

The 'link' type
^^^^^^^^^^^^^^^^^
Responses of this type allow a provider to return any generic embed data (such
as title and author_name), without providing either the url or html parameters.
The consumer may then link to the resource, using the URL specified in the 
original request.
    
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


Error Codes
-----------

JSON or XML Requests
^^^^^^^^^^^^^^^^^^^^

400 Bad Request
    Required "url" parameter is missing.
    Invalid URL format, should be http or https resource.
    Invalid "maxheight" parameter.
    Invalid "maxwidth" parameter.
    
403 Forbidden
    Invalid key provided: , contact: support@embed.ly

404 Not Found
    URL Not Found, we will log this and determine if usable.

500 Server issues
    Embed.ly is having trouble with this url. Please try again or contact us,
    support@embed.ly.

501 Not Implemented
    Not implemented for format: acceptable values are ``{json, xml}``.

JSONP Requests
^^^^^^^^^^^^^^

Format
    ``callbackFunction({"url": "url with error", "error_code": "error code", 
    "error_message": "error message", "type": "error"})``
 
Error Response
    ``jsonp1273162787542({"url": "http://flickr.com/embedly", "error_code": 404, "error_message": 
    "HTTP 404: Not Found", "type": "error"})``


oEmbed Examples
---------------
Some sample usages of the API.

API Example Calls
^^^^^^^^^^^^^^^^^

Vimeo.com video
    ``http://pro.embed.ly/1/oembed?key={{key}}&url=http://vimeo.com/10179697``
Plixi.com photo
    ``http://pro.embed.ly/1/oembed?key={{key}}&url=http://plixi.com/p/12870944``
    
JavaScript
^^^^^^^^^^
A short example for using jQuery and Embedly::

    // Call API to get a video oEmbed JSON response
    var url = escape('http://vimeo.com/9503416');
    var api_url = 'http://pro.embed.ly/1/oembed?key={{key}}&url=' + url + '&callback=?';
    //jQuery JSON call
    $.getJSON( api_url, function(json) {
        var html = json.html;
        $('#videodiv').html(html);
    });
    
Python
^^^^^^
A short example for using Python and Embedly::

    #!/usr/bin/env python
    import urllib
    import urllib2
    try:
        import json
    except ImportError:
        try:
            import simplejson as json
        except ImportError:
            raise ImportError("Need a json decoder")
    
    ACCEPTED_ARGS = ['maxwidth', 'maxheight', 'format']
    
    def get_oembed(url, **kwargs):
        """
        Example Embedly oEmbed Function
        """
        api_url = 'http://pro.embed.ly/1/oembed?'
    
        params = {'url': url , 'key': '{{key}}' }
    
        for key, value in kwargs.items():
            if key not in ACCEPTED_ARGS:
                raise ValueError("Invalid Argument %s" % key)
            params[key] = value
    
        oembed_call = "%s%s" % (api_url, urllib.urlencode(params))
    
        return json.loads(urllib2.urlopen(oembed_call).read())
    
    if __name__ == "__main__":
        urls = ["http://vimeo.com/9503416",
                "http://plixi.com/p/12870944"]
    
        for url in urls:
            print "\n\nurl: %s\n" % url
            print get_oembed(url)
            print "\n\n"
