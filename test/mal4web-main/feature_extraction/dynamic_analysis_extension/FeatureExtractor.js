
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
  MWD_log("starting FeatureExtractor.js");
  
  try {
    
    window.addEventListener('load',function(){

      // Page loaded. Fetch all the scripts
      let all_scripts = document.querySelectorAll('script');
      for(let i =0;i<all_scripts.length;i++){
        if (all_scripts[i].src)
          console.log("Detected script: "+all_scripts[i].src);
        else
          console.log("Detected local script with inline execution");
      }
  });
  window.onload = function(){
    // your JS here

  (function() {
    var startingTime = new Date().getTime();
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existance
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 20);
        }
    };

    // Start polling...
    checkReady(function($) {
        $(function() {
            var endingTime = new Date().getTime();
            var tookTime = endingTime - startingTime;
            window.alert("jQuery is loaded, after " + tookTime + " milliseconds!");
        });
    });
})();

  var url="https://www.gstatic.com/recaptcha/releases/NMoy4HgGiLr5NAQaEQa2ho8X/recaptcha__en.js";
  $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data){
    var myJSON = JSON.stringify(data.contents);
    console.log(myJSON);
  });
    
}
     
    
 
  //var name = "codemzy";var url = "http://anyorigin.com/go?url=" + encodeURIComponent("https://www.gstatic.com/recaptcha/releases/NMoy4HgGiLr5NAQaEQa2ho8X/recaptcha__en.js") + name + "&callback=?";$.get(url, function(response) {  console.log(response);}); 
//var name = "codemzy";$.get('https://www.gstatic.com/recaptcha/releases/NMoy4HgGiLr5NAQaEQa2ho8X/recaptcha__en.js' + name, function(response) {  console.log(response);});
    
   /* var HTML_FILE_URL = 'https://udayton.edu/';

    $(document).ready(function() {
        $.get(HTML_FILE_URL, function(data) {
            var fileDom = $(data);
            fileDom.find('h2').each(function() {
            });
        });
    });

    */


 }
  catch (err) {
    alert(err.message);
  }


})();
`;
document.documentElement.appendChild(injectee);
