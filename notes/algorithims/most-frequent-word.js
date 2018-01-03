function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function mostFrequentWord(text) {
  let words = getTokens(text);
  let wordFrequencies = {};
  for (let i = 0; i <= words.length; i++) {
    if (words[i] in wordFrequencies) {
      wordFrequencies[words[i]]++;
    } else {
      wordFrequencies[words[i]] = 1;
    }
  }
  console.log(JSON.stringify(wordFrequencies));
  let currentMaxKey = Object.keys(wordFrequencies)[0];
  let currentMaxCount = wordFrequencies[currentMaxKey];

  for (let word in wordFrequencies) {
    if (wordFrequencies[word] > currentMaxCount) {
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }
  }
  return currentMaxKey;
}

mostFrequentWord('This is a sentence. We are trying to find out what the most common word will be in this string of sentence ...s');
