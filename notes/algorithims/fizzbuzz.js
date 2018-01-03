function fizzBuzz(countTo) {
  // create an empty array that will
  // contain our results
  const result = [];
  // count from 1 to `countTo`, and for
  // each number, add the number or its
  // substitution (fizz, buzz, fizzbuzz)
  // to the result array.
  for (let i = 1; i <= countTo; i++) {
    if (i % 15 === 0) {
      result.push('fizzbuzz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else {
      result.push(i);
    }
  }
  return result;
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests
(function testFizzBuzz() {
  // we'll use the variables in our test cases
  const countTo = 16;
  const expected = [
    1,
    2,
    'fizz',
    4,
    'buzz',
    'fizz',
    7,
    8,
    'fizz',
    'buzz',
    11,
    'fizz',
    13,
    14,
    'fizzbuzz',
    16,
  ];

  const actual = fizzBuzz(countTo) || [];

  if (
    expected.length === actual.length &&
    expected.every(function(item, index) {
      return actual[index] === item;
    })
  ) {
    console.log('SUCCESS: fizzBuzz is working');
  } else {
    console.log('FAILURE: fizzBuzz is not working');
  }
})();
