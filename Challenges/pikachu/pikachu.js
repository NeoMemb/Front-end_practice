
// fetch("https://pokeapi.co/api/v2/pokemon/pikach")
//     .then(response => response.json)
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

async function fetchData() {
    try {
        const pokemonName = document.querySelector("#pokemonName").value.toLowerCase();
        const imgElement = document.querySelector("img.pokemonSprite")
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource")
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        console.log(pokemonSprite);
        imgElement.style.display = "block";
        imgElement.src = pokemonSprite;
    }
    catch(error) {
        console.error(error)
    }
}

const btn = document.querySelector(".submit-btn");
btn.addEventListener("click", fetchData);
