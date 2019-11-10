document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#btn")
    button.addEventListener( "click", swapHeader)

})
const swapHeader = () => {
    let oldHead = document.querySelector("h1")
    let currentHead = document.createElement("h1")
    let input = document.querySelector("#input").value
    currentHead.innerText = `${input}`
    oldHead.parentNode.replaceChild(currentHead, oldHead)
}
