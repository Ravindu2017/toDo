import { taskInfo } from "./task"

const add = () => {

    const addTask = (title, data, date, level) => {
        let a = document.createElement("div")
        a.innerHTML = title + date + data + level

    }
    return { addTask }
}

export { add }