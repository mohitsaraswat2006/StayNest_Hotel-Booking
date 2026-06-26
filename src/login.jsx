import { House } from "lucide-react";

function Login() {
    return (
        <>
            <div className="login-page">
                <div className="login-page3">
                    <div>
                        <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1800&q=80" alt="Image is Loading...." />
                    </div>
                    <div className="login-page1">
                        <h1>Welcome <span style={{ color: "rgb(231, 100, 152)" }}>Back!</span></h1>
                        <p>Sign in to continue your stay<br />and explore amazing rooms.</p>
                        <button><House size={30} color="rgb(226, 70, 132)" /></button>
                    </div>
                </div>
                <div className="login-page2">
                    <div>
                        <h2>Sign In</h2>
                        <p>Welcome back! Please enter your details.</p>
                    </div>
                    <form>
                        <label>Email</label>
                        <br />
                        <input type="email" placeholder="Enter Email" />
                        <br />
                        <label>Password</label>
                        <br />
                        <input type="password" placeholder="Enter Password" />
                        <br />
                        <p>Forgot Password?</p>
                        <button type="submit">Sign In</button>
                    </form>
                    <div>
                    <button>Continue with Google</button>
                    <p>Don't have an account? <span style={{ color: "rgb(234, 84, 144)" }}>Sign Up</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;