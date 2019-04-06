const expression = /^[A-Za-z]+$/;
const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const username_error = document.getElementById('username_error');
const email_error = document.getElementById('email_error');
const password2_error = document.getElementById('password2_error');

username.addEventListener('blur', () => {
    if(username.value == "" || username.value.length == 0){
        username_error.innerHTML = "Username cannot be blank";
        username.style.border = "1px solid red";
        username.focus();
        return false;
    }
    else if(!username.value.match(expression)){
        username_error.innerHTML = "Username MUST be characters only";
        username.style.border = "1px solid red";
        username.focus();
        return false;
    }
    else{
        username_error.innerHTML = "";
        username.style.border = "1px solid green";
        return true;
    }
});

email.addEventListener('blur', () => {
    if(email.value == ""){
        email_error.innerHTML = "Email cannot be blank";
        email.style.border = "1px solid red";
        email.focus();
        return false;
    }
    else if(!email.value.match(emailReg)){
        email_error.innerHTML = "Invalid email";
        email.style.border = "1px solid red";
        email.focus();
        return false;
    }
    else{
        email_error.innerHTML = "";
        email.style.border = "1px solid green";
        return true;
    }
});

password.addEventListener('blur', () => {
    if(password.value == "" || password2.value == ""){
        password2_error.innerHTML = "Password cannot be blank";
        password.style.border = "1px solid red";
        password.focus();
        return false;
    }
    else{
        password_error.innerHTML = "";
        password2.style.border = "1px solid green";
        return true;
    }
});

/*
function validate(){
    
    if(username.value == ""){
        username_error.innerHTML = "Username cannot be blank";
        username.style.border = "1px solid red";
        username.focus();
        return false;
    }
    else if(!username.value.match(expression)){
		username.style.border = "1px solid red";
        username_error.innerHTML = "Username MUST be characters only";
        username.focus();
		return false;
	}else{
        username_error.innerHTML = "";
        username.style.border = "green";
        return true;
    }

    if(email.value == ""){
        email_error.innerHTML = "Email cannot be blank";
        email.style.border = "1px solid red";
        email.focus();
        return false;
    }
    else if(!email.value.match(emailReg)){
        email_error.innerHTML = "Invalid email";
        email.style.border = "1px solid red";
        email.focus();
        return false;
    }
    else{
        email_error.innerHTML = "";
        email.style.border = "green";
        return true;
    }

    if(password.value == "" || password2.value == ""){
        password2_error.innerHTML = "Password cannot be blank";
        password.style.border = "1px solid red";
        password.focus();
        return false;
    }
    else{
        password2_error.innerHTML = "";
        password2.style.border = "1px solid green";
        return true;
    }

};

*/