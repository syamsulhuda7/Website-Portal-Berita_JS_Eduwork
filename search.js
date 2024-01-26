import { render, message } from "./card.js";

const searchElement = document.getElementById('search');
const page = document.getElementById('page');
page.innerHTML = message('Loading...')

const search = () => {

    const inputValue = searchElement.value;
    const trimmedSearchTerm = inputValue.trim();

    if (trimmedSearchTerm !== '') {
        const apiUrl = `http://www.omdbapi.com/?apikey=445cc37&s=${encodeURIComponent(trimmedSearchTerm)}`;

        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                const article = res.Search
                console.log(res.Search)
                let table = '';
                article.forEach(e => {
                    table += render(e);
                })
                page.innerHTML = table;
            })
            .catch(err => {
                page.innerHTML = `<div class="card border-danger mb-3" style="max-width: 50rem;">
                <div class="d-flex flex-column justify-content-center align-items-center card-body text-danger">
                  <h5 class="card-title">Maaf</h5>
                  <p class="card-text">Hasil pencarian ${inputValue} tidak ditemukan</p>
                </div>
              </div>`
            })
            .finally(() => {
                ''
            });
    }
}

searchElement.addEventListener('keyup', search);

export { search };
