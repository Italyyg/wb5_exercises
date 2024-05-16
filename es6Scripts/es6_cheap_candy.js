"use strict"

let cart = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Twizlers", price: 3.98 },
    { product: "Red Hots", price: 1.25 },
    { product: "Nerds", price: 0.75 },
    { product: "Gummy Planets", price: 5.35 },
    { product: "Air Heads", price: 2.50 },
    { product: "Cow tails", price: 1.59 },
    { product: "Razzles", price: 2.99 }

];
//creating a function to find candy under 4 dollars
let Under4Bucks = cart.filter((product) => {
    //if the product price is less than 4 dollars it is true and will show it
    if (product.price < 4) {
        return true
    }
    return false;

})
console.log(Under4Bucks)

let eminem = cart.filter((product) => {

    if (product.product.indexOf("M&M") !== -1) {
        return true
    }

    return false;


});
console.log(eminem)

let nerds = cart.find((nerd)=>{

    return nerd.product === "Nerds"

});

console.log(nerds)

if (nerds){
    console.log("We have them thangs")
}else{
    console.log("We do not have those man, get to walkin");
}

// nerds ? console.log("We have them thangs") : console.log("We do not have those man, get to walkin");