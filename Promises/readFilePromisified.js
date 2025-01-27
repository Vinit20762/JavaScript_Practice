const fs = require("fs");

function readingFile(read){
    fs.readFile("Promises/a.txt", "utf8", function(err, data) {
        read(data);
    })
}

function readFile(){
   return new Promise(readingFile);
}

// call back function that print the content of a.txt
function callback(contents){
    console.log(contents);
}
readFile().then(callback);