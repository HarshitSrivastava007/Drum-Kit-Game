
// document.querySelector("button").addEventListener("click", clickHandler)

// function clickHandler(){
//     alert("hello")
// }

// document.querySelectorAll("button")[1].addEventListener("click", ()=>{alert("A is Clicked")})
// document.querySelectorAll("button")[2].addEventListener("click" , ()=>{alert("S is clicked")})
// document.querySelectorAll("button")[3].addEventListener("click" , ()=>{alert("D is clicked")})
// document.querySelectorAll("button")[4].addEventListener("click" , ()=>{alert("j is clicked")})
// document.querySelectorAll("button")[5].addEventListener("click" , ()=>{alert("k is clicked")})
// document.querySelectorAll("button")[6].addEventListener("click" , ()=>{alert("L is clicked")})


// using for Loop

for(var i = 0 ; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
        var ButtonInnerHtml = this.innerHTML;

        KeyHandler(ButtonInnerHtml);

    });
    
}

document.addEventListener("keypress", function (event){
    KeyHandler(event.key);
})


function KeyHandler(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;   
          
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;  

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;  

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;  

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;  
        
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break; 
        default:
            break;
    }
} 