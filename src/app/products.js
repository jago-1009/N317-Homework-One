"use client"
import { useState } from "react";
export default function Product({name,price,image, addToCart}){ 
    const [isHovering, setHovering] = useState(false);

const handleMouseOver = () => {
    console.log("ON")
    setHovering(true);
  };    
const handleMouseOut = () => {  
    console.log("OFF")
    setHovering(false);
  };
    const scaleStyle = isHovering ? {
        transform: "scale(1.1)",
        transition: "transform 0.5s ease",
    } : {
        transition: "transform 0.5s ease",
    }
    const divStyle = {
        display: "flex",
        width:"400px",
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        alignItems: "center",
        flexDirection: "column",
        alignSelf:"center",
    }
    
    const imgStyle = {
        maxWidth:"200px",
        ...scaleStyle
    }
    const buttonStyle = { 
        backgroundColor: "lightblue",
        border: "none",
        padding:"10px",
        ...scaleStyle,
        cursor:"pointer"
    }
    return(
        
        <div style={divStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            <h1>{name}</h1>
            <img src={image} style={imgStyle}/>
            <p>Price: ${price}</p>
            <button style={buttonStyle} onClick={() => addToCart({name,price,image})}>Add To Cart</button>
        </div>
    )
}
