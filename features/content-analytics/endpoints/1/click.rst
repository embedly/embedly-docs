User Click API
=================

Use the Click API to measure clicks by your users.  Trigger it when a user clicks a
url.

Example call ::

    https://api.embed.ly/1/click?uid=<uid>&key=<key>&url=<url>



Example
-------
Call ::

    https://api.embed.ly/1/click?uid=ec9876f768814afb9000729d81d95f05&key=xxxxxxxxxxxxxxxxxxxxxx&url=www.google.com

Response ::

    {
      "error": 0
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

``callback``
      JSONP callback



Response
--------

``error``
      0 if the call was successful

``errors``
      An array of errors, if error>0

      * ``message``
            Description of the error
      * ``parameterName``
            The parameter where there is an error

Error Codes
-----------


400 Bad Request
  * A required parameter was not specified.

500 Server Error
  api.embed.ly is having trouble with the request. Please try again or contact us,
  support@embed.ly
