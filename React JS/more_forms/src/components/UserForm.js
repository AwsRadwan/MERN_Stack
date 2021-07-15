import React, { useState } from 'react'

const UserForm = (props) => {

    const [username, setUsername] = useState("");
    const [usernameerror, setUsernameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameerror, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailerror, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passworderror, setPasswordError] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [cpassworderror, setCpasswordError] = useState("");
    const [user, setUser] = useState("");
    const x = password;
    const y = cpassword;
    
    const createUser = (e) => {
        e.preventDefault();
        var newUser = { username, lastname, email, password, cpassword };
        setUser(newUser);
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
        setLastname("");
        setCpassword("");
    };

    const handleName = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length < 1) {
            setUsernameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setUsernameError("First Name must be 2 characters or longer!");
        }
        else {
            setUsernameError("");
        }
    }
    const handleLastName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1) {
            setLastnameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastnameError("Last Name must be 2 characters or longer!");
        }
        else {
            setLastnameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }
        else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        var x = e.target.value;
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } 
        else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }
        else if(e.target.value === y) {
            setCpasswordError("");
        }
        else {
            setPasswordError("");
        }
    }
    const handleCpass = (e) => {
        setCpassword(e.target.value);
        if(e.target.value.length < 1) {
            setCpasswordError("Cpassword is required!");
        } else if(e.target.value.length < 8) {
            setCpasswordError("CPassword must be 5 characters or longer!");
        }
        else if(e.target.value !== x) {
            setCpasswordError("The passwords must match!");
        }
        else {
            setCpasswordError("");
        }
    }

    return (
        <div className="mainn">
        {/* <h1 className="addd"> Apply Validation On React Forms </h1> */}
            <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleName } value={ username } />
                {
                    usernameerror ?
                    <p style={{color:'red'}}>{ usernameerror }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } value={ lastname } />
                {
                    lastnameerror ?
                    <p style={{color:'red'}}>{ lastnameerror }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } value={ email } />
                {
                    emailerror ?
                    <p style={{color:'red'}}>{ emailerror }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword } value={ password } />
                {
                    passworderror ?
                    <p style={{color:'red'}}>{ passworderror }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm - Password: </label>
                <input type="password" onChange={ handleCpass } value={ cpassword } />
                {
                    cpassworderror ?
                    <p style={{color:'red'}}>{ cpassworderror }</p> :
                    ''
                }
            </div>
            {/* <input type="submit" value="Create User" /> */}
        </form>
        <br />
        <main>
            <h2>Your Form Data</h2>
            <div className="info">
                <section>
                    <ul>
                        <li>First Name: </li>
                        <li>Last Name: </li>
                        <li>Email: </li>
                        <li>Password: </li>
                        <li>Confirm-Password: </li>
                    </ul>
                </section>
                <article>
                    <ul>
                        <li className="lli"> { username } </li>
                        <li className="lli"> { lastname } </li>
                        <li className="lli"> { email } </li>
                        <li className="lli"> { password } </li>
                        <li className="lli"> { cpassword } </li>
                    </ul>
                </article>
            </div>
            </main>
            </div>
    )
}

export default UserForm
