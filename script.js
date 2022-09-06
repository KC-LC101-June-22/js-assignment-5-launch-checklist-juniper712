

const { addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let chosenPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diamater, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moon, chosenPlanet.moons, chosenPlanet.image);
   })
   
   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";
   let form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
    event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
       
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
       
        let fuelInput = document.querySelector("input=[number=fuelLevel] ");
        let fuelLevel = Number(fuelLevel.value);
       
        let cargoInput = document.querySelector("input=[number=cargoMass]");
        let cargoLevel = Number(cargoInput.value);
       

        formsSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

  
    });

});
