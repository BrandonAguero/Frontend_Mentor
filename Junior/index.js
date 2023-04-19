/* function getEmail(user) {
    if (user.email.endsWith("@academlo.com") === true) return user.email;
}
console.log(getEmail({ name: "Erik", email: "erik@academlo.com" })); */

/* let usersMore = [
    { name: "Erik", email: "erik@academlo.com", age: 20 },
    { name: "Georg", email: "georg@academlo.com", age: 30 },
    { name: "Daniel", email: "daniel@academlo.com", age: 40 }
];

function getEmails(users) {
    let newArray = []
    for (const i of users) {
        if (i.email.endsWith(".com")) newArray.push(i.email); 
    }
    return newArray;
}
console.log(getEmails(usersMore)); */

let students = [
    { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
    { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
    { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
    { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
];
let countries = [
    { id: 1, name: 'Mexico', },
    { id: 2, name: 'Colombia' }
];

let country = "Colombia";

function countStudents(students, countries, countryName ) {
    let newArray = [];
    for (let i of countries) {
      if (i.name === countryName) {
        for (let j = 0; j < students.length; j++) {
          if (students[j].country_id === i.id) {
            newArray.push(students[j])
          }
        }
      }
    };
    return newArray.length;
  }
  
console.log(countStudents(students, countries, country));