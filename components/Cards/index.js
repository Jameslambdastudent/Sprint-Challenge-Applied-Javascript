// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function cardMaker(obj){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgCont = document.createElement('div')
    const authImg = document.createElement('img')
    const authName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgCont.classList.add('img-container')

    card.append(headline)
    card.append(author)
    author.append(imgCont)
    imgCont.append(authImg)
    author.append(authName)

    headline.textContent = obj[0]
    authImg.src = obj[1]
    authName.textContent = obj[2]

    return card;
    
}

const cardSection = document.querySelector('.cards-container')



axios.get("https://lambda-times-backend.herokuapp.com/articles").then(res => {
    
    let articleTopics = [];
    
     const topics = Object.values(res.data.articles)
    

    const lambda = Object.values(res.data.articles.javascript)

     lambda.forEach(item => {
         let newArt = Object.values(item)
        
     })

    const arts = Object.values(res.data.articles)
    

    arts.forEach(item => {
        item.forEach(data =>{
            let artInfo = Object.values(data)
            
            articleTopics.push(artInfo)
        })
    })

   
    articleTopics.forEach(data => {
        const newArts = [];
        newArts.push(data[0], data[1], data[2])
        cardSection.append(cardMaker(newArts))
        
    })
})