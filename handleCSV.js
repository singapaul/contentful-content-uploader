// Require the necessary modules for file operations
const fs = require("fs");
const path = require("path");
const Papa = require("papaparse");

console.log("HELLO");

// Read the CSV file
const csvFilePath = "./funnywordslist.csv";
const csvData = fs.readFileSync(csvFilePath, "utf8");
// Parse the CSV data using Papa.parse
const parsedData = Papa.parse(csvData, { header: true }).data;

// Create an empty array to store the JSON objects
const jsonArray = [];

// Iterate over the parsed CSV data
parsedData.forEach((row) => {
  // Create a JavaScript object for each row
  const jsonObject = {
    title: row["title"],
    country: row["country"],
    definition: row["definition"],
    phonetic: row["phonetic"],
    slug: row["slug"],
  };

  // Add the object to the array
  jsonArray.push(jsonObject);
});

// Convert the array to JSON
const jsonData = JSON.stringify(jsonArray);

console.log(jsonArray);

const outputFilepath = "./output/file.json";

// Write the JSON data to the output file
fs.writeFileSync(outputFilepath, jsonData, "utf8");

// console.log("Conversion completed. JSON file created:", outputFilePath);
