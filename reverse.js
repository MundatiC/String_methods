function reverseWords(str) {
    if (typeof str !== "string") {
        return "It must be a string.";
      }
      const reversedStr = str.split('').reverse().join('');
    return reversedStr;
  }

  const str1 = "abc";
  const str2 = "JavaScript Exercises";
  const str3 = 1234;
  const str4 = "1234";
  
  console.log(reverseWords(str1)); 
  console.log(reverseWords(str2)); 
  console.log(reverseWords(str3)); 
  console.log(reverseWords(str4));
  