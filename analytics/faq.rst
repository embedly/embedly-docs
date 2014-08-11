Analytics FAQ
=============
This document is meant to describe how Embedly Analytics works and try to
resolve any questions you may have.

Intro
-----
We started off with the question: Why do people embed videos?

Seems like a pretty simple question, but it leads down a rabbit hole that ends
with Analytics.

Every time you tweet with a link, post a something on Facebook or share a link
on Reddit you are embedding a piece of content. It's not explicit, but the
platform takes care of it for you and it's expected behavior on the web.

What we are doing is curating based on our personal taste and our audience's
taste. We are building authority and showing personality to create engagement
in the hopes that they return as frequent users.

In the web's current state we measure this engagement by counting page views,
social share and a number of other proxies to the real number that we want. How
many people watched the video I shared and for how long.

We can then use this number to measure truly, how engaged our user base is with
a video. We aren't the only ones doing this, Medium has a metic of reading time
and Upworthy measure engagement minutes.

Embedly, well we measure time.

How it Works
------------

Whenever you embed a video or rich media through Embedly, we wrap the embed in
our own iframe. For example, a youtube embed that originally looked like this::

  <iframe src="//www.youtube.com/embed/aaaa" ...></iframe>

Becomes::

  <iframe src="//cdn.embedly.com/widgets/media?src=www.youtube..." ...></iframe>

Within our iframe, Embedly is doing a number of clever things to normalize
embeds accross a number of providers. We handle SSL, Mobile and wire up hooks
to make the player.js SPEC work.

Embedly then binds our own listeners to the Embed's Javascript API to listen to
`play`, `pause`, `timeupdate` and `ended`. We then record all this information
by sending it to our processing cluster.

Support
-------
Embedly relies on the embed having a JavaScript API so we can process these
events. Without one, we can only measure visits and hovers. These are the
providers that we support:

* YouTube
* Vimeo
* Vine
* Instagram
* SoundCloud
* DailyMotion
* Wistia
* Viddme

Measuring Time
--------------
Embedly might tell you that 1 year of video was watched on your site in a given
month, so what does that mean an how did we get that number?

Every time a user starts playing a video, we send send progress events at set
intervals. Currently these intervals are the following:

5 seconds, 15 seconds, 30 seconds, 1 minute, 1.5 minutes, 2 minutes, 2.5
minutes etc at 30 second intervals.

To keep the performance of the video humming, we do not want to bog down the
browser by making a ton of HTTP requests to record progress events. Users
generally will abandon the video early, so we make a number of progress event
then, but ease off after 30 seconds.

When the video ends, we will also trigger a progress event to capture progress.

Watching a video is however a messy endeavor. Video's buffer, we jump around
the video looking for the good parts and abandon the video quickly by closing
the tab. Embedly handles the seeking and buffering well, but abandoning the
video is a little more tricky.

Consider the case of a video that is 2 minutes and 30 seconds long. I as a user
watch 2 minutes and 10 seconds of the video then close the tab, how long does
Embedly record that view for?

2 minutes.

We will record that the user watched the following parts:

0-5, 5-15, 15-30, 30-60, 60-90, 90-120

But the last 10 seconds eludes us, as we never got to the last interval and the
video never ended. For this reason all time watched is approximate. If you
average over a large group, the number are lower by about 5-10%.

The important part here is that the numbers are calculated the same way for
every video. Meaning that you can easily compare the performance between one
video and another or one week to the other.

What We Measure
---------------
Embedly currently measures a 3 different actions, `visit`, `hover`, `play`

Visit
"""""
A visit is much the same as a page view in that the embed was loaded on a page.

Hover
"""""
A user hovered over the embed, in that the mouse was a some point over the
embed. This is useful for doing funnel analysis from visit to hover to play.

Play
""""
A user hit the play button and started to watch the video. You will notice a
large difference between unique plays and total plays. This is because most
embeds fire a play event whenever the video buffered, was seeked or a number of
other actions that could cause the video to pause for a brief time then resume.

Embedly normalizes this down to the Unique plays so you do not have to worry
about these artifacts.

Mobile
------
Because of the manner in which iOS and Andriod handle videos, we are unable to
track mobile progress events. We will track visits and plays, but we are unable
to track progress for mobile devices.




