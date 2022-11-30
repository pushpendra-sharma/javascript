// function borrowing
// function.bind(reference, argument1,argument2);

let name1 = {
  firstName: 'Elon',
  lastName: 'Musk',
};

let printFullName = function (home) {
  console.log(this.firstName + ' ' + this.lastName + ' ' + home);
};

let name2 = {
  firstName: 'Mark',
  lastName: 'Bot',
};

// will create copy of printFullName and return a function, print1 = function, print2 = function
let print1 = printFullName.bind(name1, 'New York');

let print2 = printFullName.bind(name2);

print1()
print2()