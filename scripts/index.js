"use strict"
console.log("work");
// the page run only after the entire page is loaded
window.onload = function () {

    // can name the varibale anthing I called it iceCreamForm
    // document is the html page, querySelector grabs the page with the id=icecreamForm
    let iceCreamForm = document.querySelector("#iceCreamForm");


    // setup the event listener on the selected form.It listens for the "submit" event.
    // when the event happens calls the IceCreamToppingCal
    iceCreamForm.addEventListener("submit", iceCreamToppingsCal);

}

// added event(an action such as click or submit)in the parameter of the function

function iceCreamToppingsCal(event) {
    // stops the form from being submited 
    event.preventDefault();
    // retrieves the target element that gets the event which is iceCreamForm
    let iceForm = event.target;



    let costOfCup = 2.25;
    let costOfCone = 2.25;
    let costPerScoop = 1.25;
    let taxes = .875;
    let totalCost = 0;
    let toppingsCost = 0;

    if (iceForm.coneOrCup.value === "cone") {
        // total = 2.25 =(1.25* nummber of scoops)*.875 for tax for cone
        totalCost = costOfCone + (costPerScoop * Number(iceForm.numOfScoops.value)*taxes);


    }
    

    // the topping options for the cup


    else if (iceForm.coneOrCup.value === "cup") {
        // total= 2.25(1.25* number of scoops) fro cup
        totalCost = costOfCup + (costPerScoop * Number(iceForm.numOfScoops.value)*taxes);
        
        // topping for cup

        if (iceForm.sprinkles.checked) {
            toppingsCost += .50;

        }
        if (iceForm.whippedCream.checked) {
            toppingsCost += .25;

        }
        if (iceForm.hotFudge.checked) {
            toppingsCost += 1.25;

        }
        if (iceForm.cherry.checked) {
            toppingsCost += .25
        }
    }
   
    // the total amount 

    let totalAmount = totalCost + toppingsCost + taxes;
    // the message display on
    
    
    let message = `base Price:$${totalCost}
    Tax:$${taxes.toFixed(2)}
    Total Due:$${totalAmount.toFixed(2)}`

    let resultDiv =document.querySelector("#results");
    resultDiv.innerHTML = message;
}



