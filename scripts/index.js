"use strict"
console.log("work");

window.onload = function () {
    let iceCreamForm = document.querySelector("#iceCreamForm");

    iceCreamForm.addEventListener("submit", iceCreamToppingsCal);

}



function iceCreamToppingsCal(event) {

    event.preventDefault();
    let iceForm = event.target;
    // fixs
    let totalOrder = 1.25 Number(iceForm.numOfScoops.value);

    let toppingsCost = 0;
    if (iceForm.coneOrCup.value === "cup") {
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

    let totalAmount = totalOrder + toppingsCost;
    console.log(totalAmount);
}



