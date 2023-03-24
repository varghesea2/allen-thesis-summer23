var testdata;
var prediction;

function predict(data,weight){
    var f = 0;
    weight = [2.22225591e-01];
    for(var j=0;j<data.length;j++) {
      f += data[j] * weight[j];
    }
    return f > 0 ? 1 : -1;
}
function isStatusBarTampered(){
    if((document.querySelectorAll("a[onmouseover*='window.status']").length<=0) || (document.querySelectorAll("a[onclick*='location.href']").length<=0)){
        console.log("Not Present");
        return -1;
    }
    else{
        console.log("Window.status Present");
        return 1;
    }
}
console.log(Hellooo);
alert (Hello);


testdata = [isStatusBarTampered()];

prediction = predict(testdata);

chrome.extension.sendRequest(prediction);
