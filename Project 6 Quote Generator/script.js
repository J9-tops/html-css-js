let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "I am a boy",
    person: "Confucius",
  },
  {
    quote: "The journey of a thousand miles begins with one step",
    person: "Lao Tzu",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop",
    person: "Confucius",
  },
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
