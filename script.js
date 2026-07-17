/*====================================
TYPING EFFECT
====================================*/

const words = [
    "Aspiring ICT Student",
    "Web Developer",
    "Frontend Designer",
    "Programmer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const typing = document.querySelector(".typing");

    if(!typing) return;

    let current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);
    }

    else{

        typing.textContent = current.substring(0,charIndex--);
    }

    if(!deleting && charIndex > current.length){

        deleting = true;

        setTimeout(typeEffect,1200);

        return;

    }

    if(deleting && charIndex < 0){

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();

/*====================================
SCROLL REVEAL
====================================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section,.card,.resume-card,.info div").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/*====================================
ANIMATED COUNTERS
====================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const update = ()=>{

count += Math.ceil(target/60);

if(count < target){

counter.innerText = count;

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

}

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*====================================
BACK TO TOP
====================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

topBtn.classList.add("active");

}else{

topBtn.classList.remove("active");

}

});

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

/*====================================
CUSTOM CURSOR
====================================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX+"px";
cursor.style.top = e.clientY+"px";

});

/*====================================
DARK MODE
====================================*/

const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

const icon = document.getElementById("themeIcon");

if(document.body.classList.contains("light-mode")){

icon.className="fas fa-sun";

}else{

icon.className="fas fa-moon";

}

});

/*====================================
ACTIVE NAVIGATION
====================================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*====================================
SMOOTH SCROLL
====================================*/

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior:'smooth'

        });

    });

});

/*====================================
SKILL BAR ANIMATION
====================================*/

const skills = document.querySelectorAll(".bar span");

const skillObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.animation="grow 2s ease forwards";

}

});

},{
threshold:.5
});

skills.forEach(skill=>{

skillObserver.observe(skill);

});

/*====================================
RIPPLE BUTTON EFFECT
====================================*/

document.querySelectorAll(".btn,.btn2,button").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

const x=e.clientX-this.getBoundingClientRect().left-size/2;
const y=e.clientY-this.getBoundingClientRect().top-size/2;

circle.style.width=size+"px";
circle.style.height=size+"px";
circle.style.left=x+"px";
circle.style.top=y+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/*====================================
HEADER SHADOW
====================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

}else{

header.style.boxShadow="none";

}

});

/*====================================
IMAGE TILT EFFECT
====================================*/

const image=document.querySelector(".hero-image img");

image.addEventListener("mousemove",(e)=>{

const rect=image.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*20;
const rotateX=((y/rect.height)-0.5)*-20;

image.style.transform=
`perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

image.addEventListener("mouseleave",()=>{

image.style.transform="rotate(0) scale(1)";

});

/*====================================
CONSOLE MESSAGE
====================================*/

console.log("%cWelcome to Baldo Junnel's Portfolio",
"color:#00d4ff;font-size:20px;font-weight:bold;");