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

    var result
    /* Empty fields */
    if(document.getElementById("fname").value == ""){
        document.getElementById("fname").style.border = "1px solid tomato"
        result = false
    }
    if(document.getElementById("email").value == ""){
        document.getElementById("email").style.border = "1px solid tomato"
        result =  false
    }
    if(document.getElementById("text").value == ""){
        document.getElementById("text").style.border = "1px solid tomato"
       result = false
    }
    /* Email format*/
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(re.test(document.getElementById("email").value)){
        result = true
    }else{
        document.getElementById("email").style.border = "1px solid tomato"
        result = false
    }
    return result
}

function ScrollTo(id){
    document.getElementById(`${id}`).scrollIntoView({behavior: "smooth"});
}
