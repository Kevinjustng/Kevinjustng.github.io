document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
      {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      },
      {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
      },
      {
        text: "The harder I work, the luckier I get.",
        author: "Gary Player"
      }
    ];
  
    const quoteElement = document.getElementById("quote");
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
    quoteElement.innerHTML = `<p>"${randomQuote.text}" - ${randomQuote.author}</p>`;
  });