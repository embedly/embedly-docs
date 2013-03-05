Microformats
============
The microformats object is used to extract semantic metadata contained in
a page's markup. This data is only available from the
:doc:`Objectify </api/endpoints/2/objectify>` endpoint.


Response
--------

Tags/Keywords
^^^^^^^^^^^^^
``tags``
    A dictionary of tagged links, designated with ``"rel=tag"``, used
    to indicate keywords for the page.  See `microformats.org
    <http://microformats.org/wiki/rel-tag>`_ for more info. An example
    ``tags`` value for an `e-commerce site
    <http://embed.ly/docs/explore/objectify?url=http%3A%2F%2Fwww.sunfactory.fr%
    2Fen%2Fpersonalized-gifts%2Fstatuette-trophy-soccer-player-football.html>`_
    is:

    .. code-block:: json

        {
            "trophy": "http://www.sunfactory.fr/en/tag/trophy/",
            "soccer": "http://www.sunfactory.fr/en/tag/soccer/",
            "statuette": "http://www.sunfactory.fr/en/tag/statuette/"
        }

XHTML Friends Network
^^^^^^^^^^^^^^^^^^^^^^^
``xfn``
    A dictionary of tagged links describing relationships, as defined by the
    `XHTML Friends Network <http://gmpg.org/xfn/>`_. ``xfn`` is a dictionary
    of each tag, in which the value is a list of objects with a ``title``
    and an ``href``.

    Here is an example response for a
    `Google+ profile <http://embed.ly/docs/explore/objectify?url=https%3A
    %2F%2Fplus.google.com%2Fu%2F0%2F101327394875436414046>`_:

    .. code-block:: json

        {
            "xfn": {
                "me": [
                    {
                        "href": "http://twitter.com/doki_pen",
                        "title": "Twitter"
                    },
                    {
                        "href": "http://twitter.com/kalimbahn",
                        "title": "kalimbahn"
                    },
                    {
                        "href": "http://pulse.yahoo.com/_A4SBHEWDD6I4DDC4IDFOLCXJ2I",
                        "title": "Robert Corsaro"
                    }
                ]
            }
        }

    ``me`` is just one of many xfn tags, which describe relationships. Others
    include ``parent``, ``friend``, and ``sweetheart``. See
    `the xfn spec <http://gmpg.org/xfn/11>`_ for many more.

Author
^^^^^^
``author``
    A list of tagged links as specified by the `rel author microformat
    <http://microformats.org/wiki/rel-author>`_. ``author`` is a list of
    each tag in which each value is a dictionary of the name and href of the
    author. Here is an example response for a `Mashable post <http://embed.ly/d
    ocs/explore/objectify?url=http%3A%2F%2Fmashable.com%2F2011%2F11%2F16%2Fchil
    l-hulu-livestream-vevo%2F>`_:

    .. code-block:: json

        {
            "author": [
                {
                    "href": "http://mashable.com/author/sarah-kessler/",
                    "name": "Sarah Kessler"
                }
            ]
        }
