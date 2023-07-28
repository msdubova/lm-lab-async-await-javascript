import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    console.log(json);
  }
  catch {
    console.log(console.error);
  }
}
fetchData(jsonTypicode);

const otherJsonTypicode = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME'

fetchData(otherJsonTypicode);