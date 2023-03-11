import React from 'react' 
import {auth} from '../firebase'; 
import {signOut} from 'firebase/auth'; 
 
export const LogOut = () => { 
    const logOutFunc = () => { 
        signOut(auth) 
    } 
    return ( 
       <button onClick={logOutFunc}className='btn btn-danger me-2'>LogOut</button> 
    ) 
} 
 
export default LogOut