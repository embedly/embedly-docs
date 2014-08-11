APIs
====
Embedly has three API's to choose from, each has a specific function. Read
these descriptions to figure out which one is right for you.


Embed
-----
The Embed API contains one API endpoint called ``oEmbed``, which is
a widely used spec that many content providers support. We have
taken this spec and opened it up to any public URL on the internet.
You can test a URL with the `oEmbed Explorer </docs/explore/oembed>`_.

|more| Read through the :doc:`embed/index`


Extract
-------
The Extract API contains one API endpoint called ``Extract``, which was
created to parse as much relevant information from a page specifically
entities/topics, related articles, ranked keywords, article text,
and much more. You can test a URL with the
`Extract Explorer </docs/explore/extract>`_.

|more| Read through the :doc:`extract/index`


Display
-------
The Display API contains a few different endpoints and mainly
serves as a proxy for image URLs. The endpoints allow you to resize,
crop, and ultimately make the image fit into your layout. It also allows
secure proxying for sites behind HTTPS.

|more| Read through the :doc:`display/index`


Tutorials
---------
To get you started, we've written a bunch of tutorials that show examples and
the code.

|more| Read through the :doc:`tutorials/index`

Libraries
---------
Instead of working directly with Embedly's API, it's often easier to use
Libraries. Embedly has a bunch for the most popular languages.

|more| Read through the :doc:`libraries`


Legacy
------
Embedly has two legacy endpoints. If you are a new user you may not use these
endpoint, but their documentation is here for those who haven't made the
transition yet.

Preview
^^^^^^^
The preview endpoint was built to allow users to customize embeds. If you are
building something similar to the Facebook status message update functionality,
then this endpoint is for you. It returns multiple images, objects, and embeds
to choose from when creating an embed.

|more| Read the :doc:`legacy/endpoints/1/preview`

Objectify
^^^^^^^^^
The objectify endpoint is the kitchen sink. This endpoint will pass back
everything we know about a URL in one shot. It is not as well structured as the
previous endpoints and it is only available to supplement those with desires
that we could not imagine. Enjoy!

|more| Read the :doc:`legacy/endpoints/2/objectify`