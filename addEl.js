document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#btn")
    button.addEventListener("click", question1)

    question2();
    question3();


})
const question3 = () => {
    let h1 = document.createElement("h1");
    h1.innerText = "Question 3";
    document.body.appendChild(h1);
    let ul = document.createElement("ul");

    let object = {
        "results": [
          {
            "gender": "female",
            "name": {
              "title": "mademoiselle",
              "first": "ruth",
              "last": "nicolas"
            },
            "nat": "CH"
          },
          {
            "gender": "female",
            "name": {
              "title": "miss",
              "first": "رها",
              "last": "سلطانی نژاد"
            },
            "nat": "IR"
          },
          {
            "gender": "female",
            "name": {
              "title": "mrs",
              "first": "patricia",
              "last": "hale"
            },
            "nat": "GB"
          },
          {
            "gender": "male",
            "name": {
              "title": "mr",
              "first": "fernando",
              "last": "cooper"
            },
            "nat": "US"
          },
          {
            "gender": "female",
            "name": {
              "title": "mrs",
              "first": "یسنا",
              "last": "صدر"
            },
            "nat": "IR"
          },
          {
            "gender": "male",
            "name": {
              "title": "mr",
              "first": "eino",
              "last": "tuomala"
            },
            "nat": "FI"
          },
          {
            "gender": "female",
            "name": {
              "title": "ms",
              "first": "gonca",
              "last": "özkara"
            },
            "nat": "TR"
          },
          {
            "gender": "male",
            "name": {
              "title": "mr",
              "first": "kyle",
              "last": "castillo"
            },
            "nat": "US"
          },
          {
            "gender": "female",
            "name": {
              "title": "miss",
              "first": "olivia",
              "last": "kumar"
            },
            "nat": "NZ"
          },
          {
            "gender": "male",
            "name": {
              "title": "monsieur",
              "first": "raymond",
              "last": "durand"
            },
            "nat": "CH"
          }
        ],
        "info": {
          "seed": "2cb086ce097c87ee",
          "results": 10,
          "page": 1,
          "version": "1.2"
        }
      };
      for(let el of object.results) {
          let displayList = document.createElement("li");
          displayList.innerText = el.name.first + " " + el.name.last + ", " + el.nat
          ul.appendChild(displayList);
      }
      document.body.appendChild(ul);
}

const question2 = () => {
    let h1 = document.createElement("h1");
    h1.innerText = "Question 2";
    document.body.appendChild(h1);
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
