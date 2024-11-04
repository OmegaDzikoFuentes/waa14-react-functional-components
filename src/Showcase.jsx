import  pokePic  from './images/bulbasaur.png';



function Showcase() {

    const favPokemon = "Charmander";

    const pokeCharacteristics = {
        type: "Fire",
        move: "Blaze"
    };

    return (
      <div>
        <h1>{favPokemon}&apos;s Showcase Component</h1>
        <img src={pokePic} alt="Charmander"/>
        <h2> {pokeCharacteristics.type}</h2>
      </div>
    );
  }

  export default Showcase;
