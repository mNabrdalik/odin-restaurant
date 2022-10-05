
export default function createFooter() {
    let ft = document.createElement("footer");
    let year = new Date().getFullYear();
    ft.classList.add("d-flex", "justify-content-center");
    ft.innerHTML = `<p>${year} - mNabrdalik</p>`;

    return ft;
}
