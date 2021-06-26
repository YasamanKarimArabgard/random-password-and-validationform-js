let userName=document.getElementById("username");
let phoneNumber=document.getElementById("phonenumber");
let password=document.getElementById("password");
let submitBtn=document.getElementById("submitButton");
let usererror=document.getElementById("usernameerror");
let phoneerror=document.getElementById("phoneerror");
let passworderror=document.getElementById("passworderror");
let randompass=document.getElementById("pass-btn");
const pageLoad = () => submitBtn.onclick = Checkcycle();


const Checkcycle=()=>{
   let userInput = userName.value;
   let phoneInput= phoneNumber.value;
   let passInput= password.value;
   let userreg = /^[A-Za-z]+$/;
   let phonereg=/^(\+98?)?{?(0?9[0-9]{9,9}}?)$/;

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
       phoneerror.innerHTML="phonenumber must be 0-9";
   }else{
       phoneerror.innerHTML= " ";
   }

   if(passInput == ""){
     passworderror.innerHTML="type something please!";
     randompass.style.display="none";
   }else if(passInput.length < 8){
       passworderror.innerHTML="The password must be more 8 character";
       randompass.style.display="none";
   }else{
       passworderror.innerHTML="";
       randompass.style.display="none";
   }
}

submitBtn.addEventListener("click",Checkcycle);

randompass.addEventListener("click",()=>{
     let chars="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-|@.,?/!~#$%^&*(){}[]+=";
     let passlength = 8;
     let randompass ="";
     for(let i=0 ; i < passlength ; i++){
         let random = Math.floor(Math.random() * chars.length);
         randompass += chars.substring(random,random + 1 );
     }
     password.value = randompass;
     hideBtn();
})

password.addEventListener("click",()=>{
    randompass.style.display="block";
})


const hideBtn=()=>randompass.style.display="none";
