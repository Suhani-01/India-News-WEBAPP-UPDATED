

let data;
let dataLength = 0;

async function getus() {
   const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8e569453ace940d2905e6ece3e4e4a0e');
   const result = await res.json();
   data = result.articles;
   dataLength = data.length;
   console.log(data);
   renderUI1();
}

function renderUI1() {
   const main = document.getElementById('articles-container1');
   for (let i = 0; i < dataLength; i++) {
      
      const authoris=data[i].author? "~"+data[i].author:" ";
      const imageUrl = data[i].urlToImage ? data[i].urlToImage : 'image.png';
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
async function getjapan() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=jp&apiKey=8e569453ace940d2905e6ece3e4e4a0e');
    const result = await res.json();
    data = result.articles;
    dataLength = data.length;
    console.log(data);
    renderUI2();
 }
 function renderUI2() {
   const main = document.getElementById('articles-container2');
    for (let i = 0; i < dataLength; i++) {
       
       const authoris=data[i].author? "~"+data[i].author:" ";
       const imageUrl = data[i].urlToImage ? data[i].urlToImage : 'japan.png';
       const article = document.createElement('article');
       article.innerHTML = `
             <img class="article-image" src="${imageUrl} "/>
              <div class="article-content">
                  <a class="aa" href="${data[i].url}" target="_blank">
                         <h5 class="heading">${data[i].title}</h5>
                   </a>  
                 <p class="author-cont">${authoris}</p> 
              </div>
       `;
 
       main.appendChild(article);
 
    }
 }
 getjapan();
 async function getkorea() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=kr&apiKey=63d80490f7304516abde662fac783e11');
    const result = await res.json();
    data = result.articles;
    dataLength = data.length;
    console.log(data);
    renderUI3();
 }
 function renderUI3() {
   const main = document.getElementById('articles-container3');
    for (let i = 0; i < dataLength; i++) {
       
       const authoris=data[i].author? "~"+data[i].author:" ";
       const imageUrl = data[i].urlToImage ? data[i].urlToImage : 'southkorea.png';
       const article = document.createElement('article');
       article.innerHTML = `
             <img class="article-image" src="${imageUrl} "/>
              <div class="article-content">
                  <a class="aa" href="${data[i].url}" target="_blank">
                         <h5 class="heading">${data[i].title}</h5>
                   </a>  
                 <p class="author-cont">${authoris}</p> 
              </div>
       `;
 
       main.appendChild(article);
 
    }
 }

 async function getsa() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=sa&apiKey=63d80490f7304516abde662fac783e11');
    const result = await res.json();
    data = result.articles;
    dataLength = data.length;
    console.log(data);
    renderUI4();
 }
 function renderUI4() {
   const main = document.getElementById('without-imagescontainer4');
    for (let i = 0; i < dataLength; i++) {
       
       
       const imageUrl = data[i].urlToImage ? data[i].urlToImage : 'southkorea.png';
       const article = document.createElement('article');
       article.innerHTML = `
             
              <div class="article-content">
                  <a class="aa" href="${data[i].url}" target="_blank">
                         <h5 class="heading1">${data[i].title}</h5>
                   </a>  
                   
                
              </div>
       `;
 
       main.appendChild(article);
 
    }
 }
getus();

getkorea();
getsa();