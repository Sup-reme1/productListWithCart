const person1 = {
    name: 'Abdulbasit',
    age: 22,
    school: 'LASU',
    isBrillant: true
}

const person2 = {
    name: 'Olalekan',
    age: 20,
    school: 'UNILAG',
    isBrillant: false
}

const person3 = {
    name: 'Alabi',
    age: 24,
    school: 'UNILAG',
    isBrillant: false
}

const person4 = {
    name: 'Ajibowu',
    age: 100,
    school: 'Gramma School',
    isBrillant: true
}



const groupOfPeople = [person1, person2, person3]

groupOfPeople.push(person4);
// console.log(groupOfPeople);

// if (person1.isBrillant) console.log(`${person1.name} is brillant`)




// // groupOfPeople.pop();
// // groupOfPeople.splice(1,2);
// console.log(groupOfPeople);


// // /////////// Looping through an array with forEach ///////////////////
// // forEach only step through the data in the array
// groupOfPeople.forEach(person => console.log(`${person.name} is ${person.isBrillant}`));

// // /////////// Looping through an array with map ///////////////////
// // map return an array with the property provided
// const isbrillantStatus = groupOfPeople.map(person => person.isBrillant)
// console.log(isbrillantStatus);

// const studentsName = groupOfPeople.map(person => person.name)
// console.log(studentsName);

// // /////////// Looping through an array with filter ///////////////////
// // filter set a condition to select the array element stepped on
// const brillantStudents = groupOfPeople.filter(person => person.isBrillant);
// console.log(brillantStudents);

// /////////// Looping through an array with reduce ///////////////////
// reduce is use to reduce an array in a single data or single array
const totStudentsName = groupOfPeople.reduce((groupedPeople, person) =>{
    const student = person.name
    console.log(student)
    if (groupedPeople[student] == null) groupedPeople[student] = []
    groupedPeople[student].push(person.name)
    console.log(groupedPeople)
    return groupedPeople
}, {});

// console.log(totStudentsName)


// ///////////// Returning a single data ///////////////////////
// const totalAge = groupOfPeople.reduce((total, person) => {
//     return total + person.age
// }, 0);

// console.log(totalAge)

