let userName = document.getElementById("username")
let pass = document.getElementById("password")

const myForm = () => {

    let uname = userName.value
    let pwd = pass.value
    let us = true;
    let ps = true;

    if (uname == "") {
        document.getElementById("unameErr").innerHTML = "Username is required"
    } else {
        if (/[A-Z]/.    test(uname)) {
            document.getElementById("unameErr").innerHTML = "Enterd Small Character"
        } else {
            console.log(uname);
            document.getElementById("unameErr").innerHTML = ""
            us = true;
        }
    }

    if (pwd == "") {
        document.getElementById("pwdErr").innerHTML = "Password is required"
    } else {
        if (pwd.length < 8) {
            console.log("pwd");
            document.getElementById("pwdErr").innerHTML = "Minimum enterd 8 Character"
        } else {
            console.log(pwd);
            document.getElementById("pwdErr").innerHTML = ""
            ps = true;
        }
    }

    if (us && ps == true) {

        try {
            let suc = isLoggedIn(uname, pwd);
            console.log(suc);
        }
        catch (error) {
            console.log("Error", error);
        }

    }
    return false;
}

const isLoggedIn = (user, password) => {
    if (user == "Deep" && password == "7383884401") {
        return "Login Successfull...";
    }
    else {
        throw 404;
    }
}
