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



