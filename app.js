const results = document.getElementById('results');
const input = document.getElementById('search');
const button = document.getElementById('search-btn');

function loadPokemon(name) {
 results.innerHTML = '<p>Loading...</p>';
fetch('https://pokeapi.co/api/v2/pokemon/' + name.toLowerCase())
.then(res => res.json())
.then(data => {
console.log(data);
results.innerHTML = `
<article class="card">
 <img src="${data.sprites.front_default}" alt="${data.name}">
  <h2>${data.name}</h2>
<p>Type: ${data.types.map(t => t.type.name).join(', ')}</p>
<p>Height: ${data.height} Weight: ${data.weight}</p>
  </article>
`;
})
 .catch(() => {
  results.innerHTML = '<p>No Pokémon found. Try another name.</p>';
 });
}

button.addEventListener('click', () => {
  const name = input.value.trim();
  if (name) loadPokemon(name);
});

loadPokemon('pikachu');
