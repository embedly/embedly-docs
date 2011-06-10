
Getting Started with Embedly
============================
Let's crawl before we walk, and then we'll "run".

What is an Embed?
-----------------
An embed is any piece of HTML that can live on any page. Images, videos, and
rich media are all embeds. Embeds have two main qualities that are
advantageous for any site:

* Users will stay on a page %250 percent longer if an embed is present on the
  page
* Embeds give users a preview of the link, allowing them to make better choices
  about what sites they visit.

Facebook taught 500+ million users what to expect when they share a link; a
preview should be generated. Every site should have this functionality and
Embedly makes that easy.

Overview
--------
Embedly is a RESTful API that takes a URL and returns embeddable metadata.
Every site on the web does some sort of embedding of videos, images or other
rich media. Embedly makes it easy by allowing users to just share URLs and not
worrying about finding or using the embed code.

For example, if you are sharing a Vimeo video with your friends, you will
probably grab the link and post "check this out http://vimeo.com/18150336".

.. image:: http://embed.ly/static/images/simple.jpg

It's our job as a web developers to keep the user on the site they are on and
embed that video inline. To accomplish this, all a developer needs to do is make
an HTTP request to Embedly to will that url as a query argument::

    http://api.embed.ly/1/oembed?url=http%3A%2F%2Fvimeo.com%2F18150336

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

We can now embed that link by appending this html to the post. This creates a
rich experience for users.

.. image:: http://embed.ly/static/images/simple_embed.jpg

This is just one example of how one can use Embedly. With over 215 different
providers and more added weekly; Embedly is the apex for embedding any
url.
