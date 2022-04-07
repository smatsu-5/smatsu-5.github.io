var currentScroll = $(window).scrollTop();

var aboutPos = document.getElementById("about").offsetTop;
var skillsPos = document.getElementById("skills").offsetTop;
var projectsPos = document.getElementById("projects").offsetTop;
var interestsPos = document.getElementById("interests").offsetTop;

var skillsHeight = document.getElementById("skills").offsetHeight;
var aboutHeight = document.getElementById("about").offsetHeight;
var projectsHeight = document.getElementById("projects").offsetHeight;
var interestsHeight = document.getElementById("interests").offsetHeight;


//window.scrollTo(0, 0);
console.log(skillsPos);
console.log(aboutHeight);
$(document).ready(function() {
    $(window).scroll(function (event) {
        var scrollPos = $(document).scrollTop();
        console.log(scrollPos);
        
        if (scrollPos >= aboutPos && scrollPos < (aboutPos + aboutHeight)-300)  {
            $("#nav a").removeClass("current");
            $("#aboutLink").addClass("current");
        }
        else if ((scrollPos > skillsPos-100) && scrollPos< (skillsPos + skillsHeight)-300)  {
            $("#nav a").removeClass("current");
            $("#skillsLink").addClass("current");
        }
        else if (scrollPos > projectsPos-200 && scrollPos< (projectsPos + projectsHeight)-300)  {
            $("#nav a").removeClass("current");
            $("#projectsLink").addClass("current");
        }
        else if (scrollPos> interestsPos-200 && scrollPos < (interestsPos + interestsHeight))  {
            $("#nav a").removeClass("current");
            $("#interestsLink").addClass("current");
        }
    });


    
    document.getElementById("toggleicon").addEventListener ("click", openNav, false);

function openNav() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
    

});


$("#nav a").click(function() {
    $("#nav a").removeClass("current");
    $(this).addClass("current");
});



