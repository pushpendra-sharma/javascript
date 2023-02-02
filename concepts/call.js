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

// function borrowing
// function.call(reference, arguments);
printFullName.call(name1,'New York')

printFullName.call(name2)
