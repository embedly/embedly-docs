Events
======
The event object gives time and details data, which is associated with the url. You can find
this data in the :doc:`Preview </api/endpoints/1/preview>` or :doc:`Objectify </api/endpoints/2/objectify>` endpoints.

Example
-------
An example ``event`` value
for `Eventbrite <http://embed.ly/docs/explore/preview?url=http%3A%2F%2Fxsite2011.eventbrite.com%2F>`_ would be:

.. code-block:: json

    {
        "end": 1308263400000,
        "description": "Register now and enter to win a Galaxy Tab 10.1! The first 50 paid registrations in June will be entered in a drawing to win a Samsung Galaxy Tab 10.1 tablet computer.",
        "title": "XSITE 2011: The Xconomy Summit on Innovation, Technology & Entrepreneurship",
        "start": 1308226500000,
        "offset": -14400000,
        "id": "1590716877"
    }

Response
--------
``title``
    Title of the event.

``description``
    Description of the ``event``. The word count controlled by words and chars.

``start``
    Start time in milliseconds from epoch.

``end``
    End time in milliseconds from epoch.

``offset``
    UTC offset in milliseconds. Allows you to localize the time to the user's time zone.

``id``
    Unique identifier for the ``event`` by the ``provider``.