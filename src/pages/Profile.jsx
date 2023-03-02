import { useParams } from "react-router-dom";
// useParams nos permite acceder a parametros dinamos de rutas de FE

function Profile() {

  const algo = useParams()
  console.log("useParams()", algo)

  return (
    <div>
      
      <h3>Este es el perfil de un usuario. {algo.username}</h3>

      <p>La info de este usuario es:</p>
      {algo.username === "bob" ? <p>hobbies: Atrapas medusas</p> : <p>hobbies: ser infeliz</p>}


    </div>
  )
}

export default Profile