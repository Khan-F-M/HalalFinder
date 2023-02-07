function loadRestaurants() {
    let buttonValue;

    document.querySelectorAll('.restButton').forEach(button => {
        button.addEventListener("click", () => {
            buttonValue = button.getAttribute("data-button-value");
            // store the button value in sessionStorage
            sessionStorage.setItem("buttonValue", buttonValue);
            window.location.href = "layout/restaurants.html";
        });
    });

    let storedValue = sessionStorage.getItem("buttonValue");
    console.log(storedValue);
    fetch(`https://tan-gifted-cod.cyclic.app/places/${storedValue}`)
        .then(response => response.json())
        .then(data => {
            let cardbod = `
    ${data.data.map(rest => (
                `<div class="col">
                <div class="card" style="width: 18rem; margin-left: 2%; margin-right: 2%; margin-top: 1%;">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="images/Italian.jpg" class="d-block w-100" alt="..."
                                    style=" height: 200px; width: 100%;">
                            </div>
                            <div class="carousel-item">
                                <img src="images/india.png" class="d-block w-100" alt="..."
                                    style=" height: 200px; width: 100%;">
                            </div>
                            <div class="carousel-item">
                                <img src="images/Afghanistan.jpg" class="d-block w-100" alt="..."
                                    style=" height: 200px; width: 100%;">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title" id="restname">${rest.name}</h5>
                        <p class="card-text" id="restdesc">${rest.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" id="address"> ${rest.address}</li>
                        <li class="list-group-item" id="phone">${rest.phone}</li>
                        <li class="list-group-item" id="category">${rest.cu_id}</li>
                    </ul>
                </div>
            </div>`
            )).join('')} 
            `;
            document.getElementById('crdbod').innerHTML = cardbod;
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
