function isBlank(str) {
    return str === null || str === undefined || str.trim() === '';
  }

  
  const str1 = '';
  const str2 = ' ';
  const str3 = null;
  const str4 = undefined;
  
  console.log(isBlank(str1));
  console.log(isBlank(str2));
  console.log(isBlank(str3));
  console.log(isBlank(str4));
  console.log(isBlank("Hello"));      
console.log(isBlank("  Hello  "));  
console.log(isBlank("   World"));  
  