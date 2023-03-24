// in readdir.js
const fs = require("fs")
const { stringify } = require("querystring")
const files="/Users/allenvarghese/Desktop/JavaScript/"

fs.readdir(files, (err, files) => {
    if (err) throw err
    for (let i of files)
       // var file_names = {}
        console.log(i)
    //stringify.i
})

process.on("uncaughtException", e => e ? console.log(e.message) : console.log(""))