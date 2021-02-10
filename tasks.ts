let tasks: Array<string> = [];

function addTask(task: string): number {
    let count: number = tasks.push(task);
    console.log("Item " + task + " added to array Tasks");
    return count;
}

function listAllTasks(): void {
    for (let i = 0; i < tasks.length; i++) {
        console.log("Item " + tasks[i] + " is in array Tasks");
    }

    tasks.forEach(function (task) {
        console.log(task);
    })
}

function deleteTask(task: string): number {
    let index: number = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("Item " + task + " removed from array tasks");
    }
    return tasks.length;
}

console.log(addTask("Homework"));
console.log(addTask("Sleep"));

listAllTasks();

console.log(deleteTask("Sleep"));