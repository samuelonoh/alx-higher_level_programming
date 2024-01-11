import "../styles/Signup.css";

function Signup() {
  return (
    <div className="signup">
        <form>

                <h1>Sign Up</h1>
                <label>Full name:</label>
                <input type="text" placeholder='Enter Your Name...'/>
                <label>Email:</label>
                <input type="email" placeholder='Enter Your Email...'/>
                <label>Password:</label>
                <input type="password" placeholder='Enter Your password...'/>
                <button>Create Account</button>
        </form>
    </div>
  )
}

export

default Signup