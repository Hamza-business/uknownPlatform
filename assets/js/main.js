(function(){
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const targetElement = document.getElementById(target);

            el.classList.toggle('is-active');
            targetElement.classList.toggle('is-active');
        });
    });

    let pageTitle = document.getElementById("pageTitle").textContent;
    if(pageTitle){
        let wtpage = document.querySelector(`[wtpage="${pageTitle}"]`);
        wtpage.classList.add('active')
    }
})();