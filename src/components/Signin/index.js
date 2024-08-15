import './index.css'
const Signin = () =>{
    return (
        <div className="signin-background"> 
            <div className="signin-login-section">
                <h1 className="signin-heading">Login here</h1>
                <form className="signin-form-section">
                    <label className="signin-label">Username</label>
                    <input className='signin-input' type="text"/>
                    <label className="signin-label">Password</label>
                    <input className='signin-input' type="password"/>
                    <button className="login-button">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Signin