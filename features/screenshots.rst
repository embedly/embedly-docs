Screenshots
===========

This feature is currently in :ref:`Beta <beta>`.

This feature allows you to create a screenshot of any URL and use it to create
previews, navigation grids or anything else you can think of. This document
will give you an overview of how to utilize Screenshots.

Taking a Screenshot
-------------------
Add the query parameter ``screenshot=true`` to any API call:

  http://api.embed.ly/2/objectify?screenshot=true&url=http%3A%2F%2Farstechnica.com&key=<key>

The response will include a ``screenshot_url`` parameter, which you can freely
link to::

  {
    ...
    "screenshot_url": "http://i.embed.ly/1/image/s/718c8fe5bf17d3eedc02dada1cc845a72ee2b376_o.png?key=<key>",
    ...
  }


Sizing
------
The default screenshot is about 1024 pixels wide, but there are a few different
standard sizes that Embedly offers. You can change the size by replacing
``screenshot=<size>`` with either ``original``, ``large``, ``medium`` or
``small``. The other option is to manually replace the trailing ``_o`` in the
screenshot URL with a valid suffix:

+------------------------+---------+-----------------------------------------+-------------+
|Query Argument          |Suffix   |Size                                     |Example      |
+========================+=========+=========================================+=============+
| ``original``           | _o      | 1024 x natural page height              | `original`_ |
+------------------------+---------+-----------------------------------------+-------------+
| ``large``              | _l      | 640 x natural page height               | `large`_    |
+------------------------+---------+-----------------------------------------+-------------+
| ``medium``             | _m      | 512 x 512 (clipped to top of page)      | `medium`_   |
+------------------------+---------+-----------------------------------------+-------------+
| ``small``              | _s      | 256 x 256 (clipped to top of page)      | `small`_    |
+------------------------+---------+-----------------------------------------+-------------+

.. _original: http://s.embed.ly/1/718c8fe5bf17d3eedc02dada1cc845a72ee2b376_o.png
.. _large: http://s.embed.ly/1/718c8fe5bf17d3eedc02dada1cc845a72ee2b376_l.png
.. _medium: http://s.embed.ly/1/718c8fe5bf17d3eedc02dada1cc845a72ee2b376_m.png
.. _small: http://s.embed.ly/1/718c8fe5bf17d3eedc02dada1cc845a72ee2b376_s.png


Here is an example query selected the ``small`` screenshot::

  http://api.embed.ly/2/oembed?screenshot=small&url=http%3A%2F%2Farstechnica.com&key=<key>

Result::

  {
    ...
    "screenshot_url": "http://i.embed.ly/1/image/s/718c8fe5bf17d3eedc02dada1cc845a72ee2b376_s.png?key=<key>",
    ...
  }

Image:

.. image:: /images/screenshot_s.png
  :class: exampleimg

Processing Time
---------------
Note that in order for Embedly to take a screenshot we must first load it in
a headless browser. This means downloading all the external resources like
javascript, css and images. We then must take a rather large screenshot and
move those files around. The creation can take upwards of 5-20 seconds, and
the API call will usually return before the screenshot is available. An
appropriately sized placeholder image will be served until the screenshot is
actually available. Here is an example:

.. image:: /images/processing_s.png
  :class: exampleimg

