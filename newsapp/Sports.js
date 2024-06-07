
let data;
let dataLength = 0;

async function getData() {
   const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8e569453ace940d2905e6ece3e4e4a0e');
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
      const article = document.createElement('article');
      if(data[i].urlToImage){
      const main = document.getElementById('articles-contain');
      article.innerHTML = `
            <img class="article-image" src="${data[i].urlToImage} "/>
             <div class="article-content">
                 <a class="aa" href="${data[i].url}" target="_blank">
                        <h2 class="heading">${data[i].title}</h2>
                  </a>
            
                <p class="author-cont">${authoris}</p> 
             </div>
      `;
      
      main.appendChild(article);
      }
      else{
         const main = document.getElementById('without-image');
         article.innerHTML = `
             <div class="article-content1">
                 <a class="aa" href="${data[i].url}" target="_blank">
                        <h2 class="heading">${data[i].title}</h2>
                  </a>
            
                <p class="author-cont">${authoris}</p> 
             </div>
      `;
      
      main.appendChild(article);
      }
   }
}


