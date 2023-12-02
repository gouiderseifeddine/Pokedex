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


## 2.Setup Redux Store:

Add the following content to your `redux/store.js` file:

```javascript
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

export default store;
```


## 3. Configure Apollo Client with Redux:
   ```javascript
   // apollo/client.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';
import store from '../redux/store';

const httpLink = createHttpLink({
  uri: 'https://pokeapi.co/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = ''; // Add any authorization token if needed
  return {
    headers: {
      ...headers,
      authorization: token ? Bearer ${token} : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemons: relayStylePagination(['type', 'ability']),
        },
      },
    },
  }),
});

export default client;
```
   
## 4. Dispatch Redux Actions from Apollo Components:
   ```bash
   // components/PokemonList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { setSelectedPokemon } from '../redux/store';
import { GET_POKEMONS } from '../graphql/queries';

const PokemonList = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handlePokemonClick = (pokemon) => {
    dispatch(setSelectedPokemon(pokemon));
  };

  return (
    <div>
      {data.pokemons.results.map((pokemon) => (
        <div key={pokemon.name} onClick={() => handlePokemonClick(pokemon)}>
          {pokemon.name}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
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
