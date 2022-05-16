const planetsArray = [
    //Our solar system's bodies' names and their ratio to Earth's gravity
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

const select = document.getElementById("planets");
let dropdown = planetsArray.reverse();

planetsArray.forEach(function(item){
    var opt = item[0];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
});
function calculateWeight(weight, planetName) {
    let gravity;
    for (var i=0; i < planetsArray.length; i++){
        if(planetName == planetsArray[i][0]){
        gravity = planetsArray[i][1];
        }
    }
    let resultWeight = weight * gravity;
    return resultWeight;
}
function handleClickEvent(e) {
    let userWeight = document.getElementById("user-weight").value;
    let planetName = document.getElementById("planets").value;
    let result = calculateWeight(userWeight, planetName);
    document.getElementById('output').innerHTML = `If you were on ${planetName}, you would weigh ${result}lbs!`;
}
    document.getElementById('calculate-button').addEventListener('click', function(){handleClickEvent()});