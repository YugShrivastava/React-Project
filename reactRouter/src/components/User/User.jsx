import { useParams } from "react-router-dom"

function User() {

  const {userid} = useParams()

  return (
    <>
      <div className="text-3xl text-center my-10 mx-auto">User: {userid}</div>
    </>
  )
}

export default User
