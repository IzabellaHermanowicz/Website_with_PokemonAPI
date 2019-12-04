// build your app here
export const app = () => 

document.getElementById("btn").addEventListener("click", refreshPage); 

function refreshPage(){
    window.location.reload();
} 

async function getPokemon(num) 
{
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
  let data = await response.json();
  return data;
}

getPokemon(Math.floor(Math.random() * 808))
  .then( data => generateHtml(data));

  const generateHtml = (data) => {
    let abi, move="";
    let len =0;
    data.abilities.length<3?len=data.abilities.length:len=3
    for (let i=0; i<len; i++){
        abi +=`<p>${data.abilities[i].ability.name}</p>`
    }
    data.moves.length<3?len=data.moves.length:len=3
    for (let k=0; k<len; k++){
        move +=`<p>${data.moves[k].move.name}</p>`
    }
    const html = `
    <h5 class="card-title"><img src="https://img.icons8.com/color/48/000000/pokeball--v2.png">${data.name}</h5>
            <img src=${data.sprites.front_default} class="card-img-top" alt="Pokemon Picture">
            <div class="card-body">
                <div class="card-text">
                  <div>
                    <p class="cardTitle">Abilities</p>
                    ${abi}
                  </div>
                  <div>
                    <p class="cardTitle">Moves</p>
                    ${move}
                  </div>
                  <p><span>Type:</span> ${data.types[0].type.name}</p>
                  <p><span>Height:</span> ${data.height}</p>
                  <p><span>Weight:</span> ${data.weight}</p>
                </div>
            </div>
    `
    const pokemonDiv = document.querySelector('.card')
    pokemonDiv.innerHTML = html}
;