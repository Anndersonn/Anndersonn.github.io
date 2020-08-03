        /*SWAL ERROR*/

        var resume = document.getElementById('resume');
        resume.addEventListener('click', function() {
            swal("Sorry", "I'm currently working on it", "error");
        });

        /*TEST*/

        /*MODAL ABOUT ME*/

        var modal__about = document.getElementById('modal__about'),
            /*First modal window*/
            footer__about = document.getElementById('footer__about'),
            /*Button footer__about*/
            button__about = document.getElementById('btn__about'),
            /*Button header__about*/
            locker__about = document.querySelector('.locker__about'); /*Close modal window*/


        button__about.onclick = function() {
            modal__about.style.display = "flex"; /*Show modal window (HEADER)*/
            body.style.overflow = 'hidden'; /*Hide scroll*/

        };

        footer__about.onclick = function() {
            modal__about.style.display = "flex"; /*Show modal window (FOOTER)*/
            body.style.overflow = 'hidden'; /*Hide scroll*/
        };

        locker__about.onclick = function() {
            modal__about.style.display = "none"; /*Close modal windows*/
            body.style.overflow = ''; /*Show scroll*/
        };

        /*MODAL HIRE ME*/

        var modal__hire = document.getElementById('modal__hire'),
            button__hire = document.getElementById('btn__hire'),
            footer__hire = document.getElementById('footer__hire'),
            locker__hire = document.querySelector('.locker__hire');

        button__hire.onclick = function() {
            modal__hire.style.display = "flex";
            body.style.overflow = 'hidden';

        };

        footer__hire.onclick = function() {
            modal__hire.style.display = "flex";
            body.style.overflow = 'hidden';
        };

        locker__hire.onclick = function() {
            modal__hire.style.display = "none";
            body.style.overflow = '';
        };

        /*WINDOW CLOSE*/

        window.onclick = function(event) {
            if (event.target == modal__hire) {
                modal__hire.style.display = "none";
                body.style.overflow = '';

            };
            if (event.target == modal__about) {
                modal__about.style.display = "none";
                body.style.overflow = '';
            }
        };


        /*SCROLL*/

        var body = document.querySelector("body");



        /*ANCHORS*/

        const anchors = document.querySelectorAll('a[href*="#"]')

        for (let anchor of anchors) {
            anchor.addEventListener("click", function(event) {
                event.preventDefault();
                const blockID = anchor.getAttribute('href')
                document.querySelector('' + blockID).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            })
        }