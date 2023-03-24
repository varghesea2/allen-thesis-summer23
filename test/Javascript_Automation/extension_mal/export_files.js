function download_csv_file(csv_data) {
    //"use strict";
    const linkElement = document.createElement('link');
    //var old_createElement;
    //var hiddenElement;
    var csv = 'API,Count\r\n';

    for (var i = 0; i < csv_data.length; i++) {
        csv += csv_data[i][0] + ',' + csv_data[i][1] + '\n';
    }

    var hiddenElement = document.createElement('a');
    console.log(hiddenElement);
    if (hiddenElement) {
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);

        if (document.body) {
            document.body.appendChild(hiddenElement);
            hiddenElement.target = '_blank';
            hiddenElement.download = 'Count of the APIs.csv';
            hiddenElement.click();
        } else {
            console.log('document.body is not defined');
        }
    } else {
        console.log('hiddenElement is not defined');
    }
    //document.write(csv);
}

/////////////////////////// To Download in JSON Format/////////////////////////////////////////////////

function exportToJsonFile(jsonData) {
    //"use strict";
    //var linkElement;
    //var old_createElement;
    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    let exportFileName = 'Count of the APIs.json';

    let linkElement = document.createElement('a');

    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    linkElement.click();
    //document.write(dataUri)
}

const downloadCsvButton = document.getElementById('download-csv-button');
const exportJsonButton = document.getElementById('export-json-button');

downloadCsvButton.addEventListener('click', () => {
    download_csv_file(gEntries);
});
exportJsonButton.addEventListener('click', () => {
    exportToJsonFile(gEntries);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function download_csv_file(csv_data) {
//     //"use strict";
//     const linkElement = document.createElement('link');
//     //var old_createElement;
//     //var hiddenElement;
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

// /////////////////////////// To Download in JSON Format/////////////////////////////////////////////////

// function exportToJsonFile(jsonData) {
//     //"use strict";
//     //var linkElement;
//     //var old_createElement;
//     let dataStr = JSON.stringify(jsonData);
//     let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

//     let exportFileName = 'Count of the APIs.json';

//     let linkElement = document.createElement('a');

//     linkElement.setAttribute('href', dataUri);
//     linkElement.setAttribute('download', exportFileName);
//     linkElement.click();
//     //document.write(dataUri)
// }

// // const downloadCsvButton = document.getElementById('download-csv-button');
// // const exportJsonButton = document.getElementById('export-json-button');

// // downloadCsvButton.addEventListener('click', () => {
// //     download_csv_file(gEntries);
// // });
// // exportJsonButton.addEventListener('click', () => {
// //     exportToJsonFile(gEntries);
// // });