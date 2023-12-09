/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.replace(' ', '').toLowerCase();
  str2 = str2.replace(' ', '').toLowerCase();

  str1Sorted = str1.split('').sort().join('');
  str2Sorted = str2.split('').sort().join('');

  if(str1Sorted === str2Sorted){
    return true;
  }else{
    return false;
  }
}

module.exports = isAnagram;
