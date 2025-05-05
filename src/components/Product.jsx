import React, { useEffect, useState } from 'react'

const Product = () => {

const [x,setX] = useState([]);
const [liked,setLiked]=useState({})
// console.log(x);
  
const products = async () => {
  const res = await fetch ("https://dummyjson.com/products")
  const data = await res.json();
  // console.log(data)
  setX(data.products)
}



useEffect(() => {
  products()  
},[])

const toggleLike=(id) => {
  setLiked((prev)=>({...prev, [id]:!prev[id]}))
}  

  return (
<>
<div  style={{
  display:"flex",
  flexWrap:"wrap",
  gap:"30px", 
  justifyContent:"center",
  padding:"40px",
  backgroundColor:"#f8f9fa",
  fontFamily:"revert-layer"
}}>

{x.map((data,index) => {
  console.log(data);
return(


<div 
 style={{
  position:"relative",
  justifyContent:"center",
  alignItems:"center",
  textAlign:"center",
  backgroundColor:"white",
  borderRadius:"20px",
  width:"300px",
  padding:"10px",
  boxShadow:"0px 10px 25px rgba(0,0,0,0.1)",
  // cursor:"pointer",


}}>
  <div onClick={()=>toggleLike(data.id)}
    title={liked[data.id]?"Unlike":"Like"}

   style={{
    position:"absolute",
    top:"15px",
    right:"15px",
    fontSize:"26px",
    zIndex:"2",
    cursor:"pointer", 
    transform:liked[data.id]?"scale(1.2)":"scale(1)",
    transition:"transform 0.3s ease,3s ease",
    color:liked[data.id]?"#e74c3c":"white",

  }} 
onMouseEnter = {(e) => { e.target.style.transform = "scale(1.4)"; }}
>



   {liked[data.id]? "❤️":"🤍"}
  </div>

<img src={data.thumbnail} alt="" />
  <h3>{data.title}</h3>
  <p>{data.description}</p>

  <div style={{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:"10px",
    
  }}>
    <span style={{
      fontSize:"18px",
      fontWeight:"bold",
      color:"green"
    }}>${data.price}</span>
    <span style={{
      fontSize:"16px",
      fontWeight:"bold",
      color:"gold"
    }}>⭐ {data.rating}</span>
  </div>

  <button style={{

    border:"none",
    backgroundColor:"rgba(218, 42, 215, 0.7)",
    color:"white",
    padding:"10px 20px",
    borderRadius:"5px",
    cursor:"pointer",
    boxShadow:"0px 10px 25px rgba(69, 225, 17, 0.1)"
  }}>View details</button>
</div>
)

})}
</div>
</>
)
}

export default Product