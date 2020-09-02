import React from 'react';

class SignUp extends React.Component {
    render() {
        return (
            <div>
                <h3>Sign up here:</h3>
                    <form>
                        <div>
                          <input type="text" name="username" placeholder="Create Username" />
                          <label htmlFor="Username"></label> 
                        </div>
                          <br /> 
                        <div>
                          <input type="password" name="password" placeholder="Create Password" />
                          <label htmlFor="Password"></label> 
                        </div>
                          <br />
                        <div>
                          <input type="password" name="password" placeholder="Confirm Password" />
                          <label htmlFor="Password"></label> 
                        </div>
                          <br />
                        <div>
                          <input type="email" name="email" placeholder="Email Address" />
                          <label htmlFor="Email"></label> 
                        </div> 
                          <input type="submit" value="Sign up"/>
                    </form>
                    <br />
            </div>

        );
    }
}

export default SignUp;