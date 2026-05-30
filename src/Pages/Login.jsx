import { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Action_Type } from '../Redux/Action'
import { useNavigate } from 'react-router'
const InitialState = {
  username: '',
  password: '',
}

function Login() {
  const [isInput, setIsInput] = useState(InitialState)
  const dispatch = useDispatch();
  const nav = useNavigate();

  const HandleChange = (e) => {
    const { name, value } = e.target
    setIsInput((oldState) => ({
      ...oldState,
      [name]: value,
    }))
  }

  const HandleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch({
        type: Action_Type.Login_Request,
      })
      let url = 'https://dummyjson.com/auth/login'
      let response = await axios.post(url, isInput)
      if (!response.status) throw new Error('Something is wrong')
      const token = response?.data?.accessToken || null
      if (!token) {
        dispatch({
          type: Action_Type.Login_Failure,
          payload: {
            error: 'token not coming',
          },
        })
      } else {
        dispatch({
          type: Action_Type.Login_Success,
          payload: {
            Token: token,
          },
        })
        nav("/product");
      }
    } catch (error) {
      dispatch({
        type: Action_Type.Login_Failure,
        payload: {
          error: error.message,
        },
      })
    }
  }

  return (
    <div className="form">
      <h1>Login</h1>
      <form onSubmit={HandleSubmit}>
        <input
          className="form_input"
          type="text"
          name="username"
          value={isInput.username}
          onChange={HandleChange}
          placeholder="Enter Username..."
        />
        <input
          className="form_input"
          type="text"
          name="password"
          value={isInput.password}
          onChange={HandleChange}
          placeholder="Enter Password..."
        />
        <button type="submit" className="form_button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login