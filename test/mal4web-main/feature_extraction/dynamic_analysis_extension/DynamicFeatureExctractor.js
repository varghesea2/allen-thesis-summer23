var injectee = document.createElement("script");
injectee.innerHTML = `
(function() {
  var host_origin = (new URL(window.location)).origin;
  var CORS_enabled = 'withCredentials' in new XMLHttpRequest();
  var origin_source_read = new Map();
  var debug = true;
  function MWD_log(s){
      if((!debug) || (!console.log)) return;
      console.log('MWD log: '+s);
  }
  MWD_log("starting DynamicFeatureExtractor.js");
  /******** Begin the IRM code **********/
    //The common monitor function to intercept a function call with a policy
    var monitorMethod = function(object, method, policy) {
		
      if (object === null || object === undefined ) {
          console.log('Failed to find function for alias ' + method);
          return;
      }
	  
      while (!hasOwnProperty.call(object, method) && object._proto_)
        object = object._proto_;
	
      var original = object[method];
      if ((original === null) || (original === undefined))
      throw new Error('No method ' + method +'found for '+object);
      object[method] = function wrapper(image) {
          var object = this;
          var orgArgs = arguments;
          var proceed = function() {
            return original.apply(object, orgArgs);
          };
          return policy(orgArgs, proceed,object);
      }
	  if((original instanceof Function)==false && original!="")
	  {
		  return policy(null, null,object);
	  }
    }
    const features = new Map(); //this is to store all features
    features.set('URL',window.location.href);
    function addtofeatures(column) {
		//alert(column);
      var value = features.get(column);
      if (!value)
        value = 1;
      else
        value += 1;
      features.set(column,value);
      console.log("Debug set features['"+column+"']=" +value);
    }

    //1. document.getElementById:
    function getElementById_monitor(args, proceed, obj) {
      addtofeatures("document.getElementById");
      return proceed();  
    }    
    monitorMethod(document, "getElementById", getElementById_monitor);

     //2. window.eval:
    function eval_monitor(args, proceed, obj) {
       addtofeatures("window.eval");
        return proceed();
      }
      monitorMethod(window, "eval", eval_monitor);
      
      //3. window.setInterval:
      function setinterval_monitor(args, proceed, obj) {
        addtofeatures("window.setInterval");
         return proceed();
       }
       monitorMethod(window, "setInterval", setinterval_monitor);
        
       //4. navigator.userAgent
       function getUserAgent_monitor(args, proceed, obj) {
        addtofeatures("navigator.userAgent");
        return proceed;  
      }
      monitorMethod(navigator, "userAgent", getUserAgent_monitor);

      //5. navigator.platform
      function get_platform_monitor(args, proceed, obj) {
       addtofeatures("navigator.platform");
       return proceed;  
     }
     monitorMethod(navigator, "platform", get_platform_monitor);
     
     //5. window.setTimeout
     function setTimeout_monitor(args, proceed, obj) {
        addtofeatures("window.setTimeout");
         return proceed();
       }
       monitorMethod(window, "setTimeout", setTimeout_monitor);
        
       //6. Math.random
     function mathrandom_monitor(args, proceed, obj) {
        addtofeatures("Math.random");
         return proceed();
       }
       monitorMethod(Math, "random", mathrandom_monitor);

       //7. window.XMLHttpRequest
     function XMLHttpRequest_monitor(args, proceed, obj) {
        addtofeatures("window.XMLHttpRequest");
        //var obj = Object.create(XMLHttpRequest.prototype);
        //XMLHttpRequest.call(obj);
        var obj = new XMLHttpRequest();
        return proceed();
           }
       monitorMethod(window, "XMLHttpRequest", XMLHttpRequest_monitor);

        //8. document.unescape
        function unescape_monitor(args, proceed, obj)
        {
          addtofeatures("document.write");
          return proceed();

        }
        monitorMethod(document, "write", unescape_monitor)

        //9. 

        //Yet to fix bug's
       /*    //6.document.removeAttribute

     function removeAttribute_monitor(args, proceed, obj)
     {
       addtofeatures("document.removeAttribute");
       return proceed();

     }
monitorMethod(document, "removeAttribute",removeAttribute_monitor )


        //6. DispatchEvent
     function dispatchEvent_monitor(args, proceed, obj) {
      addtofeatures("window.dispatchEvent");
      return proceed();  
    }    
    monitorMethod(window, "dispatchEvent", dispatchEvent_monitor);



      //6. document.split
      function split_monitor(args, proceed, obj) {
        addtofeatures("separator.split");
        return proceed();  
      }   
      monitorMethod(separator, "split", split_monitor);

      //7. "string".search
      function string_search_monitor(args, proceed, obj) {
        addtofeatures("String.search");
        return proceed();  
      }   
      monitorMethod(String, "string_search", string_search_monitor);
*/

    try {
    }
    catch (err) {
    alert(err.message);
    }

  function uploadfeatures() {
      //all features:
      console.log(features);
      //next step is to convert it to JSON and store it on the server
    }
    //catch the onload event and print out the features to see.
    document.addEventListener("DOMContentLoaded", uploadfeatures, false);
})();
`;
document.documentElement.appendChild(injectee);