Analytics - API
===============

The analytics API makes it easy to figure out how your users are interacting
with your content.

Via the analytics API you can retrieve:

* A summary of the most media embeds on your site
* Total Loads, views and playtime
* Average playtime for videos
* Video attention histogram to see what portions of videos people are watching
* All of the above information segmented by mobile and desktop


Querying the API
----------------
The endpoints used to retrieve analytics data are:

        http://api.embed.ly/1/analytics/media/{urls,stats,sources,urldomains,sourcedomains}

``urls``
    Return a list of URLs embedded with your API key.
``stats``
    Return an hour-by-hour summary of all your embedded media.
``sources``
    Instead of returning the URLs of the embeds, return a list of URLs the
    embeds were hosted on.
``urldomains``
    Similar to ``urls``, but instead aggregate arcoss the domains of the URLs.
``sourcedomains``
    Similar to ``sources``, but instead aggregate across the domains of the
    host URLs.


Additionally, a few query parameters are required.

``start=YYYYMMDDHH``, ``end=YYYYMMDDHH``
    Required to specify the time period (in UTC) to retrieve data from. The time is a half-open
    range, so ``start=2014040100`` and ``end=2014040200`` means all of April 1st, 2014.
``key``
    Your API key. 
``filter=<url>``
    For time series requests, only include data for the specified URL.

|more| :doc:`Read about the response format<response>`
