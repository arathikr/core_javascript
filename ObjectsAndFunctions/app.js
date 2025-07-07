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

// Faking Namespaces
var greet = 'Hello!';
var greet = 'Hola!';

var english = {};
var spanish = {};
english.greet = 'Hello!';
spanish.greet = 'Hola!';

console.log(english);

// JSON and Object literals
var objectLiteral = {
  firstname: 'Mary',
  isAProgrammer: true,
};

console.log(JSON.stringify(objectLiteral));
var jsonValue = JSON.parse('{"firstname": "Mary", "isAProgremmer": true}');
console.log(jsonValue);

// FUnctions Are Objects

// Function statement
function wish() {
  console.log('hi');
}
// Functions are objects in javascript
wish.language = 'english';
console.log(wish.language);

// Function Expression
// anonymusGreet(); not Hoisted
var anonymusGreet = function () {
  console.log('hi');
};

anonymusGreet();

function log(a) {
  console.log(a);
}
log(3); // value on the fly
log('hello'); // string on the fly
log({
  // creating object on the fly
  greeting: 'hi',
});
function log2(a) {
  a();
}
log2(function () {
  // creating function on the fly
  console.log('hi');
});

// By Value Vs By Reference

// By value (primitives)
var a = 3;
var b;
b = a; // b will create new memory
console.log(a);
console.log(b);

// By Reference (all objects (including functions))
var c = { greeting: 'hi' };
var d;
d = c;
c.greeting = 'hello'; // mutate
console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
  obj.greeting = 'Hola';
}
changeGreeting(d);
console.log(c);
console.log(d);

// equals operator setsup new memory space (new address)
c = { greeting: 'howdy' };
console.log(c);
console.log(d);
