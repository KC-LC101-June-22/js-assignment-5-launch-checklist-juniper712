window.addEventListener("load", function() {

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diamater, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
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
