document.addEventListener('DOMContentLoaded',e=>{

    const pre = document.querySelector('.wrapper_preloader')
    document.body.style.height = '100vh'
    document.body.style.width = '100%'
setTimeout(()=>{
    pre.style.display = 'none'
    document.body.style.height = 'initial'
    document.body.style.width = 'initial'
},6000)
})