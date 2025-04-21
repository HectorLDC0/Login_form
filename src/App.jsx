import { useState } from 'react';
import Buttons from "./Buttons/buttons"
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    setError('');
    
    console.log('Login attempt with:', { email, password });
 
    alert('Login successful!');
    
    setEmail('');
    setPassword('');
  };

  
  const handleExternalLogin = (provider) => {
    console.log(`Login with ${provider}`);
  
    alert(`Login with ${provider} clicked`);
  };

  return (
    <>
      <main className="flex min-h-screen items-center justify-center">
        <section className="flex flex-col items-center justify-start w-150 h-190 border-2 bg-white rounded-3xl">
          <header className="my-14 text-5xl text-black">Welcome back!</header>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form className="flex flex-col gap-y-8 rounded-3xl" onSubmit={handleSubmit}>
            <input
              className="w-120 p-4 border bg-white rounded-4xl"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />

            <input
              className="p-4 border bg-white rounded-4xl"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            <a href="#" className="flex justify-end mb-8 text-black underline underline-offset-1">
              Forgot your password?
            </a>


            <Buttons
              text="Login"
              bgColor="rgb(01, 128, 128)"
              textColor="rgb(255, 255, 255)"
              className="w-80 font-medium"
              onClick={() => {}}
              type="submit"
            />
          </form>

          <h3 className="my-8 text-black">
            Don't have an account? <a href="#" className="font-bold text-blue-600 underline underline-offset-1 cursor-pointer">Sign up</a>
          </h3>

          <div className="flex flex-col items-center gap-6">
            <Buttons
              text="Log in with Google"
              bgColor="black"
              textColor="rgb(255, 255, 255)"
              className="w-90 font-medium"
              icon={<FcGoogle size={25} />}
              onClick={() => handleExternalLogin('Google')}
            />
            <Buttons
              text="Log in with Apple"
              bgColor="white"
              textColor="rgb(0, 0, 0)"
              className="w-80 font-medium border-black"
              icon={<FaApple size={25} />}
              onClick={() => handleExternalLogin('Apple')}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;