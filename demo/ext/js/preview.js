
var Preview = (function(){
  // change the display depending on whether we're rendering for a facebook mockup or google plus mockup
  var target = 'plus';
  var Preview = {

    //The set of attributes that we want to POST to the form.
    attrs : ['type', 'orginal_url', 'url', 'title', 'description', 'favicon_url', 
    'provider_url', 'provider_display', 'safe', 'html', 'thumbnail_url'],

    /*
    Event Handlers
    ==============
    Logic that helps the form do what it's suppose to. There is nothing really
    all that special here in terms of 'the right way'. It's totally up to the
    developer.
    */
    
    // The bulk of the scroll left and right functions. dir is either 'left'
    // or 'right'. I'm pretty sure there is a better wat to do this.
    scroll : function(dir,e,t){
      e.preventDefault();
      //Grabs the current 'left' style
      var left = Ext.fly('images').getStyle('left');
      //Gets the number of images
      var len = Ext.fly('images').select('img').elements.length * 100;
      //General logic to set the new left value
      if (dir == 'left'){
        left = parseInt(left)+100;
        if (left > 0) return false;
      } else if (dir == 'right'){
        left = parseInt(left)-100;
        if (left <= -len) return false;
      } else {
        console.log('not a valid direction: '+dir)
        return false;
      }
      //Puts the current thumbnail into the thumbnail_url input
      Ext.fly('id_thumbnail_url').dom.value = Ext.DomQuery.select('#images li:nth-child('+((left/-100)+1)+') img')[0].src
      //Sets the new left.
      Ext.fly('images').setStyle('left',left+'px');
    },
    //Scrolls the image selector when the `right` button is clicked.
    scrollRight : function(e,t){Preview.scroll('right', e, t)},
    //Scrolls 
    scrollLeft : function(e,t){Preview.scroll('left', e, t)},
    
    // When a user wants to Edit a title or description we need to switch out
    // an input or text area
    setTitle : function(e,t){
      e.preventDefault();
      //Make it an Ext element.
      var elem = Ext.get(t);
      // Sets the New Title in the hidden inputs
      Ext.fly('id_title').dom.value = encodeURIComponent(elem.dom.value);
      //overwrite the a tag with the value of the tag.
      elem = elem.replaceWith({
          'tag' : 'a', 
          'class' : 'title',
          'html': elem.dom.value
      });
    },
    editTitle : function(e, t){
      e.preventDefault();
      //Make it an Ext element.
      var elem = Ext.get(t);
      //overwrite the a tag with the value of the tag.
      elem = elem.replaceWith({
        'tag' : 'input', 
        'type' : 'text',
        'class' : 'title',
        'value': elem.dom.innerHTML
      });
      //Set the focus on this element
      elem.focus();
      // puts the a tag back on blur. It's a single bind so it will be
      // trashed on blur.
      elem.on('blur', Preview.setTitle, null, {single: true});   
    },
    //Same as before, but for description
    setDescription : function(e,t){
      e.preventDefault();
      //Make t an Ext Element
      var elem = Ext.get(t);
      // Sets the New Description in the hidden inputs
      Ext.fly('id_description').dom.value = encodeURIComponent(elem.dom.value);
      //overwrite the a tag with the value of the tag.
      elem = elem.replaceWith({
        'tag' : 'a',
        'class' : 'description',
        'html': elem.dom.value
      });
      
    },
    editDescription: function(e,t){
      e.preventDefault();
      // Make t an Ext Element
      var elem = Ext.get(t);
      // overwrite the a tag with the value of the tag. Passes back the new
      // element.
      elem = elem.replaceWith({
        'tag' : 'textarea',
        'class' : 'description',
        'html': elem.dom.innerHTML
      });
      //Focus the Text Area
      elem.focus();
      //When the element is then blured update the value.
      elem.on('blur', Preview.setDescription, null, {single : true});
    },
    
    /*
    Feed Methods
    ============
    Methods that allow us to update the fake feed. We use window.localStorage
    to save off the items to the browser.
    */
    //This creates and adds an item to the feed.
    createFeedItem : function (data){
      // We need to create an element structure
      var elem = {};
      
      // the item div will have a bunch of data-* attributes that help us later
      // with events.
      Ext.each(Preview.attrs, function(n){elem['data-'+(n == 'html' ? 'embed' : n)] = encodeURIComponent(data[n])});

      //Set up the item div attributes.
      elem['tag'] = 'div';
      elem['class'] = 'item';
      elem['children'] = [{
        tag:'a',
        class : 'favicon',
        href : data.provider_url,
        title : data.provider_display,
        target :'_blank',
        children : [{
          tag : 'img',
          src : data.favicon_url
        }]
      },{
        tag:'a',
        class : 'title',
        href : data.url,
        html : data.title,
        target :'_blank'
      },{
        tag : 'div',
        class : 'grid_2 alpha thumbnail',
        children : [{
            tag : 'a',
            href : '#',
            class : data['type'] == 'video'? 'video' : '',
            children : [{
                tag : 'img',
                src : data.thumbnail_url
              },{
                tag : 'span',
                class : 'player_overlay'
              }]
          }]
        },{
        tag : 'div',
        class : 'info grid_5 omega',
        children : [{
          tag:'a',
          class: 'provider',
          href : data.provider_url,
          html : data.provider_display,
          target :'_blank'
        },
        {
          tag : 'p',
          html : data.description
        },
        {
          tag : 'a',
          class : 'close',
          href : '#',
          html : 'x'
        }]
      },
        {
          tag : 'div',
          class: 'clear',
          html : '&nbsp;'
        }];
      Ext.fly('feed').insertFirst(elem);
    },
    // Adds the feed item to localStorage so we can display them on refresh
    // You wouldn't use these in the real world. Only in testing.
    storeFeedItem: function(data){
      //Grab it out of localStorage.
      var items = window.localStorage.getItem('items');
      if (items === null) items = [];
      else items = JSON.parse(items);
      items.push(data);
      //Set it into storage, it must be a string to save.
      window.localStorage.setItem('items', JSON.stringify(items));
    },
    // Populates your feed on refresh.
    populateFeed: function(){
      // Get the items.
      var items = window.localStorage.getItem('items');
      if (items === null || items == '[]') return false;
      //Parse the string to JSON
      items = JSON.parse(items);
      //decode the values.
      //for (var n in items) items[n] = decodeURIComponent(items[n]);
      Ext.each(items, function(i){Preview.createFeedItem(i)});
      
      //We need to add the `first` class to the first .items
      Ext.fly('feed').first().addClass('first');
    },
    // When an Item is submitted we need to create the item in the feed and
    // store it in local storage.
    submitFeedItem: function(e,t){
      e.preventDefault(); 
      var data = {};
      // Get the data we need out of the form. These are all the hidden inputs
      // we used.
      Ext.select('#preview_form input').each(function(e){data[e.dom.name] = decodeURIComponent(e.dom.value)});
      //Create
      Preview.createFeedItem(data);
      //Stores
      Preview.storeFeedItem(data);
      
      //Resets the first Attribute on the 
      Ext.fly('feed').select('.item').removeClass('first');
      Ext.fly('feed').first().addClass('first');
    },
    deleteFeedItem: function(e,t){
      e.preventDefault(); 
      var elem = Ext.fly(t).parent('.item');
      var url = decodeURIComponent(elem.dom.getAttribute('data-url'));
      elem.remove();

      //Get rid of the url in the items dir.
      var items = window.localStorage.getItem('items');
      if (items === null) return false;
      //Parse the string to JSON
      items = JSON.parse(items);
      
      for (var i in items){
        var item = items[i];
        if (item.url == url){
          items.remove(item);
        }
      }
      window.localStorage.setItem('items', JSON.stringify(items));
    },
    
    /*
    playVideo
    
    */
    playVideo : function(e,t){
      e.preventDefault(); 
      var elem = Ext.fly(t).parent('.item');
      //
      elem.dom.innerHTML = decodeURIComponent(elem.dom.getAttribute('data-embed'));
    },
    
    /*
    Embedly Methods
    ===============
    This is where Embedly comes into play.
    */
    metadataCallback : function(obj){
      //tells the loader to stop
      Ext.fly('loading').hide();
      Ext.fly('loading').setStyle('display', 'none');

      // Here is where you actually care about the obj
      console.log(obj);

      // Every obj should have a 'type'. This is a clear sign that
      // something is off. This is a basic check to make sure we should
      // proceed. Generally will never happen.
      if (!obj.hasOwnProperty('type')){
        alert('Embedly returned an invalid response, or is down: '+url); 
        return false;
      }

      // Error. If the url was invalid, or 404'ed or something else. The
      // endpoint will pass back an obj  of type 'error'. Generally this is
      // were the default workflow should happen.
      if (obj.type == 'error'){
        alert('URL returned an error: '+ url); 
        return false;
      }

      // Generally you only want to handle preview objs that are of type
      // `html` or `image`. Others could include `ppt`,`video` or `audio`
      // which I don't believe you have a good solution for yet. We could
      // wrap them in HTML5 tags, but won't work cross browser.
      if (!(obj.type in {'html':'', 'image':''})){
        alert('URL returned a type not handled by salesforce: '+ url); 
        return false;
      }
      //display the display section
      Ext.fly('display').show();

      Ext.fly('id_submit').removeClass('disabled');
      // We are going to handle just images first. This is when a user
      // directly links to an image asset. i.e.
      //http://images.instagram.com/media/2011/08/01/55d07d3fac974d45ababdb7f04673f72_7.jpg
      if (obj.type == 'image'){
        //Add the image to the scoller that won't scroll in this case.
        Ext.DomHelper.append('images', 
          {
            'tag': 'li', 
            'children' : {
              'tag': 'img',
              'src' : obj.url
            }
          }
        );
      }

      // In here we handle the majority of the use cases. It's a link to an
      // html page with image assests and words. In this case you also
      // may have access to an `object` attribute which will be an image or
      // a video
      if (obj.type == 'html'){
        //add the title or a blank one.
        Ext.DomHelper.insertFirst('display', 
          {
            'tag': 'a',
            'class' : 'title',
            'href' : '#',
            'html' : obj.title ? obj.title : 'Click to add your own title.'
          }
        );
        
        // add the favicon to the preview to match Google Plus
        if(target == 'plus' && obj.favicon_url){
          Ext.DomHelper.insertFirst('display', 
            {
              'tag': 'img',
              'class' : 'favicon',
              'src' : obj.favicon_url
            }
          );
        }

        //add the description or a blank one.
        Ext.DomHelper.append('attributes', 
          {
            'tag': 'p',
            'children' : {
              'tag' : 'a',
              'class' : 'description',
              'href' : '#',
              'html' :obj.description ? obj.description : 'Click to add your own description.'
            }
          }
        );

        //Sets all the data to a hidden inputs for the post.
        for(var i in Preview.attrs){
          var n = Preview.attrs[i];
          Ext.DomHelper.append('preview_form', {
            tag:'input',
            name : n,
            type : 'hidden',
            id : 'id_'+n,
            value : obj.hasOwnProperty(n) && obj[n] ? encodeURIComponent(obj[n]): ''
          });
        }

        // Add all the images that are in the `images` array. This allows
        // the user to select which image they want to use
        for (var i in obj.images){
          var img = obj.images[i];
          if (!img.hasOwnProperty('url')) continue;
          Ext.DomHelper.append('images', 
            {
              'tag': 'li', 
              'children' : {
                'tag': 'img',
                'src' : img.url
              }
            }
          );
        }

        if (obj.images.length > 0){
          Ext.fly('id_thumbnail_url').dom.value = encodeURIComponent(obj.images[0].url);
        }

        //This is the fun where the video comes into play.
        if (obj.object && obj.object.type == 'video'){
          //Grab the source.
          Ext.fly('id_html').dom.value = obj.object.html;
          Ext.fly('id_type').dom.value = 'video';
        }
      }
      
    },
    // Fetches the Metadata from the Embedly API
    fetchMetadata: function(){
      //Grabs the status out of the Form.
      var status = Ext.fly('id_status').getValue();

      //ignore the status it's blank.
      if (status == ''){
        return false;
      }

      //Simple regex to make sure the url is valid.
      var urlexp = /^http(s?):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

      var matches = status.match(urlexp);

      //No urls is the status.
      if (matches === null){
        return false;
      };
      
      //Use the first url. An enhancement would be multiple URLs
      var url = matches[0];

      //Tells the loaded to start
      Ext.fly('loading').show();

      //sets up the data we are going to use in the request.
      data = {
        url:url, 
        key:'internal', //Your Key
        frame:true, //Load Everything in a frame
        secure:true, //Make sure that frame is secure.
        autoplay:true,
        maxwidth:500
      }

      // Make the request to Embedly. Note we are using the
      // preview endpoint: http://embed.ly/docs/endpoints/1/preview
      Ext.ux.JSONP.request('http://api.embed.ly/1/preview', {
        callbackKey: 'callback',
        params: data,
        callback: Preview.metadataCallback
      });      
    },

    //Binds all the Event Handlers
    bind : function(){
      //Scroll
      Ext.EventManager.on("right", 'click', Preview.scrollRight);
      Ext.EventManager.on("left", 'click', Preview.scrollLeft);

      //Equivalent to $('').live from what I understand.
      Ext.getBody().on('click', Preview.editTitle, null, {delegate: 'a.title'});
      Ext.getBody().on('click', Preview.editDescription, null, {delegate: 'a.description'});
      
      //Form submission
      Ext.EventManager.on("id_submit", "click", Preview.submitFeedItem);
      
      //Embedly Functions
      //Loses focus
      Ext.EventManager.on("id_status", 'blur', Preview.fetchMetadata);
      
      //onPaste Event
      Ext.EventManager.on("id_status", 'paste', Preview.fetchMetadata);

      //onKeyUp Event
      //Ext.EventManager.on("id_status", 'keyup', Preview.fetchMetadata);

      //Show and Hide the little x button.
      Ext.getBody().on('mouseover', function(e,t){Ext.fly(t).select('a.close').show();}, null, {delegate: 'div.item'});
      Ext.getBody().on('mouseout', function(e,t){Ext.fly(t).select('a.close').hide();}, null, {delegate: 'div.item'});
      //Do something about the little x button. (useful for testing.)
      Ext.getBody().on('click', Preview.deleteFeedItem, null, {delegate: 'a.close'});
      
      //Wire up the video action
      Ext.getBody().on('click', Preview.playVideo, null, {delegate: 'a.video'});
    }
    
  };
  return Preview;
})();

Ext.onReady(function(){
  //Once everything is ready bind the events.
  Preview.bind();

  //Populate the feed
  Preview.populateFeed();

});