const fs = require('fs');
const path =require('path');

const filePath = path.join(__dirname, 'tasks.txt');
console.log(filePath);

// /to read data

fs.readFile(filePath, 'utf8', (error, data) =>{
    if(error){
        console.error('Error reading file: '+ error);
        return;
    }else{
        console.log('List of tasks');
        console.log(data);
    }
})