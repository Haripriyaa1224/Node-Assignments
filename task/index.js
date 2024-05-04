const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Enter a task', function(task){
    const filePath = path.join(__dirname, 'tasks.txt');
    fs.appendFile(filePath, `${task}\n`, (err) => {
        if (err) throw err;
        console.log('The new task was added successfully!');
        rl.close();
      });
})