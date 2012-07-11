Python Requests
===============
`Requests <http://docs.python-requests.org/>`_ is a Python library that
describes itself as::

    "an elegant and simple HTTP library for Python, built for human beings."
    
It's simple interface has won over developers away from using urllib, urllib2,
httplib or httplib2. This is a very simple tutorial on how to use Requests and
the Embedly API.

Install
-------
To get started use ``easy_install`` to install Requests::

  $ sudo easy_install requests
  
You will also need an Embedly API key. You can sign up for one `here
<http://embed.ly/pricing>`_. For the rest of the tutorial we will assume your
key is ``kkkkkkkkkkkk``.

Basic Operations
----------------
You can now fire up an IPython shell and play around a bit with the
:ref:`oEmbed API <oembed_1>`.
:

.. code-block:: python

    #Import requests
    In [1]: import requests

    #Pass a URL to the oEmbed endpoint
    In [2]: r = requests.get('http://api.embed.ly/1/oembed?url=http%3A//vimeo.com/18150336&key=kkkkkkkkkkkk')

    #Make sure we got a 200 response code
    In [3]: r.status_code
    Out[3]: 200

    # Holds the content of the response
    In [4]: r.content
    Out[4]: '{"provider_url": "http://vimeo.com/", "description": "The Need 4
    Speed: The Art of Flight A collection of shots from flights made during the
    2009-2010 season by the talented group of wingsuit basejumpers, ...}'
    
It's as simple as that. We can then use the built in ``json`` library to parse
the content into data we can use:

.. code-block:: python

    In [5]: import json
    
    #Load the json data
    In [6]: data = json.loads(r.content)
    
    # View the data
    In [7]: data
    Out[7]: 
    {u'author_name': u'Phoenix Fly',
     u'author_url': u'http://vimeo.com/phoenixfly',
     u'height': 720,
     ....}
    
    In [8]: data['html']
    Out[8]: u'<iframe src="http://player.vimeo.com/video/18150336" ...></iframe>'

Using Multiple Arguments
------------------------
Embedly has a whole bunch of :ref:`query arguments <arguments>` that you can
use to control the output of the API. You can pass in multiple ``urls``,
specify a ``maxwidth`` or tell the video to ``autoplay``. To build the request
URL we need to write a bit of python to deal with the URL encoding. The
``urls`` parameter needs special encoding so we will deal with that first.

.. code-block:: python

    # Can't get away from urllib
    In [9]: import urllib

    # URLs that we want to process
    In [10]: urls = ['http://vimeo.com/18150336','http://vimeo.com/31455885']

    # Build a dictionary of the request args
    In [11]: data = {
    ....: 'urls' : ','.join([urllib.quote(url) for url in urls]),
    ....: 'autoplay : 'true',
    ....: 'maxwidth' : 500,
    ....: 'key':'kkkkkkkkkkkk'}
    
    # Create query
    In [12]: query = '&'.join(['%s=%s' % (k,v) for k, v in data.items()])
    
    # Create fetch url using the preview endpoint this time
    In [13]: fetch_url = 'http://api.embed.ly/1/preview?%s' % query
    
    In [14]: fetch_url
    Out[14]: 'http://api.embed.ly/1/preview?maxwidth=500&urls=http%3A//vimeo.com/18150336,http%3A//vimeo.com/31455885&autoplay=true&key=kkkkkkkkkkkk'

Now the question is, why didn't we just use ``urllib.urlencode`` to create the
query? I really messes up ',' for us. For example::

    In [15]: data = {
    ....: 'urls' : 'http://vimeo.com/18150336,http://vimeo.com/31455885',
    ....: 'key':'kkkkkkkkkkkk'}

    In [16]: urllib.urlencode(data)
    Out[16]: 'key=kkkkkkkkkkkk&urls=http%3A%2F%2Fvimeo.com%2F18150336%2Chttp%3A%2F%2Fvimeo.com%2F31455885'
    
In this case we have no way of telling if the ``,`` is part of the ``url`` or
splits up a list of ``urls``. Definitely use the custom urlencode instead of
``urllib``. We can then get the data from the preview endpoint by using
``Requests`` again.:

.. code-block:: python

    # Make the request
    In [17]: r = requests.get(fetch_url)
    
    # Load the json data.
    In [18]: data = json.loads(r.content)

    # This time data is a list of responses 
    In [19]: data
    Out[19]: 
    [{u'title': u'Wingsuit Basejumping - The Need 4 Speed: The Art of Flight',
      u'type': u'html',
      u'url': u'http://vimeo.com/18150336' ...},
     {u'title': u'Made by Hand / No 2 The Knife Maker',
      u'type': u'html',
      u'url': u'http://vimeo.com/31455885' ...}]

    #You can manipulate the data in any way from here
    In [20]: for d in data:
        ....:     print 'title: ', d['title']
        ....:     print 'url: ', d['url']
        ....:     print 'object type: ', d['object']['type']
        ....: 
     title:  Wingsuit Basejumping - The Need 4 Speed: The Art of Flight
     url:  http://vimeo.com/18150336
     object type:  video
     title:  Made by Hand / No 2 The Knife Maker
     url:  http://vimeo.com/31455885
     object type:  video


Error Handling
--------------
You will find from time to time 404 errors from bad urls or 401 errors from
using endpoints your account doesn't have access to.
::

    # Bad Key
    In [21]: r = requests.get('http://api.embed.ly/1/oembed?url=http%3A//vimeo.com/18150336&key=badkey')

    In [22]: r.status_code
    Out[22]: 401
    
    In [23]: r.content
    Out[23]: u'<html><title>401: Unauthorized - Invalid key or ...'

    # Bad Url
    In [24]: r = requests.get('http://api.embed.ly/1/oembed?url=http%3A//vimeo.com/1815&key=kkkkkkkkkkkk')

    In [25]: r.status_code
    Out[25]: 404
    
    In [26]: r.content
    Out[26]: u'<html><title>404: Not Found - HTTP 404: Not Foun ...'

Conclusion
----------
While Embedly has a `Python library
<https://github.com/embedly/embedly-python>`_ that abstracts a number of these
issues away, Requests is a get way to get a basic understanding of how the API
works.

.. container:: keywords

   python