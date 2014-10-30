Player.js
=========
Embedly's embeds come with the ability to programmatically control media,
allowing developers to play, pause, seek and listen to events. Player.js is an
Open Source library and specification that allows you interact with Embedly. We
aren't going to show you the whole spec here, but you can learn more about
Player.js here:

* `Player.js Homepage <http://playerjs.io>`_
* `Player.js Github <https://github.com/embedly/player.js>`_
* `Player.js SPEC <https://github.com/embedly/player.js/blob/master/SPEC.rst>`_

Intro
-----
To get started you first need to include Player.js near the closing body tag
of your html like so::

    ...
    <script type="text/javascript" src="//cdn.embed.ly/player-0.0.10.min.js"></script>
    <!-- Include your app.js scripts after player.js -->
    <script type="text/javascript" src="/path/to/app.js"></script>
  </body>

We then have to attach a Player to the iframe. If the embed already appears on
the page you can use jQuery to find all the embeds on the page and attach a
Player::

  $('iframe.embedly-embed').each(function(){
    // Create the player.
    var player = new playerjs.Player(this);

    // Wait for the player to be ready before attaching more event.
    player.on('ready', function(){

      //When the user hits play, do something.
      player.on('play', function(){
        console.log('play');
      });

    });
  });

If you are using Embedly jQuery to embed content, you can attach the player as
soon as you embed the html.
::

  $.embedly.oembed(url)
    .progress(function(obj){
      if (obj.type === "video" || obj.type === "rich"){
        var $iframe = $(obj.html);
        $(document.body).append($iframe);

        var player = new playerjs.Player($iframe[0]);

        // Alert the user when they finished a video.
        player.on('ended', function(){
          alert('Congrats, you finished!');
        });
      }
    });

There are many uses cases for Player.js and we think you are going to love
working with it.

Providers
---------
Sadly, Embedly is only able to control providers that have their own Javascript
API or have implemented the Player.js spec. The following is the current list
of providers supported, but we continually add more.

* YouTube
* Vimeo
* Soundcloud
* Vine
* Instagram
* DailyMotion
* Wistia
* Media Core
* Viddme
* Ustream
* Lovelive

Tutorials
---------
Player.js has a number of Tutorials that can help you get started.

* `Custom Progress Bar <http://playerjs.io/progress.html>`_
* `Resume Videos <http://playerjs.io/resume.html>`_
* `Scroll to Play <http://playerjs.io/scroll.html>`_
* `Player.js in Articles <http://playerjs.io/article.html>`_


