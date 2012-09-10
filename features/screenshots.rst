Screenshots
===========

This feature is currently in :ref:`Beta <beta>`.

Create a screenshot of your embed URL and use it to create previews,
navigation grids or anything else you can think of.

Taking a Screenshot
-------------------
Add the query parameter ``screenshot=true`` to your objectify API call:

    http://api.embed.ly/2/objectify?url=http://arstechnica.com&screenshot=true&key=<key>

The response will include a ``screenshot_url`` parameter, which you can
freely link to::

    {
       ...
       "screenshot_url": "http://s.embed.ly/1/718c8fe5bf17d3eedc02dada1cc845a72ee2b376_o.png",
       ...
    }

Note that the creation of the screenshot can take upwards of 5-20 seconds, and
the API call will usually return before the screenshot is available. A
placeholder image will be returned until the screenshot is actually available.

Sizing
------

The default screenshot is about 1024 pixels wide. Other sizes can be selected
by replacing the trailing ``_o`` in the screenshot URL:

====== ====
Suffix Size
------ ----
_o     1024 x natural page height
_l     640 x natural page height
_m     512 x 512 (clipped to top of page)
_s     256 x 256 (clipped to top of page)
====== ====

Here's the above screenshot at two different sizes:

http://s.embed.ly/1/718c8fe5bf17d3eedc02dada1cc845a72ee2b376_l.png
http://s.embed.ly/1/718c8fe5bf17d3eedc02dada1cc845a72ee2b376_m.png
