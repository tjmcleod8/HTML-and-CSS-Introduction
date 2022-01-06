//first requirement: switch picture -- DONE
var imageState = 1;
function pictureChange() { //can keep adding pictures and increment each picture then set imageState back to 1 at last picture to restart loop
    var image = document.images;
    if(imageState == 1){ //if picture of Tyler set to TCU
        image[0].src='images/tcu.png'; 
        imageState = 2;
    }else{ //if picture of TCU set to Tyler
        image[0].src='images/profilePic.jpg';
        imageState = 1;
    }
}

//second requirement: switch text -- DONE
function changeFooter() { 
    var footer = document.getElementsByTagName("footer");
    var h2inFooter = footer[0].querySelector("h2");
    h2inFooter.innerHTML = "Contact Me";
}

//third requirement: highlight -- DONE
//in script at bottom of body in html

//fourth requirement: set class attribute -- DONE
//in script at bottom of body in html

//fifth requirement: red italic -- DONE
//in script at bottom of body in html

//sixth requirement: hide section -- DONE
//in script at bottom of body in html

//seventh requirement: make button -- DONE
//in script at bottom of body in html

//eighth requirement: show sections -- DONE
function showSections(){
    work.removeAttribute("hidden"); //removes hidden attribute which unhides entire section
    school.removeAttribute("hidden");
    hobbies.removeAttribute("hidden");
}