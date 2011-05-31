Endpoints
=========

Embedly offers 3 different endpoints to choose from: :doc:`oEmbed <1/oembed>`,
:doc:`Preview <1/preview>` and :doc:`Objectify <2/objectify>`. Each endpoint
has a different structure and set of use cases. We recommend looking over each
to see which is best suited for you.

oEmbed
^^^^^^
The oEmbed endpoint acts much like `<http://api.embed.ly>`_, but has some extra
magic that makes it special. The biggest difference is that it allows you to
pass any URL into the system, and it returns an oEmbed response. This can be as
little as a title and description, or a full video embed. If you are automating
embedding urls, then this endpoint is for you. It's simple and Embedly already
does the work of picking the correct information for you.

|more| Read the :doc:`1/oembed`

Preview
^^^^^^^
The preview endpoint was built to allow users to customize embeds. If you are
building something similar to the Facebook status message update functionality,
then this endpoint is for you. It returns multiple images, objects and embeds
to choose from when creating an embed. 

|more| Read the :doc:`1/preview`

Objectify
^^^^^^^^^
The objectify endpoint is the kitchen sink. This endpoint will pass back
everything we know about a URL in one shot. It is not as well structured as the
previous endpoints and it is only available to supplement those with desires
that we could not imagine. Enjoy!

|more| Read the :doc:`2/objectify`

Query Arguments
^^^^^^^^^^^^^^^
Each endpoint responds to the same set of query arguments. These allow you to
fine tune the service to your needs.

|more| :doc:`arguments`

Response Objects
^^^^^^^^^^^^^^^^
There are some common response objects that are passed back in each endpoint.
We have aggregated these into one documents

|more| :doc:`response`


.. toctree::
    :maxdepth: 2

    arguments
    response

    1/index
    2/index