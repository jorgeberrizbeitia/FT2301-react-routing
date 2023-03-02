import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"


function PokeCard() {

  const params = useParams()
  console.log(params)
  const { pokename } = params

  const [ pokemonDetails, setPokemonDetails ] = useState(null)

  useEffect(() => {
    getData()
  }, [pokename]) // componentDidMount

  const getData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
      console.log(response)
      setPokemonDetails(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  // if (pokemonDetails === null) {
  //   // aun no hemos recibido la informacion
  //   return <h2>... buscando</h2> // Spinner
  // }

  return (
    <div>
      
      <h3>Detalles del Pokemon {pokename[0].toUpperCase() + pokename.slice(1)}</h3>

      {
        pokemonDetails === null 
        ? <h2>... buscando</h2> 
        : <div>
        <h3>{pokemonDetails.name}</h3>
        <h4>Altura: {pokemonDetails.height}</h4>
        <h4>Peso: {pokemonDetails.weight}</h4>
        <img src={pokemonDetails.sprites.front_shiny} alt="" />
      </div>
      }

      

    </div>
  )
}

export default PokeCard