//counter functionality
var c = document.getElementsByClassName("count")[0];

document.getElementsByClassName("incrementbtn")[0].addEventListener("click", function() {
  c.innerHTML = parseFloat(c.innerHTML)+1;
});

document.getElementsByClassName("resetbtn")[0].addEventListener("click", function() {
  c.innerHTML = "0";
});

document.getElementsByClassName("decrementbtn")[0].addEventListener("click", function() {
  if(parseFloat(c.innerHTML)>0)
  {
    c.innerHTML = parseFloat(c.innerHTML)-1;
  }
  else {
    alert("Can't count below 0");
  }
});

//------------------------------------------------------------------------------

//keyboard action for counter
document.addEventListener("keypress", function(event) {
    keyboardpress(event.key);
    buttonanimation(event.key);
});

function keyboardpress(key) {
  switch(key)
  {
    case ',':
      c.innerHTML = parseFloat(c.innerHTML)+1;
      break;
    case '.':
      c.innerHTML = "0";
      break;
    case '/':
      if(parseFloat(c.innerHTML)>0)
      {
        c.innerHTML = parseFloat(c.innerHTML)-1;
      }
      else {
        alert("Can't count below 0");
      }
      break;
  }
}

//------------------------------------------------------------------------------

//animation to counter buttons
function buttonanimation(buttonclass)
{
  var activeButton;
  if(buttonclass == ',')
  {
    activeButton = document.querySelector("."+"incrementbtn");
  }
  else if(buttonclass == '.')
  {
    activeButton = document.querySelector("."+"resetbtn");
  }
  else if(buttonclass == '/')
  {
    activeButton = document.querySelector("."+"decrementbtn");
  }
  activeButton.classList.add("pressed");
  setTimeout(function ()
  {
    activeButton.classList.remove("pressed");
  }, 200);
}

//------------------------------------------------------------------------------

//flying action of button
document.getElementsByClassName("flybtn")[0].addEventListener("click", function() {
  // document.getElementsByClassName("flybtn")[0].style.transform = `translate(0px, 0px) rotate(0deg)`;
  setInterval(() => {
    const x = Math.floor(Math.random()*(document.body.clientWidth-74));
    const y = Math.floor(Math.random()*80);
    document.getElementsByClassName("flybtn")[0].style.transform = `translate(${x}px, ${y}px) rotate(${Math.floor(Math.random()*360)}deg)`;
  }, 2000);
});

//------------------------------------------------------------------------------

//function to get time and display
function getTime() {
  let t = new Date();
  document.querySelector(".time").innerHTML = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
}

setInterval(getTime, 1000);

//------------------------------------------------------------------------------

// //fetching swapi api of star wars using XMLHttpRequest
// function reqListener() {
//   console.log("It worked.");
//   //console.log(this.responseText);
//   const planets = JSON.parse(this.responseText).results;
//   console.log(planets[0].films[0]);
//   var filmURL = planets[0].films[0];
//   var filmReq = new XMLHttpRequest();
//   filmReq.addEventListener("load", ()=>{
//     console.log("Second request");
//     console.log(JSON.parse(filmReq.responseText));
//   });
//   filmReq.addEventListener("error", () => {
//     console.log("Second Failed");
//   });
//   filmReq.open("GET", filmURL);
//   filmReq.send();
// }
//
// var starWars = new XMLHttpRequest();
// starWars.addEventListener("load", reqListener);
// starWars.addEventListener("error", () => {
//   console.log("Not loaded. Failed");
// });
// starWars.open("GET", "https://swapi.dev/api/planets/")
// starWars.send();

//------------------------------------------------------------------------------

// //fetching swapi api of star wars using fetching
// const checkStatusAndParse = (resp) => {
//   if(!resp.ok) {
//     throw new Error(resp.status);
//   }
//
//   return resp.json();
// }
//
// const printPlanets = (data) => {
//
//   for(let planetName of data.results) {
//     console.log(planetName.name);
//   }
//   return data.next;
// }
//
// const getMorePlanets = (url) => {
//   return fetch(url);
// }
//
// fetch("https://swapi.dev/api/planets/?page=1")
// .then(checkStatusAndParse)
// .then(printPlanets)
// .then(getMorePlanets)
// .then(checkStatusAndParse)
// .then(printPlanets)
// .then(getMorePlanets)
// .then(checkStatusAndParse)
// .then(printPlanets)
// .catch((err)=> {
//   console.log("Status code:", err);
// })

//------------------------------------------------------------------------------

// //fetching swapi api of star wars using axios
// const printPlanets = (res) => {
//   console.log("Fetched 10 planets");
//   for(let planets of res.data.results)
//   {
//     console.log(planets);
//   }
//   return res.next;
// }
//
// const fetchMorePlanets = (url = "https://swapi.dev/api/planets/?page=1") => {
//   return axios.get(url);
// }
//
// fetchMorePlanets()
// .then(printPlanets)
// .then(fetchMorePlanets)
// .then(printPlanets)
// .catch((err)=> {
//   console.log("Status code:", err);
// })

//------------------------------------------------------------------------------

async function getPlanets() {

  console.log("before fetching");
  const res = await axios.get("https://swapi.dev/api/planets/?page=1");
  console.log(res.data);

  console.log("after fetching");
}
console.log("out of fetching");
getPlanets();
