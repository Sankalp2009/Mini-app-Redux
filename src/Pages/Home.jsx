import { Link } from 'react-router'

function Home() {
  return (
    <div className="Home">
      <div className="Inner_Home">
        <Link to="/product">
          <button className="home-btn">Home</button>
        </Link>
        <Link to="/login">
          <button className="home-btn">Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Home