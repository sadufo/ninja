document.addEventListener('DOMContentLoaded',e=>{
    const burger = document.querySelector('.nav__burger')
    const nav__links = document.querySelector('.nav__links')
    const lines = document.querySelectorAll('.line')
    burger.addEventListener('click',e=>{
            lines[0].classList.toggle('top_anim')
            lines[1].classList.toggle('rotate-x')
            lines[2].classList.toggle('rotate-y')
            lines[3].classList.toggle('top_anim')
            nav__links.classList.toggle('top_menu')
    })
    const animItem = document.querySelectorAll('.anim_item')

animItem.forEach(el=>{
    document.addEventListener('scroll',e=>{
       if(el.getBoundingClientRect().y<=300){
           el.classList.remove('left')
           el.classList.remove('right')
           el.classList.remove('top')
           el.classList.remove('bottom')
           setTimeout(() => {
            el.classList.remove('anim_item')
           }, 1000);
       }
    }) 
})

    const pre = document.querySelector('.wrapper_preloader')
    document.body.style.height = '100vh'
    document.body.style.width = '100%'
setTimeout(()=>{
    pre.style.display = 'none'
    document.body.style.height = 'initial'
    document.body.style.width = 'initial'
},6000)
})