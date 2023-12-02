import axios from "axios";

type Filters = {
  searchText?: string;
  page?: number;
};
export async function getAllpokemons({ searchText, page = 1 }: Filters) {
  if (searchText) {
    const res = await getPokemonByName(searchText);
    return res ? [res] : [];
  }

  try {
    const data = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`
    );
    const promises = data.data.results.map(async ({ name, url }: any) => {
      const { data } = await axios.get(url);
      return data;
    });
    const items = await Promise.all(promises);

    return items;
  } catch (error) {
    return [];
  }
}
export async function getPokemonByName(name: string) {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return data;
  } catch (error) {
    return null;
  }
}
