var currentScroll = $(window).scrollTop();

var homePos = document.getElementById("home").offsetTop;
var aboutPos = document.getElementById("aboutSection").offsetTop;
var skillsPos = document.getElementById("skillsSection").offsetTop;
var projectsPos = document.getElementById("projectsSection").offsetTop;
var interestsPos = document.getElementById("interestsSection").offsetTop;

var homeHeight = document.getElementById("home").offsetHeight;
var skillsHeight = document.getElementById("skillsSection").offsetHeight;
var aboutHeight = document.getElementById("aboutSection").offsetHeight;
var projectsHeight = document.getElementById("projectsSection").offsetHeight;
var interestsHeight = document.getElementById("interestsSection").offsetHeight;

var sidenav = document.getElementById("sidenav");
var text = document.getElementById("nameText");
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

/*Changes height of header images according to the screen size*/ 
$('header').css({ 'height': $(window).height() });
$(window).on('resize', function() {

     $('header').css({ 'height': $(window).height() });
    if (window.innerWidth < 800) {
        text.innerHTML = "Hello World,<br> I'm Sana!";
    }
    else {
        text.innerHTML = "Hello World, I'm Sana!";
    }
});


if ($(window).width() < 800) {
    text.innerHTML = "Hello World,<br> I'm Sana!";

}



/*Changes the active link based on where the page is scrolled through*/
$(document).ready(function() {

    $(window).scroll(function (event) {
        
        var scrollPos = $(document).scrollTop();
        if (scrollPos <= (homePos + homeHeight)){
            $("#sidenav").fadeOut(500);
        }
        else if(scrollPos >= (homePos + homeHeight)){
            $("#sidenav").fadeIn(2500);
        }
        if ((scrollPos > aboutPos) && scrollPos< (aboutPos + aboutHeight)+200)  {
            $("#sidenavLinks a").removeClass("current");
            $("#aboutLink").addClass("current");
        }
        else if ((scrollPos > skillsPos) && scrollPos< (skillsPos + skillsHeight)+200)  {            
            $("#sidenavLinks a").removeClass("current");
            $("#skillsLink").addClass("current");
        }
        else if ((scrollPos > (projectsPos)) && scrollPos< (projectsPos + projectsHeight)+200)  {
            $("#sidenavLinks a").removeClass("current");
            $("#projectsLink").addClass("current");
        }
        else if ((scrollPos> interestsPos) && scrollPos < (interestsPos + interestsHeight))  {
            $("#sidenavLinks a").removeClass("current");
            $("#interestsLink").addClass("current");
        }
    });

 

});





/*Changes the active link to the link clicked by the user*/
$("#sidenavLinks a").click(function() {
    $("#sidenavLinks a").removeClass("current");
    $(this).addClass("current");
});




/*Changes interval of thumbnail gallery according to the thumbnail selected*/
$('#photoGallery').on('slid.bs.carousel', function () {
   var currentIndex = $('#galleryItems .item.active').index() + 1;
    if (currentIndex%4 == 1){
        $('#thumbnails').attr("data-interval", 20000);
    }

    else if (currentIndex%4 == 2){
        $('#thumbnails').attr("data-interval", 15000);
    }

    else if (currentIndex%4 == 3){
        $('#thumbnails').attr("data-interval", 10000);
    }
    else if (currentIndex%4 == 0){
        $('#thumbnails').attr("data-interval", 5000);
    }
  })
