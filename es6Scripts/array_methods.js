"use strict"

let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];

//build a new array for just the item names using map
let itemNames = cart.map((cartItem) => {
    //now we are returning the item from every sigular thing we run by
    return cartItem.item;


});
//loop over itemName with forEach to display each name
itemNames.forEach((item) =>{
    console.log(item)
})
console.log("---------------")

    let totalCost =cart.reduce((currentTotal,cost)=>{
        return currentTotal + (cost.price * cost.quantity);
},0);

console.log(totalCost);
    
console.log("----------------------------")

//loop over itemName with forEach to display each name
itemNames.sort().forEach((item) =>{
    console.log(item)
})

