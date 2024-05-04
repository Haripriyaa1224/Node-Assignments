const fs = require('fs');
const path = require('path');

// Assume the task list is stored in tasks.txt
const filePath = path.join(__dirname, 'tasks.txt');

// Read the tasks from the file (you can adapt this to your actual data structure)
const tasks = fs.readFileSync(filePath, 'utf8').split('\n');

// Remove a task (e.g., taskIndex is the index of the task to remove)
const taskIndexToRemove = 2; // Example: Remove the third task
tasks.splice(taskIndexToRemove, 1);

// Write the updated tasks back to the file
fs.writeFileSync(filePath, tasks.join('\n'));

console.log('Task removed successfully.');
