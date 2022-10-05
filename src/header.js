
export default function createHeader() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");

    nav.classList.add('nav', 'd-flex', 'justify-content-center');

    header.append(nav);

    class HeaderBtn {
        constructor(buttonID, textInside) {
            this.buttonID = buttonID;
            this.textInside = textInside;
            // auto render btn
            this.render();

        }
  
        render() {
            let navTab = document.createElement("button");
            navTab.classList.add('nav__tab');
            navTab.setAttribute("id", this.buttonID);
            navTab.textContent = this.textInside;

            nav.append(navTab);
        }
        
    }

    const homeBtn = new HeaderBtn('toHome', 'Home');
    const menuBtn = new HeaderBtn('toMenu', 'Menu');
    const contactBtn = new HeaderBtn('toContact', 'Contact');

    return header;
}

