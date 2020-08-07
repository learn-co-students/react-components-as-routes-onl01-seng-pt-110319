import React from 'react'

class SignUp extends React.Component {
    render() {
        return(
            <form>
                <h1>Sign Up</h1>
                <div>
                    <input type="text" name="firstname" placeholder="firstname" />
                    <label htmlFor="firstname">FirstName</label>
                </div>
                <div>
                    <input type="text" name="lastname" placeholder="lastname" />
                    <label htmlFor="lastname">LasttName</label>
                </div>
                <input type="submit" value="SignUp" />
            </form>
        )
    }
} 

export default SignUp