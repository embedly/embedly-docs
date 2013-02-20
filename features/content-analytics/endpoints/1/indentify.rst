Identify API
=================

Associate a session cookie ID (UID) with a unique identifier that you provide
(CID). You can access all the data for a specific user, even if it spans
multiple browsers.  If you provide only a UID or CID you can retrieve the
information for that UID or CID, like what CID a UID is mapped to.

Example call ::

    https://api.embed.ly/1/identify?cid=<cid>&uid=<uid>&key=xxxxxxxx


Example
-------
Call ::

    https://api.embed.ly/1/identify?cid=siteuserx&uid=ec9876f768814afb9000729d81d95f05&key=xxxxxxxxxxxxxxxxxxxxxx


Response ::

{
  "error": 0,
  "uids": ["ec9876f768814afb9000729d81d95f05"],
  "cid": "siteuserx"
}


Arguments
---------

``key``
      The :doc:`API key </api/authentication>` for your registered account.

``uid``
      The user id is a browser specific identifier to represent a user session.
      Optional, either UID or CID must be provided.

``cid``
      The client id is a unique identifier that represents a user.
      Optional, either UID or CID must be provided.

``callback``
      JSONP callback


Response
--------

``error``
      0 if there is no error

``uids``
      An array of UIDs associated with the cid

``cid``
      The client ID as assigned in the API call. Multiple UIDs can be mapped to
      this.


Error Codes
-----------


200 OK
  Response returned successfully.

400 Bad Request
  * A required parameter was not specified.

500 Server Error
  api.embed.ly is having trouble with the request. Please try again or contact us,
  support@embed.ly
