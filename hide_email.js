function hide_email(email) {
    
    const [username, domain] = email.split("@");
  
   
    const hiddenUsername = username.slice(0, 3) + "...";
  
    
    const hiddenEmail = hiddenUsername + "@" + domain;
  
    return hiddenEmail;
  }
  

  console.log(hide_email("robin_singh@example.com"));  
  console.log(hide_email("john.doe@gmail.com"));   
  console.log(hide_email("alice.smith@company.com"));
  