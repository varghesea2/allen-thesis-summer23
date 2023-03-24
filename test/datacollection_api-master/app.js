// API app to collect malicious and benign json from web pages.
require("dotenv/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
var port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
app.listen(port);
console.log("Dataset-Microservice is running on port " + port);
const MongoClient = require("mongodb").MongoClient;
const mongourl = process.env.DB_CONNECTION;
const dbClient = new MongoClient(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
dbClient.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MongoDB");
});

// Cheking if local host 3000 is working or not
app.get("/", (req, res) => {
  res.send("We are on home page of Data collection API ");
});
//Middle ware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("static"));

// Benign JSON data collection
app.post("/benign", (req, res) => {
  let b_sample = req.body;
  let link = b_sample.link || b_sample.url;
  console.log("Benign data-set : " + JSON.stringify(b_sample));
  if (isValid(b_sample) == false) {
    console.log("Validation error: It is not in JSON Format");
  }
  b_sample.label = 0;
  console.log("line 35: " + JSON.stringify(b_sample));
  const db = dbClient.db();

  db.collection("dataset").deleteMany({ link: link }, (err, result) => {
    if (err) {
      console.log("Deletion failed " + err);
    } else {
      console.log(result.result.n + " document(s) deleted");
      db.collection("dataset").insertOne(b_sample, (result) => {
        if (err) {
          console.log("Failed to query: " + err);
          res.sendStatus(500); // Internal server error
          return;
        } else {
          console.log("Insertion Successful!"); //handle the case of successful
          return res.status(200).send("Insertion Successsful");
        }
      });
    }
  });
});

// 1. Duplicate entry
// 2. Convertion on Map to JSON and setting the function calls.

// Malicious JSON data collection
app.post("/malicious", async (req, res) => {
  //TODO: get the malicious sample, validate to ensure that it is in correct format
  let m_data = req.body;
  let link = m_data.link || m_data.url;
  console.log("malicious data set: " + JSON.stringify(m_data));
  if (isValid(m_data) == false) {
    console.log("Validation error: It is not in JSON Format");
  }
  //add one more column {label:1}
  m_data.label = 1;
  // let m_sample = [m_data];
  console.log("line 70: " + JSON.stringify(m_data));
  //and insert to the database
  const db = dbClient.db();
  console.log("data found " + data);
  db.collection("dataset").deleteMany({ link: link }, (err, result) => {
    if (err) console.log("Deletion failed " + err);
    else {
      console.log(result.result.n + " document(s) deleted");
      //insert data in the database
      db.collection("dataset").insertOne(m_data, (err, result) => {
        if (err) {
          console.log("Failed to query: " + err);
          res.sendStatus(500); // Internal server error
          return;
        } else {
          console.log("Insertion Successful! after deletion"); //handle the case of successful
          return res.status(200).send("Insertion Successsful");
        }
      });
    }
  });
});

// Displays all the JSON dataset
app.get("/all-dataset", function (req, res) {
  //TODO: Get all dataset from the database
  const db = dbClient.db();
  var data = db.collection("dataset").find({}).project({ _id: 0 });
  data.toArray(function (err, result) {
    if (err) {
      console.log("Failed to query: " + err);
      res.sendStatus(500); // Internal server error
      return;
    }
    console.log("debug line 138: " + JSON.stringify(result)); // output all records
    //convert it in CSV and return the CSV
    return res.send("\r\n" + convertToCsv(result));
  });
});

function isValid(jsonObject) {
  try {
    JSON.stringify(jsonObject);
    return true;
  } catch (e) {
    return false;
  }
}

// reference https://stackoverflow.com/questions/11257062/converting-json-object-to-csv-format-in-javascript
function convertToCsv(objArray) {
  const array = typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
  let str =
    `${Object.keys(array[0])
      .map((value) => `"${value}"`)
      .join(",")}` + "\r\n";

  return array.reduce((str, next) => {
    str +=
      `${Object.values(next)
        .map((value) => `${value}`)
        .join(",")}` + "\r\n";
    //console.log("Line 160 CSV data is: "+ str);
    return str;
  }, str);
}
