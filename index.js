// NAVBAR SLIDE//

const navSlide = function()
{
    const burguer = document.querySelector(".burguer");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burguer.addEventListener("click", function()
        {
            //Toggle Nav
            nav.classList.toggle("nav-active");


            //Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) 
                {
                    link.style.animation = '';
                }
                else
                 {
                     link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                 }
            });

            //Burguer animation
            burguer.classList.toggle("toggle");

        });
}

navSlide();

//SLIDER OF STUDIES SECTION//
const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");
let sectionIndex = 0;

function setIndex() 
{
  document.querySelector(".controls .selected").classList.remove("selected");
   slider.style.transform = "translate(" + (sectionIndex) * -25 + "%)";  
}

document.querySelectorAll(".controls li").forEach(function(indicator, ind){
  indicator.addEventListener("click", function(){
    sectionIndex = ind;
    setIndex();
    indicator.classList.add("selected");
    
  });
});


leftArrow.addEventListener("click", function(){
  sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
  setIndex();
  indicatorParents.children[sectionIndex].classList.add("selected");
});

rightArrow.addEventListener("click", function(){
  sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
  setIndex();
  indicatorParents.children[sectionIndex].classList.add("selected");
});