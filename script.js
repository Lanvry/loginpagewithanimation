// Sign Up Switch Function
function signUp(){ 
    document.getElementById("signUp").style.top="45px"
    document.getElementById("box").style.height="600px" //Change this value when a bug occurs
    document.getElementById("signIn").style.top="-450px"
    document.getElementById("forgetPassword").style.top="-450px"

}
function signIn(){
    document.getElementById("signIn").style.top="45px"
    document.getElementById("box").style.height="420px" //Change this value when a bug occurs
    document.getElementById("signUp").style.top="450px"
    document.getElementById("forgetPassword").style.top="-450px"
}
function forgetPassword(){
    document.getElementById("forgetPassword").style.top="45px"
    document.getElementById("box").style.height="300px" //Change this value when a bug occurs
    document.getElementById("signUp").style.top="450px"
    document.getElementById("signIn").style.top="450px"
}