document.querySelector('form').addEventListener("submit", addUser);

 var data=JSON.parse(localStorage.getItem('userDetails')) || [];
function addUser(){
    event.preventDefault;
    var userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value,
        mobile: document.getElementById("mobile").value
        }

        data.push(userData);
        localStorage.setItem('userDetails', JSON.stringify(data));
        alert("SignUp Successfull");
        
    };