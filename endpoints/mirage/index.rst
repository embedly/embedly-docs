Mirage
======

Mirage is an image proxying service that allows:

 * Proxying images over HTTPS.
 * Specifying a fall back image if an image fails.
 * Manipulating images to fit the needs of your website, including cropping,
   resizing and filling images.
 * Integration with the Embedly API.

Mirage offers four different API endpoints: :doc:`Image <endpoints/1/image/index>`,
:doc:`Resize <endpoints/1/image/resize>`, :doc:`Crop <endpoints/1/image/crop>`
and :doc:`Fill <endpoints/1/image/fill>`.

Image
-----

Image is a simple proxy that allows you to embed unsecure images into secure
pages and use a fall back image for images not found. The image endpoint
doesn't manipulate the image in anyway.

|more| Read the :doc:`endpoints/1/image/index`

Resize
------

Resize is a specialized version of image that allows simple resizing of the
image. Aspect ratio is always preserved, which means it's hard to predict the
exact dimensions of the image ahead of time.

|more| Read the :doc:`endpoints/1/image/resize`

Crop
----

Like resize, crop allows you to resize images to your needs, but offers precise
control over the resulting images dimensions by cropping any excess image.

|more| Read the :doc:`endpoints/1/image/crop`

Fill
----

Similar to crop, fill allows precise control over an images dimensions, but
instead of cropping the image, it will be fitted to the canvas size and any
surrounding space will be filled in with a specified color.

|more| Read the :doc:`endpoints/1/image/fill`
