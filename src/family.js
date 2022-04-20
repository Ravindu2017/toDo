const family = (id) => {
    let elem = document.getElementById(id)
    if (elem) {
        return elem
    }

    else {
        console.log("no such element")
    }
}

export { family }