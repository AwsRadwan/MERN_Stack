import React, { useState } from 'react'

const UserForm = (props) => {

    const [username, setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [cpassword, setCpassword] = useState("");
    const [user, setUser] = useState("");
    
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

    return (
        <div className="mainn">
            <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } value={ username } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } value={ lastname } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password } />
            </div>
            <div>
                <label>Confirm - Password: </label>
                <input type="password" onChange={ (e) => setCpassword(e.target.value) } value={ cpassword } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <br />
            <h2>Your Form Date</h2>
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
            </div>
    )
}

export default UserForm
