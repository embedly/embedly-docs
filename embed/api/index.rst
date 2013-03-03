Embed - API
===========
``Embed`` offers a REST API endpoint: :doc:`oEmbed <1/oembed>`,
that takes in a URL and passes back data about it. 

The Endpoint accepts a set of :doc:`query arguments <arguments>`.

oEmbed
------
The oEmbed endpoint follows the `oEmbed Spec <http://oembed.com>`_ and is the
easiest endpoint to integrate into any site. It returns the title, description,
thumbnail, and embed code for any URL. If you are automating embedding URLs,
then this endpoint is for you. Embedly already does the work of picking the
correct information for you and your users.

|more| Read the :doc:`1/oembed`

Arguments
---------
There are many query arguments that allow you to customize the ``Embed`` API responses.
This includes arguments to resize embed or even adjust the number words in a
description field.

|more| Check out the :doc:`arguments`

Authentication
--------------
All endpoints offer a key based or oAuth for authentication.

|more| Check out the :doc:`authentication`

