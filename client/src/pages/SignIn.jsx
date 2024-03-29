import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please enter all fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if(res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    } 
  };
  return (
    <div className= 'min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
        <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-green-900 via-teal-600 to-slate-800 rounded-lg text-white">Health and Wellness</span>
        </Link>
        <p className='text-sm mt-5'>
        Welcome to our health and wellness blog!Let’s embark on this wellness journey together.Sign in or create an account for free.
        </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value='Email' />
              <TextInput type='email' placeholder='example@email.com' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value='Password' />
              <TextInput type='password' placeholder='******' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='greenToBlue'type="submit" disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='small'/>
                  <span className="pl-c">Loading...</span>
                  </>
                ) : (
                  'SignIn'
                )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to='/signup' className="text-blue-500">
             SignUp            
            </Link>
          </div>
          {
            errorMessage  &&  (
              <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}