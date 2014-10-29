SSL
===

If your site runs via SSL it can often be hard to obtain the level of richness
you desire. 3rd party assets are very rarely served via HTTPS so you often have
to download all the images yourself and limit the number of providers you
support.

``Embed`` solves this problem by serving all embeds within a secure iframe.
Using ``Embed`` with SSL mitigates all of what we like to call the "red X" errors
in web browsers. You know the ones, the mixed content errors that scare users
off your site.

Add the :doc:`Display </api/display/index>` product and you can even proxy all
images via SSL, read about the
:doc:`integration </api/display/integration>`.

By default all Embedly's embeds work over HTTP and HTTPS, but if you need image
assets to be over SSL as well, keep reading.

Enabling SSL
------------
Add the query parameters ``secure=true`` to any API call::

  http://api.embed.ly/1/oembed?secure=true&frame=true&url=http%3A%2F%2Fvimeo.com%2F18150336&key=<key>&maxwidth=500

The response will look like this:

.. code-block:: json

  {
    "provider_url": "http://vimeo.com/",
    "description": "The Need 4 Speed: ....",
    "title": "Wingsuit Basejumping - The Need 4 Speed: The Art of Flight",
    "html": "<iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F18150336&src_secure=1&url=http%3A%2F%2Fvimeo.com%2F18150336&image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F117311910_1280.jpg&key=<:key>&type=text%2Fhtml&schema=vimeo" width="500" height="281" scrolling="no" frameborder="0" allowfullscreen></iframe>",
    "author_name": "Phoenix Fly",
    "height": 281,
    "width": 500,
    "thumbnail_url": "https://i.embed.ly/1/display?url=http%3A%2F%2Fb.vimeocdn.com%2Fts%2F117%2F311%2F117311910_1280.jpg&key=<:key>",
    "thumbnail_width": 1280,
    "version": "1.0",
    "provider_name": "Vimeo",
    "type": "video",
    "thumbnail_height": 720,
    "author_url": "http://vimeo.com/phoenixfly"
  }

Images
------
For proxying images over SSL you will need to have
:doc:`Display </api/display/index>`. You can add it easily through
`your dashboard <https://app.embed.ly>`_.

|more| Read the :doc:`Display integration </api/display/integration>`.

Video and Rich Media Embeds
---------------------------
Secure will also modify all video and rich embed fields passed back from the
:doc:`Embed API endpoints <../endpoints/1/oembed>`. Each embed will now be
wrapped in an HTTPS iframe::

  <iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F18150336&src_secure=1&url=http%3A%2F%2Fvimeo.com%2F18150336&image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F117311910_1280.jpg&key=<:key>&type=text%2Fhtml&schema=vimeo" width="500" height="281" scrolling="no" frameborder="0" allowfullscreen></iframe>

There are a few things to note here when dealing with HTTPS embeds, as the
implementation depends on the provider and the browser.

Secure Providers
^^^^^^^^^^^^^^^^
There are a bunch of sites that now support SSL and here are a few that serve
embeds over HTTPS, they are as follows:

  * `YouTube <http://youtube.com>`_
  * `Vimeo <http://vimeo.com>`_
  * `SoundCloud <http://soundcloud.com/>`_
  * `Wistia  <http://wistia.com>`_
  * `Slideshare  <http://slideshare.com>`_

For these embeds you will not see any mixed content warnings, and they will
show as embedded media in IE. We are actively working on adding more
secure providers.

Insecure Providers
^^^^^^^^^^^^^^^^^^
Other `providers </providers>`_ falls in this category. In
order to have the best of both worlds, Embedly will still serve the insecure
content within a secure iframe. This will cause the mild security warning that
you see on most HTTPS sites that serve embeds, like Twitter.

.. image:: /images/twitter_insecure.png
  :class: exampleimg

This works for Chrome, Firefox and Safari. If you wish to avoid these warnings,
use only the providers listed in the secure providers section.

Internet Explorer
^^^^^^^^^^^^^^^^^
IE has the strictest warning when dealing with HTTPS content, if you haven't
seen it it looks like this:

.. image:: /images/https_warning_in_IE.jpg
  :class: exampleimg

The user must click 'yes' before proceeding to the site. To get around this,
Embedly will switch out the embed with a secure representation. It's just the
thumbnail with a play button. When the user clicks that giant play button, they
are taken to the embed's URL.
