
import './App.css'
import { useSelector } from 'react-redux'

function App() {

  const selectedData = useSelector((state) => state)
console.log(selectedData);

  return (
    <>
    
    </>
  )
}

export default App
