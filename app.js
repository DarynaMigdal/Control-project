let mobileMenu = document.querySelector(".nav-mobile-menu")
let mainMenu = document.querySelector(".navigation")

mobileMenu.addEventListener("click",function(){
    mobileMenu.classList.toggle("active-menu")
    if(mobileMenu.classList.contains("active-menu")){
        mainMenu.classList.add("active-menu")
    }else{
        mainMenu.classList.remove("active-menu")
    }
})


$('.slider').slick({
    dots : true,
})




let text = document.querySelectorAll(".text-content")

let btnKnow = document.querySelectorAll(".btn-know")

let hiddenBlock = document.querySelectorAll(".hidden-block")

let btnClose = document.querySelectorAll(".btn-close")


btnKnow.forEach(btn =>{
    btn.addEventListener("click",showHiddenBlock)
})

btnClose.forEach(btn =>{
   btn.addEventListener("click",closeHiddenBlock)
})

function showHiddenBlock (){
    hiddenBlock.forEach(block=>{
    block.classList.add("show")
    block.classList.remove("hide")
    
    })
    text.forEach(bl=>{
        bl.classList.add("hide")
       bl.classList.remove("show")
    })
    
}
function closeHiddenBlock(){
    hiddenBlock.forEach(block=>{
        block.classList.add("hide")
        block.classList.remove("show")
        
        })
        text.forEach(bl=>{
            bl.classList.add("show")
            bl.classList.remove("hide")
        })
}




