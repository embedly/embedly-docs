Popular API
=================

Use the Popular API to retrieve the URLs with the most activity in the last day.

Example call ::

    https://api.embed.ly/1/popular?key=<key>



Example
-------
Call ::

    https://api.embed.ly/1/trending?key=xxxxxxxxxxxxxxxxxxxxxx

Reponse ::

    [{
      "url": "http://gawker.com/5985051/seattle-news-station-gets-three-people-super-high-puts-them-behind-the-wheel-to-see-how-well-they-drive",
      "score": 1
    }, {
      "url": "http://www.huffingtonpost.com/2013/02/17/advocates-push-nederland-_n_2702447.html",
      "score": 1
    }, {
      "url": "http://www.businessinsider.com/best-startups-to-watch-new-york-city-2013-2?op=1",
      "score": 1
    }]


Arguments
---------

``key``
      The :doc:`API key </api/authentication>` for your registered account.

``callback``
      JSONP callback



Response
--------

200 OK
  Response returned successfully.

400 Bad Request
  * A required parameter was not specified.

500 Server Error
  api.embed.ly is having trouble with the request. Please try again or contact us,
  s
