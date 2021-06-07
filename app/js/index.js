window.addEventListener('load', () => {
    
    const hamburger = document.querySelector('#hamburger');
    const menu = document.querySelector('#menu');
    
    const toggleMenu = () =>{
        if(hamburger.classList.contains('open')){
            //hide menu
            hamburger.classList.toggle('open');
            menu.classList.remove('show');
        }else{
            //show menu
            hamburger.classList.add('open');

            menu.classList.add('show');
        }
    }

    hamburger.addEventListener('click', toggleMenu);
})