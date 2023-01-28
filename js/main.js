// function loadRestaurants(value) {
//     let url = `https://tan-gifted-cod.cyclic.app/places/${value}`;

//     fetch(url).then(response => response.json()).then(data => {

//         console.log(data);
//     //     let cardbod = `
//     //     ${data.map(rest => (
//     //         `<h5 class="card-title" id="restname">${rest.name}</h5>
//     //         <p class="card-text" id="restdesc">${rest.description}</p>`
//     //     )).join('')} 
//     //   `;

//     //     let listbod = `
//     //   ${data.map(rest => (
//     //         `<li class="list-group-item" id="address">${rest.address}</li>
//     //       <li class="list-group-item" id="phone">${rest.phone}</li>
//     //       <li class="list-group-item" id="category">${rest.cu_id}</li>`
//     //     )).join('')} 
//     // `;

//     //     document.querySelector('#card4real').innerHTML = cardbod;
//     //     document.querySelector('#list4real').innerHTML = listbod;
//     });
// }

// Execute when the DOM is 'ready'
document.addEventListener('DOMContentLoaded', function () {
    let buttonValue;

    document.querySelectorAll('.restButton').forEach(button => {
        button.addEventListener("click", () => {
            buttonValue = button.getAttribute("data-button-value");
            // store the button value in sessionStorage
            sessionStorage.setItem("buttonValue", buttonValue); 
            window.location.href = "restaurants.html";
        });
    });

    let storedValue = sessionStorage.getItem("buttonValue");
    // loadRestaurants(storedValue);
    console.log(storedValue); // this will print the button value

});
