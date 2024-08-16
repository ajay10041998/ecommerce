import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import {Link} from 'react-router-dom'
class Signin extends Component{
    state = {
        username:'',
        password:''
    }

    onSubmitSuccessfulLogin = (jwtToken) =>{
        const jwt = Cookies.set('jwt_token',jwtToken,{expires:30})

        if (jwt!==undefined){
            const {history} = this.props
            history.replace("/home")
        }

    }

    onChangeUserName = event =>{
        this.setState({username:event.target.value})
    }

    onChangePassword = event =>{
        this.setState({password:event.target.value})
    }

    onSubmitToLogin =async (event) =>{
        event.preventDefault()
        const {username,password} = this.state
        const userDetails = {username,password}
        const apiUrl=`https://backend-b4ii.onrender.com/login`
        const options = {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(userDetails)
        } 
        const response = await fetch(apiUrl,options)
        const data = await response.json()
        console.log(data)
        const {jwtToken} = data 
        console.log(jwtToken)
        if (response.ok===true){
            this.onSubmitSuccessfulLogin(jwtToken)
        }
    }


    render() { 
        const {username,password} = this.state
    return (
        <div className="signin-background"> 
            <div className="signin-login-section">
                <h1 className="signin-heading">Login here</h1>
                <form className="signin-form-section" onSubmit={this.onSubmitToLogin}>
                    <label className="signin-label">Username</label>
                    <input className='signin-input' 
                    type="text" required
                    value={username} 
                    onChange={this.onChangeUserName}/>

                    <label className="signin-label">Password</label>
                    <input className='signin-input' 
                    type="password" required
                    value={password}
                    onChange={this.onChangePassword}/>

                    <button className="login-button">Login</button>
                </form>
                <p className="account-exist-para">if don't have Account
                        <Link to="/">
                             <button className="signup-logintext">signup here</button>
                        </Link>       
                    </p>
            </div>
        </div>
    )
}
}
export default Signin