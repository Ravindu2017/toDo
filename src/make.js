const make = (elem, id) => {
    let a = document.createElement(elem)
    a.setAttribute("id", id)

    return a
}

export { make }