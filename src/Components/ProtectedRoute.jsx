import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
function ProtectedRoute({ children }) {
  const data = useSelector((state) => state.Auth)
  const {isAuth, token} = data
  if (!isAuth && !token) return <Navigate to="/login" replace={true} />
  return children
}

export default ProtectedRoute