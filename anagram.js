function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
  }
  
  
 
  console.log(isAnagram("abcd", "dabc"));           // Output: true
  console.log(isAnagram("anagram", "nagaram"));     // Output: true
  console.log(isAnagram("hello", "world"));         // Output: false
  console.log(isAnagram("silent", "listen"));       // Output: true
  console.log(isAnagram("12345", "54321"));         // Output: true 
  