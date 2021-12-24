let apiQuotes = [];
//Show new Quote
function newQuote() {
    //Pick a random quote from api quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}
//Get Quotes from API Reference
async function getQuotes(){
    const apiURL = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //Catch Error Here

    }
}
//On Loading
getQuotes();