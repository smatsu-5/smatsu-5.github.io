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
    
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();
        if (scrollPos <= (homePos + homeHeight)){
            $("#sidenav").fadeOut(500);
        }
        else if(scrollPos >= (homePos + homeHeight)){
            $("#sidenav").fadeIn(500);
        }
    })

    $(window).scroll(function () {
        var scrollPos = $(document).scrollTop();
        console.log(scrollPos);
        console.log("aboutSection: ", skillsPos + skillsHeight);
        
        

        if ((scrollPos > aboutPos) && scrollPos< (aboutPos + aboutHeight)-200)  {
            $("#sidenavLinks a").removeClass("current");
            $("#aboutLink").addClass("current");
        }
        else if ((scrollPos > skillsPos-250) && scrollPos < (skillsPos + skillsHeight)-250)  {            
            $("#sidenavLinks a").removeClass("current");
            $("#skillsLink").addClass("current");
            console.log("here: ", scrollPos);
        }
        else if ((scrollPos > projectsPos-250) && scrollPos< (projectsPos + projectsHeight)-250)  {
            $("#sidenavLinks a").removeClass("current");
            $("#projectsLink").addClass("current");
        }
        else if ((scrollPos> interestsPos-250) && scrollPos < (interestsPos + interestsHeight))  {
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
