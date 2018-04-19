// Import modules
const fs = require('fs');          // creates a folder and a file
const path = require('path');       // to work with the folder/files path

const csv=require('csvtojson');

var outFile = [];

//From CSV File 
const csvFilePath='./customer-data.csv';

// Output file path
var outPath = path.join(__dirname, './customer-data.json');
//Read and parse the csv file
csv()
.fromFile(csvFilePath)
//.on('json',(jsonObj) => {
//	console.log(jsonObj)
//})
.on('end_parsed',(jsonArrObj)=>{
	//console.log(jsonObj)
    outFile.push(jsonArrObj);
    fs.writeFileSync(outPath,JSON.stringify(outFile, null, 2), 'utf8', 
    	function(err){console.log(err)});
    
})
.on('done',(error)=>{
    console.log('ended')
})
