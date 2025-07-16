function greet(whattosay) {
  return function (name) {
    console.log(whattosay + ' ' + name);
  };
}

// greet('Hi')('Ashok');
var sayHi = greet('Hi');
sayHi('Ashok');

function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

var fs = buildFunctions();

// All outputs are same for below functions
fs[0]();
fs[1]();
fs[2]();

function buildFunctions2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    // let j = i;
    // arr.push(function (j  ) {
    //   console.log(j);
    // });
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

var fs2 = buildFunctions2();

// All outputs are same for below functions
fs2[0]();
fs2[1]();
fs2[2]();

// Function Factories
function makeGreeting(language) {
  return function (firstname, lastname) {
    if (language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }
    if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }
  };
}
/* greetEnglish is a function object 
whose closure points to language being English */
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Ashok', 'Rathikrindi');
greetSpanish('Ashok', 'Rathikrindi');

// CLosures and Callbacks
function sayHiLater() {
  var greeting = 'Hi';
  setTimeout(function () {
    console.log(greeting);
  }, 3000);
}

sayHiLater();

function tellMeWhenDone(callback) {
  var a = 1000;
  var b = 2000;
  callback();
}

tellMeWhenDone(function () {
  alert('I am done!');
});
