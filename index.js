const CLOSED_NAV_WIDTH = "3.7em";


function flyout() {
    document.getElementsByClassName("test").style.display = "block";
}

function bigImg() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar").style.width = "22em";
  }
  
  function normalImg() {
    document.getElementById("sidebar").style.display = "none";
  }


  function openNav() {
    document.getElementById("side-nav").style.width = "10em";
    
    setTimeout(function(){ document.getElementById("list-group-icon").style.display = "none";
    document.getElementById("list-group-ul").style.display = "block"; }, 300);
    
    
    

    /* Code to be executed if screen is mobile */
    let isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;
    if(isMobile){
    $('#mobile-apps-modal').modal('show');
    }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("side-nav").style.width = CLOSED_NAV_WIDTH;
    document.getElementById("list-group-ul").style.display = "none";
    document.getElementById("list-group-icon").style.display = "block";
}
