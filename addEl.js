document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#btn")
    button.addEventListener("click", question1)

    question2();
    question3();
    question4();
    question5();
    question6();

})

const question6 = () => {
    let h1 = document.createElement("h1");
    h1.innerText = "Question 6";
    document.body.appendChild(h1);
    
    let repeatLi = document.createElement("ul");
    let button = document.createElement("button");
    button.innerText = "Type your word or phrase here";
    let footer = document.createElement("footer");
    footer.appendChild(button);
    let input1 = document.createElement("input");
    input1.id = "input1"
    let input2 = document.createElement("input");
    input2.id = "input2"
    input2.type = "number";

    button.addEventListener("click", () => {
        for(let i = 1; i <= input2.value; i++) {
            let items = document.createElement("li");
            items.innerText = input1.value;
            repeatLi.appendChild(items);
        }
    })

    document.body.appendChild(footer);
    document.body.appendChild(repeatLi);
    document.body.appendChild(input1);
    document.body.appendChild(input2);
}

const question5 = () => {
    let h1 = document.createElement("h1");
    h1.innerText = "Question 5";
    document.body.appendChild(h1);

    let ul = document.createElement("ul");
    let button = document.createElement("button");
    button.innerText = "Enter Words";
    let footer = document.createElement("footer");
    footer.appendChild(button);
    let input = document.createElement("input");
    // input.type = "text"
    // let inputAtt = document.createAttribute("type");
    // inputAtt.value = "text"
    // input.setAttributeNode(inputAtt)
    button.addEventListener("click", () => {
        let items = document.createElement("li");
        items.innerText = input.value;
        ul.appendChild(items);
    })
    document.body.appendChild(footer);
    document.body.appendChild(ul);
    document.body.appendChild(input);
}

const question4 = () => {
    let h1 = document.createElement("h1");
    h1.innerText = "Question 4";
    document.body.appendChild(h1);
    let ul = document.createElement("ul");

    let object = {
        "results": [
            {
                "name": "Alderaan",
                "rotation_period": "24",
                "orbital_period": "364",
                "diameter": "12500",
                "climate": "temperate",
                "gravity": "1 standard",
                "terrain": "grasslands, mountains",
                "surface_water": "40",
                "population": "2000000000",
                "residents": [
                    "https://swapi.co/api/people/5/",
                    "https://swapi.co/api/people/68/",
                    "https://swapi.co/api/people/81/"
                ],
                "films": [
                    "https://swapi.co/api/films/6/",
                    "https://swapi.co/api/films/1/"
                ],
                "created": "2014-12-10T11:35:48.479000Z",
                "edited": "2014-12-20T20:58:18.420000Z",
                "url": "https://swapi.co/api/planets/2/"
            },
            {
                "name": "Yavin IV",
                "rotation_period": "24",
                "orbital_period": "4818",
                "diameter": "10200",
                "climate": "temperate, tropical",
                "gravity": "1 standard",
                "terrain": "jungle, rainforests",
                "surface_water": "8",
                "population": "1000",
                "residents": [],
                "films": [
                    "https://swapi.co/api/films/1/"
                ],
                "created": "2014-12-10T11:37:19.144000Z",
                "edited": "2014-12-20T20:58:18.421000Z",
                "url": "https://swapi.co/api/planets/3/"
            },
            {
                "name": "Hoth",
                "rotation_period": "23",
                "orbital_period": "549",
                "diameter": "7200",
                "climate": "frozen",
                "gravity": "1.1 standard",
                "terrain": "tundra, ice caves, mountain ranges",
                "surface_water": "100",
                "population": "unknown",
                "residents": [],
                "films": [
                    "https://swapi.co/api/films/2/"
                ],
                "created": "2014-12-10T11:39:13.934000Z",
                "edited": "2014-12-20T20:58:18.423000Z",
                "url": "https://swapi.co/api/planets/4/"
            },
            {
                "name": "Dagobah",
                "rotation_period": "23",
                "orbital_period": "341",
                "diameter": "8900",
                "climate": "murky",
                "gravity": "N/A",
                "terrain": "swamp, jungles",
                "surface_water": "8",
                "population": "unknown",
                "residents": [],
                "films": [
                    "https://swapi.co/api/films/2/",
                    "https://swapi.co/api/films/6/",
                    "https://swapi.co/api/films/3/"
                ],
                "created": "2014-12-10T11:42:22.590000Z",
                "edited": "2014-12-20T20:58:18.425000Z",
                "url": "https://swapi.co/api/planets/5/"
            },
            {
                "name": "Bespin",
                "rotation_period": "12",
                "orbital_period": "5110",
                "diameter": "118000",
                "climate": "temperate",
                "gravity": "1.5 (surface), 1 standard (Cloud City)",
                "terrain": "gas giant",
                "surface_water": "0",
                "population": "6000000",
                "residents": [
                    "https://swapi.co/api/people/26/"
                ],
                "films": [
                    "https://swapi.co/api/films/2/"
                ],
                "created": "2014-12-10T11:43:55.240000Z",
                "edited": "2014-12-20T20:58:18.427000Z",
                "url": "https://swapi.co/api/planets/6/"
            },
            {
                "name": "Endor",
                "rotation_period": "18",
                "orbital_period": "402",
                "diameter": "4900",
                "climate": "temperate",
                "gravity": "0.85 standard",
                "terrain": "forests, mountains, lakes",
                "surface_water": "8",
                "population": "30000000",
                "residents": [
                    "https://swapi.co/api/people/30/"
                ],
                "films": [
                    "https://swapi.co/api/films/3/"
                ],
                "created": "2014-12-10T11:50:29.349000Z",
                "edited": "2014-12-20T20:58:18.429000Z",
                "url": "https://swapi.co/api/planets/7/"
            },
            {
                "name": "Naboo",
                "rotation_period": "26",
                "orbital_period": "312",
                "diameter": "12120",
                "climate": "temperate",
                "gravity": "1 standard",
                "terrain": "grassy hills, swamps, forests, mountains",
                "surface_water": "12",
                "population": "4500000000",
                "residents": [
                    "https://swapi.co/api/people/3/",
                    "https://swapi.co/api/people/21/",
                    "https://swapi.co/api/people/36/",
                    "https://swapi.co/api/people/37/",
                    "https://swapi.co/api/people/38/",
                    "https://swapi.co/api/people/39/",
                    "https://swapi.co/api/people/42/",
                    "https://swapi.co/api/people/60/",
                    "https://swapi.co/api/people/61/",
                    "https://swapi.co/api/people/66/",
                    "https://swapi.co/api/people/35/"
                ],
                "films": [
                    "https://swapi.co/api/films/5/",
                    "https://swapi.co/api/films/4/",
                    "https://swapi.co/api/films/6/",
                    "https://swapi.co/api/films/3/"
                ],
                "created": "2014-12-10T11:52:31.066000Z",
                "edited": "2014-12-20T20:58:18.430000Z",
                "url": "https://swapi.co/api/planets/8/"
            },
            {
                "name": "Coruscant",
                "rotation_period": "24",
                "orbital_period": "368",
                "diameter": "12240",
                "climate": "temperate",
                "gravity": "1 standard",
                "terrain": "cityscape, mountains",
                "surface_water": "unknown",
                "population": "1000000000000",
                "residents": [
                    "https://swapi.co/api/people/34/",
                    "https://swapi.co/api/people/55/",
                    "https://swapi.co/api/people/74/"
                ],
                "films": [
                    "https://swapi.co/api/films/5/",
                    "https://swapi.co/api/films/4/",
                    "https://swapi.co/api/films/6/",
                    "https://swapi.co/api/films/3/"
                ],
                "created": "2014-12-10T11:54:13.921000Z",
                "edited": "2014-12-20T20:58:18.432000Z",
                "url": "https://swapi.co/api/planets/9/"
            },
            {
                "name": "Kamino",
                "rotation_period": "27",
                "orbital_period": "463",
                "diameter": "19720",
                "climate": "temperate",
                "gravity": "1 standard",
                "terrain": "ocean",
                "surface_water": "100",
                "population": "1000000000",
                "residents": [
                    "https://swapi.co/api/people/22/",
                    "https://swapi.co/api/people/72/",
                    "https://swapi.co/api/people/73/"
                ],
                "films": [
                    "https://swapi.co/api/films/5/"
                ],
                "created": "2014-12-10T12:45:06.577000Z",
                "edited": "2014-12-20T20:58:18.434000Z",
                "url": "https://swapi.co/api/planets/10/"
            },
            {
                "name": "Geonosis",
                "rotation_period": "30",
                "orbital_period": "256",
                "diameter": "11370",
                "climate": "temperate, arid",
                "gravity": "0.9 standard",
                "terrain": "rock, desert, mountain, barren",
                "surface_water": "5",
                "population": "100000000000",
                "residents": [
                    "https://swapi.co/api/people/63/"
                ],
                "films": [
                    "https://swapi.co/api/films/5/"
                ],
                "created": "2014-12-10T12:47:22.350000Z",
                "edited": "2014-12-20T20:58:18.437000Z",
                "url": "https://swapi.co/api/planets/11/"
            }
        ]
      };

      for(let el of object.results) {
        let starWars = document.createElement("li");
        starWars.innerText = el.name + " " + el.population
        ul.appendChild(starWars);
    }
    document.body.appendChild(ul);
}

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
<<<<<<< HEAD
    currentHead.innerText = `${input}`
    oldHead.parentNode.replaceChild(currentHead, oldHead)
=======
    currentHead.innerText = input
    oldHead.parentNode.replaceChild(currentHead, oldHead);
>>>>>>> 0c9d5fb406e0f67adcf02c3f55bba8b454051e9c
}
