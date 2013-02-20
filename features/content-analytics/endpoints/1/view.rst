User View API
=================

Use the View API to measure duration of views by your users.  Trigger it when a
user views a url.  Since this API measures the time a URL is viewed, it must be
triggered multiple times.  The best practice for using this API is to call it
when an article is first viewed, setting duration=0 and setting a timer.  Update
the time by calling the API, and submitting the new elapsed time in
duration=<elapsed time>.  Finally upon close, submit the final elapsed time.
During the intermediate polling, it is best to double the period of calls, i.e.
1 second, 2 seconds, 4 seconds, 8 seconds.  Each unique view must have a unique SID.

Example call ::

    https://api.embed.ly/1/view?uid=<uid>&key=<key>&url=<url>&duration=<duration>&sid=<sid>



Example
-------
Call ::

    https://api.embed.ly/1/view?key=xxxxxxxxxxxxxxxxxxxxxx&uid=ec9876f768814afb9000729d81d95f05&url=www.google.com&sid=220fhi2fhf23r&duration=1

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

``duration``
      How long the user has been viewing the embed.  This is optional, if left
      out it defaults to 0.

``sid``
      A unique identifier for the specific view

``callback``
      JSONP callback



Response
--------

``error``
        0 if the call was successful.


Error Codes
-----------

400 Bad Request
  * A required parameter was not specified.

500 Server Error
  api.embed.ly is having trouble with the request. Please try again or contact us,
  support@embed.ly
