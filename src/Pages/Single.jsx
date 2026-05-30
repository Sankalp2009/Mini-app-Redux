import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router'
function Single() {
  const [single, setSingle] = useState({});
  const {id} = useParams();
  console.log(id);
 
  useEffect(()=>{
    const Fetch = async()=>{
      try {
        let res = await fetch(`https://dummyjson.com/products/${id}`)
        let data = await res.json()
        console.log(data);
        setSingle(data)
      } catch (error) {
        console.log(error);
      }
    }

    Fetch();
  },[id])
   
  return (
    <div style={{
      border:"1px solid red",
      width:"50%",
      height:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      margin:"auto",
      textAlign:"center"
    }}>
      <img src={single.thumbnail} alt="" />
      <h1>{single.title}</h1>
      <h4>{Math.floor(single.price)}</h4>
    </div>
  )
}

export default Single