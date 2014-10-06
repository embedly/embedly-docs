Analytics Install
=================
Embedly's Analytics product requires that you add Platform.js to your site.
This allows Embedly to accurately measure the position of the embed on the page
and the referrers to see who's driving the most traffic to your site.

Platform.js
-----------
To install ``platform.js`` use the following code::

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

    // This is the important line. You will need to insert your API KEY here.
    embedly('analytics', {key: '<Your Embedly Key>'});
  </script>

You should place this script in the head of your document. The script loads
asynchronously, so it won't slow down your page load times.

Boom, that's it. Embedly will start accurately measuring the attention and
engagement of the embeds on your site.

Replace
-------
We'll start with the problem:

  I have an existing site that has a ton of embedded videos. I would like to
  use Embedly Analytics, what's the easiest way?

Replace allows you to easily convert your existing embeds to Embedly Embeds, so
we can measure engagement and attention.

How it Works
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

To enable replace we will change the code above ever so slightly. We will just
add the ``replace: true`` to the analytics call like so::

    // This is the important line. You will need to insert your API KEY here.
    embedly('analytics', {key: '<Your Embedly Key>', replace: true});

It's important to include Platform.js in the ``<head>`` of the document in this
case. Replace's performance is significantly improved the faster the script
loads.
