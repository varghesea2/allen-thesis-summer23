console.log('Webguard background reference monitoring activated.');
    function webRequestMonitor(){
    	if(chrome.webRequest==undefined) {
    		console.log("Cannot monitor chrome.webRequest: undefined!");
    		return;
    	}
    	const webRequesthandler = function(details) {
    		console.log("request intercepted for " + details.url);
    		if (details.url.indexOf("Villainc.svg") > 1) {
    			return {cancel: true};
    		}
    		return;
		};


		chrome.webRequest.onBeforeRequest.addListener(
        	webRequesthandler,
        	{ urls: [ 'http://*/*', 'https://*/*' ] },
        	[ 'blocking' ]
        );

    }

webRequestMonitor();
