function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("dad"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));
