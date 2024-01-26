import { render, message } from "./card.js";
import { search } from "./search.js";

// const searchElement = document.getElementById('search');
// searchElement.addEventListener('keyup', search())


const page = document.getElementById('page');
page.innerHTML = message('Loading...')
const data = fetch('http://www.omdbapi.com/?apikey=445cc37&s=new');

data
  .then(res => res.json())
  .then(res => {
    const article = res.Search
    // console.log(res.Search)
    let table = '';
    article.forEach(e => {
      table += render(e);
    })
    page.innerHTML = table;
  })
  .catch(err => {
    page.innerHTML = message(err.message)
  })
  .finally(() => {
    ''
  });

  search();





