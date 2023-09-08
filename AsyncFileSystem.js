// This is for enable file Module
const fs = require("fs");

//This is for create file and write on that file. If file exist, then it will ovverride data on that file othwerwise it will create new file.
fs.writeFile("welcome.txt", "Assalamualaikum", (error) => {
  console.log("File Created and Writed Successfully");
  console.log(error);
});

//This is for appned new text into file.
fs.appendFile("welcome.txt", "\nHow are you?", (error) => {
  console.log("File Updated");
});

// Read data from file as a binary/buffered form.
fs.readFile("welcome.txt", (error, data) => {
  console.log(data.toString());
});

//This is for rename any file.
fs.rename("welcome.txt", "node.txt", (error) => {
  console.log("file renamed successfully");
  console.log(error);
});
