let firstname = 'Ashok';
// let firstname = 'Kumar';

// console.log(firstname);

{
  let firstname = 'Kumar';
  console.log(firstname);
}

console.log(firstname);

// second case
switch (firstname) {
  case 'Ashok': {
    let lastname = 'Alicea';
    break;
  }
  case 'Kumar':
    let lastname = 'P.Alicia';
    break;
}

// for of
let person = { firstnames: ['Tony', 'Anthony'] };
let person2 = person;
// // Error
// for (let person of person.firstnames) {
//   console.log(person);
// }

for (let person of person2.firstnames) {
  console.log(person);
}

// Const
const firstName = 'Tony';
{
  const firstName = 'Anthony';
  console.log(firstName);
}

console.log(firstName);

// const lastName = 'Ashok';
// lastName = 'Kumar';
