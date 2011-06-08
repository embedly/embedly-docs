Objectify API
=============

This endpoint is the kitchen sink of Embedly's offerings. It pretty much dumps
everything we know about a URL out so you can use as you like. If you don't
need this much information we suggest using :doc:`../1/oembed` or
:doc:`../1/preview`.

Example Calls

``http://api.embed.ly/2/objectify?key=:key&url=:url&maxwidth=:maxwidth&maxheight=:maxheight&format=:format&callback=:callback``

``http://api.embed.ly/2/objectify?key=:key&urls=:url1,:url2,:url3&maxwidth=:maxwidth&maxheight=:maxheight&format=:format&callback=:callback``

Response Explorer
-----------------
:doc:`Embedly Explore <../../explore>` can be used to get a better handle on
what this API returns. Try these examples:

* `Foursquare <http://embed.ly/docs/explore/objectify/?url=http://foursquare.com/venue/49547>`_
* `Tumblr <http://embed.ly/docs/explore/objectify/?url=http://doctorswithoutborders.tumblr.com/post/820310165/tune-in-tonight-starved-for-attention-on-pbs-need-to>`_
* `YouTube <http://embed.ly/docs/explore/objectify/?url=http://www.youtube.com/watch%3Fv%3D-oElH6M_5i4>`_

Query Arguments
----------------
As specified in the :doc:`Query Arguments documentation<../arguments>`

Example Response::

    {
        'description': 'An ode to female programmers.\r\n\r\nEP Available on iTunes!\r\nhttp://bit.ly/4sebjr\r\nFind more great music @ http://dalechase.com  http://twitter.com/daleochase\r\nSong lyrics here: http://bit.ly/7eOilA',
        'embeds': [],
        'entry': {},
        'favicon_url': 'http://s.ytimg.com/yt/favicon-vflZlzSbU.ico',
        'images': [{'height': 360,
                    'url': 'http://i3.ytimg.com/vi/B-m6JDYRFvk/hqdefault.jpg',
                    'width': 480}],
        'meta': {'canonical': 'http://www.youtube.com/watch?v=B-m6JDYRFvk',
                 'description': 'An ode to female programmers.<br><br>EP Available on iTunes!<br>http://bit.ly/4sebjr<br>Find more great music @ http://dalechase.com  http://twitter.com/daleochase<br>Song lyric...',
                 'icon': 'http://s.ytimg.com/yt/favicon-vflZlzSbU.ico',
                 'keywords': ['hip hop',
                              'rap',
                              'music',
                              'female programmers',
                              'computer',
                              'programming',
                              'dale chase'],
                 'open_search': [{'href': 'http://www.youtube.com/opensearch?locale=en_US',
                                  'rel': 'search',
                                  'tag': 'link',
                                  'title': 'YouTube Video Search',
                                  'type': 'application/opensearchdescription+xml'}],
                 'shortcut_icon': 'http://s.ytimg.com/yt/favicon-vflZlzSbU.ico',
                 'title': 'Coder Girl'},
        'oembed': {'author_name': 'dalechase',
                   'author_url': 'http://www.youtube.com/user/dalechase',
                   'description': 'An ode to female programmers.\r\n\r\nEP Available on iTunes!\r\nhttp://bit.ly/4sebjr\r\nFind more great music @ http://dalechase.com  http://twitter.com/daleochase\r\nSong lyrics here: http://bit.ly/7eOilA',
                   'height': 360,
                   'html': '<object width="640" height="360"><param name="movie" value="http://www.youtube.com/v/B-m6JDYRFvk?fs=1"><param name="allowFullScreen" value="true"><param name="allowscriptaccess" value="always"><embed src="http://www.youtube.com/v/B-m6JDYRFvk?fs=1" type="application/x-shockwave-flash" width="640" height="360" allowscriptaccess="always" allowfullscreen="true"></embed></object>',
                   'provider_name': 'YouTube',
                   'provider_url': 'http://www.youtube.com/',
                   'thumbnail_height': 360,
                   'thumbnail_url': 'http://i3.ytimg.com/vi/B-m6JDYRFvk/hqdefault.jpg',
                   'thumbnail_width': 480,
                   'title': 'Coder Girl',
                   'type': 'video',
                   'url': 'http://www.youtube.com/watch?v=B-m6JDYRFvk',
                   'width': 640},
        'open_graph': {'canonical': 'http://www.youtube.com/watch?v=B-m6JDYRFvk',
                       'description': 'An ode to female programmers.<br><br>EP Available on iTunes!<br>http://bit.ly/4sebjr<br>Find more great music @ http://dalechase.com  http://twitter.com/daleochase<br>Song lyric...',
                       'icon': 'http://s.ytimg.com/yt/favicon-vflZlzSbU.ico',
                       'keywords': ['hip hop',
                                    'rap',
                                    'music',
                                    'female programmers',
                                    'computer',
                                    'programming',
                                    'dale chase'],
                       'open_search': [{'href': 'http://www.youtube.com/opensearch?locale=en_US',
                                        'rel': 'search',
                                        'tag': 'link',
                                        'title': 'YouTube Video Search',
                                        'type': 'application/opensearchdescription+xml'}],
                       'shortcut_icon': 'http://s.ytimg.com/yt/favicon-vflZlzSbU.ico',
                       'title': 'Coder Girl'},
        'original_url': 'http://bit.ly/detr0u',
        'payload': {'video': {'apiVersion': '2.0',
                               'data': {'accessControl': {'comment': 'allowed',
                                                          'commentVote': 'allowed',
                                                          'embed': 'allowed',
                                                          'list': 'allowed',
                                                          'rate': 'allowed',
                                                          'syndicate': 'allowed',
                                                          'videoRespond': 'allowed'},
                                        'category': 'Music',
                                        'commentCount': 348,
                                        'content': {'1': 'rtsp://v3.cache1.c.youtube.com/CiILENy73wIaGQn5FhE2JLrpBxMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp',
                                                    '5': 'http://www.youtube.com/v/B-m6JDYRFvk?f=videos&app=youtube_gdata',
                                                    '6': 'rtsp://v5.cache4.c.youtube.com/CiILENy73wIaGQn5FhE2JLrpBxMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp'},
                                        'description': 'An ode to female programmers.\r\n\r\nEP Available on iTunes!\r\nhttp://bit.ly/4sebjr\r\nFind more great music @ http://dalechase.com  http://twitter.com/daleochase\r\nSong lyrics here: http://bit.ly/7eOilA',
                                        'duration': 184,
                                        'favoriteCount': 1709,
                                        'geoCoordinates': {'latitude': 40.743485405490695,
                                                           'longitude': -73.934726715087891},
                                        'id': 'B-m6JDYRFvk',
                                        'likeCount': '1134',
                                        'player': {'default': 'http://www.youtube.com/watch?v=B-m6JDYRFvk&feature=youtube_gdata_player'},
                                        'rating': 4.7599999999999998,
                                        'ratingCount': 1207,
                                        'recorded': '2009-07-06',
                                        'tags': ['hip hop',
                                                 'rap',
                                                 'music',
                                                 'female programmers',
                                                 'computer',
                                                 'programming',
                                                 'dale chase'],
                                        'thumbnail': {'hqDefault': 'http://i.ytimg.com/vi/B-m6JDYRFvk/hqdefault.jpg',
                                                      'sqDefault': 'http://i.ytimg.com/vi/B-m6JDYRFvk/default.jpg'},
                                        'title': 'Coder Girl',
                                        'updated': '2010-11-15T20:05:35.000Z',
                                        'uploaded': '2009-07-12T21:24:52.000Z',
                                        'uploader': 'dalechase',
                                        'viewCount': 166474}}},
        'place': {},
        'provider_display': 'www.youtube.com',
        'provider_name': 'YouTube',
        'provider_url': 'http://www.youtube.com/',
        'title': 'Coder Girl',
        'type': 'html',
        'safe' : true,
        'url': 'http://www.youtube.com/watch?v=B-m6JDYRFvk'
    }



Response
--------
``original_url``
    The url that was passed into Embedly. This will be something like a bit.ly
    shortened link or if there is no redirect it will be the same as the
    ``url`` attribute.

``url``
    The effective url of the request. Whatever Embedly found at the end of any
    redirects.

``type``
    See :ref:`response-types` 

``safe``
    See :ref:`safebrowse`.

``provider_name``
    The name of the resource provider.

``provider_url``
    The url of the resource provider.

``provider_display``
    For display purposes we ``include provider_display``. It's the subdomain,
    hostname and public suffix of the provider.

``favicon_url``
    The url of the favicon.

``title``
    The title of the resource. It's picked in the following order:

    * The RSS entry's title
    * The oEmbed title
    * The open graph title
    * The ``meta`` title tag
    * The ``title`` attribute in the ``head`` element

``description``
    The description of the resource. It's picked in the following order:
    
    * The RSS entry's summary
    * The oEmbed description
    * The open graph description
    * The ``meta`` description tag
    * An excerpt pulled programmaticly by Embedly

``oembed``
    The oEmbed response for a url. More information on the :doc:`../1/oembed`.
    
``meta``
    The meta attributes of the document. Possible attributes include:
    
    * ``content_type``
    * ``author``
    * ``title``
    * ``keywords``
    * ``description``
    * ``rss``
    * ``oembeds``
    * ``open_search``
    * ``shortcut_icon``
    * ``icon``
    * ``apple_touch_icon``
    * ``generator``
    * ``shortlink``
    * ``canonical``
    * ``medium``
    * ``video_src``
    * ``video_height``
    * ``video_width``
    * ``video_type``
    * ``image_src``
    * ``image_height``
    * ``image_width``
    * ``audio_src``
    * ``audio_type``
    * ``audio_title``
    * ``audio_artist``
    * ``audio_album``

``open_graph``
    The Open Graph attributes of the document. Possible attributes include:
 
    * ``title``
    * ``type``
    * ``site_name``
    * ``description``
    * ``url``
    * ``image``
    * ``image_width``
    * ``image_height``
    * ``latitude``
    * ``longitude``
    * ``street_address``
    * ``locality``
    * ``region``
    * ``postal_code``
    * ``country_name``
    * ``email``
    * ``phone_number``
    * ``fax_number``
    * ``upc``
    * ``isbn``

``entry``
    The RSS entry for the url

``images``
    A list of, at most, 5 images that Embedly found while processing the url.
    They are listed in the following order:
    
    * If the oEmbed type is ``photo`` the url of the oEmbed object
    * The ``thubnail_url`` of the oEmbed object if the oEmbed type is not
      ``photo``
    * The Open Graph ``image`` property
    * The ``meta`` ``image_src`` tag.
    
    The rest of the list is filled in by images that Embedly found within the 
    html. They are ranked by size and position on the page.

``place``
    See :ref:`place`

``embeds``
    A list of embeds that Embedly found in the document.


Objectify Examples
------------------
Some sample usages of the API.

API Example Calls
^^^^^^^^^^^^^^^^^
Foursquare Venue::

    `http://api.embed.ly/2/objectify?key=:key&url=http://foursquare.com/venue/49547`

Posterous blog post::

    `http://api.embed.ly/2/objectify?key=:key&url=http://sachin.posterous.com/writing-rails-code-makes-me-miss-writing-in-o`
