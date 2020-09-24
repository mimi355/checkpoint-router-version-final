import React from 'react';
import{Redirect} from 'react-router-dom';
function Protected({isAuth}){

if(!isAuth){
    return <Redirect to='/login' />
}

    return(
        <h1> Welcome admin </h1>
    )
}
export default Protected;