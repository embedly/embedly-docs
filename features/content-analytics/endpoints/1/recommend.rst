User Recommend API
==================

Use the Recommend API to find recommended articles for a given user, returned as
a list of URLs.  The API uses the recently seen articles for a user to determine
a recommendation.  If there is no activity, no articles are returned.

Example call ::

    https://api.embed.ly/1/recommend?cid=<client-id>&key=<key>


Example
-------
Call ::

https://api.embed.ly/1/recommend?uid=ec9876f768814afb9000729d81d95f05&key=xxxxxxxxxxxxxxxxxxxxxx

Response ::

    [{
      "url": "http://www.forbes.com/sites/bradthomas/2013/02/18/diversify-your-portfolio-with-the-most-o-mazing-reit-on-the-planet/",
      "score": 0.5007067918777466
    }, {
      "url": "http://seekingalpha.com/article/1200371-pfizer-increasing-income-makes-it-a-buy",
      "score": 0.37420088052749634
    }, {
      "url": "http://online.wsj.com/article/SB117735510033679362.html",
      "score": 0.3583885729312897
    }, {
      "url": "http://forumblog.org/2013/02/top-10-emerging-technologies-for-2013/",
      "score": 0.3426852524280548
    }, {
      "url": "http://readwrite.com/2013/02/11/a-real-world-mobile-strategy-cheatsheet",
      "score": 0.3320212960243225
    }, {
      "url": "http://www.nytimes.com/2013/02/16/business/economy/income-gains-after-recession-went-mostly-to-top-1.html",
      "score": 0.398129403591156
    }, {
      "url": "http://www.steamfeed.com/the-shocking-truth-about-virgins-and-your-start-up-brand/",
      "score": 0.3293555676937103
    }, {
      "url": "http://money.msn.com/top-stocks/post.aspx?post=fa18eabd-711f-4814-b3fc-8b882bdd86fc",
      "score": 0.33999890089035034
    }, {
      "url": "http://www.washingtonpost.com/business/capitalbusiness/mandiant-in-the-spotlight-as-cyber-attacks-on-companies-increase/2013/02/15/f067cb88-76d0-11e2-8f84-3e4b513b1a13_story.html",
      "score": 0.6444597244262695
    }, {
      "url": "http://blogs.wsj.com/dailyfix/2013/02/06/soccer-live-blog-united-states-vs-honduras/",
      "score": 0.33256083726882935
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
      URL associated with the recommended media

``score``
      A value to convey the strength of the recommendation.


Error Codes
-----------


200 OK
  Response returned successfully.

400 Bad Request
  * A required parameter was not specified.

500 Server Error
  api.embed.ly is having trouble with the request. Please try again or contact us,
  support@embed.ly
