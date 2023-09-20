var buttons=document.querySelectorAll(".drum");

///add event listeners to buttons

for(var i=0;i<7;i++)
{
    buttons[i].addEventListener("click",handleClick);
}

//detect click

function handleClick()
{
   var buttonInnerHTML=this.innerHTML; 

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

//detect keybord pressed

document.addEventListener("keydown",keysPressed);

function keysPressed(event)
{
   makeSound(event.key);
   buttonAnimation(event.key);
}

//create selector to make sounds

function makeSound(key)
{
    switch(key)
    {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
         
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;

        default: console.log(buttonInnerHTML);
    }
}


///create animation for buttons

function buttonAnimation(currentKey)
{
   var activeButton=document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   setTimeout(removeClass,100);


   function removeClass()
   {
    activeButton.classList.remove("pressed");
   }
}