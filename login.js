function login() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;

    if (username == "abc") {
        if (password == "1234") {

            alert("Your login success")
            location.replace("home.html")
        } else {
            alert("Wrong Passwod...Try again")
        }
    } else {
        alert("Wrong username...Try again")
    }
}

function signup() {
    var spassword1 = document.getElementById("spsw1").value;
    var spassword2 = document.getElementById("spsw2").value;

    if (spassword1 == spassword2){
        location.replace("login.html")
    }else{
        alert("password missmatched")
        location.replace("signup.html")
    }
}

function opens() {
    location.replace("signup.html")
}