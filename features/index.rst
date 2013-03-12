Features
========

Features are add-on's to Embedly's existing functionality. They are all
currently in :ref:`Beta <beta>` and must be enabled for your account manually
by the Embedly team . You can read more about our Beta Program
:ref:`here <beta>`.

Overview
--------
Here is a brief overview of the current features in Beta.

:doc:`XSS Protection <frame>`

  Embeds are notoriously insecure in that you are allowing another developer
  to put content on your site. If that site is hacked or has a vulnerability,
  it can affect your site as well. The best way to avoid this is to serve the 
  embedded content from a trusted domain. With XSS Protection, Embedly will 
  host an iframe of the embed on our own servers. :doc:`Learn more <frame>`


:doc:`Image Proxy <image/index>`

  Images can come in all shapes and sizes. While bigger images are great, if
  you are using them as thumbnails, page load time can suffer drastically while
  waiting for large images to download. For layout purposes you also may want
  to crop images so they fit into an area of fixed width and height. Embedly
  has an Image Proxy that allows you to crop and resize images on the fly to
  get the look and performance you desire. :doc:`Learn more <image/index>`


:doc:`Screenshots <screenshots>`

  Sometimes the image pulled from a page just isn't good enough, so you may
  want to show a screenshot of the rendered page instead. In the case of
  search, you may want to show the user what the page looks like before they
  visit it. Embedly allows you to add a screenshot of any url to your response.
  :doc:`Learn more <screenshots>`


:doc:`SSL <ssl>`

  HTTPS connections are becoming more and more prevalent as privacy and
  security concerns increase. Very few sites, however, serve images or embeds
  over SSL. Embedly has built a solution to serve embedded content over a
  secure HTTPS connection. :doc:`Learn more <ssl>`


:doc:`Article Extraction <article>`

  Reading on the web has changed drastically over the past few years.
  Readability, Pocket and Instapaper allow users to take an article and read it
  later in a nice, clean interface without the cruft of site markup or ads.
  Embedly allows developers to grab the title, date, author and content of the
  article out of a page and create a clean interface for reading.
  :doc:`Learn more <article>`


.. _beta:

Beta
----
Beta features are generally the product of common, recurring requests from a 
large number of developers using Embedly. We like to release them early and
often to get feedback. There are a few things that we would like to add as a
word of caution.

Bugs

  There will be some, it's just in the nature of beta features. We ask that you
  report everything to `support@embed.ly <mailto:support@embed.ly>`_.

Pricing

  We generally haven't figure this out yet. It's hard to know what something
  costs us before we see what traffic patterns look like in the wild. When they
  graduate to first class features, we will notify users of the pricing
  structure.

If you would like to try any of these features they need to be manually turned
on by one of our support staff. You can send a brief email to `support@embed.ly
<mailto:support@embed.ly>`_ with your username and the feature you would like
added.

We also require that you are on some sort of paid plan, as these features will
not be added to the free tier.
