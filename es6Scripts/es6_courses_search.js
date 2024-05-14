"use strict"

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

//practice 1
function startDate(someValue) {

    if (someValue.CourseId === "PROG200") {

        return true;

    } else {

        return false;
    }

}

let courseStart = courses.find(startDate)

console.log(courseStart.StartDate)

console.log("-------------------------------------------")
///practice 2

function titleCourse(someValue) {

    if (someValue.CourseId === "PROJ500") {

        return true;

    } else {

        return false;
    }

}

let courseTitle = courses.find(titleCourse)

console.log(courseTitle.Title)
console.log("-------------------------------------------")
//practice 3

function lessThan50(potato) {
    //if the inserted thing is less than or equal to 50 then it is true
    if (potato.Fee <= 50) {
        return true;
    }
    else {
        return false;
    }
}
//now we are filtering through the courses and applying the less than function
let under50 = courses.filter(lessThan50);
for (let i = 0; i < under50.length; i++) {

    console.log(under50[i].Title);

}
console.log("----------------------------------------------------------------")

//practice 4

function classMeet(sumValue) {

    if (sumValue.Location === "Classroom 1") {

        return true

    } else {

        return false

    }
}
let whereWeMeeting = courses.filter(classMeet)
for (let i = 0; i < whereWeMeeting.length; i++){

    console.log(whereWeMeeting[i].Title)
}










