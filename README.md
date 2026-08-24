# DevAPI Hub

> A developer-focused API discovery, documentation and testing portal built with HTML, CSS and JavaScript.

## Overview

DevAPI Hub is a simple developer portal that helps developers discover useful public APIs, explore their documentation, understand endpoints and parameters, and test GET APIs directly from the browser.

I built this project to practice frontend development, REST API integration, technical documentation, and developer-focused user experience.

## Why I Built This

I wanted to build a practical project that goes beyond a normal frontend website.

The main goal was to understand how developers work with APIs:

- Finding an API
- Understanding its endpoint
- Checking the HTTP method
- Understanding parameters
- Checking authentication requirements
- Reading example responses
- Testing API requests
- Handling failed requests

## Features

- Search APIs by name, category and description
- Filter APIs by category
- Individual documentation pages
- HTTP method information
- Authentication information
- Parameters table
- Example API requests
- Example JSON responses
- Official documentation links
- Browser-based GET API playground
- Basic API error handling
- Copy endpoint functionality
- Responsive design

## APIs Included

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

![DevAPI Hub Homepage](./screenshots/homepage.png)

### API Directory

![API Directory](./screenshots/api-directory.png)
<img width="652" height="219" alt="image" src="https://github.com/user-attachments/assets/e50755b1-58aa-4f70-8de0-7cbc973c323b" />


## How It Works

The API information is stored as JavaScript objects.

The homepage uses JavaScript to:

1. Display API cards dynamically.
2. Search APIs by name, category and description.
3. Filter APIs by category.
4. Open individual documentation pages.

Each documentation page contains:

- API description
- HTTP method
- Endpoint
- Authentication
- Parameters
- Example request
- Example response
- Official documentation link

The API playground uses the JavaScript Fetch API to send GET requests and display JSON responses directly in the browser.

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
API Endpoint
  ↓
Fetch API Request
  ↓
API Server
  ↓
JSON Response
  ↓
Display Response
