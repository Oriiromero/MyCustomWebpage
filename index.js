//NAVBAR HIDE FUNCTION//

let navbar = document.querySelector("nav");
let previousScroll = window.pageYOffset;

window.onscroll = function(){
  let currentScroll = window.pageYOffset;
  if(previousScroll > currentScroll)
  {
    navbar.style.top = "0px";
  }
  else
  {
    navbar.style.top = "-90px";
  }

  previousScroll = currentScroll;

}

//NAVBAR SLIDE//

const navSlide = function()
{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');

  burger.addEventListener('click', function()
  {
    //Toggle nav
    nav.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link, index) => {
      if(link.style.animation)
      {
        link.style.animation = '';
      }
      else
      {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
      }
    });
    
    //Burger animation
    burger.classList.toggle('toggle');

  });
  
  navLinks.forEach((link, index) => {
    link.addEventListener('click', function()
    {
      //Toggle nav
      nav.classList.toggle('nav-active');
  
      //Burger animation
      burger.classList.toggle('toggle');

      navLinks.forEach((link, index) => {
        if(link.style.animation)
        {
          link.style.animation = '';
        }
        else
        {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
        }
      });
  
    });
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

//APPEAR TEXT ANIMATION//
function textAppearAnimation (timeBetweenLetters, id)
{
  var i= 0;
  var text = document.getElementById(id).innerHTML;

  document.getElementById(id).innerHTML = '';

  typeAnimation();

  function typeAnimation ()
  {
    if(i<text.length)
    {
      document.getElementById(id).innerHTML += text.charAt(i);
      i++;
      setTimeout(typeAnimation,timeBetweenLetters);
    }
  };
}

textAppearAnimation(150, "subText");


// SCROLL BEHAVIOUR // 
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
 
  console.log(scrolled);
});

//FADE IN AND SLIDE ON SCREEN//

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px 350px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll)
{
  entries.forEach(entry => {
    if(!entry.isIntersecting)
    {
      return;
    }
    else
    {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
 appearOptions);

 faders.forEach(fader =>
  {
    appearOnScroll.observe(fader);
  });


  