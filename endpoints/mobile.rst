Mobile Beta
===========
Embedly is now offering Mobile support in Beta mode. This means you will get
all the rich previews of Embedly + HTML5 video, Flash, audio and document embeds
that work on some of your favorite mobile devices. Having the Beta tag in place
explicitly means that this is a very new feature and is open to community
feedback. We will initially be supporting iOS devices and various Android
devices.

Endpoints 
---------
All API endpoints will be supported for mobile. View the complete list here
:doc:`index`.

Responses 
---------
API responses will be based on the "User-Agent" of your device - i.e, we will
*not* return Flash for an iOS device.

HTML5 Providers 
---------------
HTML5 has been gaining support among video and rich media providers. We
currently support 26 providers and are actively working with other media
providers to give you access. **Note**: If you do not set `maxwidth` or
`maxheight` parameters we will by default have the width and height at 100%.
Doing so makes scaling a lot easier for different mobile devices.

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
These are the devices that will support video and audio streaming embeds.

* iOS (3.0 - 4.3)
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
* `Java <https://github.com/embedly/embedly-java>`_
* `jQuery <https://github.com/embedly/embedly-jquery>`_
