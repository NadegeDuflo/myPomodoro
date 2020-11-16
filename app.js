const field = document.querySelector('input');

field.addEventListener('input', (e) =>{
    if(e.target.value !=""){
        console.log(e.target);
        console.log(e.target.value);
        e.target.parentNode.classList.add('animation')
    }
})