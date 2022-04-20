import { make } from "./make"
import { family } from "./family"

let projects = []

const addProject = () => {
    let input = make("input", "project_value")
    let add_project = make("button", "add_project")
    add_project.innerHTML = "Add Project"
    family("projects").append(add_project)
    family("projects").append(input)

    add_project.addEventListener("click", function () {
        projects.push(input.value)
        console.log(input.value, " input value")
        input.value = ""
        let topic = make("p", String(projects[projects.length - 1]))
        topic.innerHTML = projects[projects.length - 1]
        console.log(topic.innerHTML, " topic value")
        family("project_body").appendChild(topic)
    });
}

export { addProject }