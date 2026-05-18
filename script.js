/* TYPING EFFECT */

const words = [
    "Frontend Developer",
    "Creative Designer",
]

let wordIndex = 0
let charIndex = 0
let isDeleting = false

const typing = document.querySelector("#typing")

function typeEffect(){

    let currentWord = words[wordIndex]

    if(isDeleting){

        typing.textContent = currentWord.substring(0,charIndex--)

    }

    else{

        typing.textContent = currentWord.substring(0,charIndex++)

    }


    let speed = isDeleting ? 60 : 120


    if(!isDeleting && charIndex === currentWord.length + 1){

        speed = 1500
        isDeleting = true

    }

    else if(isDeleting && charIndex === 0){

        isDeleting = false

        wordIndex++

        if(wordIndex >= words.length){
            wordIndex = 0
        }
    }

    setTimeout(typeEffect,speed)
}


typeEffect()


/* SCROLL ANIMATION */

const sections = document.querySelectorAll("section")

window.addEventListener("scroll",function(){

    sections.forEach(function(section){

        let top = section.getBoundingClientRect().top

        if(top < window.innerHeight - 100){

            section.style.opacity = "1"
            section.style.transform = "translateY(0px)"

        }

    })
})

const cursorDot = document.querySelector(".cursor-dot")

document.addEventListener("mousemove",function(e){

    cursorDot.style.left = e.clientX + "px"

    cursorDot.style.top = e.clientY + "px"

})

const hoverItems = document.querySelectorAll("a,button,.project-card,.skill-card")

hoverItems.forEach(function(item){

    item.addEventListener("mouseenter",function(){

        cursorDot.style.width = "22px"
        cursorDot.style.height = "22px"

    })

    item.addEventListener("mouseleave",function(){

        cursorDot.style.width = "12px"
        cursorDot.style.height = "12px"

    })

})
sections.forEach(function(section){

    section.style.opacity = "0"
    section.style.transform = "translateY(80px)"
    section.style.transition = "1s"

})


/* HERO SECTION START SE SHOW HOGI */

const heroSection = document.querySelector(".hero")

heroSection.style.opacity = "1"
heroSection.style.transform = "translateY(0px)"

