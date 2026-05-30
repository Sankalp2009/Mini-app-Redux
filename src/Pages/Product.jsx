import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Action_Type } from '../Redux/Product_Reducer/Action'

import ProductPage from '../Components/ProductPage'

function Product() {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.Product)
  const { isLoading, isError, data } = productData
  // Fetch part
  useEffect(() => {
    const FetchProduct = async () => {
      try {
        const url = `https://dummyjson.com/products`
        let response = await axios.get(url)
        if (!response.status) throw new Error('Something is wrong')
        const data = response?.data?.products || []
        if (!data) {
          dispatch({
            type: Action_Type.Get_Failure,
            payload: {
              error: 'Data not coming',
            },
          })
        } else {
          dispatch({
            type: Action_Type.Get_Success,
            payload: {
              product_data: data,
            },
          })
        }
      } catch (error) {
        dispatch({
          type: Action_Type.Get_Failure_Failure,
          payload: {
            error: error.message,
          },
        })
      }
    }

    FetchProduct()
  }, [dispatch])

  return (
    <div>
      {isLoading && <h2>Loading</h2>}
      {isError && <h2>{isError}</h2>}
      <ProductPage data={data} />
    </div>
  )
}

export default Product