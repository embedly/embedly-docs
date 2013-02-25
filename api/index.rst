Endpoints
=========

Embedly offers 3 different API endpoints: :doc:`oEmbed <1/oembed>`,
:doc:`Preview <1/preview>` and :doc:`Objectify <2/objectify>`. Each provides
different data about the given URL.

All endpoints accept a similar set of :doc:`query arguments </api/arguments>`
and return similar :doc:`response objects </api/response>`.

oEmbed
------
The oEmbed endpoint follows the `oEmbed Spec <http://oembed.com>`_ and is the
easiest endpoint to integrate into any site. It returns the title, description,
thumbnail, and embed code for any URL. If you are automating embedding URLs,
then this endpoint is for you. Embedly already does the work of picking the
correct information for you and your users.

|more| Read the :doc:`1/oembed`

Preview
-------
The preview endpoint was built to allow users to customize embeds. If you are
building something similar to the Facebook status message update functionality,
then this endpoint is for you. It returns multiple images, objects, and embeds
to choose from when creating an embed.

|more| Read the :doc:`1/preview`

Objectify
---------
The objectify endpoint is the kitchen sink. This endpoint will pass back
everything we know about a URL in one shot. It is not as well structured as the
previous endpoints and it is only available to supplement those with desires
that we could not imagine. Enjoy!

|more| Read the :doc:`2/objectify`

