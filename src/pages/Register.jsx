import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import registerLottie from './../assets/register.json';
import Lottie from 'lottie-react';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import SocialLogin from '../components/SocialLogin';

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Register | Library`;
  }, []);

  const {createUser, setUser, updateUser} = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;


    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({displayName:name, photoURL:photo})
          .then(() => {
            setUser({...user, displayName:name, photoURL:photo})
            toast.success("User Created Successful");
            navigate('/')
          }).catch((err) => {
            setUser(user)
            toast.error(err.code)
          });
        
      }).catch((err) => {
        toast.error(err.code)
        
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="text-center lg:text-left">
            <Lottie className="w-64" animationData={registerLottie} loop={true}></Lottie>
          </div>
          
          <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold my-2">Register now!</h1>
              <form onSubmit={handleRegister} className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input type="text" name="name" className="input" placeholder="Name" required />

                {/* photo */}
                <label className="label">Photo URL</label>
                <input type="text" name="photo" className="input" placeholder="Photo URL" required />

                {/* email */}
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" required />

                {/* password */}
                <label className="label">Password</label>
                <label className="input validator">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </g>
                  </svg>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    minLength="6"
                    pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    title="Must be more than 6 characters, including lowercase letter, uppercase letter"
                  />
                </label>
                <p className="validator-hint hidden">
                  Must be more than 6 characters, including
                  <br />
                  At least one lowercase letter <br />
                  At least one uppercase letter
                </p>

                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
                <p className="mt-2 mb-3">
                  Already have an account? Please{' '}
                  <Link to="/login" className="text-blue-500 underline">
                    Login
                  </Link>
                </p>
              </form>
              {/* Google */}
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
