Display - Authentication
========================

To authenticate your requests, include ``key`` as a query parameter,
like so::

    http://i.embed.ly/:version/:endpoint?key=:key&<additional query parameters>

Choose the ``:version`` and ``:endpoint`` depending on which ``Display`` API
that you want to access, e.g. `'/1/resize`` for the
:doc:`endpoints/1/resize`. Replace ``:key`` with the
unique API key shown in `your dashboard <http://app.embed.ly>`_.