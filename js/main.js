function loadRestaurants() {
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
    console.log(storedValue);
    fetch(`https://tan-gifted-cod.cyclic.app/places/${storedValue}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let cardbod = `
        ${data.data.map(rest => ( //WHY IS DATA.DATA.MAP working wth...
                `<h5 class="card-title" id="restname">${rest.name}</h5>
            <p class="card-text" id="restdesc">${rest.description}</p>`
            )).join('')} 
      `;

            let listbod = `
      ${data.data.map(rest => (
                `<li class="list-group-item" id="address">${rest.address}</li>
          <li class="list-group-item" id="phone">${rest.phone}</li>
          <li class="list-group-item" id="category">${rest.cu_id}</li>`
            )).join('')} 
    `;

            document.querySelector('.card-body').innerHTML = cardbod;
            document.querySelector('#list-body').innerHTML = listbod;
        })
        .catch(error => {
            console.log('Error fetching data: ', error);
            // console.error --> sends error to errors tab in browser inspect element
        });
}


// Execute when the DOM is 'ready'
document.addEventListener('DOMContentLoaded', function () {
    loadRestaurants();
});
