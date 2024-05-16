

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

gsap.from('#nav .head1',{
    color:'white',
    opacity:0,
    y:-30,
    duration:1,
    // delay:0.2,
    stagger:0.5
})

gsap.from('#nav .head2',{
    color:'white',
    opacity:0,
    x:-30,
    duration:1.7,
    stagger:0.5,
})






gsap.to("#nav img",{
    height:"65px",
    borderRadius:'10px',
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav img",
        scroller:"body",
        start:"top -5%",
        end:"top -11%",
        scrub:true 

    }
})

gsap.from('#page1 h1',{
    opacity:0,
    duration:1,
    // x:1,
    y:40,
    delay:1.3,
    stagger:0.3,
    

})
gsap.from('#page1 h2',{
    opacity:0,
    duration:1.8,
 
    x:40,
    delay:1.6,
    stagger:0.5

})

gsap.from('#page1 h3',{
    opacity:0,
    duration:1.5,
    // x:1,
    y:40,
    delay:2.1,
    stagger:0.3

})



//tried to do minor hover animation on navbar elements but messed it up

// let a=document.getElementById('h')
// a.addEventListener('mouseover',()=>{
//     gsap.from('#nav #h',{
//         color:'#CC9B60',
//         y:5,
//         duration:1,
//         scale:1.4,
        
//         // opacity:0,
//         scrub:true
        
//     })
// })

// // let a=document.getElementById('h')
// a.addEventListener('mouseleave',()=>{
//     gsap.from('#nav #h',{
//         color:'#F0F8FF'
        
//     })
// })




gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"top -20%",
        end:"top -70%",
    }
})

gsap.from("#about img, #about-us",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.8,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:true,
    }

})

gsap.from("#cards-data .cards",{
    y:30,
    opacity:0,
    duration:1,
    
    
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3,
        
       
    }

})






