"use strict"

let menu = [
    [{item: "Sausage and Egg Biscuit", price: 3.69},
    {item: "Bacon and Egg Biscuit", price: 3.49},
    {item: "Ham and Egg Biscuit", price: 3.29}],

    [{item: "Supreme Pizza", price: 8.65},
    {item: "Country Fried Chicken", price: 10.49},
    {item: "Cheesebuger", price: 9.29},
    {item: "Jjangmeon", price: 11.29}],

    [{item: "Shepards Pie", price: 10.65},
    {item: "Beef Wellington", price: 17.80},
    {item: "Pasta a la Vodka", price: 15.29},
    {item: "Beef stirloing", price: 18.29},
    {item: "Salmon Platter", price: 13.29}]
];

let meal = 0;
//we are choosing the positions of the menu item
if (meal === 0){
    console.log("Breakfast Menu")
    console.log("---------------")
}
if (meal === 1){
    console.log("Lunch Menu")
    console.log("---------------")
}
if (meal === 2){
    console.log("Dinner Menu")
    console.log("---------------")
}

//we are grabbing the array list and using [meal] to determine where we are on the list
//menu item is the varible that goes through each list and is then put in it place
//so now we have the list and are going through it sepretely, depending on the meal location
menu[meal].forEach((menuItem)=>{

    console.log(`${menuItem.item} : ${menuItem.price}`)
})