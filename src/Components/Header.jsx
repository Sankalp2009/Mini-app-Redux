// eslint-disable-next-line no-unused-vars
import React from 'react'
import Search from './Search'
import { Link } from 'react-router'
import { ShoppingCart } from 'lucide-react'
function Header() {
  const Links = [
    {
      path: '/',
      content: 'Home',
    },
    {
      path: '/about',
      content: 'About',
    },
    {
      path: '/contact',
      content: 'Contact',
    },
  ]

  return (
    <div className="Header">
      <div className="Header_left">
        <div className="Logo">
          <Link to="/product">
          <img
            src="https://t4.ftcdn.net/jpg/19/03/10/59/240_F_1903105995_4o53QVxw0MKNxxmnJ4oQSgUajuCgwnI8.jpg"
            alt="BlackEagle"
          />
          </Link>
        </div>
        <div className="Search_input">
          <Search />
        </div>
        <div className="Header_home">
          {Links.map((el) => (
            <Link key={el.path} to={el.path}>
              {el.content}
            </Link>
          ))}
          <div>
            <Link to={'/cart'}>
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </div>
      <div className="Header_right">
        <button>Login</button>
      </div>
    </div>
  )
}

export default Header
