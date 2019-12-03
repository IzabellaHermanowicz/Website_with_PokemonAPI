// build your app here
export const app = () => 

document.getElementById("searchbtn").addEventListener("click", submitName); 

function submitName(){
    let PokemonName = document.getElementById("inlineFormInputGroupUsername").value;
    console.log(PokemonName);
}
async function getPokemon(name) 
{
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  let data = await response.json();
  return data;
}

getPokemon("ditto")
  //.then(data => console.log(data)); 
  .then( data => generateHtml(data));

  const generateHtml = (data) => {
    console.log(data)
    const html = `
        <img src=${data.sprites.front_default} class="card-img-top" alt="Pokemon Picture">
              <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <div class="card-text">
                  <div class="details">
                  <span>Height: ${data.height}</span>
                  <span>Weight: ${data.weight}</span>
                </div>
            </div>
    `
    for 
    const pokemonDiv = document.querySelector('.card')
    pokemonDiv.innerHTML = html}
;