const render = (e) => {
    return `<div class="card m-2 col-5" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${e.Poster}" class="mt-3 ms-2 img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${e.Title}</h5>
                    <p class="card-text"><small class="text-body-secondary">${e.Type}</small></p>
                    <p class="card-text">${e.Year}</p>
                    <a href="" class="btn btn-warning opacity-75">Read more ...</a>
                  </div>
                </div>
              </div>
            </div>
          `
  };

const message = (msg) => {
    return msg
  };

export {render, message};