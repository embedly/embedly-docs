.. _arguments:

Request Arguments
=================
An in depth view of all the request arguments.

``key``
    The API key for your registered account.

``url``
    The URL to retrieve embedding information for.

``urls``
    A comma separated list of urls for Embedly to process. URLs must be URL
    encoded.  Commas separating URLS must NOT be URL encoded.  It accepts a
    maximum of 20 urls at a time. Embedly processes these urls in parallel, so
    it's much quicker to use ``urls`` for batched processing.

``maxwidth`` (optional)
    The maximum width of the embed in pixels.
    Note: we will attempt to scale the embed to fit within the maximum width.
   
``maxheight`` (optional)
    The maximum height of the embed in pixels.
    Note: we will attempt to scale the embed to fit within the maximum height.
     
``format`` (optional)
    The response format. Accepted values: ``(xml, json)``
 
``callback`` (optional)
    Returns ``(jsonp)`` response format. The callback is the name of the 
    javascript function to execute.

``wmode`` (optional)
    Will append the wmode value to the flash object. Possible values include 
    'window', 'opaque' and 'transparent'. For more information view Adobe's
    `documentation <http://kb2.adobe.com/cps/127/tn_12701.html>`_.

``allowscripts`` (optional)
    By default Embedly does not return script embeds for ``jsonp`` requests.
    They just don't work and cause lots of issues. In some cases you may need
    the script tag for saving and displaying later. To tell Embedly to send the
    script embeds over ``jsonp`` add ``allowscripts=true``. Use with care and
    this option is only valid when a callback is supplied, otherwise it is
    ignored.

``nostyle`` (optional)
    There are a number of embeds that Embedly has created including Amazon.com,
    Foursquare and Formspring. These all have `<style>` elements and inline
    styles associated with them that make the embeds look good. If you wish to
    style these embeds yourself you can add ``nostyle=true`` and Embedly will
    remove the style elements. Note this is global change, so you must account
    for all embeds with styles or only use a subset.

``autoplay`` (optional)
    Will tell the video/rich media to automatically play when the media is
    loaded. Accepted values: ``(true, false)`` Default: ``false``

``videosrc`` (optional)
    If ``true`` Embedly will use the ``video_src`` meta or Open Graph tag to
    create a video object to embed. While Embedly uses the ``video_src`` tag to
    create embeds for supported providers it can create unexpected behavior
    when it's used in a broader context. Videos will autoplay or my contain
    malicious content. Only enable this feature if you know what you are doing.
    Accepted values: ``(true, false)`` Default: ``false``

``width`` (optional)
    Will scale embeds of type `rich` and `video` to the exact width that a
    developers specifies is pixels. Embeds smaller than this width will be
    scaled up and embeds larger than this width will be scaled down. Note that
    using this may cause distortion when scaling up embeds.

``words`` (optional)
    The words parameter has a default value of 50 and works by trying to split
    the description at the closest sentence to that word count. For example the
    following lorem ipsum description is made up of 33 words and 5 sentences::

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        dapibus auctor aliquam. Donec vitae justo ligula, id luctus ligula.
        Duis eget mauris lacinia sapien aliquet vulputate a et orci. Sed eu
        imperdiet sem.

    Now by default Embedly will return all 33 words, but say you want only 20
    words Embedly would return::

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        dapibus auctor aliquam. Donec vitae justo ligula, id luctus ligula.

    This is actually only 19 words, but we split at the closest sentence.
    Alternatively if you want 25 words Embedly will return:

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        dapibus auctor aliquam. Donec vitae justo ligula, id luctus ligula.
        Duis eget mauris lacinia sapien aliquet vulputate a et orci.

    This is actually 29 words, but it's closer to that 25 value than the
    previous sentence split of 19 words. Words gives a better reading
    experience to your users, but you should plan accordingly for this variance
    in word count.


``chars`` (optional)
    chars is much simpler than words. Embedly will blindly truncate a
    description to the number of characters you specify adding '...' at the end
    when needed. For the above description if we set chars=100 it will return:

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        dapibus auctor aliquam. Donec ...

    Which is 98 characters due to splitting at the closest word. chars is useful
    when dealing with a fixed space for displaying descriptions.
