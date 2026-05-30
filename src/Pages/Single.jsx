import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
function Single() {
  const [single, setSingle] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()
  console.log(id)
  const { thumbnail, title, price } = single || {}
  useEffect(() => {
    const Fetch = async () => {
      try {
        let res = await fetch(`https://dummyjson.com/products/${id}`)
        let data = await res.json()
        if (!data.id) {
          throw new Error('Product not found')
        }
        setSingle(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    Fetch()
  }, [id])

  if (isLoading) return <div>Loading</div>

  return (
    <div className="single-product">
      <img src={thumbnail} alt="" />
      <h1>{title}</h1>
      <h4>{Math.floor(price) || 0}</h4>
    </div>
  )
}

export default Single