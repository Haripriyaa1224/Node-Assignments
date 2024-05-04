const fs = require('fs');
const path = require('path');

// Assume the task list is stored in tasks.txt
const filePath = path.join(__dirname, 'tasks.txt');

// Read the tasks from the file (you can adapt this to your actual data structure)
const tasks = fs.readFileSync(filePath, 'utf8').split('\n');

// Mark a task as completed (e.g., taskIndex is the index of the completed task)
const taskIndex = 2; // Example: Mark the third task as completed
tasks[taskIndex] = tasks[taskIndex] + ' (completed)';

// Write the updated tasks back to the file
fs.writeFileSync(filePath, tasks.join('\n'));

console.log('Task marked as completed.');
