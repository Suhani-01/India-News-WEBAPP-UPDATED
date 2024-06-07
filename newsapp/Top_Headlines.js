const main = document.getElementById('articles-container');

let data;
let dataLength = 0;

async function getData() {
   const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=8e569453ace940d2905e6ece3e4e4a0e');
   const result = await res.json();
   data = result.articles;
   dataLength = data.length;
   console.log(data);
   renderUI();
}

getData();

function renderUI() {
   for (let i = 0; i < dataLength; i++) {
      const authoris=data[i].author? "~"+data[i].author:" ";
      const imageUrl = data[i].urlToImage ? data[i].urlToImage : 'picture.png';
      const article = document.createElement('article');
      article.innerHTML = `
            <img class="article-image" src="${imageUrl} "/>
             <div class="article-content">
                 <a class="aa" href="${data[i].url}" target="_blank">
                        <h2 class="heading">${data[i].title}</h2>
                  </a>
            
                <p class="author-cont">${authoris}</p> 
             </div>
      `;

      main.appendChild(article);

   }
}


