SSL
===

If your site runs via SSL it can often be hard to obtain the level of richness
you desire. ``Display`` changes this by proxying images over SSL.

Using ``Display`` with SSL mitigates all of what we like to call the "red X"
errors in web browsers. You know the ones, the mixed content errors that
scare users off your site.

Enabling SSL
------------
Use the ``https`` version of any ``Display`` endpoint::

  https://i.embed.ly/1/display/resize?url=http%3A%2F%2Fb.vimeocdn.com%2Fts%2F117%2F311%2F117311910_1280.jpg&key=<key>&width=500

SSL is available for the :doc:`/api/embed/index` to serve the image content
over HTTPS. Note that Embedly respects the cache time of the upstream image,
so we will cache it locally for that period of time.


NOTE: You will need to add your key and have SSL enabled to test.

Integration
-----------

``Display`` SSL can be integrated with our ``Embed`` or ``Extract`` products.

|more| Read about the :doc:`../integration`