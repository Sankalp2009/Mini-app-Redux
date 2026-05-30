/* eslint-disable react-hooks/set-state-in-effect */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react'
import Search from './Search'
import { Link } from 'react-router'
import { ShoppingCart } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Action_Type } from '../Redux/Auth_Reducer/Action'
import { Action_Type as Cart_Action } from '../Redux/Cart_Reducer/Action'
function Header() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const authState = useSelector((state) => state.Auth)
  const cartState = useSelector((state) => state.Cart)
  const length = cartState?.cart_data?.length || 0
  const dispatch = useDispatch()
  const cache = useRef({})
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

  // API Handling
  useEffect(() => {
    const trimmed = query.trim()
    if (!trimmed || trimmed.length < 2) {
      setResults([])
      return
    }
    const controller = new AbortController()

    const FetchSearch = async () => {
      try {
        // Cache Check
        if (cache.current[trimmed]) {
          setResults(cache.current[trimmed])
          return
        }

        let res = await fetch(
          `https://dummyjson.com/products/search?q=${trimmed}`,
          {
            signal: controller.signal,
          }
        )
        let data = await res.json()
        console.log(data?.products)

        const products = data?.products || []

        cache.current[trimmed] = products
        setResults(products)
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.log(error)
        }
      }
    }

    // Optimization
    const timerID = setTimeout(() => {
      FetchSearch()
    }, 300)

    return () => {
      clearTimeout(timerID)
      controller.abort()
    }
  }, [query])

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
        <div className="search-container">
          <Search query={query} setQuery={setQuery} />

          {query.trim() && results.length > 0 && (
            <div className="search-results">
              {results?.map((item) => (
                <div className="search-item" key={item.id}>
                  <Link
                    to={`/single/${item.id}`}
                    className="product-title"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="Header_home">
          {Links.map((el) => (
            <Link key={el.path} to={el.path}>
              {el.content}
            </Link>
          ))}
          <div className="cart-wrapper">
            <Link to="/cart">
              <ShoppingCart className="cart-icon" />
            </Link>
            <span className="cart-count">{length}</span>
          </div>
        </div>
      </div>
      {authState.isAuth && (
        <div className="Header_right">
          <button
            onClick={() => {
              dispatch({
                type: Action_Type.Logout,
              })

              dispatch({
                type: Cart_Action.Clear_Cart,
              })
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
