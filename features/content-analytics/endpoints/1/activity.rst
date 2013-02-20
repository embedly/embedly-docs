User Activity API
=================

Use the Activity API to get the recent activity of a user, retrieving actions going back one week.
You must provider either the cid or uid.

Example call ::

    https://api.embed.ly/1/activity?uid=<uid>&key=<key>
    https://api.embed.ly/1/activity?cid=<cid>&key=<key>



Example
-------
Call ::

    https://api.embed.ly/1/activity?uid=ec9876f768814afb9000729d81d95f05&key=xxxxxxxxxxxxxxxxxxxxxx

Response ::

    [{
      "action": "view",
      "timestamp": 1361283003,
      "duration": 20,
      "url": "http://www.nytimes.com/2013/02/19/technology/chinas-army-is-seen-as-tied-to-hacking-against-us.html?pagewanted=all"
    }, {
      "action": "view",
      "timestamp": 1361283055,
      "duration": 20,
      "url": "http://techcrunch.com/2013/02/19/yandex-the-google-of-russia-beats-estimates-on-sales-of-290m-as-search-volume-grows-but-domestic-share-stagnates-at-60-5/"
    }, {
      "action": "view",
      "timestamp": 1361284084,
      "duration": 20,
      "url": "http://www.entrepreneur.com/article/225795"
    }, {
      "action": "view",
      "timestamp": 1361289583,
      "duration": 20,
      "url": "http://thenextweb.com/insider/2013/02/19/fifa-confirms-goal-line-technology-will-be-used-at-the-2014-world-cup-in-brazil/"
    }]


Arguments
---------

``key`` (required)
      The :doc:`API key </api/authentication>` for your registered account.

``uid``
      The user id is a browser specific identifier to represent a user session.

``cid``
      The client id is a unique identifier that represents a user.

``callback``
      JSONP callback

Response
--------

``action``
    The type of activity the user does with the URL i.e. share, watch, view.

``timestamp``
    The time the action began, as a UNIX timestamp.

``duration``
    The number of seconds of the action, if it applies.  For instance, watch and
    view can include a duration.

``url``
    The expanded url the action occured on.


Error Codes
-----------

400 Bad Request
  A required parameter was not specified.

500 Server Error
  api.embed.ly is having trouble with the request. Please try again or contact us,
  support@embed.ly
