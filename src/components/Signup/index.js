import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Signup extends Component {
    state = {
        emailid:'',
        username:'',
        password:'',
        signupMessage:''
    }

    onSuccessToLogin = () =>{
       const {history} = this.props 
       history.replace('/login')
        
    }

    onChangeEmailid = event =>{
        this.setState({emailid:event.target.value})
    }

    onChangeUsername = event =>{
        this.setState({username:event.target.value})
    }

    onChangePassword = event =>{
        this.setState({password:event.target.value})
    }

    submitForm =async (event) =>{
        event.preventDefault()
        const {emailid,username,password} = this.state
        const userDetails = {emailid,username,password}
        const apiUrl=`https://backend-b4ii.onrender.com/signup`
        const options = {
            method : "POST",
            headers :{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userDetails)
        }
        const response = await fetch(apiUrl,options)
        const data = await response.json()
        console.log(response)
        console.log(data)
        if (response.ok===true){
            this.setState({signupMessage:"successfully user registered"})
            this.onSuccessToLogin()
        }
        else{
            this.setState({signupMessage:"user already exists"})
        }
    }

        
        

    render(){
        const {emailid,username,password,signupMessage} = this.state
        
        return(
            <div className="signup-background">
                <div className="signup-section">
                    <h1 className="signup-heading">Create Your Account here</h1>
                        <form className="signupform" onSubmit={this.submitForm}>
                            <label htmlFor='email' className="signup-label">Email</label> 
                            <input id="email"  
                                className="signup-input" 
                                type="text" value={emailid}
                                onChange={this.onChangeEmailid}
                                required/>
                                
                            <label htmlFor='username' className="signup-label">Username</label>
                            <input id="username" 
                                className="signup-input"    
                                type="text" value={username}
                                onChange={this.onChangeUsername} required/>
                            
                            <label htmlFor='password' className="signup-label">Password</label>
                            <input id="password" 
                                className="signup-input" 
                                type="password"  
                                value={password}
                                onChange={this.onChangePassword} required/>

                            <button type="submit" className="signupbutton">signup</button>
                        </form>
                        <p className='message-color'>{signupMessage}</p>
                    <p className="account-exist-para">click   
                        <Link to="/login">
                             <button className="signup-logintext">  login here</button>
                        </Link>       
                    </p>
                  
                </div>
                
            </div>
        
        )
    }
}
export default Signup
    
       
      
           
    

