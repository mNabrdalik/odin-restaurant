import createHeader from './header.js';
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';
import createFooter from './footer.js';

// Import our custom CSS
import './scss/style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


const content = document.getElementById('content');
const main = document.createElement('main');
main.setAttribute('id', 'main');

content.appendChild(createHeader());
content.appendChild(main);
main.appendChild(createHome());

document.querySelectorAll('.nav__tab').forEach(element => {
    element.addEventListener("click", () => {
        main.innerHTML = "";
        
        if(element.id == "toHome") {
            main.appendChild(createHome());
        } else if( element.id == "toMenu") {
            main.appendChild(createMenu());
        } else if( element.id == "toContact") {
            main.appendChild(createContact());
        }

    })
}); 

content.appendChild(createFooter());
