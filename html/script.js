// Collect task details for two tasks
const tasks = [];

// Task 1
let title1 = prompt("Enter title for Task 1:");
let desc1 = prompt("Enter description for Task 1:");
let status1;
while (true) {
    status1 = prompt("Enter status for Task 1 (todo/doing/done):").toLowerCase();
    if (['todo', 'doing', 'done'].includes(status1)) break;
    alert("Invalid status! Please enter todo, doing, or done.");
}
tasks.push({ title: title1, description: desc1, status: status1 });

// Task 2
let title2 = prompt("Enter title for Task 2:");
let desc2 = prompt("Enter description for Task 2:");
let status2;
while (true) {
    status2 = prompt("Enter status for Task 2 (todo/doing/done):").toLowerCase();
    if (['todo', 'doing', 'done'].includes(status2)) break;
    alert("Invalid status! Please enter todo, doing, or done.");
}
tasks.push({ title: title2, description: desc2, status: status2 });

// Check for completed tasks
const doneTasks = tasks.filter(task => task.status === 'done');

// Display results
if (doneTasks.length === 0) {
    console.log("No tasks completed, let's get to work!");
} else {
    console.log("Completed Tasks:");
    doneTasks.forEach(task => console.log(`- ${task.title}: ${task.status}`));
}