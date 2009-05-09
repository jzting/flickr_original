if(!com) var com={};
if(!com.jzlabs) com.jzlabs={};
	
com.jzlabs.flickr_original = function(){	
	var flickr = {};
		
	flickr.init = function() {
		this.initialized = true;
		this.strings = document.getElementById("flickr-strings");
	}
	
	flickr.flickrIt = function(el, action)
	{				
			flickr.myTabRef = getBrowser().selectedTab;		
			flickr.tabBr = getBrowser().getBrowserForTab(flickr.myTabRef);
			flickr.doc = flickr.tabBr.contentDocument;

			// get image URL
			flickr.url = el.getAttribute("url");
			flickr.split_string = flickr.url.split("/");
			flickr.filename = flickr.split_string[4];
			flickr.id = flickr.filename.substring(0, flickr.filename.indexOf("_"));			

		// redirect based on action
		if(action==0)
			flickr.doc.location.href = "http://flickr.jzlabs.com/download/" + flickr.id;
		else
			flickr.doc.location.href = "http://flickr.jzlabs.com/view/" + flickr.id;

		// close context menu
		document.getElementById("contentAreaContextMenu").hidePopup();
	}
		
	flickr.showHide = function() {
		if (gContextMenu) {
			// Display view image context menu if user is on a viewable image:
			flickr.isViewableImage = gContextMenu.onImage;
			flickr.isFlickrImage = gContextMenu.imageURL.match(/flickr.com\//);
			flickr.viewImageListMenuItem = document.getElementById('context-flickr');
			flickr.viewImageListMenuItem2 = document.getElementById('context-flickr2');		
			if (flickr.viewImageListMenuItem) {
				flickr.viewImageListMenuItem.hidden = !(flickr.isViewableImage && flickr.isFlickrImage);
				flickr.viewImageListMenuItem.setAttribute("url", gContextMenu.imageURL);
				flickr.viewImageListMenuItem2.hidden = !(flickr.isViewableImage && flickr.isFlickrImage);
				flickr.viewImageListMenuItem2.setAttribute("url", gContextMenu.imageURL);			
			}
		}
	}		
	return flickr;
}();