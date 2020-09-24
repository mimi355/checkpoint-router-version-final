import React,{useState} from 'react';
import Home from './Home';
import Category from './Category';
import Products from './Products';
import LoginPage from './LoginPage';
import Nav from './Nav';

import Protected from './Protected';
import{Route,BrowserRouter as Router, Switch} from 'react-router-dom';


  
   
   
   
function App(){

  const [isAuth, setIsAuth] = useState(false);
  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);

 


return(
    <Router>
     
        <Nav    login={login} logout={logout} isAuth={isAuth}  />
        <Switch>
      <Route exact  path='/'  component={Home} />
      <Route  path='/category' component={Category} />
      <Route path='/products' component={Products} />
       <Route  exact path="/login"  component ={LoginPage}  />
   
      <Route  path='/admin' > <Protected  isAuth={isAuth} /> </Route>
 
      </Switch>
    
</Router>
    )
}
export default App;