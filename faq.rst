.. _faq:

Frequently Asked Questions
==========================
Great minds think alike. If none of these answer your question(s),
check out our FAQ Forum at `<http://support.embed.ly>`_

General
-------

What is Embedly?
^^^^^^^^^^^^^^^^
Embedly is a solution that automatically converts posted links into
embedded media on the fly. With its set of APIs, tools, and libraries,
you can create unique visual experiences by embedding videos,
images, rich media, RSS entries, and article previews.

For more information, see our introductions
:doc:`for authors </authors>` or
:doc:`for developers </tutorials/start>`.

Why Embedly?
^^^^^^^^^^^^
Because it's the easiest way to embed content. In less then 10
minutes, you can embed content from hundreds of providers and generate rich
previews for any URL on the web.

Here's a quote from James Patterson, the Platform Lead at Yammer:

  If we weren't using Embedly we'd have had to spend probably around a week of
  an engineer's time to build something that gets the basic job done. It
  wouldn't be nearly as good, we'd have to deal with constant bug fixes and
  we'd be paying Amazon $200-$300 a month to host it anyway. Using Embedly is
  a no-brainer.

See our `customers </customers>`_ page for more testimonials.

We take care of every step of the embedding process: retrieving information
about a URL, checking it against malware registries, extracting content,
making additional API calls to providers that support them, parsing RSS
feeds, and performing validation. We save you time so that you can focus
on making your app great.

Am I paying for content?
^^^^^^^^^^^^^^^^^^^^^^^^
No, you're paying for the use of Embedly's processing engine. You're
responsible for any copyright implications that may come from embedding
third-party content in your site or app.

How fast is Embedly?
^^^^^^^^^^^^^^^^^^^^
Fast. Embedly uses several techniques to accelerate the embedding process:

* **Caching**: The first time we see a URL, we store its contents in our
  cache so that repeated requests can be processed immediately. We invalidate
  the cache at least once every 24 hours, depending on the response headers
  we receive.
* **Parallel processing**: Once we've resolved the initial URL, we perform
  the API calls, image parsing, and malware detection in parallel.
* **Batch processing**: Send up to 20 URLs at a time to Embedly, and we'll
  process them all in parallel.

Where can I find a demo of Embedly in action?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Try `Parrotfish plugin <http://labs.embed.ly>`_, which provides an enhanced
Twitter experience under Google Chrome. It was built using our
:doc:`Preview API </api/endpoints/1/preview>`.

You should also check out what our `customers </customers>`_ have been
building.

API
---

Why doesn't this URL work?
^^^^^^^^^^^^^^^^^^^^^^^^^^
About 80% of the support tickets read "This URL _________ doesn't work, you
guys need to fix it." There are a number of things that could have gone wrong
when we process a URL. Sometimes it's our fault, sometimes there is nothing we
can do about it. Here are some steps to follow:

* Try the URL through our `response explorer </docs/explore>`_ .
  If it works there, but not in your code, you might be doing something wrong.
* If it's a YouTube video, make sure embedding has been enabled for that URL.
  You can check by going to the video's page and clicking **Share**,
  then **Embed**.
* If it's a Facebook object, make sure that the object is public and that
  you're using its public URL.
* The page might have 404'd or timed out temporarily. Try your query again
  with ``force=true`` to ensure that Embedly revisits the URL.

If none of those things work, either file a ticket through your app dashboard
or send an email to support@embed.ly.

Should all photo embeds have a thumbnail?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
No, not all photo embeds provide a thumbnail.

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


Should I use the url parameter, or the urls parameter?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Using ``urls`` will generally be faster than sending one request per URL.
The downside is that the response will only be as fast as the
slowest URL in the list.

Do you support mobile devices?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Yes, we are currently in Beta with mobile support for iOS and Android devices.

Learn more from our :doc:`Mobile </features/mobile>` documentation.

Does Embedly send back the original URL?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
We send the original URL (as ``original_url``) from our
`Preview </docs/endpoints/1/preview#response>`_
and `Objectify </docs/endpoints/2/objectify#response>`_ endpoints.
The `oEmbed </docs/endpoints/1/oembed#response>`_  endpoint
sends the canonical URL for link type.

Does Embedly have a whitelist?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Yes. There are two ways to retrieve our provider whitelist:

* Take a look at the `Regular Expression Generator </tools/generator>`_ page.
* Make a request to our `Services Endpoint <http://api.embed.ly/1/services>`_.

Troubleshooting
---------------

Why isn't the API working for me?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Usually this is caused by forgetting to provide a key (see
:doc:`Authentication </api/authentication>`), by exceeding your usage limit,
or by trying to use an API endpoint that your current plan doesn't qualify
you for. To debug:

* Make sure you have `signed up </pricing#plans>`_ for a key.
* Ensure the URL you are testing is public.
* Check that your `plan </pricing#plans>`_ enables the endpoint you're using.
* Check the usage bucket on `your dashboard <https://app.embed.ly>`_.

This description is bad
^^^^^^^^^^^^^^^^^^^^^^^
Embedly attempts to pick the best description from the page or header
tags, but that's harder for some pages than for others. We're always working
to improve our algorithms.

Why isn't my key working?
^^^^^^^^^^^^^^^^^^^^^^^^^
Your key is activated as soon as you sign up. Some things to check:

* Did you set referrer or IP blocking? Visit "Manage your Referrers/IPs"
  from `your dashboard <https://app.embed.ly>`_ .
* Did you exceed your usage limit? Check the usage bucket on
  `your dashboard <https://app.embed.ly>`_.
