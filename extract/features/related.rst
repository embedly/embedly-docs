Related Articles
================
The ``related`` object provides a list of related stories, blogs, or articles for
a URL. Embedly aggregates related media based on a few different
factors including similar topics, popularity, and time. 
You can find this data in the
:doc:`Objectify </api/endpoints/2/objectify>` endpoint.

Example
-------
An example ``related`` value
for an `Article <http://embed.ly/docs/explore/objectify?url=http%3A%2F%2Farstechnica.com%2Ftech-policy%2F2013%2F02%2Fjudge-upholds-facetime-patent-verdict-against-apple-orders-royalties-to-boot%2F>`_ would be:

.. code-block:: json

  "related": [
            {
                "description": "In today's bit of bizarre advertising news,
                Hooters just released a commercial that's a pretty blatant
                attack ad against Chipotle....", 
                "title": "Hooters' New Ad Is A Blatant Attack On Chipotle", 
                "url": "http://www.businessinsider.com/watch-hooters-chipotle-attack-ad-2013-2", 
                "thumbnail_width": 400, 
                "score": 0.6643099188804626, 
                "thumbnail_height": 300, 
                "thumbnail_url": "http://static6.businessinsider.com/image/4f8dd3176bb3f7ba1a000000/hooters-new-ad-is-a-blatant-attack-on-chipotle.jpg"
            }, 
            {
                "description": "It's no secret that nationwide chains like 
                McDonalds, In-N-Out Burger and Jamba Juice have secret menus.
                But what items are on these menus...", 
                "title": "THE MCGANGBANG?! And 10 Other Secret Menu Items", 
                "url": "http://www.huffingtonpost.com/2013/02/26/fast-food-secret-menus_n_2767401.html", 
                "thumbnail_width": 1536, 
                "score": 0.6213366985321045, 
                "thumbnail_height": 1024, 
                "thumbnail_url": "http://i.huffpost.com/gen/1011387/thumbs/o-FAST-FOOD-SECRET-MENUS-facebook.jpg"
            }, 
            {
                "description": "A Burrito Bowl and Burrito at Chipotle cost
                the same, but a Reddit user claims you get more food in the
                Bowl...", 
                "title": "How To Get Way More Food At Chipotle For The Exact Same Price", 
                "url": "http://www.businessinsider.com/more-food-in-chipotle-burrito-bowl-2013-2", 
                "thumbnail_width": 897, 
                "score": 0.5574939846992493, 
                "thumbnail_height": 673, 
                "thumbnail_url": "http://static6.businessinsider.com/image/512d0a096bb3f7107c000000/how-to-get-way-more-food-at-chipotle-for-the-exact-same-price.jpg"
            }, 
            {
                "description": "Plenty of toilets have been assaulted by Taco Bell burritos,
                but this time, a teenaged human may have been the victim. Police say...", 
                "title": "TACO HELL: Man Allegedly Assaults Teen With Burrito", 
                "url": "http://www.huffingtonpost.com/2013/02/27/erik-brown-taco-bell-burrito-assault_n_2775465.html", 
                "thumbnail_width": 1536, 
                "score": 0.5203292965888977, 
                "thumbnail_height": 2304, 
                "thumbnail_url": "http://i.huffpost.com/gen/1013049/thumbs/o-ERIK-BROWN-BURRITO-facebook.jpg"
            }
        ], 


Response
--------

``url``
    A URL to the related story, article, or blog post.

``score``
    A floating point score ranging (0-1.0) for the most related media. The closer
    related the media is, the higher the score will be.

``title``
  A title of the related media, Embedly tries to intelligently pull a title
  that more accurately portrays the real title. For example, the page title may
  be::

    'This is my blog post about Startups - Yet another blog about Startups'

  The article title would more than likely be::

    'This is my blog post about Startups'

  Embedly will use ``H1`` tags, ``hentry`` and other methods to determine the
  best title.

``description``
    The description of the related media. It's picked in the following order:

    * The rss entry's summary
    * The oEmbed description
    * The open graph description
    * The ``meta`` description tag
    * An excerpt pulled programmaticly by Embedly

``thumbnail_url`` (optional)
    A URL to a thumbnail image representing the resource.
    If this parameter is present, thumbnail_width and 
    thumbnail_height must also be present.

``thumbnail_width`` (optional)
    The width of the optional thumbnail. If this parameter is present,
    thumbnail_url and thumbnail_height must also be present.

``thumbnail_height`` (optional)
    The height of the optional thumbnail. If this parameter is present,
    thumbnail_url and thumbnail_width must also be present.