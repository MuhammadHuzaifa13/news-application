const cardDiv = document.getElementById("cardSec");
const input = document.getElementById("input");

const searchHere = () => {

    cardDiv.innerHTML = `<div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div`

    const query = input.value; 
    if (!query) return; 
    const API_KEY = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=8705223830444e519a17ce549b4c1700`;

    fetch(API_KEY)
    .then((res) => res.json())
    .then((data) => {
        cardDiv.innerHTML = ''; 
        data.articles.forEach((e) => {
            console.log(e);
            cardDiv.innerHTML += `<div class="card" style="width: 18rem;">
                <img src="${e.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${e.title}</h5>
                    <p class="card-text">${e.description}</p>
                    <a href="${e.url}" class="btn btn-primary" target="_blank">Go somewhere</a>
                </div>
            </div>`;
        });
    })
    .catch((err) => {
        console.log(err);
    });
}



// const cards = document.getElementById("cardSec")
// const input = document.getElementById("input")

// const searchNews = ()=>{

    
//     const API_key = `https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-07&sortBy=publishedAt&apiKey=28726c7e7e1c4e6aa5189b43fa6010a6`
    
//     fetch(API_key)
//     .then((res)=> res.json())
//     .then((data) => {
//         data.articles.map((e,i)=>{
//             console.log(e);
//             cards.innerHTML += `<div class="card" style="width: 18rem;">
//             <img  src="${e.urlToImage}" class="card-img-top"  alt="...">
//             <div class="card-body">
//             <h5 class="card-title">${e.title}</h5>
//             <p class="card-text">${e.description}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//     </div>`
// })
// } ).catch((err)=>{
//     console.log(err);
    
// })
// }



// const cardDiv = document.getElementById("cardSec")
// const input = document.getElementById("input")


// const searchHere = () => {
//   const API_KEY = `https://newsapi.org/v2/everything?q=${input.value}24-11-07&
//   sortBy=publishedAt&apiKey=8705223830444e519a17ce549b4c1700`;

//   fetch(API_KEY)
//   .then((res) => res.json())
//   .then((data) => {
//     data.articles.map((e,i) => {
//         console.log(e);
//         cardDiv.innerHTML += `<div class="card" style="width: 18rem;">
//   <img src="${e.urlToImage}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${e.title}</h5>
//     <p class="card-text">${e.description}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`
        
//     });

//   })
//   .catch((err) => {
//     console.log(err);
//   });
 
// }


// const cards = document.getElementById("cardSec")
// const input = document.getElementById("input")

// const searchNews = ()=>{

    
//     const API_key = `https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-07&sortBy=publishedAt&apiKey=28726c7e7e1c4e6aa5189b43fa6010a6`
    
//     fetch(API_key)
//     .then((res)=> res.json())
//     .then((data) => {
//         data.articles.map((e,i)=>{
//             console.log(e);
//             cards.innerHTML += `<div class="card" style="width: 18rem;">
//             <img  src="${e.urlToImage}" class="card-img-top"  alt="...">
//             <div class="card-body">
//             <h5 class="card-title">${e.title}</h5>
//             <p class="card-text">${e.description}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//     </div>`
// })
// } ).catch((err)=>{
//     console.log(err);
    
// })
// }