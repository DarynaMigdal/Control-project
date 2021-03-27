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

// let blockText = document.querySelectorAll(".block-text")

let hiddenBlock = document.querySelectorAll(".hidden-block")
console.log(hiddenBlock)

let btnKnow = document.querySelectorAll(".btn-know")
console.log(btnKnow)

btnKnow.forEach(btn =>{
    btn.addEventListener("click",showHiddenBlock)
})

function showHiddenBlock (){
    hiddenBlock.classList.add("show")
    hiddenBlock.classList.remove("hide")
}

function closeBlockText (){
    blockText.classList.add("hide")
}


