Mobile (Beta)
=============
Embedly is now offering support for mobile apps, allowing you to embed rich
previews of documents, videos, and audio clips on the most popular smartphones
and tablets.

This feature is in beta. We hope you'll try it out and send us your feedback.

Endpoints
---------
All ``Embed`` :doc:`endpoints <../index>` are supported. Use them just as you
would from a desktop device. However, they may behave slightly differently. For
instance, if you don't set ``maxwidth`` or ``maxheight`` parameters, the
defaults are 100% of the mobile device's screen size.

Responses
---------
We check the ``User-Agent`` identifier sent by the device to ensure
compatibility. For example, we never send Flash to an iOS device.

HTML5 Providers
---------------
HTML5 has been gaining support among video and rich media providers. When you
embed a URL pointing to one of these providers, you can trust that any video
or audio returned will be compatible with all the devices we support:

* `YouTube  <http://youtube.com>`_
* `UStream  <http://ustream.com>`_
* `Qik  <http://qik.com>`_
* `Revision3  <http://revision3.com>`_
* `TwitVid  <http://twitvid.com>`_
* `Blip.tv  <http://blip.tv>`_
* `Bambuser  <http://bambuser.com>`_
* `Big Think  <http://bigthink.com>`_
* `Socialcam  <http://socialcam.com>`_
* `Dipdive  <http://dipdive.com>`_
* `Jardenberg  <http://video.jardenberg.com>`_
* `The White House  <http://whitehouse.gov>`_
* `Funny or Die  <http://funnyordie.com>`_
* `Vimeo  <http://vimeo.com>`_
* `TED  <http://ted.com>`_
* `Digg  <http://digg.com>`_
* `Confreaks  <http://confreaks.net>`_
* `Scribd  <http://scribd.com>`_
* `Kickstarter  <http://kickstarter.com>`_
* `Posterous  <http://posterous.com>`_
* `Band Camp  <http://bandcamp.com>`_
* `NPR  <http://npr.org>`_
* `Huffduffer  <http://huffduffer.com>`_
* `CNN  <http://cnn.com>`_
* `CNN Edition  <http://edition.cnn.com>`_
* `CNN Money  <http://money.cnn.com>`_

Supported Streaming Devices
---------------------------
These are the devices that will support video and audio streaming embeds:

* iOS (3.0 and up)

  * iPad
  * iPhone
  * iTouch

* Android (2.2 and up)

  * Devices that support Flash Player 10.1 and up.

Mobile Libraries
----------------
To streamline your mobile development, we have created libraries to get you
started. Here is the complete list:

* `iOS <https://github.com/embedly/embedly-ios>`_
* `Java <https://github.com/embedly/embedly-java>`_ (for Android)
* `jQuery <https://github.com/embedly/embedly-jquery>`_
