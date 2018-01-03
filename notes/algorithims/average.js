function average(numbers) {
  // initially we set total to the value of the
  // first number.
  let total = numbers[0];
  // then we add each of the remaining numbers
  // to total.
  for (let i = 1; i < numbers.length; i++) {
    total += numbers[i];
  }
  // then we return total divided by the length
  // of our numbers array to get the average.
  return total / numbers.length;
}

// this is an alternative implementation
// that is a bit cleaner, but perhaps harder to
// "grok" (https://en.wikipedia.org/wiki/Grok) than
// our implementation of `average` above. `reduce` is
// built-in JavaScript method on arrays (
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce),
// and its used to generate a single result from a list of items.
function averageAlt(numbers) {
  return (
    numbers.reduce(function(a, b) {
      return a + b;
    }) / numbers.length
  );
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  } else {
    console.log(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

(function runTests() {
  const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const correctAns1 = 5.5;
  const numList2 = [0, -1, 1];
  const correctAns2 = 0;

  const testResults = [
    testFunctionWorks(average, numList1, correctAns1),
    testFunctionWorks(average, numList2, correctAns2),
  ];
  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();
