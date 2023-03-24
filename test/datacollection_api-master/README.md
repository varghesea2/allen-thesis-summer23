# API to collect JSON Data

## System Requirements

- Node.js 8 or higher;
- NPM;
- Active internet connection.

## How to Use

As soon as you get the project as a .zip or through `git clone`, execute the following steps:

```bash
npm init
npm install express nodemon mongoose dotenv body-parser 
npm cros 

# To run API on local host .
npm start 
```

## Output File

Output will be sent to MondoDB, you can change the link of MongoDB by changing url data on .env file 


### Workflow

The code starts running from the file `app.js`. From there, it executes the `execute` *async* method and follows a straight-forward path. The flow is as follows:

1. Listens to localhost 3000
2. Can Post data as Malicious or Begnin 
3. Collects data as JSON from the source 
4. Lables 1 for Malicious and 0 for Begnin 
5. Loads the JSON in MogoDB Collection with the DB name as "dataset" 