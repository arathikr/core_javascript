var person = {
  firstname: 'Anusha',
  lastname: 'Rathikrindi',
  getFullName: function () {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  },
};

var logName = function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments:  ' + lang1 + ' ' + lang2);
  console.log('----------------');
};

var logPersonName = logName.bind(person);
logPersonName();
logPersonName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

(function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments:  ' + lang1 + ' ' + lang2);
  console.log('----------------');
}).apply(person, ['es', 'en']);

//Function borrowing
var person2 = {
  firstname: 'Ashok',
  lastname: 'Rathikrindi',
};

console.log(person.getFullName.apply(person2));

// Function currying
function multiply(a, b) {
  return a * b;
}

/* bind is not calling or executing function, 
so what its do giving a paramete?
=> Giving a parameter sets the permanent values of these parameters when copy is made 
below example we are permanently setting first parameters is '2'
*/

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));
