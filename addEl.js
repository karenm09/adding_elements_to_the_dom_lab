document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#btn")
    button.addEventListener("click", question1)

    question2();


})
const question2 = () => {
    let ul = document.createElement("ul");
    
    let object = {
        "results" : [
          { "name" : "Anne" },
          { "name" : "Bri" },
          { "name" : "Chaz" },
          { "name" : "Darlene" }
        ]
      };
      for(let n of object.results) {
        let nameList = document.createElement("li")
        nameList.innerText = n.name;
        ul.appendChild(nameList);
      }
      document.body.appendChild(ul);
      console.log(ul);
}

const question1 = () => {
    let oldHead = document.querySelector("h1")
    let currentHead = document.createElement("h1")
    let input = document.querySelector("#input").value
    currentHead.innerText = input
    oldHead.parentNode.replaceChild(currentHead, oldHead);
}
