import { taskInfo } from "./task"
import { make } from "./make"
import { family } from "./family"
import { taskForm } from "./form"

let tasks = []
let details = []

let joj = document.createElement("p")

//now just need to make task objects from input and save to local storage
const addTasks = () => {
    let form = taskForm()
    let add_task = make("button", "add_task")
    add_task.innerHTML = "Add a Task"
    family("task").appendChild(add_task)
    console.log(add_task, form)

    localStorage.setItem("first", "beer")  //task_1.about.title
    joj.innerHTML = localStorage.getItem("first")


    add_task.addEventListener("click", function () {

        if ((String(family("txtbox").value).length > 0) && (String(family("input_trial").value).length > 0)) {
            tasks.push(family("input_trial").value)
            details.push(family("txtbox").value)
            console.log(String(family("txtbox").value).length)
            console.log(tasks)
            let chores = make("p", String(tasks[tasks.length - 1]))
            console.log(chores.value, tasks)
            chores.innerHTML = tasks[tasks.length - 1]
            family("task").appendChild(chores)
            family("task").append(String(family("txtbox").value))
            family("input_trial").value = ""
            family("txtbox").value = ""
        }

        else {
            alert("Please fill in the fields")
        }

    });
}

export { addTasks }