Analytics - API
===============
The Analytics API makes it easy to figure out how your users are interacting
with your content.

Via the Analytics API you can retrieve:

* A summary of the most media embeds on your site
* Total Loads, views and playtime
* Average playtime for videos
* Video attention histogram to see what portions of videos people are watching

Querying Parameters
-------------------
There are three required query parameters for all endpoints, they are as follows:

``start=YYYYMMDDHH``, ``end=YYYYMMDDHH``
    Required to specify the time period (in UTC) to retrieve data from. The time is a half-open
    range, so ``start=2014040100`` and ``end=2014040200`` means all of April 1st, 2014.
``key``
    Your API key.
``filter=<url>``
    For time series requests, only include data for the specified URL.


.. _analytics-media-stats:

Stats
-----
The ``stats`` endpoints return an hourly time series of data about embeds. If
you would like to graph video loads, views or plays this is the set of APIs for
you.


Query Parameters
""""""""""""""""
In additional to the query parameters above these parameters can also be used.

``combine``
  If you wish to combine the results for into a single result, you can use
  ``combine=true`` this will return only one result in the time series with the
  combined data.

``realtime``
  For the ``of/url`` method you may also use the realtime argument as
  ``realtime=true`` this will return the last 90 minutes of data as a time
  series by minute. When using ``realtime``, ``start`` and ``end`` are not needed.

Methods
"""""""
Stats consist of three methods to obtain time series data for your embeds.

.. _analytics-media-stats-stats:

``stats``
^^^^^^^^^
Retrieve the stats for your entire site over a period of time.
::

  http://api.embed.ly/1/analytics/media/stats

.. _analytics-media-stats-of:

``of/url``
^^^^^^^^^^
Retrieve the stats for a particular Embedded URL, across your entire site. For
example, http://vimeo.com/18150336.
::

  http://api.embed.ly/1/analytics/media/of/url/{url}/stats

If this embed appears on multiple pages, it will combine the data into one time
series. If you wish to only retrieve the data for one page you can add a
filter::

  http://api.embed.ly/1/analytics/media/of/url/{url}/stats?filter={page_url}

Note that all URL arguments must be URL encoded, so an example URL would look
like::

  http://api.embed.ly/1/analytics/media/of/url/http%3A%2F%2Fvimeo.com%2F18150336/stats?filter=http%3A%2F%2Fexample.com%2Fpath%2Fto%2Fvideo


.. _analytics-media-stats-on:

``on/url``
^^^^^^^^^^
Retrieve the stats for a particular URL on your domain. For example,
http://example.com/path/to/video.
::

  http://api.embed.ly/1/analytics/media/on/url/{url}/stats

If there are multiple embeds on a page, it will combine the data into one time
series. If you wish to only retrieve the data for one embed you can add a
filter::

  http://api.embed.ly/1/analytics/media/on/url/{url}/stats?filter={embed_url}

Note that all URL arguments must be URL encoded, so an example URL would look
like::

  http://api.embed.ly/1/analytics/media/on/url/http%3A%2F%2Fexample.com%2Fpath%2Fto%2Fvideo/stats?filter=http%3A%2F%2Fvimeo.com%2F18150336

Response
""""""""
Time series data has the following response format::

  [
    {
      "time": "201409090234"
      "media": {
        "total_playtime": 12212,
        "average_playtime": 56,
        "duration": 120,
        "watched": [
          56, 56, 56, 56, 56, 43, 43, 43, 43, 43, 43, 43,
          34, 34, 34, 34, 20, 20, 20, 20, 20, 20, 20, 17,
          13
        ]
      },
      "unique": {
        "load": 120,
        "view": 100,
        "hover": 80,
        "play": 60
      },
      "total": {
        "load": 140,
        "view": 120,
        "hover": 10,
        "play": 200
      },
      "referrers": [
        {
          url: 'http://t.co/12121',
          count: 20
        },
        {
          url: 'http://facebook.com/l.php',
          count: 18
        },
        {

          url: 'http://example.com/path',
          count: 10
        }
      ],
      "audience": {
        "platform": {
          "mobile": 35.00,
          "desktop": 60.00,
          "other": 5.00
        }
      }
    }
    ...
  ]

For a an explanation of all the response fields see the
:ref:`Response Section <analytics-media-response>`.


.. _analytics-media-urls:

Urls
----
The urls endpoints are a list of all the urls associated with either a page url
or an embed URL. If you would like to obtain all the embedded URLs on a page or
see which page an Embed did the best on.

Methods
"""""""
Urls consist of three methods to obtain a listing of URLs.

.. _analytics-media-urls-urls:

``urls``
^^^^^^^^^
Retrieve all the embedded URLs on your site over a specified time span. The
results are ordered by the number of ``loads``.
::

  http://api.embed.ly/1/analytics/media/urls

.. _analytics-media-urls-of:

``of/url``
^^^^^^^^^^
Retrieve all the URL a particular embedded URL appeared on across your entire
site. For example: http://vimeo.com/18150336.
::

  http://api.embed.ly/1/analytics/media/of/url/{url}/urls

Note that all URL arguments must be URL encoded, so an example URL would look
like::

  http://api.embed.ly/1/analytics/media/on/url/http%3A%2F%2Fvimeo.com%2F18150336/urls

.. _analytics-media-urls-on:

``on/url``
^^^^^^^^^^
Retrieve all the embedded URLs that appeared on a particular URL on your
domain. For example: http://example.com/path/to/video.
::

  http://api.embed.ly/1/analytics/media/of/url/{url}/stats

Note that all URL arguments must be URL encoded, so an example URL would look
like::

  http://api.embed.ly/1/analytics/media/of/url/http%3A%2F%2Fexample.com%2Fpath%2Fto%2Fvideo/urls


Response
""""""""
Urls data has the following response format::

  [
    {
      "url": "http://example.com/path/to/video"
      "media": {
        "total_playtime": 12212,
        "average_playtime": 56,
        "duration": 120,
        "watched": [
          56, 56, 56, 56, 56, 43, 43, 43, 43, 43, 43, 43,
          34, 34, 34, 34, 20, 20, 20, 20, 20, 20, 20, 17,
          13
        ]
      },
      "unique": {
        "load": 120,
        "view": 100,
        "hover": 80,
        "play": 60
      },
      "total": {
        "load": 140,
        "view": 120,
        "hover": 10,
        "play": 200
      },
      "referrers": [
        {
          url: 'http://t.co/12121',
          count: 20
        },
        {
          url: 'http://facebook.com/l.php',
          count: 18
        },
        {

          url: 'http://example.com/path',
          count: 10
        }
      ],
      "audience": {
        "platform": {
          "mobile": 35.00,
          "desktop": 60.00,
          "other": 5.00
        }
      }
    }
    ...
  ]

For a an explanation of all the response fields see the
:ref:`Response Section <analytics-media-response>`.


.. _analytics-media-response:


Response
--------
Both Stats and Urls have many common attributes, here we have tried to explain
each field.

Fields
""""""

``time``
  Timestamp of hour in ``YYYYMMDDHHmm``. This is only for the
  :ref:`Stats <analytics-media-stats>` time series data.

``url``
  Timestamp of hour in ``YYYYMMDDHHmm``. This is only for the
  :ref:`Urls <analytics-media-urls>` listing data.

``referrers``
  A list of the top 20 referrers to your site during that time interval.


``media``
^^^^^^^^^
The media object holds all the information about the playtime of the video.

``total_playtime``
  Total playtime of media in seconds in the give hour.

``average_playtime``
  Average playtime of media in seconds in the given hour.

``duration``
  Duration of the media in seconds.

``watched``
  An array of 25 segments of the video. Each number in the array represents the
  number of times that segment was watched. This is used to build the Attention
  Heatmap.

``unique``
^^^^^^^^^^
The unique object normalizes the data to only count unique user actions.

``load``
  Unique times an embed was shown.

``view``
  Unique times an embed was in view of the user. I.e. the video was about the
  fold or the user scrolled down so the embed was on screen.

``hover``
  Unique times a user hovered over the embed.

``play``
  Unique times the media was played.

``total``
^^^^^^^^^
The total object counts the all the actions that were taken on the media.

``load``
  Total number of times an embed was shown.

``view``
  Total number times an embed was in view of the user. I.e. the video was about
  the fold or the user scrolled down so the embed was on screen.

``hover``
  Total number of times a user hovered over the embed.

``play``
  Total number of play events Embedly received from this media. Note that if a
  video buffers the play event can be shown multiple times.
