.. _embed_frame:

Embedly's Iframe
================
Embedly wraps every embed we serve inside a lightweight iframe that is hosted
on a global CDN.  By doing this we have a lot more control over the Embed
experience and can offer our customers the following.

Smart SSL Support
  If you notice the iframe src begins with // instead of http:// or https://.
  This protocolless URL takes on the protocol of the parent page. Based on
  the  protocol, Embedly will render the SSL version of the embed or the
  regular old http version.

Mobile Support
  Sadly a few players still only serve flash players. Instead of showing a big
  ugly blank box, Embedly will replace the media with a placeholder image and
  a play button. Allowing the user to visit the media if they wish and creating
  a better user experience.

Javascript Integration
  For a number of providers include YouTube, Vimeo and Soundcloud developers
  can programatically control the embed embeds. This includes play, pause, seek
  and listing to events like ended.

Analytics
  Embeds increase engagment, we all know that, but to improve we need to
  measure. Using this frame Embedly can measure impressions, hovers and views
  of all the Embeds on your network. Via our integration the the underlying
  Player APIs Embedly can also measure plays and average playtime.

XSS Protection
  Cross-site scripting (XSS) protection is really as simple as putting every
  embed in an iframe. Nothing in the child frame has access to the containing
  frame, so your site is protected from malicious embeds.

  There is a disclaimer here, that Embedly hand curates the list of sites that
  we allow embeds from. We have tested them all and one can assume that they
  are trusted sources. This only protects you if something on the providers
  side goes wrong. They may get "hacked", have a bad push or any number of
  things that could effect their embed. We have never had a report of this in
  the past, but developers should sleep better with this in place.

How it Works
------------
Every video and rich embed is wrapped in an Embedly iframe and served via a
global CDN. For example, a normal Vimeo embed looks like this::

  <iframe src="//player.vimeo.com/video/18150336" width="1280" height="720"
    webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

And the Embedly version looks like this::

  <iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?
    src=http%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F18150336&src_secure=1&
    url=http%3A%2F%2Fvimeo.com%2F18150336&
    image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F117311910_1280.jpg&
    key=<:key>&type=text%2Fhtml&schema=vimeo"
    width="1280" height="720" scrolling="no" frameborder="0" allowfullscreen>
    </iframe>

Script Tags
-----------
The one problem with serving an iframe from within an embed is that we must
know the exact size of the embed. Otherwise there will be weird whitespace
around the object, or it will be cut off, creating a terrible user experience.
Because of this, we do not allow script tag embeds unless we know the exact
size of the embed after it's rendered.

Because of this we will not serve script tag embeds in our iframe.
