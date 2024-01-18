import React from 'react'

const Square = (props) => {
  return (
    <div 
    onClick={props.onClick}
     style={{ 
        border: " 1px solid",
        height: "150px", 
        width: "150px",
    }}
    className='Sqaure'>
      <h3 style={{fontSize:"60px", textAlign:"center"}}>{props.value}</h3>
    </div>
  )
}

export default Square
