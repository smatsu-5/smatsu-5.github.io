const CLOSED_NAV_WIDTH = "3.7em";

function openNav() {
    document.getElementById("side-nav").style.width = "10em";
    
    setTimeout(function(){ document.getElementById("list-group-icon").style.display = "none";
    document.getElementById("list-group-ul").style.display = "block"; }, 100);
    
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("side-nav").style.width = CLOSED_NAV_WIDTH;
    document.getElementById("list-group-ul").style.display = "none";
    document.getElementById("list-group-icon").style.display = "block";
}
