Dominant Colors
===============

This feature is currently in :ref:`Beta <beta>`.

This feature gives the API user more metadata about images the images returned
by an Embedly API call. In addition to the image height, width and file size
normally returned by the API, a measure of image entropy and a list of
dominant RGB color values from each image are also returned.

Image Entropy
^^^^^^^^^^^^^

Image entropy can be roughly thought of as how "busy" an image is. For
example:

.. image:: ../images/colors_logo.png
  :class: exampleimg

The relatively simple Embedly logo has a fairly low entropy of about 1.73.
http://embed.ly/static/images/docs/colors_logo.png low entropy 1.73

.. image:: ../images/colors_office.png
  :class: exampleimg

This picture of a wall in the Embedly office has a entropy of 6.08.
http://embed.ly/static/images/docs/colors_office.png higher entropy 6.08

Image entropy can be useful in programmatically choosing the type of image
to display. For instance, if an API user wants to display photographic type
images, but not logos, they can ignore images with lower entropy.

Dominant Colors
^^^^^^^^^^^^^^^

The dominant colors of an image are those colors that make up the majority of
an image. For example:

.. image:: ../images/colors_logo.png
  :class: exampleimg

The Embedly logo is made up of black from the text, white from
the background, and two different blues as a result of the lighting.

[47, 68, 78] 2F444E
.. image:: ../images/2f444e-swatch.png
[28, 170, 228] 1CAAE4
.. image:: ../images/1caae4-swatch.png
[7, 9, 10] 07090A
.. image:: ../images/07090a-swatch.png
[247, 251, 252] F7FBFC
.. image:: ../images/f7fbfc-swatch.png

.. image:: ../images/colors_office.png
  :class: exampleimg


This picture of a wall in the Embedly office has a more varied palette, from
the cardboard color of the coasters-turned-pinboard, to the white of the
papers pinned to the pinboard, to the gray of the wall.

[228, 221, 231] E4DDE7
.. image:: ../images/e4dde7-swatch.png
[72, 52, 37] 483425
.. image:: ../images/483425-swatch.png
[161, 150, 124] A1967C
.. image:: ../images/a1967c-swatch.png
[106, 96, 84] 6A6054
.. image:: ../images/6a6054-swatch.png
[116, 84, 33] 745421
.. image:: ../images/745421-swatch.png

Images with more diversity (and often, more entropy) are more difficult to
break down in to a few dominant colors. Currently, the Embedly API won't
return any more than 5 dominant colors for an image.

An API user might use the dominant colors to select certain images that fit
a color scheme to provide a more consistent and inviting user experience.

Usage
^^^^^

To enable this feature, simply add the API query parameter ``colors=true`` to
a normal Embedly API call. For example::

    http://api.embed.ly/1/preview?key=<key>&urls=http%3A%2F%2Fembed.ly%2Fjobs&colors=true
