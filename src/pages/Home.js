import { Navigate } from 'react-router-dom'

function Home() {
  if (!localStorage.getItem('country')) {
    return <Navigate to="/select-country" />
  } else {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home