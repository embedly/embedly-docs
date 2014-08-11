Embed
=====

The ``Embed`` API follows the `oEmbed Spec <http://oembed.com>`_ and is the
easiest endpoint to integrate into any site. It returns the title, description,
thumbnail, and embed code for any URL. If you are automating embedding URLs,
then this endpoint is for you. Embedly already does the work of picking the
correct information for you and your users.

API
---
To get started, view the documentation for the oEmbed endpoint. This will get
you making API calls in no time.

|more| Read the :doc:`endpoints/1/oembed`

Tutorials
---------
Take a look at some of our tutorials on using ``Embed`` in your blog and social
or mobile application.

|more| Walk through the :doc:`Tutorials <../tutorials/index>`

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


Features
--------
These are the features of the ``Embed`` product and its API endpoints.

:doc:`Providers <features/providers>`
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Embedly supports over 250 video, photo and rich media providers for you to
embed with. All you need to do is send us a link to any of the supported
providers and we will return embed code or image url for you to add to your
site or application.

|more| :doc:`Learn more <features/providers>`

:doc:`Mobile <features/mobile>`
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Many content providers have added support for mobile embeds, by using the
``Embed`` product, our API will automatically switch in/out the correct
embed code based on your mobile or web user agent.

|more| :doc:`Learn more <features/mobile>`


Security and Extra
------------------
These security features are available at an extra cost with the ``Embed`` product.

:doc:`Frame <features/frame>`
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
For sites that require XSS protection, by adding a query argument to your API calls
the ``Embed`` API endpoints will wrap all embeds in a hosted IFrame for any
embed.

|more| :doc:`Learn more <features/frame>`

:doc:`SSL <features/ssl>`
^^^^^^^^^^^^^^^^^^^^^^^^^
For sites that require SSL, by adding a query argument to your API calls
the ``Embed`` API endpoints will send back an SSL hosted IFrame for any
embed.

|more| :doc:`Learn more <features/ssl>`


