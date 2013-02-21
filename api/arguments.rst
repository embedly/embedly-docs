.. _arguments:

Query Arguments
===============
An in-depth view of all the query arguments:

``key``
    The :doc:`API key </api/authentication>` for your registered account.

``url``
    The URL is to retrieve embedding information. This URL must be escaped to
    insure that Embedly retrieves the correct link. For example, this Embedly
    URL::

        http://embed.ly/?embedly,is_awesome#docs

    Should be sent as::

        http%3A//embed.ly/%3Fembedly%2Cis_awesome%23docs

    In Javascript this is as easy as using the `escape
    <http://mzl.la/moz_escape>`_ function.

``urls``
    A comma separated list of urls for Embedly to process. Each URL must be
    escaped, but commas separating URLS must NOT be URL encoded. For example,
    the request for

    .. code-block:: javascript

        var urls = ['http://google.com', 'http://apple.com', 'http://embed.ly']

    would be::

        http%3A//google.com,http%3A//apple.com,http%3A//embed.ly

    We can obtain this path in Javascript by using:

    .. code-block:: javascript

         urls.map(escape).join(',')

    ``urls`` accepts a maximum of 10 urls at a time. Embedly processes these
    urls in parallel, therefore, it's much quicker to use ``urls`` for batched
    processing.

``maxwidth`` (optional)
    This is the maximum width of the embed in pixels. ``maxwidth`` is used for
    scaling down embeds so they fit into a certain width. If the container for
    an embed is ``500px`` you should pass ``maxwidth=500`` in the query
    parameters. For example, if you don't set a ``maxwidth`` for the a Vimeo
    `video`_ Embedly will return the following html:

    .. code-block:: html

        <iframe src="http://player.vimeo.com/video/18150336" width="1280"
         height="720" frameborder="0"></iframe>

    This width may cause the embed to overflow the containing ``div``. If we
    `pass`_ ``maxwidth=500`` the html will be:

    .. code-block:: html

        <iframe src="http://player.vimeo.com/video/18150336" width="500"
        height="281" frameborder="0"></iframe>

    Note: For photo or images it is recommended to use CSS styles to scale your image
    to fit within your page. This can also be applied to ``maxheight``. For example:

    .. code-block:: html

        <img src="http://embed.ly/static/images/squiggle2.png"
        style="max-width:300px; max-height:200px;"></img>

    It is highly recommended that developers pass a ``maxwidth`` to Embedly.

``maxheight`` (optional)
    This is the maximum height of the embed in pixels. Functions the same as
    ``maxwidth``, but for the height of the embed instead. It's noteworthy that
    ``maxwidth`` is preferred over ``maxheight``.

``width`` (optional)
    Will scale embeds type ``rich`` and ``video`` to the exact width that a
    developer specifies in pixels. Embeds smaller than this width will be
    scaled up and embeds larger than this width will be scaled down. Note that
    using this may cause distortion when scaling up embeds.

``format`` (optional)
    The response format -- Accepted values: ``(xml, json)``

``callback`` (optional)
    Returns a ``(jsonp)`` response format. The callback is the name of the
    javascript function to execute.

``wmode`` (optional)
    Will append the wmode value to the flash object. Possible values include
    ``window``, ``opaque`` and ``transparent``. For more information view
    Adobe's
    `documentation <http://kb2.adobe.com/cps/127/tn_12701.html>`_.

``allowscripts`` (optional)
    By default Embedly does not return script embeds for ``jsonp`` requests.
    They just don't work and cause lots of issues. In some cases, you may need
    the script tag for saving and displaying later. In order for Embedly to send
    the script embeds over ``jsonp`` add ``allowscripts=true``. Use with care,
    and this option is only valid when a callback is supplied, otherwise, it is
    ignored.

``nostyle`` (optional)
    There are a number of embeds that Embedly has created including Amazon.com,
    Foursquare, and Formspring. These all have ``<style>`` elements and inline
    styles associated with them that make the embeds look good. If you wish to
    style these embeds yourself, you can add ``nostyle=true`` and Embedly will
    remove the style elements. Note this is global change, therefore, you must
    account for all embeds with styles or only use a subset.

``autoplay`` (optional)
    This will tell the video/rich media to automatically play when the media is
    loaded. Accepted values: ``(true, false)`` Default: ``false``

``videosrc`` (optional)
    Either ``true`` Embedly will use the ``video_src`` meta or Open Graph tag to
    create a video object to embed. While Embedly uses the ``video_src`` tag to
    create embeds for supported providers, it can create unexpected behavior
    when it's used in a broader context. Videos will autoplay or my contain
    malicious content. Only enable this feature if you know what you are doing.
    Accepted values: ``(true, false)`` Default: ``false``

``words`` (optional)
    The ``words`` parameter has a default value of 50 and works by trying to
    split the description at the closest sentence to that word count. For
    example, the following lorem ipsum description is made up of 33 words and
    5 sentences::

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        dapibus auctor aliquam. Donec vitae justo ligula, id luctus ligula.
        Duis eget mauris lacinia sapien aliquet vulputate a et orci. Sed eu
        imperdiet sem.

    Now by default, Embedly will return all 33 words, but say you want only 20
    words. By passing ``words=20`` Embedly would return::

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        dapibus auctor aliquam. Donec vitae justo ligula, id luctus ligula.

    This is actually only 19 words, but we split at the closest sentence.
    Alternatively, if you want 25 words Embedly will return::

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        dapibus auctor aliquam. Donec vitae justo ligula, id luctus ligula.
        Duis eget mauris lacinia sapien aliquet vulputate a et orci.

    This is actually 29 words, but it's closer to that 25 value than the
    previous sentence split of 19 words. Words gives a better reading
    experience to your users, but you should plan accordingly for this variance
    in word count.

``chars`` (optional)
    ``chars`` is much simpler than ``words``. Embedly will blindly truncate a
    description to the number of characters you specify adding ``...`` at the
    end when needed. For the above description, if we set ``chars=100`` it will
    return::

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        dapibus auctor aliquam. Donec ...

    This is 98 characters due to splitting at the closest word. ``chars`` is
    useful when dealing with a fixed space for displaying descriptions.

.. _pass: http://api.embed.ly/1/oembed?maxwidth=500&url=http%3A//vimeo.com/18150336
.. _video: http://api.embed.ly/1/oembed?url=http%3A//vimeo.com/18150336