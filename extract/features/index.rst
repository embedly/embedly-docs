Features
========

These are the features of the ``Extract`` product and its API endpoints.

Overview
--------

:doc:`Article Extraction <article>`

  Reading on the web has changed drastically over the past few years.
  Readability, Pocket and Instapaper allow users to take an article and read it
  later in a nice, clean interface without the cruft of site markup or ads.
  Embedly allows developers to grab the title, date, author and content of the
  article out of a page and create a clean interface for reading.
  
  |more| :doc:`Learn more <article>`


:doc:`Images and Dominant Colors <images>`

  Get a list of Images parsed from a URL, this also includes attributes like
  dominant RGB colors and entropy for all images.

  |more| :doc:`Learn more <images>`  


:doc:`Entities/Topics <entities>`

  Retrieve a list of the topics and entities from any blog post,
  story, or article link sent through the API.

  |more| :doc:`Learn more <entities>`

:doc:`Keywords <keywords>`

  Provides a list of ranked keywords extracted from an article, blog,
  or story. This is different than the meta-keywords, which sometimes 
  are misleading.

  |more| :doc:`Learn more <keywords>`


:doc:`Related Articles <related>`

  There are many related articles and blog posts written on the web each day.
  With ``Extract`` we do all the work to send back a list of articles that relate
  to the story link you send to the API.

  |more| :doc:`Learn more <related>`


Security and Extra
------------------

These security features are available at an extra cost with the ``Extract`` product.

:doc:`Frame <frame>`

  For sites that require XSS protection, by adding a query argument to your API calls
  the ``Extract`` API endpoints will wrap all embeds in a hosted IFrame for any
  embed.

  |more| :doc:`Learn more <ssl>`

:doc:`SSL <ssl>`

  For sites that require SSL, by adding a query argument to your API calls
  the ``Extract`` API endpoints will send back an SSL hosted IFrame for any
  embed.
  
  |more| :doc:`Learn more <ssl>`
