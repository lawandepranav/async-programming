document.querySelector('form').addEventListener("submit", checkdb);
let reg_users = localStorage.getItem("userDetails");
if (reg_users == null) {
    localStorage.setItem("userDetails", JSON.stringify([]));
}

function checkdb(){
    event.preventDefault();
    let email = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    console.log(email, password)
    
    //Get  data from local storage

    reg_users = JSON.parse(localStorage.getItem("userDetails"));
    if(reg_users.length==0){
        alert("User Not Registered");
        location.href("./signUp.html");
        
    }
    else{

        let v = false;
        reg_users.forEach(function(user){
            if(user.email==email && user.password == password){
                alert("Login Successfull!!!");
                v=true;
                // location.href("./index.html");
                window.location.href = "./index.html"
                return;
            }
            else if(user.email == email && user.password != password){
                alert("Wrong Password Please Try Again");
                v=true;
                location.reload();
                return;
            }
        });
       


        if(v==false){
                alert("User Not Registered");
                location.reload();
        }
    }
}
