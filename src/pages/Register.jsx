import { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut

} from 'firebase/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState("");
  const [loginpassword, SetLoginPassword] = useState('');
  // const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const handleSignin = async () => {
    try {
       await createUserWithEmailAndPassword(auth, username, password);
      

    } catch (error) {
      console.log(error.message)
    }
  }
  const handleSignOut = async () => {
    await signOut(auth)
  }

  const handlelogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginpassword);
      console.log(user)

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='flex justify-center w-full h-[500px] my-12'>

      <div className='w-[600px] h-[500px] bg-slate-400 p-12 rounded-xl'>

        <div>
          <h2 className='text-4xl'>Sign-in Page</h2>
       
            <div className='mt-8'>
              <label className='text-2xl'>
                Username: 
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>
            <br />
            <label className='text-2xl'>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={handleSignin} className='text-2xl my-3 bg-slate-700 px-4 py-2 text-white hover:bg-red-400 rounded-lg'>
              Register
            </button>
          

         
        </div>


        <div>

          
            <label>Eamil</label>
            <input type="email" value={loginEmail} onChange={(e) => {
              setLoginEmail(e.target.value);

            }} />
            <label>Password</label>
            <input type="password" value={loginpassword} onChange={(e) => {
              SetLoginPassword(e.target.value);

            }} />

            <button type="button" onClick={handlelogin} className='text-2xl my-3 bg-slate-700 px-4 py-2 text-white hover:bg-red-400 rounded-lg'>
              Log-in
            </button>
  

        </div>

        <p>{user?.email}</p>
          <button type="button" onClick={handleSignOut} className='text-2xl my-3 bg-slate-700 px-4 py-2 text-white hover:bg-red-400 rounded-lg'>
            Sign-Out
          </button>
      </div>
    </div>

  );
};

export default Register;
