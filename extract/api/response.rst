Response Objects
================
A list of common response objects across endpoints.


.. _response-types:

Response Types
--------------
Response types are different than oEmbed types. They closely follow the mimetype
for a given resource. They are as follows:

``html``
    The most common response. The resource is an ``html`` document.

``text``
    The response is a plain ``text`` document.

``image``
    This is a static viewable ``image``.

``video``
    This is a playable ``video``.

``audio``
    This is a playable ``audio``.

``rss``
    The resource is an ``rss`` feed.

``xml``
    The resource is an ``xml`` document.

``atom``
    The resource is an ``atom`` feed.

``json``
    The resource is a ``json`` document.

``ppt``
    The resource is a PowerPoint document.

``link``
    This is a general embed that may not contain HTML.

``error``
    When accessing multiple urls at once Embedly will not throw HTTP errors as
    normal. Instead, it will return an ``error`` type response that includes the
    ``url``, ``error_message`` and ``error_code``.

.. _safebrowse:

Safe Browse
-----------
See the :doc:`Safe Browse </features/safe>` feature documentation.

.. _place:

Safe Browse
-----------
See the :doc:`Safe Browse </features/safe>` feature documentation.

Place
-----
See the :doc:`Places </features/places>` feature documentation.

.. _event:

Event
-----
See the :doc:`Events </features/places>` feature documentation.

.. _microformats:

Microformats
------------
See the :doc:`Microformats </features/places>` feature documentation.

.. _images:

Images
------
A list of, at most, 5 images that Embedly found while processing the URL. They
are in the following format:

.. code-block:: json

    [
      {
        "url": "http://i2.cdn.turner.com/cnn/dam/assets/110920105905-black-troy-davis-execution-00012107-story-top.jpg",
        "width": 640,
        "height": 360
      },{
        "url": "http://i2.cdn.turner.com/cnn/dam/assets/110922033940-bts-mcphail-execution-reaction-00004718-story-body.jpg",
        "width": 300,
        "height": 169
      },{
        "url": "http://i2.cdn.turner.com/cnn/dam/assets/110922024436-ac-macphail-mom-davis-scotus-reax-00002001-story-body.jpg",
        "width": 300,
        "height": 169
      },{
        "url": "http://i2.cdn.turner.com/cnn/dam/assets/110922024320-ac-davis-execution-denied-00025001-story-body.jpg",
        "width": 300,
        "height": 169
      },{
       "url": "http://i2.cdn.turner.com/cnn/dam/assets/110922015709-piers-troy-davis-pastor-execution-00002001-story-body.jpg",
        "width": 300,
        "height": 169
      }
    ]

Embedly looks at the following attributes of the page and then ranks and scores
the images.

    * If the oEmbed type is ``photo`` the url of the oEmbed object
    * The ``thumbnail_url`` of the oEmbed object if the oEmbed type is not
      ``photo``
    * The Open Graph ``og:image`` property
    * The ``meta`` ``image_src`` tag.
    * Any images found in the API response.
    * Images ranked and pulled from the body of the page.

The scoring system is weighted heavily toward larger images and images within
structured responses, but images in the ``head`` of the document don't always
appear first in the list. ``og:image`` and ``image_src`` are generally small
thumbnails that don't always represent what's on the page. We have found better
results when giving them higher scores, but not defaulting them to the first
image. Note that they will always appear in the results, even if we rank images
pulled from the page higher.

``images`` only appear in the :doc:`Preview </api/endpoints/1/preview>` and
:doc:`Objectify </api/endpoints/2/objectify>` endpoints, and you can use
``images`` in a couple of ways:

    * If there is no user interaction, you can just select the first image
      out of the array and display it like so:

        .. code-block:: javascript

            $('<img />').attr('src', obj.images[0].url);

    * If you're creating a Facebook-like URL selector tool, then you can
      display a list of images that a user can select from:

        .. code-block:: javascript

            var ul = $('<ul></ul>');

            $.each(obj.images, function(i, img){
                ul.append($('<li></li>').html($('<img>').attr('src', img.url)));
            )};
