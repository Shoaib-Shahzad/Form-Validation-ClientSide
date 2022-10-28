let username = document.getElementById('username');
let password = document.getElementById('password');
let userError = document.getElementById("user");
let passError = document.getElementById("pass");
let decision = 1;



let validateForm = () =>{
    if(username.value == ""){
        userError.innerHTML = "username is empty"
        decision = 0;
    }
    else if(username.value.length < 4){
        userError.innerHTML = "username minimum 4 character"
        decision = 0;
    }
    else{
        userError.innerHTML = "";
        decision = 1;
    }
    if(password.value === ""){
        passError.innerHTML = "password is empty"
        decision = 0;
    }
    else{
        passError.innerHTML = "";
        decision = 1;
    }
    if(decision){
        return true;
    }
    else{
        return false;
    }
}