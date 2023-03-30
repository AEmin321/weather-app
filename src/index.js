import domController from "./modules/interface";

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-icon');
const errorP = document.querySelector('.error');

window.onload=domController('konya');

searchInput.addEventListener('keypress',(e)=>{
    if (e.key==='Enter') {
        e.preventDefault();
        searchButton.click();
    }
})

searchButton.addEventListener('click',()=>{
    domController(searchInput.value);
})


