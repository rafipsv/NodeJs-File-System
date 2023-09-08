// This is for enable file Module
const fs = require("fs");

//This is for create file and write on that file. If file exist, then it will ovverride data on that file othwerwise it will create new file.
fs.writeFileSync("welcome.txt", "Assalamualaikum");

//This is for appned new text into file.
fs.appendFileSync("welcome.txt", "\nHow are you?");

// Read data from file as a binary/buffered form.
let bufferredData = fs.readFileSync("welcome.txt");
console.log(bufferredData);

// Convert binary data/buffered data into string form.
let data = bufferredData.toString();
console.log(data);

//This is for rename any file.
fs.renameSync("welcome.txt", "node.txt");
