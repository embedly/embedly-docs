Analytics Replace
=================

We'll start with the problem:

  I have an existing site that has a ton of embedded videos. I would like to
  use Embedly Analytics, what's the easiest way?

Replace allows you to easily convert your existing embeds to Embedly Embeds, so
we can measure engagement and attention.

Install
-------
To install ``platform.js`` with replace use the following code::

  <script>
    (function(w, d){
     var id='embedly-platform', n = 'script';
     if (!d.getElementById(id)){
       w.embedly = w.embedly || function() {(w.embedly.q = w.embedly.q || []).push(arguments);};
       var e = d.createElement(n); e.id = id; e.async=1;
       e.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cdn.embedly.com/widgets/platform.js';
       var s = d.getElementsByTagName(n)[0];
       s.parentNode.insertBefore(e, s);
     }
    })(window, document);

    // This is the imporant line. You will need to insert your API KEY here.
    embedly('replace', {key: '<Your Embedly Key>'});
  </script>

You should place this script in the head of your document. The script loads
asynchronously, so it won't slow down your page load times.

How is Works
------------
Replace looks for embeds from the following services:

* YouTube
* Vimeo
* Soundcloud

For example, you may have the following YouTube embed on your page::

  <iframe src="//www.youtube.com/embed/aaaa" ...></iframe>

Replace will look for iframe as they are added to the page and quickly convert
them to Embedly embeds, like so::

  <iframe src="//cdn.embedly.com/widgets/media?src=www.youtube..." ...></iframe>

We will then measure all events when the user starts playing the video.

