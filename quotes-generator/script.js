const quotes = [
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    name: "Nelson Mandela"},

    {quote: "The way to get started is to quit talking and begin doing.",
    name: "Walt Disney"},

    {quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    name: "Steve Jobs"},

    {quote: "If life were predictable it would cease to be life, and be without flavor.",
    name: "Eleanor Roosevelt"},

    {quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    name: "Oprah Winfrey"},

    {quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    name: "James Cameron"},

    {quote: "Life is what happens when you're busy making other plans.",
    name: "John Lennon"}
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteAuthor = document.getElementById("quoteAuthor");
const quote = document.getElementById("quote");

quoteBtn.addEventListener('click',displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}