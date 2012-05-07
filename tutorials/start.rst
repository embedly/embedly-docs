Getting Started with Embedly
============================

Ever shared a link on Facebook or Google+? You might enter this:

    check this out: http://vimeo.com/18150336

But your friends won't just see a link. They'll also see something like this:

.. raw:: html

    <div class='example-frame' style='width:500px;'>
    <iframe src='http://player.vimeo.com/video/18150336' width='500' height='281' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    <p style='width:500px; margin:0.5em 0; font-size:0.9em; text-align:justify; line-height:1.1; color:#333'>The Need 4 Speed: The Art of Flight A collection of shots from flights made during the 2009-2010 season by the talented group of wingsuit basejumpers, while flying the V3, Hybrid LD2/Trango rigs and testing several new V-series wingsuit prototypes around Europe. Feel the need. The need for speed!</p>
    </div>

That rich HTML preview is called an **embed.** Embeds can contain any combination of text, images, audio, and video. With Embedly's API, you can add embeds to any web page or `mobile app </docs/mobile>`_

.. Embedly's API will handle any web address, but it yields the best results with queries to our |num_providers| `providers </providers>`_.

Adding embeds to your site provides you and your users with several benefits:

* **Engagement:** Users will stay on your page *250% longer,* on average.
* **Convenience:** Users can make better choices about what sites they visit.
* **Security:** If a link is potentially malicious (e.g. a link to a phishing
  page), users will get a warning.

.. TODO: The engagement claim needs a link to the source of the claim. The security bullet point should have a link to a docs page on the subject.

Plus, it's easy. Once you understand the Embedly API, you'll be able to use it
from your server or, via JavaScript, from your users' browsers.

API Overview
------------

Embedly provides a RESTful API that takes a URL and returns information about
it in JSON format. For example, to get the embed for that Vimeo link, you might make a GET request to::

    http://api.embed.ly/1/oembed?url=http%3A%2F%2Fvimeo.com%2F18150336

(The ``/1/oembed`` part of the request tells Embedly that you want to use the
`oEmbed endpoint </docs/endpoints/1/oembed>`_.)

This will return the following JSON response::

    {
        "provider_url": "http://vimeo.com/", 
        "description": "The Need 4 Speed: The Art of Flight A collection of
        shots from flights made during the 2009-2010 season by the talented
        group of wingsuit basejumpers, while flying the V3, Hybrid LD2/Trango
        rigs and testing several new V-series wingsuit prototypes around
        Europe. Feel the need. The need for speed!", 
        "title": "Wingsuit Basejumping - The Need 4 Speed: The Art of Flight",
        "author_name": "Phoenix Fly",
        "height": 720,
        "width": 1280, 
        "html": "<iframe src=\"http://player.vimeo.com/video/18150336\"
        width=\"1280\" height=\"720\" frameborder=\"0\"></iframe>", 
        "thumbnail_width": 1280, 
        "version": "1.0", 
        "provider_name": "Vimeo", 
        "thumbnail_url": "http://b.vimeocdn.com/ts/117/311/117311910_1280.jpg",
        "type": "video", 
        "thumbnail_height": 720, 
        "author_url": "http://vimeo.com/phoenixfly"
    }

Right out of the box, the ``html`` property of the response gives you a video
player that you can add to your page's markup. You can customize the embed with
the ``title``, ``description``, and other metadata.

Ready to add Embedly to your app? `Sign up for an account </pricing>`_, then
check out our `tutorials </tutorials>`_ and `libraries </libraries>`_.