# Project Title

A brief description of what this project does and who it's for

# Pokémon GraphQL App

This project is a React application that visualizes Pokémon data using GraphQL. It utilizes Apollo Link for efficient GraphQL interactions and Redux for global state management.

## Technologies Used

- React
- Apollo Client
- Redux
- GraphQL
- Tailwind CSS (or SASS/SCSS)
- Jest, React Testing Library, Cypress (for testing)

## Project Setup

1. **Install Dependencies:**

   ```bash
   npm install @reduxjs/toolkit react-redux @apollo/client

   ```

2. ** Setup Redux Store:**

   ```bash
      // redux/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    selectedPokemon: null,
  },
  reducers: {
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { setSelectedPokemon } = pokemonSlice.actions;
export const selectSelectedPokemon = (state) => state.pokemon.selectedPokemon;

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
  },
});

export default store;

   ```

3. ** Configure Apollo Client with Redux:**

   ```bash
   npm install @reduxjs/toolkit react-redux @apollo/client

   ```

4. ** Dispatch Redux Actions from Apollo Components:**

   ```bash
   npm install @reduxjs/toolkit react-redux @apollo/client
   ```

## Project Structure

The project follows a standard React folder structure. Here are the key directories:

- **src/**
  - **components/**: React components for the user interface.
  - **redux/**: Redux store configuration.
  - **service/**: for the pokemon service logic.
  - **types/**: where we will find Pokemon interface.
  - **mocks/**: where we will find the list of our pokemons.

```bash
npm install
Start the Development Server:


npm start
Open the App:

Open http://localhost:3000 in your browser.
```
