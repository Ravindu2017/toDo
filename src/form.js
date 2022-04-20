import { family } from "./family"
import { make } from "./make"


//for now just make a form and append it to div with id="task" 
//title, data, date, level, category
const taskForm = () => {
    let body = family("task")
    let input = make("input", "input_trial")
    let desc = make("textarea", "txtbox")
    let space = make("p")
    let space2 = make("p")

    body.append(input)
    body.append(space)
    body.append(desc)
    body.append(space2)

}

export { taskForm }