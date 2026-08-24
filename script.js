const apis = [
{"id": "open-meteo", "name": "Open-Meteo", "category": "Weather", "auth": "None", "method": "GET", "description": "Weather forecasts and current weather data without an API key.", "endpoint": "https://api.open-meteo.com/v1/forecast?latitude=22.80&longitude=86.20&current=temperature_2m,wind_speed_10m", "official": "https://open-meteo.com/en/docs", "params": [["latitude", "number", "Latitude of the location"], ["longitude", "number", "Longitude of the location"], ["current", "string", "Current weather variables"]], "example": {"latitude": 22.8, "longitude": 86.2, "current": {"temperature_2m": 28.4, "wind_speed_10m": 12.1}}},
{"id": "github", "name": "GitHub REST API", "category": "Developer", "auth": "Public endpoints available", "method": "GET", "description": "Work with GitHub users, repositories, issues and other developer resources.", "endpoint": "https://api.github.com/users/octocat", "official": "https://docs.github.com/en/rest", "params": [["username", "string", "GitHub username"]], "example": {"login": "octocat", "id": 583231, "type": "User"}},
{"id": "exchange-rate", "name": "ExchangeRate API", "category": "Finance", "auth": "None for open endpoint", "method": "GET", "description": "Retrieve current exchange rates for currencies.", "endpoint": "https://open.er-api.com/v6/latest/USD", "official": "https://www.exchangerate-api.com/docs/overview", "params": [["base", "string", "Base currency code, for example USD"]], "example": {"result": "success", "base_code": "USD", "rates": {"INR": 87.1}}},
{"id": "jsonplaceholder", "name": "JSONPlaceholder", "category": "Developer", "auth": "None", "method": "GET", "description": "Fake REST API useful for frontend development and testing.", "endpoint": "https://jsonplaceholder.typicode.com/todos/1", "official": "https://jsonplaceholder.typicode.com/", "params": [["id", "number", "Resource ID"]], "example": {"userId": 1, "id": 1, "title": "delectus aut autem", "completed": false}},
{"id": "cat-facts", "name": "Cat Facts", "category": "Fun", "auth": "None", "method": "GET", "description": "Simple API that returns random facts about cats.", "endpoint": "https://catfact.ninja/fact", "official": "https://catfact.ninja/", "params": [], "example": {"fact": "Cats have five toes on their front paws.", "length": 45}},
{"id": "universities", "name": "Universities API", "category": "Education", "auth": "None", "method": "GET", "description": "Search for universities around the world by country or name.", "endpoint": "http://universities.hipolabs.com/search?country=India", "official": "https://github.com/Hipo/university-domains-list", "params": [["country", "string", "Country name to search"]], "example": [{"name": "Indian Institute of Technology Bombay", "country": "India"}]},
{"id": "random-user", "name": "Random User API", "category": "Demo", "auth": "None", "method": "GET", "description": "Generate random user profiles for prototypes and demos.", "endpoint": "https://randomuser.me/api/", "official": "https://randomuser.me/", "params": [], "example": {"results": [{"gender": "male", "name": {"first": "John", "last": "Doe"}}]}},
{"id": "rest-countries", "name": "REST Countries", "category": "Public Data", "auth": "None", "method": "GET", "description": "Get country information including names, flags, capitals and currencies.", "endpoint": "https://restcountries.com/v3.1/name/India", "official": "https://restcountries.com/", "params": [["name", "string", "Country name"]], "example": [{"name": {"common": "India"}, "capital": ["New Delhi"]}]}
];

const grid=document.getElementById("apiGrid");
const search=document.getElementById("searchInput");
const filter=document.getElementById("categoryFilter");
const count=document.getElementById("resultCount");

[...new Set(apis.map(a=>a.category))].sort().forEach(cat=>{
  const option=document.createElement("option");
  option.value=cat; option.textContent=cat; filter.appendChild(option);
});

function render(){
  const q=search.value.trim().toLowerCase(), c=filter.value;
  const list=apis.filter(a=>{
    const text=(a.name+" "+a.category+" "+a.description).toLowerCase();
    return text.includes(q)&&(c==="all"||a.category===c);
  });
  count.textContent=`${list.length} ${list.length===1?"API":"APIs"}`;
  grid.innerHTML=list.length?list.map(a=>`
    <article class="card">
      <div class="card-top"><h3>${a.name}</h3><span class="tag">${a.category}</span></div>
      <p>${a.description}</p>
      <div class="meta">${a.method} • Auth: ${a.auth}</div>
      <a class="view" href="docs/${a.id}.html">Read documentation →</a>
    </article>`).join(""):`<div class="empty">No APIs match your search. Try another keyword or category.</div>`;
}
search.addEventListener("input",render);filter.addEventListener("change",render);render();
