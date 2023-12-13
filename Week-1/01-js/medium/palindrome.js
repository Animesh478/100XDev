/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let strLower = str.toLowerCase().replaceAll(' ','');
  strLower = strLower.replaceAll(regex, '')
  let strReversed = strLower.split('').reverse().join('');
  console.log(strLower);
  console.log(strReversed)
  if(strLower === strReversed){
    return true;
  }else{
    return false;
  }
 
}
console.log(isPalindrome('Was it a car or a cat I saw'))
module.exports = isPalindrome;
