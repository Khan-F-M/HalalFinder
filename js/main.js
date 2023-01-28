//Functions and Variables
function value() {
    let buttons = document.querySelectorAll('#restu');
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let value = button.getAttribute("data-button-value");
            console.log(value);
            return value;
        })
    })
}

function loadRestaurants(id) {
   
      let caturl = `https://nice-gold-snail-kit.cyclic.app/api/movies?page=${page}&perPage=${perPage}`;
 

    fetch(url).then(response => response.json()).then(data => {
        let rows = `
        ${data.map(movie => (
            `<tr data-id=${movie._id}>
              <td>${movie.year}</td>
              <td>${movie.title}</td>
              <td>${movie.plot ? movie.plot : "N/A"}</td>
              <td>${movie.rated ? movie.rated : "N/A"}</td>
              <td>${movie.runtime}</td>
          </tr>`
        )).join('')}
      `;

        document.querySelector('#moviesTable tbody').innerHTML = rows;
        document.querySelector('#current-page').innerHTML = page;

        // add the "click" event listener to the newly created rows
        document.querySelectorAll('#moviesTable tbody tr').forEach((row) => {
            row.addEventListener('click', (e) => {
                let clickedId = row.getAttribute("data-id");

                fetch(`https://nice-gold-snail-kit.cyclic.app/api/movies/${clickedId}`)
                    .then(res => res.json()).then(data => {

                        document.querySelector('#detailsModal .modal-title').innerHTML = data.title;

                        let details = `
                <ul class="list-group">
                    <img class="img-fluid w-100" src=${data.poster}>
                    <br><br>
                    <strong>Directed By:</strong>${data.directors}
                    <br><br>
                    <p>${data.fullplot}</p>
                    <strong>Cast:</strong>${data.cast}
                    <br><br>
                    <strong>Awards:</strong>${data.awards.text}
                    <br>
                    <strong>IMDB Rating:</strong> ${data.imdb.rating}
                     (${data.imdb.votes} votes)
                </ul>
            `;

                        document.querySelector('#detailsModal .modal-body').innerHTML = details;

                        let myModal = new bootstrap.Modal(document.getElementById('detailsModal'), {
                            backdrop: 'static', // default true - "static" indicates that clicking on the backdrop will not close the modal window
                            keyboard: false, // default true - false indicates that pressing on the "esc" key will not close the modal window
                            focus: true, // default true - this instructs the browser to place the modal window in focus when initialized
                        });

                        myModal.show();
                    });
            });
        });

    });
}


// Execute when the DOM is 'ready'
document.addEventListener('DOMContentLoaded', function () {
    value();


});