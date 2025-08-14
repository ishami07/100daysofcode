/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str1Lowercase=str1.toLowerCase();
  arr1 = str1Lowercase.split("");

  let str2Lowercase=str2.toLowerCase();
  arr2 = str2Lowercase.split("");
  
  arr1.sort();
  arr2.sort();

  let sortedStr1 = arr1.join("");
  let sortedStr2 = arr2.join("");
  if(sortedStr1 == sortedStr2){
    return true;
  }
  else{
    return false;
  }

}

module.exports = isAnagram;
