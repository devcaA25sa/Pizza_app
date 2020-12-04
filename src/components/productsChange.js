import React,  {useState} from 'react';

function Products({addToCart}) {
      
     const [products] = useState([
    
     {
       
       name: "Boston Pizza ",
       cost: "$10",
       image:
          "https://images.unsplash.com/photo-1596818531679-96ef98b9a497?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 

     },
     {
      name: "Italian Pizza",
      cost : "$10",
      image: 
           "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    
     },
     {
       name: "Aloha Pizza",
       cost : "$10",
       image: "https://images.unsplash.com/photo-1551978129-b73f45d132eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
     },
     {
       name: "chicken Pizza",
       cost: "$10",
       image: "https://images.unsplash.com/photo-1595357081381-c34f5634adef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
     },
   {
   
   
         name: "Pinneapple Pizza",
         cost: "$10",
         image: "https://images.unsplash.com/photo-1605202348393-79031eb57f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
       },
   
     {
           name: "Vegi Pizza",
           cost: "$10",
           image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"      
   
         },
       {
             name: "Spice Pizza",
             cost:  "$10",
             image: "https://images.unsplash.com/photo-1591786775823-b15f1dd2b215?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"       
   
           },
           {
           name: "Chocalote Pizza",
           cost: "$8.99",
           image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSVUSpUq2-G_Zu2cXaQ_86Cyv0GyXo_91Xg&usqp=CAU://images.unsplash.com/photo-1587141701439-87c3b9a2513b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"      
           },

           {
          name: "Cookie Daugh",
          cost: "$4.99",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdThs_LiwUHLgdHN85QdTXmXTMHrXCMnJ_w&usqp=CAU"
           },
               {
          name: "Chesse Pasta",
          cost: "$7.99",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8b0aK7KmuF-2_cswDVKrXuXNhxuTLOS2eg&usqp=CAU"
                    },
                    {
           
           
           name: "Spice Pasta",
           cost: "$10",
           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFmY5Lf0zQXDkAItTKZxOmKk9E_Q_Eto5uKg&usqp=CAU'

           },
          {
           name: "Vegi Pasta",
           cost: "$10",
           image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShooqoCmo9VN1EB8CoI6EQtwxnJbsY2J6YyA&usqp=CAU"
           
           },
                          
   
         ]);

     
     return(
          <div>
               <h1>Pizza Menu</h1>
               <div className="products">
                    {products.map((product, idx)=> (
                    <div className='product' key={idx}>
                         <img src={product.image} atl= {product.name}/>
                         <div>{product.name}</div>
                         <div>{product.cost}</div>
                         <button onClick={() => addToCart(product)} > 
                              Add to cart
                         </button>
                    </div>
               ))}
               </div>
          </div>
     );
}

export default Products;