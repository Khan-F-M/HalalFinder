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
        })
        .catch(error => {
            console.log('Error fetching data: ', error);
            // console.error --> sends error to errors tab in browser inspect element
        });
}


// Execute when the DOM is 'ready'
document.addEventListener('DOMContentLoaded', function () {
    // let buttonValue;

    // document.querySelectorAll('.restButton').forEach(button => {
    //     button.addEventListener("click", () => {
    //         buttonValue = button.getAttribute("data-button-value");
    //         // store the button value in sessionStorage
    //         sessionStorage.setItem("buttonValue", buttonValue); 
    //         window.location.href = "restaurants.html";
    //     });
    // });

    // let storedValue = sessionStorage.getItem("buttonValue");
    // loadRestaurants(storedValue);
    // console.log(storedValue); // this will print the button value
    loadRestaurants();
});
