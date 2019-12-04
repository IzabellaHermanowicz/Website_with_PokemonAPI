// build your app here
export const app = () => 

document.getElementById("btn").addEventListener("click", RandomNumber); 

function RandomNumber(){
   return Math.floor(Math.random() * 808);
}
async function getPokemon(num) 
{
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
  let data = await response.json();
  return data;
}

getPokemon(1)
  .then( data => generateHtml(data));

  const generateHtml = (data) => {
    let abi, move="";
    let len =0;
    data.abilities.length<3?len=data.abilities.length:len=3
    for (let i=0; i<len; i++){
        abi +=`<li>${data.abilities[i].ability.name}</li>`
    }
    data.moves.length<3?len=data.moves.length:len=3
    for (let k=0; k<len; k++){
        move +=`<li>${data.moves[k].move.name}</li>`
    }
    const html = `
        <img src=${data.sprites.front_default} class="card-img-top" alt="Pokemon Picture">
              <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <div class="card-text">
                  <ul id="abilities">${abi}<ul>
                  <ul id="moves">${move}</ul>
                  <p>Type: ${data.types[0].type.name}</p>
                  <p>Height: ${data.height}</p>
                  <p>Weight: ${data.weight}</p>
                </div>
            </div>
    `
    const pokemonDiv = document.querySelector('.card')
    pokemonDiv.innerHTML = html}
;