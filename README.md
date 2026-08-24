# DevAPI Hub

> A developer-focused API discovery, documentation and testing portal built with HTML, CSS and JavaScript.

## Overview

DevAPI Hub is a simple developer portal that helps developers discover useful public APIs, explore their documentation, understand endpoints and parameters, and test GET APIs directly from the browser.

The project was built to practice frontend development, REST API integration, technical documentation, and developer-focused user experience.

## Why I Built This

I wanted to build a practical project that goes beyond a normal frontend website.

While working on this project, I focused on understanding how developers actually use APIs:

- Finding an API
- Understanding its endpoint
- Checking the HTTP method
- Understanding parameters
- Checking authentication requirements
- Reading example responses
- Testing an API request
- Handling failed requests

This helped me combine frontend development with practical REST API usage.

## Features

- 🔎 Search APIs by name, category and description
- 🗂️ Filter APIs by category
- 📚 Individual documentation page for each API
- 🔗 API endpoint information
- 📡 HTTP method information
- 🔐 Authentication information
- 📋 Parameters table
- 💻 Example API requests
- 📦 Example JSON responses
- 🌐 Links to official API documentation
- 🧪 Browser-based GET API playground
- ⚠️ Basic API error handling
- 📋 Copy endpoint functionality
- 📱 Responsive design
- 🧑‍💻 Developer-focused interface

## APIs Included

The project currently includes 8 public APIs:

| API | Category | Method | Authentication |
|---|---|---|---|
| Open-Meteo | Weather | GET | None |
| GitHub REST API | Developer | GET | Public endpoints |
| ExchangeRate API | Finance | GET | None for open endpoint |
| JSONPlaceholder | Developer | GET | None |
| Cat Facts | Fun | GET | None |
| Universities API | Education | GET | None |
| Random User API | Demo | GET | None |
| REST Countries | Public Data | GET | None |

## Screenshots

### Homepage

![DevAPI Hub Homepage](screenshots/homepage.png)

### API Directory

![API Directory](screenshots/api-directory.png)

### API Documentation & Playground

![API Documentation and Playground](screenshots/api-documentation.png)

## How It Works

The application is built using vanilla JavaScript.

The API information is stored as JavaScript objects. The homepage reads this data and dynamically creates API cards.

When a user searches for an API, JavaScript filters the API list based on:

- API name
- Category
- Description

Each API card links to its own documentation page.

The documentation page contains:

- API description
- HTTP method
- Endpoint
- Authentication
- Parameters
- Example request
- Example response
- Official documentation link

For GET APIs, the API playground uses the browser Fetch API to send a request and display the returned JSON response.

## API Request Flow

```text
User
  ↓
DevAPI Hub
  ↓
Select API
  ↓
Read Documentation
  ↓
Enter / View Endpoint
  ↓
Fetch API Request
  ↓
API Server
  ↓
JSON Response
  ↓
Display Response
