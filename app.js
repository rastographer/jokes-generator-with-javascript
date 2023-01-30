// Get elements
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

// Api credentials
const apiKey ="YOUR-API-KEY"; // Get your API Key here: https://api-ninjas.com/api/dadjokes
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// Method & headers
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    },
};

// Function to fetch joke
async function getJoke(){
    // alert("clicked");

    try {
        jokeEl.innerText = "Updating joke...";

        // Disable button while fetching data
        btnEl.disabled = true;
        btnEl.innerText = "Loading";

        // fetch API data
        const response = await  fetch(apiURL, options);
        const data = await response.json();

        // console.log(data[0].joke);
        jokeEl.innerText = data[0].joke;

        // Return button details to default
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me Another Joke!";
    } catch (error) {

        //in an event of a problem run
        jokeEl.innerText = "Something went wrong. Try again later!";
        
        // Return button details to default
        btnEl.disabled = false;
        btnEl.innerText = "Try Again!";
    }
}

btnEl.addEventListener("click", getJoke)