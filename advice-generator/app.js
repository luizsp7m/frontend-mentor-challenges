const quoteId = document.querySelector("#quoteId");
const quoteAdvice = document.querySelector("#quoteAdvice");
const loading = document.querySelector("#loading");

async function getQuote() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  return data.slip;
}

async function newQuote() {
  quoteId.innerHTML = ``;
  loading.style.display = "block";
  quoteAdvice.style.display = "none";

  const quote = await getQuote();
  
  loading.style.display = "none";
  quoteAdvice.style.display = "inline";
  quoteId.innerHTML = `#${quote.id}`;
  quoteAdvice.innerHTML = quote.advice;
}

// (() => {
//   newQuote();
// })()