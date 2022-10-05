// import { contains } from "jquery";

export default function createHome() {
    const homeSection = document.createElement("section");
    homeSection.classList.add('home');
    homeSection.setAttribute('id', 'home');

    const containerFluid = createDiv('container-fluid');
    const row1 = createDiv('row');
    const row2 = createDiv('row');
    row1.innerHTML += ` <div class="col-md-6">
                            <div class="home__heading">
                                <div class="home__text">
                                    <h1 class="fw-bold">RESTaurant</h1>
                                    <h2>Your calm place to eat</p>
                                    <div class="home__line"></div>
                                </div>
                                <div class="home__img2">

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="home__img1">
                                <img style="object-position: bottom;" src="img/max-griss-dqulzxRF31M-unsplash.jpg" alt="start img" loading="lazy">
                            </div>
                        </div>`;

    row2.innerHTML += `<div class="col-9 home__img2">
                        <img src="img/daniel-gregoire-ahUr5E7cVxE-unsplash.jpg" alt="start img" loading="lazy">
                        </div><div class="col-3 home__color"></div>`;

    homeSection.appendChild(containerFluid);    
    containerFluid.appendChild(row1);
    containerFluid.appendChild(row2);

    return homeSection;
}

function createDiv(nameClass) {
    let element = document.createElement("div");
    element.classList.add(nameClass);

    return element;
}