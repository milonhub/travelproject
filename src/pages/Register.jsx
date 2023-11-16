import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {

    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='flex justify-center w-full h-[500px] my-12'>

      <div className='w-[600px] h-[500px] bg-slate-400 p-12 rounded-xl'>
        {loggedIn ? (
          <div>
            <h2>Welcome, {username}!</h2>
            <p>You are now logged in.</p>
          </div>
        ) : (
          <div>
            <h2 className='text-4xl'>Login Page</h2>
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
              <button type="button" onClick={handleLogin} className='text-2xl my-3 bg-slate-700 px-4 py-2 text-white hover:bg-red-400 rounded-lg'>
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>

  );
};

export default Register;
