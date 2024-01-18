// nav bar

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})

// Scrolling animation


document.addEventListener('DOMContentLoaded', function () {
    const elementsToAnimate = document.querySelectorAll('.header, .header_right-img img, .header_left h1, .header_left p, .header_left .lm');
  
    function handleScroll() {
      elementsToAnimate.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const scrollPosition = window.innerHeight;
  
        if (elementPosition < scrollPosition) {
          element.classList.add('animate');
        }
        else{
            element.classList.remove('animate'); 
        }
      
      });
    }
    handleScroll();
  
    window.addEventListener('scroll', handleScroll);
  });

// mob & tab nav

const menu=document.querySelector(".nav_menu")
const menuBtn=document.querySelector("#open-menu-btn")
const closeBtn=document.querySelector("#close-menu-btn")

menuBtn.addEventListener('click', () => {
    menu.style.display ="flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display="none";
})

const closeNav = () =>{
    menu.style.display ="none";
    closeBtn.style.display = "none";
    menuBtn.style.display="inline-block";
}

closeBtn.addEventListener('click', closeNav)

  


  