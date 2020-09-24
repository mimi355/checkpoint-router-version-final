import React from 'react';
import productData from './productData';
import{Link,Route} from 'react-router-dom';
import Product from './Product';
function  Products({match}){
  console.log(match)
var LinkedList=productData.map((product)=>{
  return(
    <li><Link to={`${match.path}/${product.id}`}>{product.name} </Link>    </li>
  )
})

    return(
      <div>
       <div>
         <h3> Products</h3>
         <ul> {LinkedList}</ul>
       </div>
         
       <Route exact path={match.url} render={()=>(<div> Please select a product.</div>)} />
       <Route path={`${match.path}/:productId`}
               render ={(props)=> <Product data={productData} {...props} />} />

       </div>
    )
}
export default Products;