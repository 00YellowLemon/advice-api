// Selecting the necessary DOM elements
let btn = document.querySelector(".abs"); // Selecting button element with class "abs"
let index = document.querySelector("span"); // Selecting <span> element
let advice = document.querySelector("p"); // Selecting <p> element

const url = "https://api.adviceslip.com/advice"; // API endpoint for advice

// Function to fetch and update advice
let getAdvice = () => {
  fetch(url)
    .then((response) => response.json()) // Parsing the JSON response
    .then((data) => {
      const slip = data.slip; // Extracting the advice slip from the response
      advice.innerText = `"${slip.advice}"`; // Updating the <p> element with advice text
      index.innerText = slip.id; // Updating text
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
    });
};

// Event listeners
window.addEventListener("load", getAdvice); // Fetch advice when the page loads
btn.addEventListener("click", getAdvice); // Fetch advice when the button is clicked
