import domController from "./modules/interface";

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-icon');
const errorP = document.querySelector('.error');

window.onload=domController('Konya');

searchInput.addEventListener('keypress',(e)=>{
    if (e.key==='Enter') {
        e.preventDefault();
        searchButton.click();
    }
})

searchButton.addEventListener('click',()=>{
    if (searchInput.checkValidity()) {
        domController(searchInput.value);
        errorP.textContent='';
    }
    else {
        errorP.textContent=searchInput.validationMessage;
    }
})


