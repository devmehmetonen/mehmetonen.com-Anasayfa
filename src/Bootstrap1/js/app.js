AOS.init();

const home = document.querySelector('.home')
const about = document.querySelector('.about')
const portfolio = document.querySelector('.portfolio')
const contact = document.querySelector('.contact')
const hrHome = document.querySelector('.hr-home')
const hrAbout = document.querySelector('.hr-about')
const hrPortfolio = document.querySelector('.hr-portfolio')
const hrContact = document.querySelector('.hr-contact')

about.addEventListener('mouseenter',()=>{
    hrAbout.classList.remove('about-hr-out')
    hrAbout.classList.add('about-hr')
})

portfolio.addEventListener('mouseenter',()=>{
    hrPortfolio.classList.remove('portfolio-hr-out')
    hrPortfolio.classList.add('portfolio-hr')
})

contact.addEventListener('mouseenter',()=>{
    hrContact.classList.remove('contact-hr-out')
    hrContact.classList.add('contact-hr')
})

about.addEventListener('mouseleave',()=>{
    hrAbout.classList.add('about-hr-out')
})

portfolio.addEventListener('mouseleave',()=>{
    hrPortfolio.classList.add('portfolio-hr-out')
})

contact.addEventListener('mouseleave',()=>{
    hrContact.classList.add('contact-hr-out')
})

/*Counter*/

let count1 = document.querySelector('.count1');
let count1Num =0;
let count2 = document.querySelector('.count2');
let count2Num =0;
let count3 = document.querySelector('.count3');
let count3Num =0;


function counter1(){
    let count1Int = setInterval(()=>{
        count1.innerHTML=count1Num
        count1Num++
        if(count1Num===929){
            clearInterval(count1Int)
        }
    },10)
    
}
counter1();
function counter2(){
    let count2Int = setInterval(()=>{
        count2.innerHTML=count2Num
        count2Num++
        if(count2Num===184){
            clearInterval(count2Int)
        }
    },50)
    
}
counter2();
function counter3(){
    let count3Int = setInterval(()=>{
        count3.innerHTML=count3Num
        count3Num++
        if(count3Num===113){
            clearInterval(count3Int)
        }
    },100)
    
}
counter3();
