Embedly Documentation
======================

Embedly is the best way to retrieve meta data associated with a URL. We 
offer a full suite of tools that you can tailor to your needs to make
embedding simple and easy. There are a number of different ways in which you
can use Embedly, so please read through the :ref:`getting_started` section.
It should help you pick which endpoint you should use.

.. _getting_started:

Getting Started
---------------
To start using Embedly Pro you must first obtain a Pro Key. You can obtain a
key by signing up for a `pricing plan </pricing>`_.

.. NOTE::
  We suggest you start off with the `Core </pricing/core>`_ plan. It gives you
  access to analytics, phone support and up to 500,000 requests a month.

Once you have completed the registration process you will be taken to your home
dashboard, where your can find your Pro key. 

Choosing an Endpoint
--------------------
Embedly offers 3 different endpoints to choose from: :doc:`oEmbed <endpoints/1/oembed>`,
:doc:`Preview <endpoints/1/preview>` and :doc:`Objectify <endpoints/2/objectify>`. The Embedly process for retrieving
information for each URL is the same for every URL. The different endpoints
just structure the data differently so it's easier to consume and display.

Option 1: oEmbed
^^^^^^^^^^^^^^^^
The oEmbed endpoint acts much like `<http://api.embed.ly>`_, but has some extra
magic that makes it special. The biggest difference is that it allows you to
pass any URL into the system, and it returns an oEmbed response. This can be as
little as a title and description, or a full video embed. If you are automating
embedding urls, then this endpoint is for you. It's simple and Embedly already
does the work of picking the correct information for you.

|more| Read the :doc:`endpoints/1/oembed`

Option 2: Preview
^^^^^^^^^^^^^^^^^
The preview endpoint was built to allow users to customize embeds. If you are
building something similar to the Facebook status message update functionality,
then this endpoint is for you. It returns multiple images, objects and embeds
to choose from when creating an embed. 

|more| Read the :doc:`endpoints/1/preview`

Option 3: Objectify
^^^^^^^^^^^^^^^^^^^
The objectify endpoint is the kitchen sink. This endpoint will pass back
everything we know about a URL in one shot. It is not as well structured as the
previous endpoints and it is only available to supplement those with desires
that we could not imagine. Enjoy!

|more| Read the :doc:`endpoints/2/objectify`

.. _explore:

Explore
-------
To better understand the what Embedly Pro offers we built
`explore.embed.ly <http://explore.embed.ly>`_. It allows you to view example
responses in both rich and raw view for any URL. Here are a few examples and we
highly recommend referring back to Explore when you are building against Pro.

* `Foursquare <http://explore.embed.ly/preview/?mode=rich&url=http://4sq.com/f6AwgZ>`_
* `Flickr <http://explore.embed.ly/oembed/?mode=rich&url=http://flic.kr/p/9idk4k>`_
* `National Geographic <http://explore.embed.ly/preview/?mode=rich&url=http://video.nationalgeographic.com/video/player/news/culture-places-news/mexico-human-reef-vin.html>`_
* `Twitter (raw) <http://explore.embed.ly/objectify/?mode=raw&url=http://twitter.com/%23!/papajohns/status/37008575440101376>`_
* `Image <http://explore.embed.ly/preview/?mode=rich&url=http://lh6.ggpht.com/_e7zYcrT4hWQ/TVfjwun4ytI/AAAAAAAAPWI/tEAemzjGx0I/iphonecard.jpg%3Fimgmax%3D800>`_

.. _mobile:

Mobile `Beta`
-------------
We are Beta testing our mobile support for the iOS and Android platforms.

|more| Read the :doc:`mobile`

.. _libraries:

Libraries
---------
There are a number of libraries that already interface with Embedly Pro. Here
is the complete list:

* `jQuery <https://github.com/embedly/embedly-jquery>`_
* `Ruby <https://github.com/embedly/embedly-ruby>`_
* `Node.js <https://github.com/embedly/embedly-node>`_
* `Python <https://github.com/embedly/embedly-python>`_
* `PHP <https://github.com/embedly/embedly-php>`_


Authentication
--------------
Embedly Pro gives you access to the pro endpoints using simple `key`
authentication or with OAuth. 

|more| Read the :doc:`auth`


.. toctree::
    :maxdepth: 1

    contents



.. |more| raw:: html

   <span class="more"></span>
