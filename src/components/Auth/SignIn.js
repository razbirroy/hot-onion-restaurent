import React from 'react';
import { useState } from 'react';
import * as firebase from 'firebase/app';
import "firebase/auth";



const SignIn = () => {
  
        const [user, setUser] = useState({
            isSignedIn: false,
            email: '',
            password : '',
            err : '',
        }) 
        const handleChange = (e) => {
          const newUserInfo = {
            ...user
         }
         newUserInfo[e.target.id] = e.target.value;
         setUser(newUserInfo)
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)  
            .then(res =>{
                console.log(res);
                const createdUser = {...user};
                createdUser.isSignedIn = true;
                createdUser.err = '';
                setUser(createdUser);
            }) 
            .catch(err => {
                console.log(err.message)
                const createdUser = {...user};
                createdUser.err = err.message;
                setUser(createdUser);
            })
        }
    
        return (
            <div className='container'>
                <form onSubmit={handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={handleChange} />
                    </div>
                    <input type='submit' value='Log-In' className="btn pink lighten-1 z-depth-0" /> 
                </form>
                {
                    user.err && <p style = {{color: 'red'}}>{user.err}</p>
                }
              </div> 
        );
    }

export default SignIn;