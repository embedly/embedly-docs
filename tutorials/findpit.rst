Findpit Tutorial
================

This tutorial was adapted from a `post`_ on Embedly's `blog`_.

Findpit.com allows you to search Twitter for images built by them purely in
javascript using the Twitter Search API and the Embedly's oEmbed API. It was
built a year before Twitter launched their own version of photo search. To get
started you should have an understanding of how the Twitter Search API works,
read the Embedly oEmbed API.

The first thing we need to do is actually get the photo links. This is done by
using the Twitter search API with the query and filters. When a user inputs a
query like "hats" we need to tell twitter that we only want tweets from certain
providers and only with links. So the query for "hats" actually turns out to
be::

    "hats twitpic OR yfrog OR flic.kr OR lockerz.com OR twitgoo OR post.ly OR
    tumblr.com OR moby.to OR imgur filter:links"

You will notice that there are only 9 providers. Yes, we can do more, but
Twitter only lets our query be 140 characters long. So, we leave out
Photobucket, Phodriod, and a few others with long urls. To actually make the
call we use jQuery's $.ajax method:

    .. code-block:: javascript

        function searchTwitter(q){
          q += " twitpic OR yfrog OR flic.kr OR tweetphoto OR twitgoo OR post.ly OR
          tumblr.com OR moby.to OR imgur filter:links";
          $.ajax({url : "http://search.twitter.com/search.json?q="+escape(q)+"&rpp=20&callback=?",
            success : function(data){
              alert('Got Results');
            }
          });
        }

Now that we have the results, we can filter out the links from the tweets like
so:

    .. code-block:: javascript

        var urls = [];
        $.each(data.results, function(index, obj){
          //Find a url in the status
          var p = obj.text.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
          if (p != null){
            var u = p[0].replace(' ', '');
            urls.push(u);
          }
        });

Once we have those urls, we can send them to Embedly all at once to speed up the
overall response time:

    .. code-block:: javascript

        $.embedly(urls, {maxWidth:500}, function(oembed){
          //Make sure it's a photo and add it to the list.				
          if (oembed != null && oembed.type == "photo")
            $("UL").append('<li>'+oembed.code+'</li>');
        });

That's it for the coding, the rest stands in the html. All we need is a simple
form and binding the submit function to the ``searchTwitter`` function like so:

    .. code-block:: html

        <form action="" method="get">
          <input type="text" name="q"/>
          <input type="submit" name="q" value="Search"/>
        </form>

        <script>
          $(document).ready(function() {
            $("form").bind("submit", function(e){
              e.preventDefault();
              searchTwitter($(this).children("INPUT[name=q]").val())
              });
          });
        </script>

When we put that all together, we get findpit.com. Here is a simple version:

    .. code-block:: html

        <html>
          <head>
            <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
            <script type="text/javascript" src="http://scripts.embed.ly/jquery.embedly.js"></script>
          </head>
          <body>
            <form action="" method="get">
              <input type="text" name="q"/>
              <input type="submit" name="q" value="Search"/>
            </form>
            <ul></ul>
            <script>
            function searchTwitter(q){
              //Force twitter to only search image providers
              q += " twitpic OR yfrog OR flic.kr OR tweetphoto OR twitgoo OR post.ly OR tumblr.com OR moby.to OR imgur filter:links"
              $.ajax({url : "http://search.twitter.com/search.json?q="+escape(q)+"&rpp=20&callback=?",
              success : function(data){
                var urls = [];
                $.each(data.results, function(index, obj){
                  //Find a url in the status
                  var p = obj.text.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
                  if (p != null){
                    var u = p[0].replace(' ', '');
                    urls.push(u);
                  }
                });
            
                $.embedly(urls, {maxWidth:500}, function(oembed){
                  //Make sure it's a photo and add it to the list.				
                  if (oembed != null && oembed.type == "photo")
                    $("UL").append('<li>'+oembed.code+'</li>');
                });
              },
              dataType: "json"});
            }
            $(document).ready(function() {
              $("form").bind("submit", function(e){
                e.preventDefault();
                $("UL").html('');
                searchTwitter($(this).children("INPUT[name=q]").val())});
            });
          </script>
          </body>
        </html>

You can find the source for this tutorial at
`https://github.com/embedly/findpit <https://github.com/embedly/findpit>`_.


.. _post: http://blog.embed.ly/findpitcom-building-a-twitter-image-search-wi
.. _blog: http://blog.embed.ly/