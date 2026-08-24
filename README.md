# DevAPI Hub

> A developer-focused API discovery, documentation and testing portal.

## Why I built this

I wanted a small project that combines frontend development with practical API usage. Instead of only displaying API names, I built documentation pages so a developer can quickly understand an endpoint, its parameters, authentication requirements and an example response.

## Features

- API directory with 8 curated APIs
- Search by name, category and description
- Category filtering
- Individual documentation pages
- HTTP method and authentication information
- Parameters table
- Example request and JSON response
- Official documentation links
- Browser-based GET request playground
- Basic request error handling
- Responsive layout

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- REST APIs
- Fetch API
- Git & GitHub

## How it works

API metadata is stored as JavaScript objects. The home page filters this data and creates cards dynamically. Each card links to a focused documentation page. GET documentation pages use the browser Fetch API to send a request and render the JSON response.

## Run locally

1. Download or clone this repository.
2. Open the folder in VS Code.
3. Install the Live Server extension.
4. Open `index.html` with Live Server.

## Project structure

```text
devapi-hub/
├── index.html
├── style.css
├── script.js
├── data.json
├── docs/
│   ├── open-meteo.html
│   ├── github.html
│   ├── exchange-rate.html
│   ├── jsonplaceholder.html
│   ├── cat-facts.html
│   ├── universities.html
│   ├── random-user.html
│   └── rest-countries.html
└── README.md
```

## Challenges

### API errors and browser restrictions
Some public APIs require authentication or do not allow browser-side requests because of CORS. The playground therefore handles failed requests and explains why a request may not work.

### Keeping documentation readable
I separated each API into its own documentation page instead of putting every endpoint on one large page. This makes the project easier for a developer to navigate.

## Future improvements

- OpenAPI/Swagger import
- API authentication examples
- POST/PUT/DELETE playground support
- Favorites and recently viewed APIs
- API submission form
- Request history
- Deploy as a public developer portal

## Author

**Anshuman Sahu**

Built as a portfolio project to practice frontend development, REST APIs, technical documentation and developer-focused UX.
