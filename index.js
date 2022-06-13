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


//SKILSS BAR ANIMATION//
const skillsSection = document.getElementById("skills-section");
const progressBars = document.querySelectorAll(".progress-bar");


function showProgress(){
  progressBars.forEach(progressBar => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

function hideProgress(){
  progressBars.forEach(p => {
    p.style.opacity = 0;
    p.style.width = 0;  
  });
}

window.addEventListener("scroll", () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;
  
  if(sectionPos < screenPos){
    showProgress();
  }else{
    hideProgress();
  }
});

//CONTACT FORM//
$('input').focus(function() {
  $(this).parent().addClass('active');
  $('input').focusout(function() {
    if($(this).val() == '') { $(this).parent().removeClass('active');
    } else { $(this).parent().addClass('active');
    }
  })
});