Keywords
========
The ``keywords`` object gives you a list of ranked keywords 
extracted from the article or blog text of a URL.
This is different from the meta keywords defined by the page.
Embedly uses its own ranking system to determine 
which keywords are the most relevant. You can find this data in the
:doc:`Extract <../api/endpoints/1/extract>` endpoint.

Example
-------
An example ``keywords`` value
for an `Article </docs/explore/objectify?url=http%3A%2F%2Farstechnica.com%2Ftech-policy%2F2013%2F02%2Fjudge-upholds-facetime-patent-verdict-against-apple-orders-royalties-to-boot%2F>`_ would be:

.. code-block:: json

        "keywords": [
            {
                "score": 120, 
                "name": "virnetx"
            }, 
            {
                "score": 59, 
                "name": "apple"
            }, 
            {
                "score": 39, 
                "name": "royalty"
            }, 
            {
                "score": 23, 
                "name": "patents"
            }, 
            {
                "score": 20, 
                "name": "facetime"
            }, 
            {
                "score": 20, 
                "name": "soverain"
            }, 
            {
                "score": 20, 
                "name": "court"
            }, 
            {
                "score": 18, 
                "name": "damages"
            }, 
            {
                "score": 18, 
                "name": "vpn"
            }, 
            {
                "score": 16, 
                "name": "cisco"
            }]

Response
--------
``name``
    Name of the keyword.

``score``
    Score of the keyword from the article, larger numbers infer more relevance.
