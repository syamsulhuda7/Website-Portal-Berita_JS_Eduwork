const page = document.getElementById('page');
const data = fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b5f724cc17224162b818bc16585011db');
data
    .then(res => res.json())
    .then(res => {
        const article = res.articles
        let table = '';
        article.forEach(e => {
            table += render(e);
            console.log(render(e))


            // console.log(article.forEach(e => {
            //         table += render(article))
        })
        page.innerHTML = table;
    })
    .catch(err => {
        page.innerHTML = message(err.message)
    })
    .finally(() => {
        ''
    });

function message(msg) {
    return msg
};


function render(e) {
    return `<div class="card m-5 col-6" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${e.urlToImage}" class="mt-3 ms-2 img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${e.title}</h5>
                  <p class="card-text"><small class="text-body-secondary">${e.author}, ${e.publishedAt}</small></p>
                  <p class="card-text">${e.description}</p>
                  <a href="${e.url}" class="btn btn-primary">Read more ...</a>
                </div>
              </div>
            </div>
          </div>
        `
};