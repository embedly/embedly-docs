.. _service-api:

Service API
===========
The services method allows you to easily get information on all the providers
that Embedly supports.

Example call (no parameters)::

    http://api.embed.ly/1/services

Example call (JSONP with language parameter)::

    http://api.embed.ly/1/services/:lang?callback=:callback

Query Parameters
----------------

``lang`` (optional)
    Format the regex for specific langage. accepted values are ``php``,
    ``python``, ``ruby`` or ``javascript``. An example call would be
    ``http://api.embed.ly/1/services/python``
    Note: if language not specified, default will be generic oEmbed url scheme.

``callback`` (optional)
    Returns ``(jsonp)`` response format. The callback is the name of the
    javascript function to execute.
    

Response
--------
List of provider entries:

``type`` 
    Type of embed. photo, video, product, audio, or rich.
``regex``
    A list of the regexs for the provider.
``name``
    A unique name for the provider.
``displayname``
    Display Name of the provider.
``domain``
    Domain of the provider
``provider_name``
    The name of the resource provider.
``subdomains``
    List of subdomains for the provider.
``about``
    Description of the provider.
``favicon``
    Favicon of the provider.
    
Response Format
---------------

The response will be an array containing entries of the form

.. code-block:: json

    {
        "regex": ["http://*youtube.com/watch*", "http://*.youtube.com/v/*", "https://*youtube.com/watch*", "https://*.youtube.com/v/*", "http://youtu.be/*", "http://*.youtube.com/user/*", "http://*.youtube.com/*#*/*", "http://m.youtube.com/watch*", "http://m.youtube.com/index*", "http://*.youtube.com/profile*", "http://*.youtube.com/view_play_list*", "http://*.youtube.com/playlist*"],
        "about": "YouTube is the world's most popular online video community, allowing millions of people to discover, watch and share originally-created videos. YouTube provides a forum for people to connect, inform, and inspire others across the globe and acts as a distribution platform for original content creators and advertisers large and small.",
        "displayname": "YouTube",
        "name": "youtube",
        "domain": "youtube.com",
        "subdomains": ["m.youtube.com"],
        "favicon": "http://c2548752.cdn.cloudfiles.rackspacecloud.com/youtube.ico",
        "type": "video"
    }
