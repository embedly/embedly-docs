User Missed API
===============

Use the Missed API to list popular articles on your site that a user has
not yet seen.  You can use this to display articles on your site or through
e-mail to increase engagement.

Example call ::

    https://api.embed.ly/1/missed?cid=<client-id>&key=<key>


Example
-------
::

https://api.embed.ly/1/missed?uid=ec9876f768814afb9000729d81d95f05&key=xxxxxxxxxxxxxxxxxxxxxx

::

[{
  "url": "http://gigaom.com/2013/02/18/how-switching-to-android-helped-me-deal-with-my-addiction-to-connectedness/"
}, {
  "url": "http://gizmodo.com/5976573/free-voice-calling-rolls-out-on-facebook-messenger-for-ios"
}, {
  "url": "http://mashable.com/2013/02/18/most-expensive-starbucks/"
}, {
  "url": "http://www.whosay.com/coco/photos/293343"
}, {
  "url": "http://www.theregister.co.uk/2013/02/19/3doodler_3d_pen/"
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
``url``
      The URL associated with a missed article


Error Codes
-----------

400 Bad Request
  * A required parameter was not specified.

500 Server Error
  api.embed.ly is having trouble with the request. Please try again or contact us,
  support@embed.ly
