import React from 'react' 
import GoogleButton from 'react-google-button' 
import {auth} from '../firebase'; 
import { signInWithRedirect, GoogleAuthProvider } from '@firebase/auth'; 
 
export const Login = () => { 
    const signIn = () => { 
        const provider = new GoogleAuthProvider(); 
        signInWithRedirect(auth, provider) 
    } 
    return ( 
     <GoogleButton style = {{width: '50px', marginRight:'1rem', text: 'none'}} onClick={signIn}/> 
    ) 
} 
 
export default Login