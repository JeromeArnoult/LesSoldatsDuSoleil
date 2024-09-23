/* -----Navigation----- */

const menu = document.querySelector('.liste-nav');
const btnMenu = document.querySelector('.btn-toggle-container');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('active-menu')
})
const btn = document.querySelector('.btn1');

btn.addEventListener('click', presentation)

function presentation(){

    btn.classList.toggle('active')

}