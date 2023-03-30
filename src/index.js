import domController from "./modules/interface";


const searchButton = document.querySelector('.search-icon');
const loader = document.querySelector('.load');

domController;


function displayLoading () {
    loader.classList.add('display');
    setTimeout(()=>{
        loader.classList.remove('display');
    },4000);
}

function removeLoading () {
    loader.classList.remove('display');
}