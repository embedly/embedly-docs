Article Extraction
==================

This feature is currently in :ref:`Beta <beta>`.

When processing the web it's sometimes beneficial to have the full text of an
article. You may want to store it for additional search terms, machine learning
or display. The article feature takes a URL and parses out what we think is the
complete article text. It's a little different than something like Readibilty's
API so we would like you to understand how it works first, before getting into
the details.


Flow
----
When Embedly first sees a URL we break it into a set of features, this is then
thrown against a trained classifier to decide whether it's an article or not.
Even if there is a lot of text on a page, we may choose not to classify it as
an article. For example an index page of articles has a lot of text, but makes
for a horrible article. Unlike a site like Instapaper where users are mostly
saving articles, Embedly's URL base is much larger and therefore we need to
decide what type of page it is before running an extraction.

Once a URL is flagged as an article we will run it through a series of scoring
algorithms to parse the main content from the page. The web is a messy place,
so the generic code will not always cover edge cases. Because of this we have
custom parsers for certain popular domains to make sure the output is what we
expect.

We then flatten the markup structure and get rid of common patterns like
"Related Articles", "Print this Page" or "Share This". The output is added to
the ``article.content`` attribute in the response.

Once we have confirmed that the extractor can pull an article we will try to
find an Author and Published date. We use a number of microformats to
accomplish this, like ``hentry`` and ``rel=author``. Currently, it's fairly
difficult to pull out an author from a page that does not contain microformat
markup. Unlike date, there is no common patterns in names, so support is
varied.

We explain the flow, because we want you to understand why the API did not
return an article, date or author. If you find a URL that you think should
work, please submit a ticket to support@embed.ly.

Examples
--------
Here are a few examples of what Embedly returns via the Article feature:

* http://embed.ly/docs/explore/article?url=http%3A%2F%2Frdegges.com%2Fmy-heroku-book-is-finished
* http://embed.ly/docs/explore/article?url=http%3A%2F%2Fwww.nytimes.com%2F2012%2F09%2F11%2Feducation%2Fteacher-strike-begins-in-chicago-amid-signs-that-deal-isnt-close.html%3Fsmid%3Dtw-nytimes%26seid%3Dauto
* http://embed.ly/docs/explore/article?url=http%3A%2F%2Fwww.economist.com%2Fnode%2F21562226

Response
--------

``authors``

  A list of all the authors that are associated with this article. Each author
  has a ``url`` and ``name``. Here is an example response::

    [{
      "name": "Sean Creeley"
      "url": "http://blog.embed.ly/screeley"
    }]

  Most articles have only one author, but ``authors`` makes it flexible enough
  to add more if necessary.

``title``

  Rather than using the page title, Embedly tries to intelligently pull a title
  that more accurately portrays the real title. For example, the page title may
  be::

    'This is my blog post about Startups - Yet another blog about Startups'

  The article title would more than likely be::

    'This is my blog post about Startups'

  Embedly will use ``H1`` tags, ``hentry`` and other methods to determine the
  best title.

``published``

  A representation of the date which the article was published in milliseconds.
  If an ``offset`` is present, then there was timezone data present, otherwise
  we assume the Date is in UTC. Like all dates, this is a little confusing, so
  we will explain. Say the Embedly parser came across the following HTML::

    <span class="pubdate">Aug 24, 2012</span>

  Because there is no timezone information, Embedly will not return an
  ``offset`` and the ``published`` attribute will be in UTC. We will return the
  following response::

    {
      ...
      "article": {
        "published": 1345766400000,
        "offset": null
        ...
      }
    }

  We can convert the ``published`` to a ``datetime`` in Python like so::

    >> import datetime
    >> import time
    >> published = 1345766400000
    >> datetime.datetime(*time.gmtime(published / 1000)[:7])
    datetime.datetime(2012, 8, 24, 0, 0, 0, 4)

  Or in Javascript::

    > var d = new Date(1345766400000);
    > d.toUTCString()
    "Fri, 24 Aug 2012 00:00:00 GMT"

  Note that Javascript math in the browser is a little different because it
  takes in account your timezone. I.e.:

    > var d = new Date(1345766400000);
    > d.toString()
    "Thu Aug 23 2012 20:00:00 GMT-0400 (EDT)"

  The date is actually the 23rd instead of the 24th because it's subtracting
  4 hours because of my timezone. If there is no ``offset`` it's a good idea to
  add your local offset to the ``published`` date so you have the correct day::

    > var local = new Date();
    // Convert minutes to milliseconds here.
    > var localOffset = local.getTimezoneOffset() * (60 * 1000);
    > var d = new Date(1345766400000 + localOffset);
    > d.toString();
    "Fri Aug 24 2012 00:00:00 GMT-0400 (EDT)"

  Now say the Embedly parser comes across this HTML::

    <time datetime="2012-08-28T10:37:00+02:00" pubdate>Aug 28th, 2012</time>

  In this case we have timezone data via a UTC offset of +2 hours, so the date
  is parsed a bit differently. Embedly will return the following result::

    {
      ...
      "article": {
        "published": 1346143020000,
        "offset": 7200000
        ...
      }
    }

  The ``offset`` is just +2 hours in milliseconds, if we just look at the
  ``published`` time you can see that the hour will be -6 hours in my browser
  because I'm in EDT::

    > var d = new Date(1346143020000);
    > d.toString();
    "Tue Aug 28 2012 04:37:00 GMT-0400 (EDT)"

  If you want the date in the timezone in which it was published you can add
  your local offset and the article ``offset`` to the ``published`` time::

    > var local = new Date();
    // Convert minutes to milliseconds here.
    > var localOffset = local.getTimezoneOffset() * (60 * 1000);
    > var published = 1346143020000;
    > var offset = 7200000;
    > var adjustedDate = new Date(published+offset+localOffset)
    > adjustedDate.toString()
    "Tue Aug 28 2012 10:37:00 GMT-0400 (EDT)"

  Oh Javascript, you are the best.

``offset``

  The UTC offset of the date in milliseconds. See the above section for more
  information about ``offset`` and how to use it with the ``published`` time.

``description``

  This is much like the ``excerpt`` of the article, but with a few changes that
  make it better to use in an index view of the articles. The length of the
  description is controlled by the ``words`` :doc:`query argument
  <../arguments>`. Unlike the ``excerpt``, ``description`` has the correct line
  breaks added. For example, imagine the following article ``content``::

    <div>
      <p>Text 1</p>
      <p>Text 2</p>
      <p>Text 3</p>
    </div>

  The description for the above would be::

    Text 1
    Text 2
    Text 3

``content``

  This is the html that we pulled from the URL. It's been sanitized, so it will
  only contain the following tags::

    'a', 'abbr', 'acronym', 'b', 'big', 'blockquote', 'br', 'cite', 'code',
    'del', 'dfn', 'em', 'i', 'ins', 'kbd', 'mark', 'pre', 'q', 's', 'samp',
    'small', 'span', 'strike', 'strong', 'sub', 'sup', 'time', 'tt', 'u',
    'var', 'p', 'div', 'a', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'ol', 'ul',
    'li'

  All tag attributes have been removed as well. The only effective 
  attributes are:

    * ``href`` on an ``a`` tag
    * ``src`` on an ``img`` tag
