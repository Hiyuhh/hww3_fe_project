async function fetchData() {

    try {
        const searchPokemon = document.getElementById("searchPokemon").value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon.toLowerCase()}`);

        if (!response.ok) {
            if (response.status === 404) {
                alert("Pokemon not found! Please try again.");
            }
            else {
                alert("Could not fetch data []~(￣▽￣)~*");
            }
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        imgElement.style.margin = "auto";

        const pokemonName = data.name;
        const nameElement = document.getElementById("pokemonName");
        nameElement.textContent = pokemonName;

        const pokemonId = data.id;
        const idElement = document.getElementById("pokemonId");
        idElement.textContent = `ID: #${pokemonId}`;

        const pokemonType = data.types[0].type.name;
        const pokemonType2 = data.types[1]?.type.name;
        const typeElement = document.getElementById("pokemonType");
        typeElement.textContent = `Type: ${pokemonType}${pokemonType2 ? `, ${pokemonType2}` : ''}`;

        const pokemonAbility = data.abilities[0].ability.name;
        const pokemonAbility2 = data.abilities[1]?.ability.name;
        const abilityElement = document.getElementById("pokemonAbility");
        abilityElement.textContent = `Abilities: ${pokemonAbility}${pokemonAbility2 ? `, ${pokemonAbility2}` : ''}`;


        const pokemonHeight = data.height;
        const heightElement = document.getElementById("pokemonHeight");
        heightElement.textContent = `Height: ${pokemonHeight}`;

        const pokemonWeight = data.weight;
        const weightElement = document.getElementById("pokemonWeight");
        weightElement.textContent = `Weight: ${pokemonWeight}`;

        const pokemonCard = document.getElementById('pokemonCard');
        pokemonCard.style.display = 'block';
    }
    catch (error) {
        console.error(error);
    }

}
