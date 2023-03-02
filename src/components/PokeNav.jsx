import { Link } from "react-router-dom"


function PokeNav(props) {

  const { allPokemons } = props


  return (
    <div>

      <h3>Navegación</h3>
      
      <Link to="/">Home</Link>
      <hr />
      {allPokemons.map((eachPokemon) => {
        return (
          <p key={eachPokemon.name}>
            <Link to={`/pokemon-details/${eachPokemon.name}`}>{eachPokemon.name}</Link>
          </p>
        )
      })}


    </div>
  )
}

export default PokeNav