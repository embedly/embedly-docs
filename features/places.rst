Places
======
The ``place`` object gives location data associated with the url. You can
find this data in the :doc:`Preview </api/endpoints/1/preview>` and
:doc:`Objectify </api/endpoints/2/objectify>` endpoints. 

Example
-------
An example ``place``
for a `Foursquare venue <http://embed.ly/docs/explore/preview?url=http%3A%2F%2Ffoursquare.com%2Fvenue%2F46205>`_
would be:

.. code-block:: json

    {
        "title": "Dupont Circle Metro Station",
        "url": "http://foursquare.com/venue/46205",
        "region": "DC",
        "locality": "Washington",
        "longitude": 77.043256759643555,
        "postal_code": "20036",
        "provider": "Foursquare",
        "latitude": 38.909669137703268,
        "id": "46205",
        "street_address": "1525 20th St NW"
    }


Response
--------
``title``
    Title of the location

``url``
    Resource associated with the ``place``

``id``
    Unique identifier for the ``place`` by the ``provider``

``provider``
    Provider name

``street_address``
    Street Address

``locality``
    Locality, most often the city.

``region``
    Region, most often a state.

``postal_code``
    Postal Code

``country_code``
    Country Code

``latitude``
    Latitude associated with the place.

``longitude``
    Longitude associated with the place.