function sendemail(){
    document.getElementById("fname").style.border = ""
    document.getElementById("text").style.border = ""
    document.getElementById("email").style.border = ""
    if(verifyFormat()){
        alert("This feature is not yet implemented!")
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


const colors = ['#C3E1AC', '#94CAD2', '#DDA0DD'];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.carousel_box');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            
            this.style.outline = `2px solid ${getRandomColor()}`;
            
        });
        card.addEventListener('mouseleave', function() {
            this.style.outline = '';
        });
    });
});

function checkScreenSize() {
if (window.innerWidth < 768) { 
    alert("Ops! I have not not yet optimize this website for mobile devices.");
}
}

window.onload = checkScreenSize;

