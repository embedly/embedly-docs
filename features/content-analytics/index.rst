Content Analytics
=================

Content Analytics is the traditional web analytics as applied to internet
media.  For any URL on your site we track stats like the number of clicks,
number of page views, the number of video plays, and the amount of time spent
on specific articles, images, or videos.  Instead of having coarser page-level
analytics, you can drill down and identify the most engaging media on your
page, and tailor your content to your audience.  This data can be explored on
the level of individual users as well, offering an activity stream and
analytics.

Integration
-----------
You can integrate content analytics by including API calls to specific media
actions, including view, click, and share.

api.embed.ly/1/
--------------
The features for Content Analytics are available on the following endpoints for api.embedl.ly

Click
^^^^^
Click indicates that a user has visited a link.


View
^^^^
Measures how long a user has viewed an article.  This API is called while a user
is viewing an article.

Watch
^^^^^
Measures how long a video is being viewed.

Share
^^^^^
Share measures when a user shares a url, and is generalizable to media actions
such as "Liking".  Includes a freeform parameter that can
be used to log which site the media is shared on, or specify that the action is
a "Like".


Activity
^^^^^^^^
Embedly Activity endpoint showcases a weeks worth of activity on your site from one of your users.

Recommend
^^^^^^^^^
Embedly Recommend endpoint takes a look at your user or group of users most recent activity, including clicks, views and other interactions with your site. Then it uses them to recommend URLs in response to their specific activity.


Trending
^^^^^^^^
Embedly Popularity endpoint will use a specific client key to create a list of popular topics amongst your users and your site overall. Popularity doesn’t necessarily mean that these URLs are being accessed more often than not, but rather are steadily popular topics amongst your users.

Missed
^^^^^^
Embedly Missed endpoint chooses the most popular URLs on your site which have not been viewed yet by a specific user. It then sends a list of these “missed” URLs to the user for them catch up on.


Indentify
^^^^^^^^^

Embedly Identify endpoint associates a session cookie with a unique identifier that you provide it with. By creating this identifier, you can easily access all the data for one specific user. Furthermore, once a user is created, any previous association can be deleted and the new data takes over, or the data can be combined.

