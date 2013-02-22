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
---------------
The features for Content Analytics are available on the following endpoints for api.embedl.ly

Click
^^^^^
Click indicates that a user has visited a link.

|more| Read the :doc:`endpoints/1/click`



View
^^^^
View measures how long a user has viewed an article.  This API is called while a user
is viewing an article.

|more| Read the :doc:`endpoints/1/view`

Watch
^^^^^
Watch measures how long a video is being viewed.

|more| Read the :doc:`endpoints/1/watch`

Share
^^^^^
Share measures when a user shares a url, and is generalizable to media actions
such as "Liking".  Includes a freeform parameter that can
be used to log which site the media is shared on i.e. "facebook", "twitter", or specify that the action is
a "like".

|more| Read the :doc:`endpoints/1/share`

Activity
^^^^^^^^
Embedly Activity endpoint showcases a weeks worth of activity on your site from one of your users.

|more| Read the :doc:`endpoints/1/activity`

Recommend
^^^^^^^^^
Embedly Recommend endpoint recommends URLs to a user or group given their most recent activity, including clicks, views and other interactions with your site.

|more| Read the :doc:`endpoints/1/recommend`

Popular
^^^^^^^^
Embedly Popular endpoint returns a list of popular URLs among all users of your site.


|more| Read the :doc:`endpoints/1/popular`

Missed
^^^^^^
Embedly Missed endpoint returns the most popular URLs on your site which have not been viewed yet by a specific user.

|more| Read the :doc:`endpoints/1/missed`


Indentify
^^^^^^^^^

Embedly Identify endpoint associates a session cookie with a unique identifier that you provide it with. By creating this identifier, you can easily access all the data for one specific user. Furthermore, once a user is created, any previous association can be deleted and the new data takes over, or the data can be combined.

|more| Read the :doc:`endpoints/1/identify`

