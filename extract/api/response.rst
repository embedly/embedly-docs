Extract - Response Objects
==========================
A list of some Extract response objects.


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
See the :doc:`Safe Browse <../features/safe>` feature documentation.

.. _microformats:

.. _images:

Images
------
A list of, at most, 5 images that Embedly found while processing the URL.
For a more detailed breakddown, read through the
:doc:`Images <../features/images>` feature documentation.

They are in the following format:

.. code-block:: json

    [
      {
        "caption":"The winners of the Embedly Hackathon.",
        "url":"https://lh3.googleusercontent.com/MaaMmP0N4psfPqQOUqegiz3q-SxnRd3sFn-
        XNKy92XLXo-R6dZIcFv7PkvgleeCqynGsUj4s9GUTnL__W77OpjmaTcBgis98nhudlkwsZp7-
        CNCqihX1zalDbQ",
        "height":768,
        "width":1024,
        "colors":[
          {
            "color":[14, 16, 18],
            "weight":0.311767578125
          },
          {
            "color":[238, 232, 203],
            "weight":0.131103515625
          },
          {
            "color":[213, 193, 160],
            "weight":0.103759765625
          },
          {
            "color":[44, 54, 61],
            "weight":0.0810546875
          },
          {
            "color":[138, 157, 168],
            "weight":0.07470703125
          }
        ],
        "entropy":6.568857137759403,
        "size":228025
      },
      {
        "caption":null,
        "url":"http://getfile8.posterous.com/getfile/files.posterous.com/temp-2013-02-05/
        EDhdHbCefGlloIfwtzggzsppinpxHGhtsIDugJFBbhEzzBzdjohzFDIJfAaH/kawan.JPG.thumb100.jpg",
        "height":100,
        "width":100,
        "colors":[
          {
            "color":[25, 11, 26],
            "weight":0.466064453125
          },
          {
            "color":[81, 48, 53],
            "weight":0.23046875
          },
          {
            "color":[128, 83, 71],
            "weight":0.13720703125
          },
          {
            "color":[187, 188, 180],
            "weight":0.060546875
          },
          {
            "color":[159, 121, 101],
            "weight":0.06005859375
          }
        ],
        "entropy":6.24755345469,
        "size":4768
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

You can use ``images`` in a couple of ways:

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
