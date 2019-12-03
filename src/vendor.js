import 'bootstrap';

async function getPokemon(name) 
{
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  let data = await response.json()
  return data;
}

getPokemon('ditto')
  .then(data => console.log(data)); 