function openModal(modalSelector,modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    // modal.classList.toggle('show');
    document.body.style.overflow ="hidden";
    if(modalTimerId) {
     clearInterval(modalTimerId);
    }
}
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    // modal.classList.toggle('show');
    document.body.style.overflow ="";
}
function modal(triggerSelector, modalSelector, modalTimerId) {

    // Modal

    // const modalTrigger = document.querySelectorAll("[data-modal]"),
    //       closeTrigger = document.querySelector("[data-close]"),
    //       modalWindow = document.querySelector(".modal");
    // modalTrigger.forEach(i =>{
    //     i.addEventListener('click', () => {
    //         modalWindow.style.display = "block";
    //     });
    // });
    // closeTrigger.addEventListener('click', () => {
    //     modalWindow.style.display = "none";
    // });    
    const modalTrigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);


    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => (openModal(modalSelector, modalTimerId)));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")){
            closeModal(modalSelector);
        }
    });

    function showModalByScroll(){
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}
export default modal;
export {closeModal};
export {openModal};