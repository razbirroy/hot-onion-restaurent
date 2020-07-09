import React from 'react';
import { useState } from 'react';
import * as firebase from 'firebase/app';
import "firebase/auth";
import config from '../config/fbConfig';

firebase.initializeApp(config)

const SignUp = () => {
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
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)  
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
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onBlur={handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onBlur={handleChange} />
                    </div>
                    {/* <div className="input-field">
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstName' onChange={this.handleChange} />
                    </div>  */}
                     {/* <div className="input-field">
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastName' onBlur={handleChange} />
                    </div> */}
                     {/* <button onClick={handleSubmit} className="btn pink lighten-1 z-depth-0">Login</button> */}
                     <input type='submit' value='Create Account' className="btn pink lighten-1 z-depth-0" />        
                </form>
                {
                    user.err && <p style = {{color:'red'}}>{user.err}</p>
                }
            </div> 
        );
    
}

export default SignUp;