// document.addEventListener("mousemove",function(){

// })

// cards = document.querySelectorAll('.cards')
// // let card1 = document
// document.addEventListener('mouseover', onhover)
// function onhover(event){
//     console.log(cards)
//     let angle = (((event.clientX / window.innerWidth)*360) / 360)
//     cards.forEach((item, i) => {
        

//     })
// }
gsap.to("#nav",{
   backgroundColor:" rgb(46, 46, 47)",
   height:"85px",
   duration:0.5,
   scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true ,//help to know when exactly transition is happening
    start:"top -10%",
    end:"top -11%",
    scrub:true 
   }

    
})

gsap.to("#nav img",{
    height:"65px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav img",
        scroller:"body",
        start:"top -5%",
        end:"top -11%",
        scrub:true 

    }
})


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        scrub:true,
        // markers:true,
        start:"top -20%",
        end:"top -70%",
    }
})

gsap.from("#about img, #about-us",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.6,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:6,
    }

})

gsap.from("#cards-data .cards",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3,
    }

})






