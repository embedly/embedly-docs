Endpoints
=========
Embedly offers 3 different endpoints to choose from: :doc:`oEmbed <1/oembed>`,
:doc:`Preview <1/preview>` and :doc:`Objectify <2/objectify>`. Each endpoint
has a different structure and set of use cases. We recommend looking over each
to see which is best suited for you.

Authentication
--------------
Embedly requires developers to authenticate their requests to Embedly. There
are two different methods to authenticate requests: :ref:`key based 
<key_based>` and :ref:`oAuth <oauth>`. Read more about how to use these methods

|more| :doc:`Authentication<auth>`

oEmbed
------
The oEmbed endpoint follows the `oEmbed Spec <http://oembed.com>`_ and is the
easiest endpoint to integrate into any site. It returns the title, description,
thumbnail and embed code for any url. If you are automating embedding urls,
then this endpoint is for you. Embedly already does the work of picking the
correct information for you and your users.

|more| Read the :doc:`1/oembed`

Preview
-------
The preview endpoint was built to allow users to customize embeds. If you are
building something similar to the Facebook status message update functionality,
then this endpoint is for you. It returns multiple images, objects and embeds
to choose from when creating an embed. 

|more| Read the :doc:`1/preview`

Objectify
---------
The objectify endpoint is the kitchen sink. This endpoint will pass back
everything we know about a URL in one shot. It is not as well structured as the
previous endpoints and it is only available to supplement those with desires
that we could not imagine. Enjoy!

|more| Read the :doc:`2/objectify`

Query Arguments
---------------
Each endpoint responds to the same set of query arguments. These allow you to
fine tune the service to your needs.

|more| :doc:`arguments`

Response Objects
----------------
There are some common response objects that are passed back in each endpoint.
We have aggregated these into one documents

|more| :doc:`response`

.. toctree::
    :hidden:

    arguments
    response
    auth
    mobile

    1/index
    2/index