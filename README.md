# Movies Database

This is a small React app built with Vite that displays a list of popular movies from The Movie Database (TMDB) API. Users can view a list of popular movies, check detailed information about each movie, and see the movie ratings displayed as star icons.

## Project Overview

The app includes two main views:

1. **Movies List** - Displays a grid of popular movies with their titles and ratings.
2. **Movie Details** - Shows a selected movie's backdrop image, poster, overview, and additional details.

#### This project demonstrates:

- Fetching data from an external API
- Conditional rendering and component-based design
- Basic animations and styles for a clean user interface

## Dependencies

- [Vite](https://vitejs.dev/) - A fast build tool and development server, providing a quick and optimized setup for modern front-end development with minimal configuration.
- [React Router](https://reactrouter.com/) - A library for handling navigation and routing, allowing for different views within the app, such as the Movies List and Movie Details pages.
- [React Query](https://tanstack.com/query/latest) - A data-fetching library, used here for managing server state, caching API responses, and minimizing redundant requests.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system. This is easiest done with [nvm](https://github.com/nvm-sh/nvm).
If nvm is installed, run the following to command to use the same node and npm version used in the development of this app.

### API Key Setup

To access The Movie Database (TMDB) API, you’ll need a personal API token.

1. **Get an API Token:** Sign up for an account on [The Movie Database](https://www.themoviedb.org/) and generate an API token.
2. **Add Your Token to `.env`**: The project includes a `.env.example` file as a template for environment variables. Copy `.env.example` to `.env` and add your API token.
   Replace your_personal_api_token_here with your actual TMDB API token.

   ```
   VITE_TMDB_API_TOKEN=your_personal_api_token_here
   ```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hassanov112/Movies-database.git
   ```

2. Navigate into the project directory:
   ```
   cd Movies-database
   ```
3. Install the dependencies:
   ```
   npm i
   ```
4. Start the application
   ```
   npm run dev
   ```
