import React from "react";

function Signup() {
    
  return (
    <div>
      <h1>Signup</h1>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
            <form>
      
              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" / >
                <label for="floatingPassword">Password</label>
              </div>
          
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
              <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
