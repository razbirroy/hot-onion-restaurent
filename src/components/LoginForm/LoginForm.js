import React from 'react';

const LoginForm = () => {
    return (
      <div className="container">
          <form>
               <input type="text" name="name" />
               <br/>
               <input type="email" name="email" />
               <br/>
               <input type="password" name="password"/>
               <br/>
               <input type="password" name="password"/>
               <br/>
               <input type="submit" value="Submit" />
          </form>
      </div>
   );
};

export default LoginForm;