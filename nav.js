/* 1. NAV BAR ANIMATION */
var read=document.querySelector(".read")
var arrow=document.querySelector("#arrow")
var sidebar= document.querySelector('.sidebar')
/* var line=document.querySelector('.line') */
var line= document.getElementsByClassName("line")
var navi=document.querySelectorAll('.nav-li')
var project= document.querySelector(".project")

var tl= gsap.timeline()
var tl2= gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        /* markers:true, */
        start:"top 50%",
        end:"top -30%",
        scrub:1
    }})
var tl3= gsap.timeline({
        scrollTrigger:{
            trigger:".about-part",
            scroller:"body", 
            start:"top 15%",
            end:"top 15%",
            scrub:2
        }})
var tl4= gsap.timeline({
            scrollTrigger:{
                trigger:"#Project",
                scroller:"body", 
                start:"top 70%",
                end:"top 75%",
                scrub:2
            }})

function firstPageAnimation(){
    tl.from(".left",{
        y:-1000,
        opacity:0,
        /* delay:1, */
        duration:1.5
        },"landing_page")
    tl.from(".dp",{
            y:1000,
            opacity:0,
            /* delay:1, */
            duration:1.5
        },"landing_page")
    
    tl.from(".heading, li",{
        y:-20,
        opacity:0,
        dutation:1,
        /* delay:1, */
        stagger:0.2
    },"same")
    
    tl.from(".hello h1",{
        x:-40,
        scale:0.7,
        opacity:0,
        duration:0.4,
        stagger:0.2,
        delay:1
        
    },"same")
    tl.from(".intro p,h2,h3,h4,.social a, #arrow,.read",{
        opacity:0,
        y:-40,
        stagger:0.2,
        /* delay:0.7, */
        duration:0.4
    }) 
}
function aboutPageAnimation(){
    tl2.from(".aboutsection",{
        x:-100,
        opacity:0.5, 
    },"aboutPage")
    tl2.from(".about-dp",{
        x:100,
        opacity:0.5, 
    },"aboutPage")   
}
function arrowMouseOver(){
    arrow.addEventListener('mouseover',function(){
        read.style.opacity="1"
        read.style.transition="0.8s"
    })
    arrow.addEventListener('mouseout',function(){
        read.style.opacity="0"
        read.style.transition="0.8s"
    })
}
function techIconsAnimation(){
    tl3.from(".tech-icons i",{
        y:30,
        scale:0.4,
        opacity:0,
        stagger:0.2,
        duration:1
    })
}
function projectAnimation(){
tl4.from(".project",{
    y: 50,
    opacity:0,
    stagger:0.3,
    duration:1.5,
})
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        alert('Thank you for your message!');
        // Here you can add code to send the form data to a server if needed
    } else {
        alert('Please fill out all fields.');
    }
});

/* ALL FUNCTIONS*************************************************************** */


firstPageAnimation()
arrowMouseOver()
aboutPageAnimation()
techIconsAnimation()
projectAnimation()

