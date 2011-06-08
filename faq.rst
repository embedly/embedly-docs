.. _faq:

Frequently Asked Questions
==========================
Great minds think alike...if none of these answer your question(s)
you can ask us at `<http://support.embed.ly>`_

General
-------

What is Embedly?
^^^^^^^^^^^^^^^^
It is a solution that automatically converts posted links into 
embedded media on the fly. With its set of APIs, tools and libraries 
you are able to create unique visual experiences by embedding videos,
images, rich media, RSS entries, and article previews.

Why Embedly?
^^^^^^^^^^^^
Conduciveness. Embedly is the easiest way to embed content. In less then 10
minutes you can embed content from hundreds of providers and generate rich
previews for any URL on the web through one API.

Simplicity is the key benefit of Embedly. Here is a quote from one of our
users.

  If we weren't using Embedly we'd have had to spend probably around a week of 
  an engineer's time to build something that gets the basic job done. It 
  wouldn't be nearly as good, we'd have to deal with constant bug fixes and 
  we'd be paying Amazon $200-$300 a month to host it anyway. Using Embedly is 
  a no-brainer.

  James Patterson Platform Lead at Yammer

We take care of all the logic for retrieving information about URLs, traversing
html, making API calls to hundreds of providers, processing RSS feeds, checking
the URLs against malware lists, and validating all the information.

Don't spend weeks or months building a complex system, then hours every week
maintaining it. Let Embedly handle the content while you focus on making your
site or app great!

Am I paying for content?
^^^^^^^^^^^^^^^^^^^^^^^^
No. You aren't paying for content, you are paying for the use of Embedly's
processing engine.

How fast is Embedly?
^^^^^^^^^^^^^^^^^^^^
Making an http request is inherently slow, so we can only be as fast as
the URL we are resolving. However, Embedly uses a number of tools to make this
process as expedient as possible.

Caching - Take advantage of being a part of the Embedly network. The first time
we see a URL we will resolve the URL and put it into cache. Subsequent
requests are served from cache. We invalidate requests daily, if not sooner
depending on the http response code.

Parallel Processing - Once we have resolved the initial URL we process the API
calls, image parsing, and malware detection in parallel. This greatly reduces
the processing time.

Batch Processing - Send up to 20 URLs at a time to Embedly. We will process
them all in parallel greatly improving performance.

Where can I find a demo of `/product/customers`_ in action?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you are using new Twitter, the `Parrotfish plugin <http://labs.embed.ly>`_
was built using the :doc:`endpoints/1/preview`.

API
---

Why doesn't this URL work!
^^^^^^^^^^^^^^^^^^^^^^^^^^
About 80% of the support tickets read "This URL _________ doesn't work, you
guys need to fix it." There are a number of things that could have gone wrong
when we process a URL. Sometimes it's our fault, sometimes there is nothing we
can do about it. Here are some steps to follow:

* Try the URL through one of our testing pages `try oEmbed </try/oembed>`_ ,
  `try preview </try/preview>`_ or `try objectify </try/objectify>`_. If it 
  works there, but not in your code, you might be doing something wrong.
* If it's a YouTube video make sure embedding has been enabled for that URL. If
  it's disabled then Embedly can't return a video response.
* If it's a Facebook URL make sure that the photo is public and you are using
  the public URL. Otherwise it will not work.
* Force Embedly to reevaluate the link. Sometimes pages will 404 for a brief
  time or a timeout could have happened. You can attempt to fix a URL by 
  forcing Embedly to reevaluate the page. To do this just add `force=true` 
  to the query parameters of your call.
* Nothing works...help! If none of those things work, please submit a ticket and
  we will have a look. You can either file a ticket through your Pro dashboard
  or send an email to support@embed.ly.

Should all photo embeds have a thumbnail?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
No, not all photo embeds provide a thumbnail.

How do I get a provider added?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you want us to support a provider that we don't already you can file a
ticket through your Pro dashboard or send an email to support@embed.ly. We will
do the leg work of adding it.

.. NOTE::
  It's much easier for us to add providers if they have an `oembed
  <http://oembed.com>`_ endpoint or use Facebook meta tags. Not all videos or
  image providers can be added because it's impossible for us to reverse the
  engineer's URL scheme.

Where can I find example code for calling the Embedly API?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
We have created some example apps using the Embedly API that can be used for
instructive purposes. The source for these apps can always be found on
`our github page <https://github.com/embedly>`_.  We usually accompany our
example apps with a post on our `blog <http://blog.embed.ly>`_.

Embedly libraries for various programming languages are provided on `our github
page <https://github.com/embedly>`_ in the form of Embedly-$lang.  Each of the
Embedly libraries contain example code snippets in their documentation.  The
library documentation is either contained or referenced in the projects README
file.  If you don't see your language of choice, then feel free to request a
client library for your language via support@embed.ly.

How can I tell if a URL will be resolved by `api.embed.ly <http://api.embed.ly>`_?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
All `api.embed.ly <http://api.embed.ly>`_ urls should be tested using the
regexes provided by the `Service API <http://api.embed.ly/docs/service>`_.
Please refer to the `Service API <http://api.embed.ly/docs/service>`_
documentation for further instruction.

Should I use the URL parameter, or the urls parameter?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Using urls will generally be faster, since we will fetch all urls in parallel.
The downside is that the response will be as fast as the slowest URL in the
list.  Depending on your usage patterns, most urls should already be cached
on our side, so using urls is a safe bet.  It will give you the benefit of
parallel requests without having to write any additional code.

Do you support mobile devices?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Yes, we are currently in Beta with mobile support for iOS and Android devices.
Learn more about `mobile </docs/mobile>`_.
