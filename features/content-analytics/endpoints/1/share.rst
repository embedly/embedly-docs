User Share API
=================

Use the Share API to measure clicks by your users.  Trigger it when a user clicks a
url.

Example call ::

    https://api.embed.ly/1/share?uid=<uid>&key=<key>&url=<url>&via=<via>



Example
-------
Call ::

    https://api.embed.ly/1/share?uid=ec9876f768814afb9000729d81d95f05&key=xxxxxxxxxxxxxxxxxxxxxx&url=www.google.com&via="twitter"

Response ::

    {
      "error": 0,
      "url": "http://emb.io/RWA42N",
      "original_url": {
        "protocol": "http:",
        "port": "80",
        "host": "www.google.com",
        "hostname": "www.google.com",
        "href": "http://www.google.com/",
        "hash": null,
        "search": null,
        "query": null,
        "pathname": null,
        "domain": "google.com"
      }
    }


Arguments
---------

``key``
      The :doc:`API key </api/authentication>` for your registered account.

``uid``
      The user id is a browser specific identifier to represent a user session.

``cid``
      The client id is a unique identifier that represents a user.

``url``
      The URL to register a click for

``via``
       A descriptive string for the action. i.e. 'Facebook', 'Twitter', 'Favorite', or 'Like'

``callback``
      JSONP callback



Response
--------


Error Codes
-----------

400 Bad Request
  A required parameter was not specified.

500 Server Error
  api.embed.ly is having trouble with the request. Please try again or contact us,
  support@embed.ly
