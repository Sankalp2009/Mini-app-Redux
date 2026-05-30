import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
function ProtectedRoute({ children }) {
  const isAuth = useSelector((state) => state.isAuth)
  const token = useSelector((state) => state.token)
  if (!isAuth && !token) return <Navigate to="/login" replace={true} />
  return children
}

export default ProtectedRoute
