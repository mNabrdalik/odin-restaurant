export default function createContact() {
    const contactSection = document.createElement("section");
    contactSection.classList.add('contact');
    contactSection.setAttribute('id', 'contact');

    const form = createDiv('contact__form');
 
    form.innerHTML += ` <h1 class="contact__header">Book a table</h1>
    <div class="contact__line"></div>
    <form action="" method="post">
        <label for="name">Your name</label>
        <input type="text" name="name" id="name" required>
        <br>
        <label for="surname">Your surname</label>
        <input type="text" name="surname" id="surname" required>
        <br>
        <label for="phone">Your Phone number</label>
        <input type="tel" name="phone" id="phone" required>
        <br>
        <label for="reservation">Reservation Date</label>
        <input type="date" name="reservation" id="reservation" required>
        <br>
        <label for="reservationTime">Reservation Time</label>
        <input type="time" min="12:00" max="21:00" name="reservationTime" id="reservationTime" required>
        <br><br>
        <input type="submit" class="contact__submit" value="Make Reservation*">
        <br>
        <p>*By clicking "Make Reservation" you accept our Privacy Policy rules</p>
    </form>`;


    contactSection.appendChild(form);    

    return contactSection;
}

function createDiv(nameClass) {
    let element = document.createElement("div");
    element.classList.add(nameClass);

    return element;
}