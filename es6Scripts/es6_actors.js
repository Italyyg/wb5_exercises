"use strict"

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

//finding one item on this array, just the names of the actors with a certain ID
let id187 = academyMembers.find((member) => {

    if (member.memID === 187) {
        return true

    } else {
        return false
    }


});
console.log(`The actor with the Id 187 is ${id187.name}`)

//finding actors with 3 movies
let filmsTrio = academyMembers.filter((actor) => {

    //actors if the list and films is the array list we want to go into to but with .lenght we actually go inside
    if (actor.films.length >= 3) {

        return true

    } else {
        return false
    }
});
//return member.films.length >= 3; (this also works and is more simplified.)


console.log(filmsTrio)

console.log(`These names begin with BOB:`)

//filter is a good tool for looking for more than one, we are looking for those that start with bob
let bobbyboy = academyMembers.filter((theName) => {

    if (theName.name.indexOf("Bob") === 0) {

        return true
    } else {
        return false
    }


});
console.log(bobbyboy)



let moviesWithA = academyMembers.filter((movie) => {

    for (let i = 0; i < movie.films.length; i++) { 


        if (movie.films[i].indexOf("A") === 0) {

            return true
        } else {
            return false
        }

    }
});

console.log(moviesWithA)