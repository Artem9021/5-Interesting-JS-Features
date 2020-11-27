var current = 1;
var titles = ["Welcome", "Battery", " Vibration", "Online state", "Clipboard", " OS info", "Goodbye"]


function hideall(){
    for (i = 0; i<7; i++){
        let slides = document.querySelectorAll(".section");
        slides[i].classList.remove("visible");
    }
}



const scrollToTop = () => {
    const c =     document.documentElement.scrollTop || document.body.scrollTop; 
    if (c > 0){ 
    window.requestAnimationFrame(scrollToTop); 
window.scrollTo(0, c - c / 8); } };
 
 

const about = () => {
    alert("Created by Artem. Please give credit if copying code.")
}



function next(){
    if (current < 7){
    let slides = document.querySelectorAll(".section");
    
    
   document.getElementById("title").innerHTML = titles[current]; slides[current].classList.add("visible");
    

    current++;
  setTimeout(scrollToTop, 100); 
    
    }
    
    
}

function prev(){
if (current > 1){
    var slides = document.querySelectorAll(".section");
    
    
    current--;
    document.getElementById("title").innerHTML = titles[current-1];
     slides[current].classList.toggle("visible");
   setTimeout(scrollToTop, 400)
   
  
  
  }
  }


function openSideNav(){
document.getElementById("hamburger").classList.toggle("open");
document.getElementById("sidenav").classList.toggle("open");
document.getElementById("topnav").classList.toggle("open");
}







// 1) Get device's battery:
function getBatteryStats(){
navigator.getBattery().then(
    function(battery){
    alert("Your battery level is: " + battery.level * 100 + "%");
})
}


// 2) Vibrate the device
function vibrate_1second(){
    navigator.vibrate(1000);
}

function vibrate_pattern(){
    navigator.vibrate([50, 100, 50, 100, 200, 10, 10, 20, 20, 20, 20, 100, 100, 400, 50, 100, 50, 100, 200, 10, 10, 20, 20, 20, 20, 100, 100]);
}

// 3) Get info about is device offline or online
function isOnline(){
    alert(navigator.onLine);
}


// 4) Copy to clipboard:
function copySomething(){
    document.getElementById("input").select();
    document.getElementById("input").setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert("Copied! Now try to paste the text you just copied into the text field below")
}

// 5) Get OS
function getOS(){
    alert(navigator.userAgent)
}
