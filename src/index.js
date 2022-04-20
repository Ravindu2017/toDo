import './style.css';
import { taskInfo } from "./task"
import { info } from "./info"
import { storageAvailable } from "./local"
import { addProject } from "./addpro"
import { addTasks } from "./addtasks"

console.log("hello")
const task_1 = taskInfo("homework", "I have to finish 3000 word essay", "Tomorrow", 4)
console.log(task_1.about.title, " hese ", task_1)
task_1.sayIt()
let joj = document.createElement("p")
let projects = []

if (storageAvailable('localStorage')) {
    let todo = document.getElementById("duty")
    todo.addEventListener("click", addTasks())
}
else {
    // Too bad, no localStorage for us
}


let projectlist = document.getElementById("projects")
projectlist.addEventListener("click", addProject())
