import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebaseConfig";



const Register = () => {
  const logout = () => {
    signOut(auth)
      .then(res => alert("logout"))
      .catch(error => alert(error.message))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    createUserWithEmailAndPassword(auth, form.email.value, form.password.value)
      .then((userCredential) => {

        const user = userCredential.user;
        if (user) {
          alert("successs")
        }

      })
      .catch((error) => {

        alert(error.message)
      });

  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <button className="btn btn-primary" onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Register;
