Authentication
==============

To authenticate your requests, include ``key`` as a query parameter,
like so::

    https://api.embed.ly/:version/:endpoint?key=:key&<additional query parameters>

Choose ``:version`` and ``:endpoint`` depending on the part of Embedly's API
that you want to access, e.g. ``1/oembed`` for the
:doc:`oEmbed endpoint </embed/api/endpoints/1/oembed>`. Replace ``:key`` with the
unique API key shown in
`your dashboard`_.

Notice the use of `https` instead of `http`, which is **strongly recommended**
if you intend to keep your key a secret. Plain HTTP requests are faster, but
they run the risk of revealing your key to the world.

Restricting Access
------------------

By default, Embedly allows requests from anywhere. For tighter security, you
can use the **Manage your Referrers** section of
`your dashboard`_ to create a whitelist of referrers
and/or IP addresses that Embedly will accept requests from. All other requests
will be rejected with a ``403 Forbidden`` response.

We use a simple "globbing" syntax for referrers, where ``*`` is a wildcard
that will match any number of characters. To allow all traffic from
``yourdomain.com`` (but not its subdomains), you would enter
``yourdomain.com*``. To allow subdomains as well, you would make it
``*yourdomain.com*``. Take note of the wildcard at the end, which means that
requests that indicate a path as well as a host (e.g. ``yourdomain.com/foo``)
will be accepted.

Globbing works similarly for IP addresses. If all of your requests come from
a cluster of servers with IP addresses in the range ``1.1.1.1`` to
``1.1.1.255``, then you would set a single rule ``1.1.1.*``.

OAuth
-----

Two-legged OAuth is supported as an alternative to key-based authentication.
However, the added complexity is unnecessary for most applications. As long as
HTTPS is used for all requests, key-based authentication is just as secure as
OAuth.

Your account can only be configured to use either key-based authentication or
OAuth, not both. To switch from one form of authentication to the other, visit
the **Your API Key** section of `your dashboard <http://app.embed.ly>`_.

.. container:: keywords

   auth, security
