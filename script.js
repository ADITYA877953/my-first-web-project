<!-- home.html -->
function addTask(){

let task=document.getElementById("newTask").value;

if(task==""){
alert("Enter a task");
return;
}

let div=document.createElement("div");
div.innerHTML='<input type="checkbox"> '+task;

document.getElementById("taskList").appendChild(div);

document.getElementById("newTask").value="";

}


<!-- index.html -->
function validateForm(){

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let mobile=document.getElementById("mobile").value.trim();

let password=document.getElementById("password").value;

if(name==""){

alert("Username is required");

return false;

}

if(!email.includes("@")){

alert("Enter a valid email");

return false;

}

if(mobile.length!=10 || isNaN(mobile)){

alert("Enter valid 10 digit mobile number");

return false;

}

if(password.length<6){

alert("Password should contain at least 6 characters");

return false;

}

alert("Login Successful!");

return true;

}

function togglePassword(){

let pass=document.getElementById("password");

let eye=document.getElementById("eyeIcon");

if(pass.type==="password"){

pass.type="text";

eye.className="bi bi-eye-slash-fill";

}

else{

pass.type="password";

eye.className="bi bi-eye-fill";

}

}


