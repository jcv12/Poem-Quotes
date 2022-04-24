var quoteArray = [
    {
        content: "Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.",
        author: "Oscar Wilde"
    },
    {
        content: "The woods are lovely, dark and deep. But I have promises to keep, and miles to go before I sleep.",
        author: "Robert Frost"
    },
    {
        content: "Deep into that darkness peering, long I stood there, wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before.",
        author: "Edgar Allen Poe"
    },
    {
        content: "Ayana is quite possibly the most beautiful person I have seen and commited my soul too",
        author: "John Vayianos"
    },
    {
        content: "When someone shows you who they are, believe them the first time.",
        author: "Maya Angelou"
    },
    {
        content: "Keep your face always toward the sunshine - and shadows will fall behind you.",
        author: "Walt Whitman"
    },
];

//grab html elements
var button = document.getElementById('quote-button'),
    quote = document.getElementById('quote'),
    author = document.getElementById('quote-author'),
    tweet = document.getElementById('tweet'),
    random;

//Generate a Random Quote
window.onload = randomQuote;
button.addEventListener('click', randomQuote);

tweetQuote();

//random quote function
function randomQuote (){
    random = Math.floor(Math.random() * quoteArray.length);
    quote.innerHTML = quoteArray[random].content;
    author.innerHTML = '&mdash; ' + quoteArray[random].author;

    tweetQuote();
}

//Dynamically Generate Content + Button
function tweetQuote (){
    var quoteShort = quote.innerHTML,
        quoteShortAuthor = author.innerHTML.substr(2).trim(),
        msg ='';

    //are there two tweet buttons? also from http://jsfiddle.net/LEBz8/1/
    var elem = document.getElementById('twitterbutton');
    if (elem !== null) {
        elem.parentNode.removeChild(elem);
    }

    //cut the message to fit the 140 length + leave some extra
    if(quoteShort.length + quoteShortAuthor.length <= 90){
        msg = '"' +quoteShort + '" by ' + quoteShortAuthor;
    }else {
        msg = '"'+ quoteShort.substr(0, 65) + '[...]" by ' + quoteShortAuthor;
    }

    //select the button using its class reference https://bit.ly/221t0Hw
    var tweetDiv = document.querySelector('.twitter-share-button');

}