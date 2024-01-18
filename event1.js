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

  
const observer = new IntersectionObserver(f, {
  threshold:[0,1]
});

function f(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting && entry.intersectionRatio >= 1) {
      entry.target.classList.toggle("inbound", true)
    }
    else {
      entry.target.classList.toggle("inbound", false)
    }
  }
}

const itemEls = Array.from(document.querySelectorAll(".item"));
for (const itemEl of itemEls)
  observer.observe(itemEl)