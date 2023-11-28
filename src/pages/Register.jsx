import { useState } from 'react';
import {auth} from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [loggedIn, setLoggedIn] = useState(false);

  const handleSignin =async () => {
   try {
    const user = await createUserWithEmailAndPassword(auth, username, password);
    console.log(user)

   } catch(error){
      console.log(error.message)
   }
  }


  return (
    <div className='flex justify-center w-full h-[500px] my-12'>

      <div className='w-[600px] h-[500px] bg-slate-400 p-12 rounded-xl'>
        
          <div>
            <h2 className='text-4xl'>Sign-in Page</h2>
            <form>
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
            </form>
          </div>
        
      </div>
    </div>

  );
};

export default Register;
