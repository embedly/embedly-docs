Response Objects
================
A list of common response objects across endpoints.


Title
-----




.. _response-types:

Response Types
--------------
Response types are different then oEmbed types. They closely follow the mimetype
for a given resource. They are as follows:

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
    normal. Instead, it will return an ``error`` type response that includes the 
    ``url``, ``error_message`` and ``error_code``.

.. _safebrowse:

Safe
----
Safe is an attribute that tells you if the url is on a phishing or malware list.
Embedly uses Google's `Safe Browsing API 
<http://code.google.com/apis/safebrowsing/>`_ to obtain a list of malicious
urls. By using this attribute there are rules that you mush obey, which we have
agreed to by offering this information. When the `safe` attribute is set as
`true` you can proceed as normal, but when it's `false` there are a few things
that need to happen. When a url is deemed unsafe there will be two additional
attributes to the response:

`safe_type`
    Will either be `phishing` or `malware`. The `phishing` list is from 
    `antiphishing.org <http://www.antiphishing.org/>`_ and the malware list is
    from `stopbadware.org <http://www.stopbadware.org/>`_. Please visit these
    sites for more information.

`safe_message`.   
    If you are going to display a message to the user notifying them that the
    url they are about to click on is malicious, you need to use these messages
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
phishing site or a distributor of malware, and the warnings merely
identify possible risks. Once a url is flagged as malicious you must respect the
`cache_age` attribute. When `cache_age` expires you must not show the message
again until you have reevaluated that url with Embedly. We take care of
updating the list in the background and making sure you are in compliance
with the Safe Browsing API.

.. _place:

Place
-----
The place object gives location data, which is associated with the url. You can find 
this data in the :doc:`Preview <1/preview>` or :doc:`Objectify <2/objectify>` endpoints. An example ``place`` value
for a `Foursquare <http://embed.ly/docs/explore/preview?url=http%3A%2F%2Ffoursquare.com%2Fvenue%2F46205>`_ venue would be::

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
    

.. _event:

Event
-----
The event object gives time and details data, which is associated with the url. You can find 
this data in the :doc:`Preview <1/preview>` or :doc:`Objectify <2/objectify>` endpoints. An example ``event`` value
for `Eventbrite <http://embed.ly/docs/explore/preview?url=http%3A%2F%2Fxsite2011.eventbrite.com%2F>`_ would be::

    {
        "end": 1308263400000,
        "description": "Register now and enter to win a Galaxy Tab 10.1! The first 50 paid registrations in June will be entered in a drawing to win a Samsung Galaxy Tab 10.1 tablet computer.",
        "title": "XSITE 2011: The Xconomy Summit on Innovation, Technology & Entrepreneurship",
        "start": 1308226500000,
        "offset": -14400000,
        "id": "1590716877"
    }


``title``
    Title of the event.
    
``description``
    Description of the ``event``. The word count controlled by words and chars.

``start``
    Start time in milliseconds from epoch.

``end``
    End time in milliseconds from epoch.

``offset``
    UTC offset in milliseconds. Allows you to localize the time to the user's time zone.
    
``id``
    Unique identifier for the ``event`` by the ``provider``.
 
 .. _microformats:

Microformats
------------
The microformats object is used to group general html patterns and conventions in pages. Represented
as a dictionary (key, value pairs) of the below items. You can find this data in the :doc:`Objectify <2/objectify>` endpoint.

``tags``
    A dictionary of tagged links, designated with "rel=tag", these are used
    to indicate keyword/subject of content in a page.  See `microformats.org <http://microformats.org/wiki/rel-tag>`_ for more info.
    An example **tags** value for an `Ecommerce site <http://embed.ly/docs/explore/objectify?url=http%3A%2F%2Fwww.sunfactory.fr%2Fen%2Fpersonalized-gifts%2Fstatuette-trophy-soccer-player-football.html>`_ would be::
        {
            "trophy": "http://www.sunfactory.fr/en/tag/trophy/", 
            "soccer": "http://www.sunfactory.fr/en/tag/soccer/", 
            "statuette": "http://www.sunfactory.fr/en/tag/statuette/"
        }