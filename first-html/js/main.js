// import { BASE_URL, DEFAULT_QUERY } from "./config";
const NASA_API_KEY = "yJwx3NLHdwWnIxvVXHSp7bUyXidnqanuiHaLIeYC";
const BASE_URL = "https://api.nasa.gov/planetary/apod";
const DEFAULT_QUERY = `?api_key=${NASA_API_KEY}`;

const title = document.querySelector("#title");
const date = document.querySelector("#date");
const picture = document.querySelector("#picture");
const explanation = document.querySelector("#explanation");


// 2. Create a function called fetchNASAData
const fetchNASAData = async () => {
  const response = await fetch(`${BASE_URL}${DEFAULT_QUERY}`, {
    method: "GET"
  })
  const data = await response.json()
  displayData(data)
}

// 3. Call the function
fetchNASAData()

// 1. Create a function called fetchNASAData
function displayData(data) {
  title.textContent = data?.title
  date.textContent = data.date
  picture.src = data.hdurl
  explanation.textContent = data.explanation
}