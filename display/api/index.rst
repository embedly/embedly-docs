Display - API
=============

``Display`` offers an Image proxy and resizing endpoints to handle all your
image needs. It takes an image URL and allows you to crop, fill, or resize to
fit your page or application's layout.

The image proxying service allows:

* Manipulating images to fit the needs of your website, including cropping,
  resizing and filling images.
* Proxying images over HTTPS.
* Specifying a fall back image if an image fails.
* Integration with the Embedly API.

Endpoints
---------
You can create the image URLs yourself via ``i.embed.ly``.
If you need different image sizes on different parts of your application,
we suggest using ``i.embed.ly``.

Display
^^^^^^^

Image is a simple proxy that allows you to embed insecure images into secure
pages and use a fall back image for images not found. The image endpoint
doesn't manipulate the image in any way.

|more| Read the :doc:`endpoints/1/index`

Resize
^^^^^^

Resize is a specialized version of the image endpoint that allows simple
resizing of the image. Aspect ratio is always preserved.

|more| Read the :doc:`endpoints/1/resize`

Crop
^^^^

Like resize, crop allows you to resize images to your needs, but offers precise
control over the resulting images dimensions by cropping the resized image.

|more| Read the :doc:`endpoints/1/crop`

Fill
^^^^

Similar to crop, fill allows precise control over an images dimensions, but
instead of cropping the image, it will be fitted to the canvas size and any
surrounding space will be filled in with a specified color.

|more| Read the :doc:`endpoints/1/fill`


Authentication
--------------
All endpoints offer a key-based authentication.

|more| Check out the :doc:`authentication`


Integration
-----------
We have made it easy to integrate ``Display`` direct with our 
:doc:`../../embed/index` or :doc:`../../extract/index` by passing
query arguments passed to each product's API.

|more| Read about the :doc:`integration`
