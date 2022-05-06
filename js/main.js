document.querySelector('button').addEventListener('click', getFunction)

// `https://api.nasa.gov/planetary/apod?api_key=r2o1xc86wWU3uZKCphX8NWzAB2xNhJB6xsD6cbEm`

function getFunction(){
    document.querySelector('img').src = ''
    let userVal = document.querySelector('input').value
    console.log(userVal)
    let url =  `https://api.magicthegathering.io/v1/cards?name=${userVal}&supertypes=legendary&limit=8`
    fetch(url)     
    .then(res => res.json()) 
// parse response as JSON     
    .then(data => {       
    console.log(data)     
    // document.querySelector('h2').innerText = data.name
    document.querySelector('.one').src = data.cards[0].imageUrl
    document.querySelector('.two').src = data.cards[1].imageUrl
    document.querySelector('.three').src = data.cards[2].imageUrl
    document.querySelector('.four').src = data.cards[3].imageUrl
    document.querySelector('.five').src = data.cards[4].imageUrl
    document.querySelector('.six').src = data.cards[5].imageUrl
    document.querySelector('.seven').src = data.cards[6].imageUrl
    document.querySelector('.eight').src = data.cards[7].imageUrl
    // document.querySelector('h3').innerText = data.explanation
    })     
    .catch(err => {         
    console.log(`error ${err}`)     
    }); 
}