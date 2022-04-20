import { info } from './info'

const taskInfo = (title, data, date, level, category) => {
    /*const priority = (level) => {

    }*/
    const about = info(title, data)
    const sayIt = () => console.log(title, data, date, level)

    return { about, date, level, category, sayIt }
}

export { taskInfo }