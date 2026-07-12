let nm=document.querySelector("#na");
let form=document.querySelector("form");
form.addEventListener("submit",function(dets){
    dets.preventDefault(); 
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
 const email= document.querySelector("#em").value;
  if (emailRegex.test(email)) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}
    if(nm.value.length<=2){
        document.querySelector("#hide").style.display="initial";
    }
       else{
        document.querySelector("#hide").style.display="none";
       }
});
