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
          <p>{eachPokemon.name}</p>
        )
      })}


    </div>
  )
}

export default PokeNav