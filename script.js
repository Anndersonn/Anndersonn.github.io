window.addEventListener('DOMContentLoaded', () => {

    ///////////*SWAL ERROR*////////////////

    var resume = document.getElementById('resume');
    resume.addEventListener('click', function () {
        swal("Sorry", "I'm currently working on it", "error");
    });

    ///////////////////// MODALS ///////////////////

    const openModal = document.querySelectorAll('[data-open]'),
        closeModal = document.querySelector('[data-close]'),
        modalAbout = document.getElementById('modal__about'),
        openHire = document.querySelectorAll('[data-hire]'),
        closeHire = document.querySelector('[hire-close]'),
        modalHire = document.getElementById('modal__hire');



    openModal.forEach(btn => {
        btn.addEventListener('click', () => {
            modalAbout.classList.add('open');
            modalAbout.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });
    openHire.forEach(btn => {
        btn.addEventListener('click', () => {
            modalHire.classList.add('open');
            modalHire.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });


    function modalCLose() {
        modalAbout.classList.add('hide');
        modalAbout.classList.remove('open');
        document.body.style.overflow = '';
    }

    function hireClose() {
        modalHire.classList.add('hide');
        modalHire.classList.remove('open');
        document.body.style.overflow = '';
    }

    closeModal.addEventListener('click', modalCLose);
    closeHire.addEventListener('click', hireClose);



    modalAbout.addEventListener('click', (e) => {
        if (e.target === modalAbout) {
            modalCLose();
        }
    });


    modalHire.addEventListener('click', (e) => {
        if (e.target === modalHire) {
            hireClose();
        }
    });


    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            modalCLose();
            hireClose();
        }
    });



    ////////////*ANCHORS*//////////////////////

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    ////////////*BURGER*//////////////////////
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav');
        // const burgerOverlay = document.getElementById('overlay');
    
        function navSlide() { 
        burger.addEventListener('click', (e) => {
              nav.classList.toggle('nav-active');
              burger.classList.toggle('toggle');
        });
    
    }
    navSlide ();

});





