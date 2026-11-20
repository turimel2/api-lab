fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(res => res.json())
.then(data => {
console.log(data);
const results = document.getElementById('results');
results.innerHTML = `
<article class="card">
 <img src="${data.sprites.front_default}" alt="${data.name}">
  <h2>${data.name}</h2>
<p>Type: ${data.types.map(t => t.type.name).join(', ')}</p>
<p>Height: ${data.height} Weight: ${data.weight}</p>
  </article>
`;
});
