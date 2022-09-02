
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let div = document.getElementbyId("missiontTarget");
   div.innerHTML = 
   
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: $(name)</li>
                    <li>Diameter: $(diameter)</li>
                    <li>Star: $(star)}</li>
                    <li>Distance from Earth: $(distance)</li>
                    <li>Number of Moons: $(moons)</li>
                </ol>
                <img src="$(imageUrl)">;`
}

function validateInput(testInput) {
    let numberInput = Number(testInput);
    if (testInput === " ") 
    {
        return "Empty";

    }
    else if (isNan(numberInput))

    {   
        return "Not a number";

    } 
    else if (isNan(numberInput) === false)

    return "Is a number";
        
}  
    
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilot = document.getElementbyId("pilotStatus");
    let colpilot = document.getElementbyId("copilotStatus");
    let fuelLevel = document.getElementbyId("fuelStatus");
    let cargoMass = document.getElementbyId("cargoStatus");

    if (validateInput(pilot) === "Empty" || validateInput(colpilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert ("Missing value(s)!")
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert ("Please enter a valid value for each field!")
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot $(pilot) is ready`;
        colpilotStatus.innerHTML = `Copilot $(copilot) is ready`;
        
        let launchStatus = document.getElementbyId("launchStatus");
            if (fuelLevel < 10000) {
                fuel.innerHTML = "Fuel level is too low for liftoff";
                launchStatus.innerHTML = "Shuttle not ready for launch";
                launchStatus.style.color = "red";
            }else if (fuelLevel >= 10000 && cargoLevel >= 10000) {
                fuel.innerHTML = "Fuel level is good";
                cargo.innerHTML = "Cargo is too heavy for liftoff";
                launchStatus.innerHTML = "Shuttle is not ready for launch";
                launchStatus.style.color = "red";
            }else if (fuelLevel < 10000 && cargoLevel > 10000)  {
                fuel.innerHTML = "Fuel level is too low for liftoff"
                cargo.innerHTML = "Cargo is too heavy for liftoff";
                launchStatus.innerHTML = "Shuttle is not ready for launch";
                launchStatus.style.color = "red";
            }else{
                fuel.innerHTML = "Fuel level is good"
                cargo.innerHTML = "Cargo level is good"
                launchStatus.innerHTML = "Shuttle is ready for launch"
                launchStatus.style.color = "green";
                    }
                }
            }
            
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch ("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        }
            return reponse.json();
        
            }
        });
return planetsReturned;   
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
