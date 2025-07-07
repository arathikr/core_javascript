var person = new Object();

// [] - computed member access operator
person['firstname'] = 'Ashok'; // to set and access property
person['lastname'] = 'Rathikrindi';

var firstNameProperty = 'firstname';
console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
// Accociativity of member access operator(.) is left to right
person.address.street = '111 Main St.';
person.address.city = 'Hyderabad';
person.address.state = 'AP';

console.log(person.address.street);
console.log(person.address.city);
// Finding Properties and methods dynamically
console.log(person['address']['state']);

// Object Literal
var person2 = {
  firstname: 'Ashok',
  lastname: 'Rathikrindi',
  address: {
    street: '111 Main St',
    city: 'New York',
    state: 'NY',
  },
};

console.log(person2);

function greet(person) {
  console.log('Hi ' + person.firstname);
}

greet(person2);

// Creating object on the fly
greet({
  firstname: 'Nandini',
  lastname: 'Rathikrindi',
});
