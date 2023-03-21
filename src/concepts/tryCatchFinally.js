function validateName(name) {
  try {
    throw 'Error2'; // generates an exception with a string value
    throw 42; // generates an exception with the value 42
    throw true; // generates an exception with the value true
    throw new Error('Required'); // to check
  } catch (error) {
    if (error instanceof TypeError) console.log('Type Error Occurred');
    else if (error instanceof RangeError) console.log('Range Error Occurred');
    else if (error instanceof SyntaxError) console.log('Syntax Error Occurred');
    else console.log('Some other Error Occurred');
  } finally {
    console.log('Cleaning up resources');
  }
}

validateName('Josh$');
