# DevAPI Hub

> A developer-focused API discovery, documentation and testing portal.

## Why I built this

I wanted to build a small project that combines frontend development with practical API usage. Instead of only displaying API names, I created documentation pages where developers can understand an endpoint, its parameters, authentication requirements, example requests, and responses.

## Features

* API directory with 8 curated APIs
* Search by name, category and description
* Category filtering
* Individual API documentation pages
* HTTP method and authentication information
* Parameters table
* Example requests and JSON responses
* Official documentation links
* Browser-based GET API playground
* Basic request error handling
* Responsive design
* Copy endpoint functionality

## Screenshots

### Homepage

![DevAPI Hub Homepage](screenshots/homepage.png)

### API Directory

![API Directory](screenshots/api-directory.png)

### API Documentation & Playground

![API Documentation and Playground](screenshots/api-documentation.png)

## Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript
* REST APIs
* Fetch API
* Git & GitHub

## How it works

API information is stored as JavaScript objects. The homepage uses JavaScript to search and filter the API data and dynamically create API cards.

Each API card opens its own documentation page containing the endpoint, HTTP method, authentication information, parameters, example request and example response.

For GET APIs, the playground uses the JavaScript Fetch API to send a request and display the returned JSON response directly in the browser.

## Run locally

1. Clone this repository.
2. Open the project folder in VS Code.
3. Install the Live Server extension.
4. Open `index.html` with Live Server.
5. Explore the API directory and documentation pages.

## Project Structure

```text
developer-api-portal/
├── index.html
├── style.css
├── script.js
├── data.json
├── README.md
├── .gitignore
├── screenshots/
│   ├── homepage.png
│   ├── api-directory.png
│   └── api-documentation.png
└── docs/
    ├── open-meteo.html
    ├── github.html
    ├── exchange-rate.html
    ├── jsonplaceholder.html
    ├── cat-facts.html
    ├── universities.html
    ├── random-user.html
    └── rest-countries.html
```

## Challenges

### API errors and browser restrictions

Some public APIs require authentication or restrict browser-side requests because of CORS. I added basic error handling in the API playground so failed requests show a useful message instead of breaking the page.

### Keeping documentation readable

Instead of putting every API on one large documentation page, I created a separate documentation page for each API. This makes the information easier for developers to navigate and understand.

### Handling API responses

The playground checks the HTTP response and converts successful responses into readable JSON before displaying them to the user.

## Future Improvements

* OpenAPI/Swagger import
* API authentication examples
* POST/PUT/DELETE playground support
* Favorites and recently viewed APIs
* API submission form
* Request history
* API response formatting
* Public deployment

## Author

**Anshuman Sahu**

Built as a portfolio project to practice frontend development, REST APIs, API documentation and developer-focused user experience.
