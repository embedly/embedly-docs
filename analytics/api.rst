Analytics - API
===============

The analytics API makes it easy to figure out what content on your site is popular 
and also where content from your site is being shared.

Via the analytics API you can retrieve:

* A summary of the most popular Cards on your site
* Where Cards with content from your site are being shared
* Loads, views and hovers for Cards and media embeds
* Average playtime for videos
* Video attention histogram to see what portions of videos people are watching
* All of the above information segmented by mobile and desktop

Analytics for Cards
-------------------
Cards analytics requests are behind the ``/1/analyics/cards`` endpoint and expose 
analytics data either per URL or across an entire domain. 

Analytics per URL
^^^^^^^^^^^^^^^^^

Per URL analytics for cards can be queried either by the URL of the content in the
Card itself or by the URL of the page hosting the card. 

The general form used to retrieve data about a specific URL is::
        
        http://api.embed.ly/1/analytics/cards/{on,of}/url/{url}/{urls,stats}

``on``
    Use ``on`` to request analytics for all Cards that are hosted on a
    specific URL.
``of``
    Use ``of`` to request analytics for Cards whose content is from the given URL.
``url``
    The URL in question -- note this must be URL-encoded because URLs generally
    contain slashes and such.
``urls``
    For ``of``, this means break out the response by URL that contains a Card of
    the given URL. For ``on``, this means break out the response by Card that is
    embedded on the given URL.
``stats``
    Aggregate all data for this URL into hourly buckets.

For example, if you just published a blog post and would like to see how it's being
shared via Embedly Cards, you can make the call::

        http://api.embed.ly/1/analytics/cards/of/url/<your-blog-post-url>/urls

Cards on or from a specific domain
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The general form used to retrieve data about a specific domain is::

        http://api.embed.ly/1/analytics/cards/{on,of}/domain/{domain}/{urls,stats,sources,domains}

``on``
    Use ``on`` to request analytics for all Cards that are hosted on a
    specific domain.
``of``
    Use ``of`` to request analytics for Cards whose content is from the given domain.
``domain``
    The domain in question -- note that this should be a fully qualified domain name
    (e.g., `www.youtube.com` instead of just `youtube.com`).
``urls``
    Break out the response by the URL of Cards that are embedded either ``on`` or
    ``of`` the given domain.
``sources``
    Break out the response by URLs that contain Cards either ``on`` or ``of`` the 
    given domain
``domains``
    When ``on`` is given, aggregate the response by domain of the content in the Cards.
    When ``of`` is given, aggregate the response by domain of the URL hosting the Cards.
``stats``
    Aggregate the response into an hour-by-hour time series.


Additional parameters
^^^^^^^^^^^^^^^^^^^^^

``start=YYYYMMDDHH``, ``end=YYYYMMDDHH``
    Required to specify the time period (in UTC) to retrieve data from. The time is a half-open
    range, so ``start=2014040100`` and ``end=2014040200`` means all of April 1st, 2014.
``key``
    Your API key. 
``filter=<url>``
    For time series requests, only include data for the specified URL.


Media analytics
^^^^^^^^^^^^^^^
The media analytics endpoint provides information on how embeds done via the Embedly API
(Embed and Extract) are performing.

The general form used to retrieve data is::

        http://api.embed.ly/1/analytics/media/{urls,stats,sources,urldomains,sourcedomains}

    ``urls``
    ``stats``
    ``sources``
    ``urldomains``
    ``sourcedomains``


Anatomy of a response
---------------------
Analytics data can sliced in two ways: either in a time series bucketed by hour
or per URL. The former might be used to answer questions like, "How has this
embed been performing over time?" while the latter might help with "What
content on my domain is receiving the most hits?" The two formats share
a lot of structure and are mostly made of objects containing various analytics
data.

The basic analytics object
^^^^^^^^^^^^^^^^^^^^^^^^^^
``actions``
    An object containing counts for various analytics events. These counts
    are all non-unique, so one visitor clicking play five times counts as five
    actions
    
    ``load``
        The number of times the URL in question has been loaded
    
    ``play``
        Number of video plays
    ``hover``
    
    ``meta``
    
    ``progress``
    
    ``click``
    
    ``view``

``unique``
    This is similar to the ``actions`` object, but instead tracks actions by
    unique user. Hence, one user clicking play five times counts as one play.
``referrers``
    A list of traffic sources to this content, sorted by count. Each entry in the
    list is an object with a ``url`` and ``count`` field.
``media``
    An object describing the media for the requested URL.
    
    ``duration``
        The length of the video or sound clip in seconds.
    ``average_playtime``
        How long the average user watched or listened in seconds.
    ``engagement``
        A dimensionless number used to quantify how "good" an particular piece
        of media is performing. It takes into account number of views, average playtime
        and the duration of the video. It is generally useful as a way to rank and compare
        content.
    ``watched``
        A list of numbers to be interpreted as a histogram across the duration of the media.
        Each bucket contains the number of times it has been watched or listened to.


Time series analytics response
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The time series response is a list of the above analytics objects with a ``time`` parameter added.

``time``
    The time slice this object is referring to. A string of the format 
    YYYYMMDDHHmm in UTC time.


URL-oriented analytics response
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The URL response is a list of analytics objects with a ``url`` parameter added. This URL
is either the URL of the actual embed or the page containing the embed, depending on
the request parameters.

