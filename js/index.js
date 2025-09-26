const container_general = document.getElementById("container");
const card_btn = document.getElementById("add_card-btn");

function create_Card(){
    let name = prompt("Ingrese el nombre:");
    let roleName = prompt("Ingrese el rol:");
    let image = prompt("Ingrese el link de la imagen:");
    if (!name || !roleName) {
        alert("Cual es la vainita pues")
        return;
    }
    if (!image) {
        image = "./sources/images/400x400.svg"
    }

    let card_info = `
        <article class="card_container">
            <img class="card_profile-image" src="${image}" alt="No carga">
            <div class="card_profile-name">
                <h2>${name}</h2>
            </div>
            <div class="card_profile-proffesion">
                <span>${roleName}</span>
            </div>
            <div class="card_button">
                <button class="card_btn">Ver mas</button>
            </div>
        </article>
    `;

    add_Card(card_info);
}

function add_Card(card_info){
    container_general.insertAdjacentHTML("beforeend", card_info);
}

card_btn.onclick = function(){
    create_Card();
}