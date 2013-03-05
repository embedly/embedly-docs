.. _frame:

XSS Protection
==============
Cross-site scripting (XSS) protection is really as simple as putting every
embed in an iframe. Nothing in the child frame has access to the containing
frame, so your site is protected from malicious embeds.

There is a disclaimer here, that Embedly hand curates the list of sites that
we allow embeds from. We have tested them all and one can assume that they are
trusted sources. This only protects you if something on the providers side goes
wrong. They may get "hacked", have a bad push or any number of things that
could effect their embed. We have never had a report of this in the past, but
developers should sleep better with this in place.

Adding this Feature
-------------------
To add this protection you are going to add one new query param to your
requests: ``frame=true``. Your requests will look like this::

  http://api.embed.ly/1/oembed?key=key&frame=true&maxwidth=500&url=http%3A%2F%2
  Fwww.twitch.tv%2Fhaxxeren%2Fb%2F330565930

This will return an iframe that look like this::

  <iframe src="http://media.embed.ly/1/frame?url=http%3A%2F%2Fda.twitch.tv%2Fha
  xxeren%2Fb%2F330565930&width=400&key=key&height=300"
  width="400" height="300" border="0" scrolling="no" frameborder="0"></iframe>

The embed now lives within the media.embed.ly domain and has no access to the
parent page.

Script Tags
-----------
The one problem with serving an iframe from within an embed is that we must
know the exact size of the embed. Otherwise there will be weird whitespace
around the object, or it will be cut off, creating a terrible user experience.
Because of this, we do not allow script tag embeds unless we know the exact
size of the embed after it's rendered.

For example, we will not render Twitter embeds when ``frame=true`` is added.

* `With Frame <http://embed.ly/docs/explore/oembed?url=https%3A%2F%2Ftwitter
  .com%2FTechmeme%2Fstatus%2F243754453814108160&maxwidth=500&frame=true>`_
* `Without Frame <http://embed.ly/docs/explore/oembed?url=https%3A%2F%2Ftwitter
  .com%2FTechmeme%2Fstatus%2F243754453814108160&maxwidth=500>`_

