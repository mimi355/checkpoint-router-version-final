import React from 'react';
import {Route,Link} from 'react-router-dom';
function Category({match}){
 
  console.log(match)
    return(
      <div>
      <ul>
<Link to ={`${match.path}/shoes`}>   <li> Shoes </li></Link> 

<Link to={`${match.path}/boots`}>  <li>Boots</li></Link>
 <Link to={`${match.path}/footwear`}> <li>Footwear</li></Link>   
      </ul>

 <Route path={`${match.path}/:name` }      render={({match})=> <h3>{match.params.name}</h3>} />

 </div>
    )
}
export default Category;