APIs
====

The Embedly Products are made up several API endpoints and proxies.
The following APIs are each part of an Embedly Product and are
available for testing through our `API explorer </docs/explore>`_.


Embed
-----
The Embed product contains one API endpoint called ``oEmbed``, which is
a widely used spec that many content providers support. We have
taken this spec and opened it up to any public URL on the internet.
You can test a URL with the `oEmbed Explorer </docs/explore/oembed>`_.

|more| Read through the :doc:`embed/api/index`


Extract
-------
The Extract product contains one API endpoint called ``Extract``, which was
created to parse as much relevant information from a page specifically
entities/topics, related articles, ranked keywords, article text,
and much more. You can test a URL with the
`Extract Explorer </docs/explore/extract>`_.

|more| Read through the :doc:`extract/api/index`


Display
-------
The Display product contains a few different endpoints and mainly
serves as a proxy for image URLs. The endpoints allow you to resize,
crop, and utimately make the image fit into your layout. It also allows
secure proxying for sites behind HTTPS.

|more| Read through the :doc:`display/api/index`