const navSlide = 
function()
{
    const burguer = document.querySelector(".burguer");
    const nav = document.querySelector(".nav-links");

    burguer.addEventListener("click", function()
        {
            nav.classList.toggle("nav-active");
        }
    );
}

navSlide();