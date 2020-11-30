import React from 'react'

export default class Register extends React.Component {
    render(){
    return (
        <form className="form">
                <label>Register</label>
                <br/>
            <div class="form-group">
                <label for="inputEmail">Email</label>
                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
                <label for="inputUserName">UserName</label>
                <input type="userName" class="form-control" id="inputUserName" placeholder="Enter User Name"/>
            </div>
            <div class="form-group">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
            </div>
            <div class="form-group">
                <label for="inputPassword2">Confirm Password</label>
                <input type="password" class="form-control" id="inputPassword2" placeholder="Confirm Password"/>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>   
    )
    }
}