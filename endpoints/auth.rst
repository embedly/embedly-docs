.. _auth:

Authentication
==============

Embedly requires developers to authenticate their requests to all endpoints.
There are two different methods to authenticate requests: key based and oAuth.
They are as follows:

.. _key_based:

Key Based Authentication
------------------------
This is the simplest version of authentication. For every request to Embedly
the developer MUST include their ``key`` as a query parameter on every request.
Your ``key`` is always available once you are logged into the `app dashboard
<http://app.embed.ly>`_. You can regenerate your key at any time.

.. NOTE::
  Be careful when regenerating your ``key`` as your old key will be
  invalidated. We will keep the old ``key`` valid for one hour after you
  regenerate your key to allow for a deployment window of your new
  configuration.

The ``key`` should be sent over on every request via query parameter like so::

  http://api.embed.ly/<version>/<endpoint>?key=:key&<rest of query parameters>

Know if you are using Embedly server side, this is the best way to
authenticate your requests.

.. _oauth:

OAuth
-----
Embedly uses 2 legged oAuth to authenticate requests. To get started you need
to login into to the `App dashboard <http://app.embed.ly>`_ and select ``Use 
oAuth`` in the your API ``key`` section. This will generate a new ``key`` and
``secret`` that you will need to generate a signature. We are not going to
attempt to recreate the OAuth documentation here, so please review the
following:

* `Beginners Guide to OAuth <http://hueniverse.com/oauth/>`_
* `OAuth Documentation <http://oauth.net/documentation/>`_
* `OAuth Libaries <http://oauth.net/code/>`_

The only difference using Embedly's version of OAuth is that there is no user,
therefore, no Access Token. This simplifies things greatly; every OAuth
library lets developers make 2 legged requests. Generally, all you need to do is
use an empty string (``""``) for both the Access Key and Secret. The following
is an example of using the `python-oauth2
<https://github.com/simplegeo/python-oauth2>`_ library::

    import time
    import urllib, urllib2
    import oauth2 as oauth
    
    # Set the API endpoint 
    url = "http://api.embed.ly/1/preview"
    
    urls = ['http://google.com', 'http://apple.com']
    
    # Set the base oauth_* parameters along with any other parameters required
    # for the API call.
    
    params = {
        'oauth_version': "1.0",
        'oauth_nonce': oauth.generate_nonce(),
        'oauth_timestamp': int(time.time()),
        'urls': ','.join([urllib.quote(u) for u in urls])
    }
    
    # Set up instances of our Token and Consumer. The Consumer.key and 
    # Consumer.secret are given to you by the API provider.
    token = oauth.Token(key="", token="")
    consumer = oauth.Consumer(key=":key", secret=":secret")
    
    params['oauth_consumer_key'] = consumer.key
    
    # Create our request. Change method, etc. accordingly.
    req = oauth.Request(method="GET", url=url, parameters=params)
    
    # Sign the request.
    signature_method = oauth.SignatureMethod_HMAC_SHA1()
    req.sign_request(signature_method, consumer, token)
    
    response = urllib2.urlopen(req.to_url())