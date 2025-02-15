function sendemail(){
    document.getElementById("fname").style.border = ""
    document.getElementById("text").style.border = ""
    document.getElementById("email").style.border = ""
    if(verifyFormat()){
        alert("Email has been sent, Thank you for reaching out!")
    }else{
        alert("Invalid field(s).")
    }
}
function verifyFormat(){

    /* Empty fields */
    if(document.getElementById("fname").value == ""){
        document.getElementById("fname").style.border = "1px solid tomato"
        return false;
    }
    if(document.getElementById("email").value == ""){
        document.getElementById("email").style.border = "1px solid tomato"
        return false;
    }
    if(document.getElementById("text").value == ""){
        document.getElementById("text").style.border = "1px solid tomato"
        return false;
    }
    /* Email format*/
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(re.test(document.getElementById("email").value)){
        return true
    }else{
        document.getElementById("email").style.border = "1px solid tomato"
        return false
    }
}
