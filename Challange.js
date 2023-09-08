// This if for access file system in this project.
const fs = require("fs");

// This i for making Folder.
try {
  //This is for checking folder is exist ot not.
  if (!fs.existsSync("Rafi")) {
    fs.mkdirSync("Rafi");
  }
} catch (err) {
  console.error(err);
}

//Creating file and write data into it, but if file exists, then it will ovverride it into new data.
fs.writeFileSync("Rafi/bio.txt", "Assalamualaikum\n");

// This is for Append new text int existing file.
fs.appendFileSync("Rafi/bio.txt", "I'm Muhammad Fazlul Karim");

//Reading data from file without Buffer data.
let data = fs.readFileSync("Rafi/bio.txt").toString();
console.log(data);

//Rename File name
fs.renameSync("Rafi/bio.txt", "Rafi/myBio.txt");

//Remove File
fs.unlinkSync("Rafi/myBio.txt");

//Remove Folder
fs.rmSync("Rafi", { recursive: true, force: true });
