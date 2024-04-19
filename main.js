#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
// Print Welcome Message 
console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<<=============================================>>>`));
console.log(chalk.bgGreen.bold("\n \t WELCOME TO CODE WITH HAMZA - TODo-LIST APPLICATION\n"));
console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<<=============================================>>>`));
let main = async () => {
    while (condition) {
        {
            let option = await inquirer.prompt([
                {
                    name: "choices",
                    type: "list",
                    message: "Select an option do you want to do:",
                    choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"]
                }
            ]);
            if (option.choices === "Add Task") {
                await addTask();
            }
            else if (option.choices === "Delete Task") {
                await deleteTask();
            }
            else if (option.choices === "Update Task") {
                await updateTask();
            }
            else if (option.choices === "View Todo-List") {
                await ViewTask();
            }
            else if (option.choices === "Exit") {
                condition = false;
            }
        }
    }
};
// Function To View add new Task To the list 
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter Your New Task"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task}Task Added Successfully un Todo-List `);
};
// Function  To View All Todo-List Task
let ViewTask = async () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}, ${task}`);
    });
};
// function to delete task from the list
let deleteTask = async () => {
    await ViewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index' of the task you want to delete: "
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} This Task Has Been Deleted Successfully From Todo-List`);
};
// function to update task from the list
let updateTask = async () => {
    await ViewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update: "
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter the new task name : "
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [For  Updated list check option "view Todo-List"]`);
};
main();
