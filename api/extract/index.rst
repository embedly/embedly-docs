Extract
=======

``Extract`` allows users to dive into the content on your site and beyond.
In this API we allow developers to extract article text, topics,
and retrieve more meta-data about articles, blog posts, and stories.

API
---
The Extract endpoint was built to allow users to retrieve more information
about articles and blog posts. To get started, view the documentation for the
Extract endpoint. This will get you making API calls in no time.

|more| Check out the :doc:`Extract API <endpoints/1/extract>`

Tutorials
---------
Check out some of our tutorials on using ``Extract`` in your social networking
site, search engine, or mobile application.

|more| Walk through the `Tutorials </docs/tutorials>`_

Arguments
---------
There are many query arguments that allow you to customize the ``Extract`` API responses.
This includes arguments to resize embed or even adjust the number words in a
description field.

|more| Check out the :doc:`arguments`

Authentication
--------------
All endpoints offer a key based or oAuth for authentication.

|more| Check out the :doc:`authentication`


Features
--------
These are the features of the ``Extract`` product and its API endpoints.

:doc:`Article Extraction <features/article>`
""""""""""""""""""""""""""""""""""""""""""""

Reading on the web has changed drastically over the past few years.
Readability, Pocket and Instapaper allow users to take an article and read it
later in a nice, clean interface without the cruft of site markup or ads.
Embedly allows developers to grab the title, date, author and content of the
article out of a page and create a clean interface for reading.

|more| :doc:`Learn more <features/article>`


:doc:`Images and Dominant Colors <features/images>`
"""""""""""""""""""""""""""""""""""""""""""""""""""
Get a list of Images parsed from a URL, this also includes attributes like
dominant RGB colors and entropy for all images.

|more| :doc:`Learn more <features/images>`


:doc:`Entities/Topics <features/entities>`
""""""""""""""""""""""""""""""""""""""""""
Retrieve a list of the topics and entities from any blog post,
story, or article link sent through the API.

|more| :doc:`Learn more <features/entities>`

:doc:`Keywords <features/keywords>`
"""""""""""""""""""""""""""""""""""
Provides a list of ranked keywords extracted from an article, blog,
or story. This is different than the meta-keywords, which sometimes
are misleading.

|more| :doc:`Learn more <features/keywords>`


:doc:`Related Articles <features/related>`
""""""""""""""""""""""""""""""""""""""""""
There are many related articles and blog posts written on the web each day.
With ``Extract`` we do all the work to send back a list of articles that relate
to the story link you send to the API.

|more| :doc:`Learn more <features/related>`


Security and Extra
------------------

These security features are available at an extra cost with the ``Extract`` product.

:doc:`Frame <features/frame>`
"""""""""""""""""""""""""""""
For sites that require XSS protection, by adding a query argument to your API calls
the ``Extract`` API endpoints will wrap all embeds in a hosted IFrame for any
embed.

|more| :doc:`Learn more <features/ssl>`

:doc:`SSL <features/ssl>`
"""""""""""""""""""""""""
For sites that require SSL, by adding a query argument to your API calls
the ``Extract`` API endpoints will send back an SSL hosted IFrame for any
embed.

|more| :doc:`Learn more <features/ssl>`

