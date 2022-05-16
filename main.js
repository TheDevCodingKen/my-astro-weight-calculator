document.getElementById('generate').onclick = function() {

const planetsArray = [
    //Our solar system's bodies' names and their ratio to Earth's gravity
    ["Pluto", 0.06],
    ["Neptune", 1.148],
    ["Uranus", 0.917],
    ["Saturn", 1.139],
    ["Jupiter", 2.64],
    ["Mars", 0.3895],
    ["Moon", 0.1655],
    ["Earth", 1],
    ["Venus", 0.9032],
    ["Mercury", 0.377],
    ["Sun", 27.9],
];

let select = document.createElement("select");
    select.name = "planets";
    select.id = "planets"

for (const planet of planetsArray){
    var option = document.createElement("option");
    option.value = planetsArray[i][0];
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select.appendChild(option);
}

var label = document.createElement("label");
    label.innerHTML = "Choose a Planet: ";
    label.htmlFor = "planets";

    document.getElementById("container").appendChild(label).appendChild(select);
}
function calculateWeight(weight, planetName){
let weight = 100;
for(let i = 0; i < planetsArray.length; i++) {
    //   console.log("Your weight on" + planetsArray[i][0] + weight * planetsArray[i][1])
       console.log(`Your weight on ${planetsArray[i][0]} is ${(weight * planetsArray[i][1]).toFixed(2)}`)
}
}