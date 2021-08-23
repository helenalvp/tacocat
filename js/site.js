function getString(){
    let originalString = document.getElementById("userString").value;

    if(originalString != "" && originalString.length > 1){
        let userStr = originalString.replace(/\W/g, '').toLowerCase();

        let msgObj = checkPalindrome(userStr)  

        displayMessage(msgObj)
    } else {
        alert("Please enter a phrase or word")
    }
} 

function checkPalindrome(str){
    let revStr = "";
    let msgObj = {}

    for( let i = str.length -1; i >= 0 ; i --){
        revStr += str[i];
    }
    (revStr == str)?(msgObj ={
            heading : `You entered a Palindrome!`,
             msg :`Your palindrome is ${str}.`
            }):(msgObj ={
                heading : `You did not enter a palindrome`,
                msg : `${str} is not the same as ${revStr}`
            }) 
    return msgObj;
  }

  function displayMessage(msgObject){
    document.getElementById("alert-header").innerHTML = msgObject.heading;
    document.getElementById("msg").innerHTML = msgObject.msg;
    document.getElementById("alert").classList.remove("invisible");  
  }