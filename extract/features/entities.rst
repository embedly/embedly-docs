Entities
========
The ``entities`` object gives you a list of proper nouns
(persons, places, and things) extracted from the article
or blog text of a URL. Along with each entity name, Embedly counts
the number of times it appears in the text. You can find
this data in the
:doc:`Extract <../api/endpoints/1/extract>` endpoint.

Example
-------
An example ``entities`` value
for an `Article </docs/explore/objectify?url=http%3A%2F%2Fusnews.nbcnews.com%2F_news%2F2013%2F02%2F26%2F17107343-florida-man-shot-by-his-dog-police-say%3Flite&maxwidth=500>`_ would be:

.. code-block:: json

        "entities": [
            {
                "count": 4, 
                "name": "Lanier"
            }, 
            {
                "count": 2, 
                "name": "Florida"
            }, 
            {
                "count": 1, 
                "name": "Gregory Dale Lanier"
            }, 
            {
                "count": 1, 
                "name": "Alex Johnson"
            }, 
            {
                "count": 1, 
                "name": "St. Petersburg"
            }, 
            {
                "count": 1, 
                "name": "Highlands Tribune"
            }, 
            {
                "count": 1, 
                "name": "Steve Carr"
            }, 
            {
                "count": 1, 
                "name": "Tribune"
            }, 
            {
                "count": 1, 
                "name": "State Road"
            }, 
            {
                "count": 1, 
                "name": "Frostproof"
            }, 
            {
                "count": 1, 
                "name": "Fla."
            }
        ], 

Response
--------
``name``
    Name of the entity (person, place, or thing).

``count``
    Number of times an entity appears in the text.
