import React from "react";


function Cart({cart, removeFromCart}) {
  return (
   
     <div>
     <h1>Cart</h1>
     <div className="Products">
      {cart.map((product, idx)=> (
       <div className='product' key={idx}>
       <img src={product.image} atl= {product.name}/>  
       <div>{product.name}</div>
       <div>{product.cost}</div>
       <button onClick={() => removeFromCart(product)} > 
        Remove
       </button>
       </div>
       ))}
      </div>
      </div>
    


  );
}
export default Cart;