let userName=document.getElementById("username");
let phoneNumber=document.getElementById("phonenumber");
let password=document.getElementById("password");
let submitBtn=document.getElementById("submitButton");
let usererror=document.getElementById("usernameerror");
let phoneerror=document.getElementById("phoneerror");
let passworderror=document.getElementById("passworderror");
const pageLoad = () => submitBtn.onclick = Checkcycle();


const Checkcycle=()=>{
   let userInput = userName.value;
   let phoneInput= phoneNumber.value;
   let passInput= password.value;
   let userreg = /^[A-Za-z]+$/;
   let phonereg=/^(\+98?)?{?(0?9[0-9]{9,9}}?)$/;
   let passreg=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;

   if(userInput == ""){
       usererror.innerHTML="type something please!";
   }else if(!userInput.match(userreg)){
       usererror.innerHTML="username most be A-Z"
    }else{
        usererror.innerHTML="";
    }

   if(phoneInput == ""){
       phoneerror.innerHTML="type something please!";
   }else if(!phoneInput.match(phonereg)){
       phoneerror.innerHTML="phonenumber must be 0-9 & started with +98";
   }else{
       phoneerror.innerHTML= " ";
   }

   if(passInput == ""){
     passworderror.innerHTML="type something please!";
   }else if(!passInput.match(passreg)){
       passworderror.innerHTML="The password must have at least one special character";
   }else{
       passworderror.innerHTML="";
   }
}


submitBtn.addEventListener("click",Checkcycle);