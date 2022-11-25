
// Obtener la respuesta de JSONPlaceholder y renderizar en el Dom una card con los siguientes elementos:
// 1) Nombre real del usuario <h2>
// 2) Nombre de usuario <h4>
// 3) Mail <p>
// 4) Un botón que despliegue toda la información dentro de "address" <button>
// 5) El nombre de la compañía para la que trabaja <p>
// 6) Su numero de telefono <p>



const API__URL = "https://jsonplaceholder.typicode.com/users"

const usersApi = async ()  => {
    const user = await fetch(API__URL)
    const userDate = await user.json();
    console.log(userDate)
    cards(userDate)
}
usersApi()


// console.log(userDate.name) sisi


const cardsUsers = document.getElementById("cardsUsers");
let body = ``

const cards = (userDate) => {
    const users = userDate.map((user) => {
        return body += `
        <div class="contentInfo">
            <h2 class="userNameReal">${user.name}</h2>
            <h4 class="userNameOnline"><i class="bi bi-person"></i> ${user.username}</h4>
            <p class="userMail"><i class="bi bi-envelope-at"></i> ${user.email}</p>
            <div class="dropdown">
                <i class="bi bi-house"></i>
                <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li>${user.address.city}</li>
                    <li>${user.address.geo.lat} and ${user.address.geo.lng}</li>
                    <li>${user.address.street}</li>
                    <li>${user.address.suite}</li>
                    <li>${user.address.zipcode}</li>
                </ul>
            </div>
            <p class="userCompany"><i class="bi bi-buildings"></i> ${user.company.name}</p>
            <p class="userPhone"><i class="bi bi-phone"></i> ${user.phone}</p>
        </div>
        `
    })
    cardsUsers.innerHTML = body;

}

