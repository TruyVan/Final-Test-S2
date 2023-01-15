function findLongestWordLength(str) {
  let getNoSpaceStr = str.split(' ');
  let longestWord = 0;
  console.log("Here we get all the words:", getNoSpaceStr);
  let catchWord = '';
  for(let i = 0; i < getNoSpaceStr.length; i++){
    if(getNoSpaceStr[i].length > longestWord){
	    longestWord = getNoSpaceStr[i].length;
      catchWord = getNoSpaceStr[i];
    }
  }
  console.log(`The longest word in the sentence: "${catchWord}"`);
  return `Length: ${longestWord}`;
}
let s1 = "The quick brown fox jumped over the lazy dog";
let s2 = "Hello World";
let s3 = "Learn hard to make the world better with software";
console.warn("Case 1:");
console.log(findLongestWordLength(s1))
console.warn("Case 2:");
console.log(findLongestWordLength(s2));
console.warn("Case 3:");
console.log(findLongestWordLength(s3));