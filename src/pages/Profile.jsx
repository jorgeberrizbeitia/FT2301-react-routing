import { useParams } from "react-router-dom";
// useParams nos permite acceder a parametros dinamos de rutas de FE

function Profile() {

  const params = useParams()
  console.log("useParams()", params)
  const { username } = useParams()

  // llamar al backend o a una API (accediendo a rutas de BE) para traer informacion

  return (
    <div>
      
      <h3>Este es el perfil de un usuario. {params.username}</h3>

      <p>La info de este usuario es:</p>
      {params.username === "bob" ? <p>hobbies: Atrapas medusas</p> : <p>hobbies: ser infeliz</p>}


    </div>
  )
}

export default Profile