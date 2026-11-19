fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
.then(res => res.json())
.then(data => console.log(data));
