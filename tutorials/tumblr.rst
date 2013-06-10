Adding Embeds to Tumblr
=======================

This tutorial will help you add Embedly support to your Tumblr blog in 5 
minutes using `Embedly Anywhere <https://app.embed.ly/anywhere>`_. The
video below demonstrates the process we'll be describing.

.. raw:: html

    <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,115,0" width="640" height="390" id="42762c470357b37c3522c7e304a560e4"><param name="movie" value="https://embedly.viewscreencasts.com/public/ScreenrBusiness-3.5.1.swf"><param name="flashvars" value="v=5Fe4c5cc4ef0wweEs77b5e5^1kxFt*d24737a4^0i.ev.603236B*^FFel77b5e5^D^nSnee237200*d2F^my6032363*Cdcrn4c5cc4eta*F4b|237200*3*or.t24737a4^r0F*"><param name="allowFullScreen" value="true"><param name="AllowScriptAccess" value="always"><embed id="e42762c470357b37c3522c7e304a560e4" wmode="opaque" allowscriptaccess="always" src="https://embedly.viewscreencasts.com/public/ScreenrBusiness-3.5.1.swf" flashvars="v=5Fe4c5cc4ef0wweEs77b5e5^1kxFt*d24737a4^0i.ev.603236B*^FFel77b5e5^D^nSnee237200*d2F^my6032363*Cdcrn4c5cc4eta*F4b|237200*3*or.t24737a4^r0F*" allowfullscreen="true" width="640" height="390" pluginspage="http://www.macromedia.com/go/getflashplayer"></object>

Step 1: Anywhere Configuration
------------------------------

Click **Get Started** from https://app.embed.ly/anywhere. (If you don't have 
an Embedly account, you'll have to `sign up </embed>`_ for one.) Put your
tumblelog's address in the box on the left, then hit tab and wait until you
see a preview of your site.

If you know CSS, you may want to put a custom selector in the **Limit the
Scope** box. Otherwise, just put:

.. code-block:: css

    div#content div.post div.copy

This tells Embedly Anywhere to only generate embeds for the links in your
actual posts.

Click **Next**. You'll be taken to a screen where you can customize the
appearance of the embeds. For most tumblelogs, the defaults are fine.

Click **Next** again for more appearance settings. Choose "Light" if your
site uses dark text on a light background, and "Dark" if your site uses light
text on a dark background.

Click **Next** one last time to get to a screen where you can exclude domains;
Embedly Anywhere will ignore links that go to any of the sites you add to the
list. Add

    tumblr.com

to prevent links to your own posts from getting embeds. Then click **Finish**.

Step 2: Drop the <script> tag in
--------------------------------

Copy the ``<script>`` tag from the last screen of Embedly Anywhere. Log in to
your Tumblr, click **Customize Appearance** -> **Edit HTML**. Then paste the
``<script>`` tag in somewhere near the bottom of the page.

Click **Update Preview**. If your new embeds look good, click **Save**. Done!