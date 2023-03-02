import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import PokeNav from "./components/PokeNav"
import Home from "./pages/Home"
import PokeCard from "./pages/PokeCard"
import axios from "axios"

function App() {

  const [ allPokemons, setAllPokemons ] = useState([])


  useEffect(() => {
    // buscar la info de la API
    // usaremos axios para buscar la data (podrias usar fetch)
    // el momento en el que SIEMPRE debemos contactar a una API para recibir data es componentDidMount
    // axios.get("https://pokeapi.co/api/v2/pokemon")
    // .then((response) => {
    //   console.log(response)
    //   setAllPokemons(response.data.results)

    // })
    // .catch((error) => {
    //   console.log(error)
    // })

    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
      console.log(response.data.results)
      setAllPokemons(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      
      <PokeNav allPokemons={allPokemons}/>


      <Routes>

        <Route path="/" element={ <Home />} />
        <Route path="/pokemon-details/:pokename" element={ <PokeCard /> }/>

      </Routes>


    </div>
  )
}

export default App