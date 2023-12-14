import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebaseConfig";
import { useState } from "react";

const Login = () => {
  const [islogin, setIslogin] = useState(null);
  const [user, setUser] = useState(null);
  const logout = () => {
    signOut(auth)
      .then(res => alert("logout"))
    setIslogin(true)
      .catch(error => alert(error.message))
  }

  const provider = new GoogleAuthProvider();
  const handleGoogleSubmit = () => {
    signInWithPopup(auth, provider)
      .then(res => {
        alert("google login")
        setIslogin(false)
      }).catch(error => {
        alert(error.message)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    signInWithEmailAndPassword(auth, form.email.value, form.password.value)
      .then((userCredential) => {

        const user = userCredential.user;
        if (user) {
          setUser(user.email)
          setIslogin(false);
        }

      })
      .catch((error) => {
        alert(error.message)
      });

    console.log(islogin)

  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login and Logout now!</h1>
          {islogin ? " " : <h1 className="text-5xl font-bold text-rose-600">{user}</h1>}
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            {islogin ? <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div> : ""}
          </form>

          <button className="btn btn-primary" onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Login;
