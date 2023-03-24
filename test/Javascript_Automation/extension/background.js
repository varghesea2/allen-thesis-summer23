"use strict"
function API_COUNT() {
    const linkElement = document.createElement('link');
    var CountOfApis = {};
    entries = [];
    window.gEntries = [];
    csv = [];
    //window.gEntries = entries;

    // Declare Variables
    var old_alert;
    var old_ElementById;
    var old_TagName;
    var old_eval;
    var old_log;
    var old_random;
    var old_ClassName;
    var old_WindowOpen;
    var old_writeln;
    var old_document_open;
    //var old_TimeOut;
    var old_SetInterval;
    var old_EventListener;
    var old_createElement;
    var old_captureEvents;
    var old_elementFromPoint;
    var old_getRootNode;
    var old_getSelection;
    var old_hasChildNodes;
    var old_hasOwnProperty;
    var old_isDefaultNamespace;
    var old_isEqualNode;
    var old_isSameNode;
    var old_isPrototypeOf;
    var old_lookupNamespaceURI;
    var old_lookupPrefix;
    var old_normalize;
    var old_queryCommandEnabled;
    var old_queryCommandState;
    var old_removeEventListener;
    var old_releaseEvents;
    var old_toLocaleString;
    var old_valueOf;
    var old_cloneNode;
    var old_contains;
    var old_search;
    //var old_split;
    var old_charAt;
    //var old_log;
    //var old_random;
    var old_charCodeAt;
    var old_fromcharCodeAt;
    var old_concat;
    var old_indexof;
    var old_substring;
    var old_replace;
    var old_write;
    var old_escape;
    var old_unescape;
    var old_parseInt;
    var old_WindowOnload;
    var old_navigator_sendBeacon;
    var old_Image;
    var old_Image_src;
    //var old_Window_location;
    var old_document_cookie;
    var old_canvas_toDataURL;
    var old_atob;
    //var old_charCodeAt;
    var old_base64ToArrayBuffer;
    var old_msSaveOrOpenBlob;
    var old_createObjectURL;
    var old_revokeObjectURL;
    var old_Uint8Array;
    var old_Blob;




    function addtoCount(api) {
        if (CountOfApis[api] != undefined)
            CountOfApis[api]++;
        else
            CountOfApis[api] = 1;
        entries = [...Object.entries(CountOfApis)];
        window.gEntries = entries = [...Object.entries(CountOfApis)];
        //const csv_data = downloadCSVFile(entries);
        //window.csv_data = csv_data;
        //entries = JSON.stringify(CountOfApis);
        //console.log(entries);
        //console.log(window.gEntries);
    }

    old_alert = window.alert;
    window.alert = function () {
        console.log(" window.alert is being monitored");
        const obj = this;
        const args = arguments;
        old_alert.apply(obj, args);
        addtoCount('window.alert') + 1;
    }


    old_ElementById = document.getElementById;
    document.getElementById = function () {
        console.log("document.getElementById is being monitored");
        const obj = this;
        const args = arguments;
        old_ElementById.apply(obj, args);
        addtoCount('getElementById') + 1;
    }

    old_TagName = document.getElementsByTagName;
    document.getElementsByTagName = function () {
        console.log("document.getElementsByTagName is being monitored");
        const obj = this;
        const args = arguments;
        old_TagName.apply(obj, args);
        addtoCount('getElementsByTagName') + 1;
    }

    old_ClassName = document.getElementsByClassName;
    document.getElementsByClassName = function () {
        console.log("Class Name is being Monitored");
        const obj = this;
        const args = arguments;
        old_ClassName.apply(obj, args);
        addtoCount('getElementsByClassName') + 1;
    }

    // old_WindowOpen = window.open;
    // window.open = function () {
    //     console.log("Window.Open is being monitored");
    //     const obj = this;
    //     const args = arguments;
    //     old_WindowOpen.apply(obj, args);
    //     addtoCount('WindowOpen') + 1;
    // }

    old_WindowOpen = window.open;
    window.open = function (URL, name, specs, replace) {
        console.log("URL length is being monitored");
        const obj = this;
        const args = arguments;
        old_WindowOpen.apply(obj, args);
        addtoCount("URL length") + URL.length;
    };

    old_WindowOnload = window.onload;
    window.onload = function () {
        console.log("Window.onload is being monitored");
        const obj = this;
        const args = arguments;
        old_WindowOnload.apply(obj, args);
        addtoCount('WindowOnload') + 1;
    }


    old_writeln = document.writeln;
    document.writeln = function () {
        console.log("document.writeln is being monitored");
        const obj = this;
        const args = arguments;
        old_writeln.apply(obj, args);
        addtoCount("DocumentWriteln") + 1;

    }

    old_document_open = document.open;
    document.open = function () {
        console.log("document.open is being monitored");
        const obj = this;
        const args = arguments;
        old_document_open.apply(obj, args);
        addtoCount("DocumentOpen") + 1;

    }

    old_eval = window.eval;
    window.eval = function () {
        console.log(" window.eval is being monitored");
        const obj = this;
        const args = arguments;
        old_eval.apply(obj, args);
        addtoCount('window.eval') + 1;
    }

    // old_TimeOut = window.setTimeout;
    // window.setTimeout = function () {
    //     console.log(" setTimeout is being monitored");
    //     const obj = this;
    //     const args = arguments;
    //     old_TimeOut.apply(obj, args);
    //     addtoCount('TimeOut') + 1;
    // }

    old_SetInterval = window.setInterval;
    window.setInterval = function () {
        console.log(" setInterval is being monitored");
        const obj = this;
        const args = arguments;
        old_SetInterval.apply(obj, args);
        addtoCount('SetInterval') + 1;
    }

    old_EventListener = document.addEventListener;
    document.addEventListener = function () {
        console.log("addEventListener is being monitored");
        const obj = this;
        const args = arguments;
        old_EventListener.apply(obj, args);
        addtoCount("EventListener") + 1;

    }

    old_createElement = document.createElement;
    document.createElement = function () {
        console.log("createElement is being monitored");
        const obj = this;
        const args = arguments;
        old_createElement.apply(obj, args);
        addtoCount("createElement") + 1;
    }


    // old_createElement = document.createElement;
    // document.createElement = function () {
    //     const obj = this;
    //     const args = arguments;

    //     // Using the captureStackTrace function to get a stack trace
    //     const stackTrace = (new Error()).stack;
    //     if (stackTrace.includes("linkElement.setAttribute")) {
    //         console.log("createElement is being monitored from linkElement.setAttribute");
    //         addtoCount("createElement") + 1;
    //     } else {
    //         console.log("createElement is being monitored");
    //         addtoCount("createElement") + 1;
    //     }

    //     return old_createElement.apply(obj, args);
    // }





    old_captureEvents = document.captureEvents;
    document.captureEvents = function () {
        console.log("captureEvents is being monitored");
        const obj = this;
        const args = arguments;
        old_captureEvents.apply(obj, args);
        addtoCount("captureEvents") + 1;
    }

    old_elementFromPoint = document.elementFromPoint;
    document.elementFromPoint = function () {
        console.log("elementFromPoint is being monitored");
        const obj = this;
        const args = arguments;
        old_elementFromPoint.apply(obj, args);
        addtoCount("elementFromPoint") + 1;
    }

    old_getRootNode = document.getRootNode;
    document.getRootNode = function () {
        console.log("getRootNode is being monitored");
        const obj = this;
        const args = arguments;
        old_getRootNode.apply(obj, args);
        addtoCount("getRootNode") + 1;

    }

    old_getSelection = document.getSelection;
    document.getSelection = function () {
        console.log("getSelection is being monitored");
        const obj = this;
        const args = arguments;
        old_getSelection.apply(obj, args);
        addtoCount("getSelection") + 1;

    }

    old_hasChildNodes = document.hasChildNodes;
    document.hasChildNodes = function () {
        console.log("hasChildNodes is being monitored");
        const obj = this;
        const args = arguments;
        old_hasChildNodes.apply(obj, args);
        addtoCount("hasChildNodes") + 1;

    }

    old_hasOwnProperty = document.hasOwnProperty;
    document.hasOwnProperty = function () {
        console.log("hasOwnProperty is being monitored");
        const obj = this;
        const args = arguments;
        old_hasOwnProperty.apply(obj, args);
        addtoCount("hasOwnProperty") + 1;

    }

    old_isDefaultNamespace = document.isDefaultNamespace;
    document.isDefaultNamespace = function () {
        console.log("isDefaultNamespace is being monitored");
        const obj = this;
        const args = arguments;
        old_isDefaultNamespace.apply(obj, args);
        addtoCount("isDefaultNamespace") + 1;

    }

    old_isEqualNode = document.isEqualNode;
    document.isEqualNode = function () {
        console.log("isEqualNode is being monitored");
        const obj = this;
        const args = arguments;
        old_isEqualNode.apply(obj, args);
        addtoCount("isEqualNode") + 1;

    }

    old_isSameNode = document.isSameNode;
    document.isSameNode = function () {
        console.log("isSameNode is being monitored");
        const obj = this;
        const args = arguments;
        old_isSameNode.apply(obj, args);
        addtoCount("isSameNode") + 1;

    }

    old_isPrototypeOf = document.isPrototypeOf;
    document.isPrototypeOf = function () {
        console.log("isPrototypeOf is being monitored");
        const obj = this;
        const args = arguments;
        old_isPrototypeOf.apply(obj, args);
        addtoCount("isPrototypeOf") + 1;

    }

    old_lookupNamespaceURI = document.lookupNamespaceURI;
    document.lookupNamespaceURI = function () {
        console.log("lookupNamespaceURI is being monitored");
        const obj = this;
        const args = arguments;
        old_lookupNamespaceURI.apply(obj, args);
        addtoCount("lookupNamespaceURI") + 1;

    }

    old_lookupPrefix = document.lookupPrefix;
    document.lookupPrefix = function () {
        console.log("lookupPrefix is being monitored");
        const obj = this;
        const args = arguments;
        old_lookupPrefix.apply(obj, args);
        addtoCount("lookupPrefix") + 1;

    }

    old_normalize = document.normalize;
    document.normalize = function () {
        console.log("normalize is being monitored");
        const obj = this;
        const args = arguments;
        old_normalize.apply(obj, args);
        addtoCount("normalize") + 1;

    }

    old_queryCommandEnabled = document.queryCommandEnabled;
    document.queryCommandEnabled = function () {
        console.log("queryCommandEnabled is being monitored");
        const obj = this;
        const args = arguments;
        old_queryCommandEnabled.apply(obj, args);
        addtoCount("queryCommandEnabled") + 1;

    }

    old_queryCommandState = document.queryCommandState;
    document.queryCommandState = function () {
        console.log("queryCommandState is being monitored");
        const obj = this;
        const args = arguments;
        old_queryCommandState.apply(obj, args);
        addtoCount("queryCommandState") + 1;

    }

    old_removeEventListener = document.removeEventListener;
    document.removeEventListener = function () {
        console.log("removeEventListener is being monitored");
        const obj = this;
        const args = arguments;
        old_removeEventListener.apply(obj, args);
        addtoCount("removeEventListener") + 1;

    }

    old_releaseEvents = document.releaseEvents;
    document.releaseEvents = function () {
        console.log("releaseEvents is being monitored");
        const obj = this;
        const args = arguments;
        old_releaseEvents.apply(obj, args);
        addtoCount("releaseEvents") + 1;

    }

    old_toLocaleString = document.toLocaleString;
    document.toLocaleString = function () {
        console.log("toLocaleString is being monitored");
        const obj = this;
        const args = arguments;
        old_toLocaleString.apply(obj, args);
        addtoCount("toLocaleString") + 1;

    }

    old_valueOf = document.valueOf;
    document.valueOf = function () {
        console.log("valueOf is being monitored");
        const obj = this;
        const args = arguments;
        old_valueOf.apply(obj, args);
        addtoCount("valueOf") + 1;

    }

    old_cloneNode = document.cloneNode;
    document.cloneNode = function () {
        console.log("cloneNode is being monitored");
        const obj = this;
        const args = arguments;
        old_cloneNode.apply(obj, args);
        addtoCount("cloneNode") + 1;

    }

    old_contains = document.contains;
    document.contains = function () {
        console.log("contains is being monitored");
        const obj = this;
        const args = arguments;
        old_contains.apply(obj, args);
        addtoCount("contains") + 1;

    }

    old_search = String.prototype.search;
    String.prototype.search = function () {
        console.log("String.prototype.search is being monitored");
        const obj = this;
        const args = arguments;
        old_search.apply(obj, args);
        addtoCount("String.prototype.search") + 1;

    }

    // old_split = String.prototype.split;
    // String.prototype.split = function () {
    //     console.log("String.prototype.split is being monitored");
    //     const obj = this;
    //     const args = arguments;
    //     old_split.apply(obj, args);
    //     addtoCount("String.prototype.split") + 1;

    // }

    old_charAt = String.prototype.charAt;
    String.prototype.charAt = function () {
        console.log("String.prototype.charAt is being monitored");
        const obj = this;
        const args = arguments;
        old_charAt.apply(obj, args);
        addtoCount("String.prototype.charAt") + 1;

    }

    old_log = Math.log;
    Math.log = function () {
        console.log("Math.log is being monitored");
        const obj = this;
        const args = arguments;
        old_log.apply(obj, args);
        addtoCount("Math.log") + 1;

    }

    old_random = Math.random;
    Math.random = function () {
        console.log("Math.random is being monitored");
        const obj = this;
        const args = arguments;
        old_random.apply(obj, args);
        addtoCount("Math.random") + 1;

    }

    old_charCodeAt = String.prototype.charCodeAt;
    String.prototype.charCodeAt = function () {
        console.log("String.prototype.charCodeAt is being monitored");
        const obj = this;
        const args = arguments;
        old_charCodeAt.apply(obj, args);
        addtoCount("String.prototype.charCodeAt") + 1;

    }

    old_fromcharCodeAt = String.fromCharCode;
    String.fromCharCode = function () {
        console.log("String.fromCharCode is being monitored");
        const obj = this;
        const args = arguments;
        old_fromcharCodeAt.apply(obj, args);
        addtoCount("String.fromCharCode") + 1;

    }

    old_concat = String.prototype.concat;
    String.prototype.concat = function () {
        console.log("String.prototype.concat is being monitored");
        const obj = this;
        const args = arguments;
        old_concat.apply(obj, args);
        addtoCount("String.prototype.concat") + 1;

    }

    old_indexof = Array.prototype.indexOf;
    Array.prototype.indexOf = function () {
        console.log("Array.prototype.indexOf is being monitored");
        const obj = this;
        const args = arguments;
        old_indexof.apply(obj, args);
        addtoCount("Array.prototype.indexOf") + 1;

    }

    old_substring = String.prototype.substring;
    String.prototype.substring = function () {
        console.log("String.prototype.substring is being monitored");
        const obj = this;
        const args = arguments;
        old_substring.apply(obj, args);
        addtoCount("String.prototype.substring") + 1;

    }

    old_replace = String.prototype.replace;
    String.prototype.replace = function () {
        console.log("String.prototype.replace is being monitored");
        const obj = this;
        const args = arguments;
        old_replace.apply(obj, args);
        addtoCount("String.prototype.replace") + 1;

    }

    old_write = document.write;
    document.write = function () {
        console.log("document.write is being monitored");
        const obj = this;
        const args = arguments;
        old_write.apply(obj, args);
        addtoCount("document.write") + 1;

    }

    old_escape = escape;
    escape = function () {
        console.log("escape is being monitored");
        const obj = this;
        const args = arguments;
        old_escape.apply(obj, args);
        addtoCount("escape") + 1;

    }

    old_unescape = unescape;
    unescape = function () {
        console.log("unescape is being monitored");
        const obj = this;
        const args = arguments;
        old_unescape.apply(obj, args);
        addtoCount("unescape") + 1;

    }

    // old_parseInt = parseInt;
    // parseInt = function () {
    //     console.log("parseInt is being monitored");
    //     const obj = this;
    //     const args = arguments;
    //     old_parseInt.apply(obj, args);
    //     addtoCount("parseInt") + 1;

    // }

    old_navigator_sendBeacon = navigator.sendBeacon;
    navigator.sendBeacon = function () {
        console.log("navigator.sendBeacon is being monitored");
        const obj = this;
        const args = arguments;
        old_navigator_sendBeacon.apply(obj, args);
        addtoCount('sendBeacon') + 1;
    }

    // old_Image = Image;
    // Image = function () {
    //     console.log("Image is being monitored");
    //     this.old_Image_src = this.src;
    //     this.src = function () {
    //         console.log("Image.src is being monitored");
    //         const obj = this;
    //         const args = arguments;
    //         this.old_Image_src.apply(obj, args);
    //         addtoCount('Image.src') + 1;
    //     }
    // }

    // old_Window_location = window.location;
    // window.location = function () {
    //     console.log("window.location is being monitored");
    //     const obj = this;
    //     const args = arguments;
    //     old_Window_location.apply(obj, args);
    //     addtoCount('window.location') + 1;
    // }

    old_document_cookie = document.cookie;
    document.cookie = function () {
        console.log("document.cookie is being monitored");
        const obj = this;
        const args = arguments;
        old_document_cookie.apply(obj, args);
        addtoCount('document.cookie') + 1;
    }

    old_canvas_toDataURL = HTMLCanvasElement.prototype.toDataURL;
    HTMLCanvasElement.prototype.toDataURL = function () {
        console.log("HTMLCanvasElement.prototype.toDataURL is being monitored");
        const obj = this;
        const args = arguments;
        old_canvas_toDataURL.apply(obj, args);
        addtoCount('canvas.toDataURL') + 1;
    }

    old_atob = window.atob;
    window.atob = function () {
        console.log("window.atob is being monitored");
        const obj = this;
        const args = arguments;
        old_atob.apply(obj, args);
        addtoCount("atob") + 1;
    };

    old_base64ToArrayBuffer = window.base64ToArrayBuffer;
    window.base64ToArrayBuffer = function () {
        console.log("base64ToArrayBuffer is being monitored");
        const obj = this;
        const args = arguments;
        old_base64ToArrayBuffer.apply(obj, args);
        addtoCount("base64ToArrayBuffer") + 1;
    };

    old_msSaveOrOpenBlob = window.navigator.msSaveOrOpenBlob;
    window.navigator.msSaveOrOpenBlob = function () {
        console.log("msSaveOrOpenBlob is being monitored");
        const obj = this;
        const args = arguments;
        old_msSaveOrOpenBlob.apply(obj, args);
        addtoCount("msSaveOrOpenBlob") + 1;
    };

    old_createObjectURL = window.URL.createObjectURL;
    window.URL.createObjectURL = function () {
        console.log("createObjectURL is being monitored");
        const obj = this;
        const args = arguments;
        old_createObjectURL.apply(obj, args);
        addtoCount("createObjectURL") + 1;
    };

    old_revokeObjectURL = window.URL.revokeObjectURL;
    window.URL.revokeObjectURL = function () {
        console.log("revokeObjectURL is being monitored");
        const obj = this;
        const args = arguments;
        old_revokeObjectURL.apply(obj, args);
        addtoCount("revokeObjectURL") + 1;
    };

    old_Uint8Array = window.Uint8Array;
    window.Uint8Array = function () {
        console.log("Uint8Array is being monitored");
        const obj = this;
        const args = arguments;
        old_Uint8Array.apply(obj, args);
        addtoCount("Uint8Array") + 1;
    };

    old_Blob = window.Blob;
    window.Blob = function () {
        console.log("Blob is being monitored");
        const obj = this;
        const args = arguments;
        old_Blob.apply(obj, args);
        addtoCount("Blob") + 1;
    };

    old_Image = Image;
    Image = function () {
        console.log("Image is being monitored");
        const obj = this;
        old_Image.apply(obj, arguments);
        addtoCount("Image") + 1;
    };

    old_Image_src = Image.prototype.src;
    Image.prototype.src = function () {
        console.log("Image.src is being monitored");
        const obj = this;
        const args = arguments;
        old_Image_src.apply(obj, args);
        addtoCount("Image.src") + 1;
    };

}

    ///////////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // function download_csv_file(csv_data) {
    //     //"use strict";
    //     const linkElement = document.createElement('link');
    //     var old_createElement;
    //     var hiddenElement;
    //     var csv = 'API,Count\r\n';

    //     for (var i = 0; i < csv_data.length; i++) {
    //         csv += csv_data[i][0] + ',' + csv_data[i][1] + '\n';
    //     }

    //     var hiddenElement = document.createElement('a');
    //     console.log(hiddenElement);
    //     if (hiddenElement) {
    //         hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);

    //         if (document.body) {
    //             document.body.appendChild(hiddenElement);
    //             hiddenElement.target = '_blank';
    //             hiddenElement.download = 'Count of the APIs.csv';
    //             hiddenElement.click();
    //         } else {
    //             console.log('document.body is not defined');
    //         }
    //     } else {
    //         console.log('hiddenElement is not defined');
    //     }
    //     //document.write(csv);
    // }

    /////////////////////////// To Download in JSON Format/////////////////////////////////////////////////

    // function exportToJsonFile(jsonData) {
    //     //"use strict";
    //     //var linkElement;
    //     var old_createElement;
    //     let dataStr = JSON.stringify(jsonData);
    //     let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    //     let exportFileName = 'Count of the APIs.json';

    //     let linkElement = document.createElement('a');

    //     linkElement.setAttribute('href', dataUri);
    //     linkElement.setAttribute('download', exportFileName);
    //     linkElement.click();
    //     //document.write(dataUri)
    // }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////// DONT DELETE THE CODE IN THE BLOCK ///////////////////////////////////////////
    // function downloadCSVFile(entries) {
    //     // Group the data by URL
    //     const groupedData = {};
    //     for (let i = 0; i < entries.length; i++) {
    //         const api = entries[i][1];
    //         const url = entries[i][0];
    //         const count = entries[i][2];

    //         if (groupedData[url] == undefined) {
    //             groupedData[url] = {};
    //         }

    //         groupedData[url][api] = count;
    //     }

    //     // Create a CSV with a header row
    //     let csv = 'URL';
    //     const apis = new Set();
    //     for (const url in groupedData) {
    //         for (const api in groupedData[url]) {
    //             apis.add(api);
    //         }
    //     }
    //     for (const api of apis) {
    //         csv += `,${api}`;
    //     }
    //     csv += '\n';

    //     // Add a row for each entry in the groupedData object
    //     for (const url in groupedData) {
    //         csv += `${url}`;
    //         for (const api of apis) {
    //             csv += `,${groupedData[url][api] || ''}`;
    //         }
    //         csv += '\n';
    //     }

    //     // Create a hidden link element
    //     const hiddenElement = document.createElement('a');

    //     // Set the link's href to the CSV string and add a filename
    //     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    //     hiddenElement.download = 'Count of the APIs.csv';

    //     // Append the link to the document and click it
    //     document.body.appendChild(hiddenElement);
    //     hiddenElement.click();

    //     // Remove the link from the document
    //     document.body.removeChild(hiddenElement);
    // }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // function downloadCSVFile(entries) {
    //     // Group the data by URL
    //     const groupedData = {};
    //     for (let i = 0; i < entries.length; i++) {
    //         const api = entries[i][1];
    //         const url = entries[i][0];
    //         const count = entries[i][2];

    //         if (groupedData[url] == undefined) {
    //             groupedData[url] = {};
    //         }

    //         groupedData[url][api] = count;
    //     }

    //     // Create a CSV with a header row
    //     let csv = 'URL';
    //     const apis = new Set();
    //     for (const url in groupedData) {
    //         for (const api in groupedData[url]) {
    //             apis.add(api);
    //         }
    //     }
    //     for (const api of apis) {
    //         csv += `,${api}`;
    //     }
    //     csv += '\n';

    //     // Add a row for each entry in the groupedData object
    //     for (const url in groupedData) {
    //         csv += `${url}`;
    //         for (const api of apis) {
    //             csv += `,${groupedData[url][api] || ''}`;
    //         }
    //         csv += '\n';
    //     }

    //     // //call the download_csv_file function and assign it to a variable
    //     // const csv_data = download_csv_file(csv);
    //     // // make the variable global
    //     // window.csv_data = csv_data;
    //     return csv;
    // }
    // return (entries);
//}