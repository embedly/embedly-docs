Mobile
======
With the number of different types of devices these days, it's hard to define
what mobile means to developers these days. Embedly supports mobile devices in
that our Embeds work on iOS, Andriod or any other device that supports common
HTML5 features.

However our support is limited to only the providers that support all mobile
devices. The good news that most platforms work everywhere.

HTML5
-----
If your site or app runs via a browser then you have nothing to worry about.
Use Embedly the same way you would in any website.

If Embedly detects that an embed is being served via Flash then we will show a
thumbnail and a play button instead of trying to Embed the Flash object if you
are on an iOS device.

iOS
---
If you are building a native app in iOS then we highly recommend checking out
our `iOS <https://github.com/embedly/embedly-ios>`_ Library. It contains all
the code you will need to embed videos with Embedly.

Use the Embedly iOS library to make an API call to Embed or Extract. You will
need the 'html' attribute for your video.

* media.html in extract response
* html in embed response

You'll need a web view to render the HTML. To render the embed::

  [self.webView loadHTMLString:embedHTML baseURL:[[NSURL alloc] initWithString:@"http://cdn.embedly.com"]];

That's all there is to it! If you want to trigger the video to play from
another part of your app (or just to autoplay), you can do this using
Player.js.

The idea here is to inject playerjs into the embed's HTML::

  NSString *injectedHTML = [NSString stringWithFormat:@"%@ \\
    <script type=\"text/javascript\" src=\"http://cdn.embed.ly/player-0.0.10.min.js\"></script> \\
  ", embedHTML];
  [self.webView loadHTMLString:injectedHTML baseURL:[[NSURL alloc] initWithString:@"http://cdn.embedly.com"]];
  self.webView.mediaPlaybackRequiresUserAction = NO;

Then evaluate JavaScript to play the video from outside the web view::

  NSString *jsPlay = @"var iframe = document.getElementsByClassName('embedly-embed')[0]; \\
    var player = new playerjs.Player(iframe); \\
    player.on('ready', function(){ \\
        player.play(); \\
  });";
  [self.webView stringByEvaluatingJavaScriptFromString:jsPlay]

Triggering the video to play with javascript allows you to do nice things like
make the web view small and hide it behind a nice thumbnail image.

Android
-------
If you are building a native app in Android then we recommend using our
`Java <https://github.com/embedly/embedly-java>`_  Library to make an API call
to Embed or Extract. There is a demo `Android App
<https://github.com/dokipen/embedly-android-demo>`_ that you can use to get
started. You will need the `html` attribute for your video::

  import java.util.HashMap;
  import org.json.JSONArray;
  import com.embedly.api.Api;

  ...

  Api api = new Api('Mozilla/5.0 (compatible; mytestapp/1.0; my@email.com)');
  HashMap<String, Object> params = new HashMap<String, Object>();
  params.put('url', 'http://www.youtube.com/watch?v=sPbJ4Z5D-n4&feature=topvideos');
  JSONArray oembed = api.oembed(params);
  String oembedHTML = oembed.getString("html")

You'll need a web view to render the HTML. To render the embed::

  embedWebView.getSettings().setJavaScriptEnabled(true);
  embedWebView.getSettings().setPluginsEnabled(true);
  embedWebView.loadDataWithBaseURL("http://cdn.embedly.com", embedHTML, "text/html", "utf-8");

That's all there is to it!

If you want to trigger the video to play from another part of your app (or just
to autoplay), you can do this using playerjs.

The idea here is to inject playerjs into the embed's HTML::

  StringBuffer embedBuf = new StringBuffer();
  embedBuf.append("<script src=\"http://cdn.embed.ly/player-0.0.10.min.js\"></script");
  embedBuf.append(oembedHTML);
  embedWebView.getSettings().setJavaScriptEnabled(true);
  embedWebView.getSettings().setPluginsEnabled(true);
  embedWebView.loadData(embedBuf.toString(), "text/html", "utf-8");

Then evaluate javascript to play the video from outside the web view::

  String play = "var i=document.getElementsByClassName('embedly-embed')[0];var p=new playerjs.Player(i);p.on('ready', function(){p.play()});";
  embedWebView.getSettings().setMediaPlaybackRequiresUserGesture(false);
  embedWebView.evaluateJavascript(play, null);

Triggering the video to play with javascript allows you to do nice things like
make the web view small and hide it behind a nice thumbnail image.