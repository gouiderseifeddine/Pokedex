import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface PokemonState {
  [key: string]: any;
}

// Define the initial state using that type
const initialState: PokemonState = {
  data: 0,
  isLoading: false,
  error: null,
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchPokemon: (state: any, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
    fetchPokemonSuccess: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchPokemonError: (state: any, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPokemon, fetchPokemonError, fetchPokemonSuccess } =
  pokemonSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.pokemonSlice.value;

export default pokemonSlice.reducer;
