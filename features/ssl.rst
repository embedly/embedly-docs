SSL
===

This feature is currently in :ref:`Beta <beta>`.

SSL is used on many sites and social networks across the web.
It is important for users to feel safe in your site and we wanted to find
the best way to support SSL with any content on the web. Using Embedly with
SSL mitigates most of what we like to call the "red X" errors in web browsers. 
It is helpful to understand how Embedly provided SSL will work with images,
videos, and rich media embeds.

Enabling SSL
------------
Simply add "secure=true" to your API requests to Embedly. You will need to have
this feature turned on in your Account, please email support@embed.ly.

Images
------
All image fields (thumbnail_url, open_graph.image, etc.) passed back from our
API endpoints we will now be served from an SSL enabled domain (https://i.embed.ly)
hosted by Embedly.

Video and Rich Media Embeds
---------------------------
All video and rich embed fields (oembed.html, obj.html, etc.) passed back from
our API endpoints will now be wrapped within an IFRAME with the source
coming from a SSL enabled Embedly domain (https://media.embed.ly). 
API :ref:`arguments <arguments>` for sizing and autoplay will still function
properly via the secure IFRAME.

The Embedly IFRAME detects the web browser you are in and adjusts the content
to ensure major content errors are not received. If the provider supports SSL,
the content inside it is secure as well. If the content is not secure, you will 
receive minor warnings on Firefox, Safari, and Chrome. For IE, we switch 
out the embed with a variation of it that is secure.

Examples
--------
Here are a few API calls that return the SSL feature:

* http://api.embed.ly/1/oembed?url=www.khanacademy.org%2Fmath%2Farithmetic%2Faddition-subtraction%2Fv%2Fbasic-addition&secure=true&key=<key>
* http://api.embed.ly/1/oembed?url=http%3A%2F%2Fitunes.apple.com%2Fus%2Falbum%2Fdrop-it-like-its-hot-single%2Fid21807343&secure=true&key=<key>

NOTE: You will need to add your key and have SSL enabled to test.