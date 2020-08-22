import React from 'react';

const Signup = () => 
    <div>
        <form className="form">
            <div>
            <label htmlFor="username">Username</label>
            <input name="username" type="text" placeholder="Username" />
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder="Email" />
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Password" />
            </div>
            <button type="button">Sign Up</button>
        </form>
    </div>

export default Signup;