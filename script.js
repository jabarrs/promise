const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function () {
  const inputKeyword = document.querySelector('.input-keyword');
  axios('https://newsapi.org/v2/everything?apiKey=5682dc34a6e24dc28ee940c3a932a702&q=' + inputKeyword.value).then((n) => {
    console.log(n.data);
    const news = n.data.articles;
    let cards = '';
    news?.forEach((n) => (cards += showCards(n)));
    const newsContainer = document.querySelector('.news-container');
    newsContainer.innerHTML = cards;
  });
});

const newsContainer = document.querySelector('.news-container');
newsContainer.innerHTML = cards;

function showCards(n) {
  return `<div class="col-md-4 my-5">
    <div class="card">
      <img src="${n.urlToImage}" class="card-img-top">
      <div class ="card-body">
      <h5 class ="card-title">${n.title}</h5>
      <h6 class ="card-subtitle mb-2 text-muted">${n.description}</h6>
      <a href="${n.url}" class ="btn btn-primary">Go To Site</a>
      </div>
    </div>
 </div>`;
}
