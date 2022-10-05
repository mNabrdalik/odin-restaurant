// import { contains } from "jquery";

export default function createMenu() {
    const menuSection = document.createElement("section");
    menuSection.classList.add('menu');
    menuSection.setAttribute('id', 'menu');

    const containerFluid = createDiv('container-fluid');

    let menuCards = [
        {
            name: 'Menu',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minus maxime inventore quasi quas ex, delectus nemo earum illum quos explicabo magni rerum tenetur voluptas laudantium pariatur molestiae enim qui aspernatur assumenda quaerat amet nobis!',
            imgLink: 'img/tamas-pap-68Vb4Mj-L9c-unsplash.jpg'
        },
        {
            name: 'Food1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minus maxime inventore quasi quas ex, delectus nemo earum illum quos explicabo magni rerum tenetur voluptas laudantium pariatur molestiae enim qui aspernatur assumenda quaerat amet nobis!',
            imgLink: 'img/mahmoud-fawzy-c4zyDtK9h_g-unsplash.jpg'
        },
        {
            name: 'Food2',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minus maxime inventore quasi quas ex, delectus nemo earum illum quos explicabo magni rerum tenetur voluptas laudantium pariatur molestiae enim qui aspernatur assumenda quaerat amet nobis!',
            imgLink: 'img/derek-duran-Jz4QMhLvGgw-unsplash.jpg'
        },
        {
            name: 'Food3',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minus maxime inventore quasi quas ex, delectus nemo earum illum quos explicabo magni rerum tenetur voluptas laudantium pariatur molestiae enim qui aspernatur assumenda quaerat amet nobis!',
            imgLink: 'img/mahmoud-fawzy-Dbx6-XZY6Dg-unsplash.jpg'
        },
    ]

    for(let i = 0; i < menuCards.length; i++) {
        let row = createDiv('row');

        if(i%2 != 0) {
            row.innerHTML = ` <div class="col-md-6 order-md-1 order-2">
            <div class="menu__heading">
                <div class="menu__text">
                    <h1>${menuCards[i].name}</h1>   
                    <div class="menu__line"></div>

                    <p>${menuCards[i].desc}</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 order-md-2 order-1">
            <div class="menu__img1">
                <img width="900" height="600"  src="${menuCards[i].imgLink}" loading = "lazy">
            </div>
            <div class="menu__bg"></div>
        </div>`
        } else {
            row.innerHTML = ` <div class="col-md-6">
            <div class="menu__img1 order-md-1 order-1">
                <img width="900" height="600"  src="${menuCards[i].imgLink}" loading = "lazy">
            </div>
        </div>
        <div class="col-md-6 order-md-2 order-2">
            <div class="menu__heading">
                <div class="menu__text">
                    <h2>${menuCards[i].name}</h1>
                    <div class="menu__line"></div>

                    <p>${menuCards[i].desc}</p>
                </div>
            </div>
        </div>`
        }
        
        containerFluid.appendChild(row);
    }

    menuSection.appendChild(containerFluid)

    return menuSection;
}

function createDiv(nameClass) {
    let element = document.createElement("div");
    element.classList.add(nameClass);

    return element;
}
