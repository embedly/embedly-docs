Safe Browse
===========
Safe is an attribute that tells you if the url is on a phishing or malware
list. Embedly uses Google's
`Safe Browsing API <http://code.google.com/apis/safebrowsing/>`_
to obtain a list of malicious urls. By using this API through our service,
you agree to its
`terms of service <https://developers.google.com/safe-browsing/terms>`_.

Response
--------
When the ``safe`` attribute is ``false``, there will be two additional
attributes in the response:

``safe_type``
    Either be ``"phishing"`` or ``"malware"``. The phishing list is from
    `antiphishing.org <http://www.antiphishing.org/>`_, and the malware
    list is from `stopbadware.org <http://www.stopbadware.org/>`_.

``safe_message``
    A user-readable message in HTML format explaining that the given url is likely malicious.

    If ``safe_type`` is ``phishing``, the message will be:

    .. code-block:: html

        <b>Warning- Suspected phishing page.</b> This page may be a forgery or imitation of another website, designed to trick users into sharing personal or financial information. Entering any personal information on this page may result in identity theft or other abuse. You can find out more about phishing from <a href="http://www.antiphishing.org">www.antiphishing.org</a>. Advisory provided by <a href="http://code.google.com/apis/safebrowsing/safebrowsing_faq.html#whyAdvisory">Google</a>

    If ``safe_type`` is ``malware``, the message will be:

    .. code-block:: html

        <b>Warning- Visiting this web site may harm your computer.</b> This page appears to contain malicious code that could be downloaded to your computer without your consent. You can learn more about harmful web content including viruses and other malicious code and how to protect your computer at <a href="http://www.stopbadware.org">StopBadware.org</a>. Advisory provided by <a href="http://code.google.com/apis/safebrowsing/safebrowsing_faq.html#whyAdvisory">Google</a>

Once a url is flagged as malicious, you must respect the ``cache_age``
attribute. When ``cache_age`` expires, you must **not** show the message
again until you have reevaluated that url with Embedly. This helps to mitigate
false positives and ensure compliance with the
`terms <https://developers.google.com/safe-browsing/terms>`_
of Google's Safe Browsing API.