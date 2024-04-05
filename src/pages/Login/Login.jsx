import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form =  new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

      loginUser(email,password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error.message);
      })
    }
    
  return (
    <div className="bg-[#F3F3F3] h-screen">
      <Navbar />
      <div className="md:w-3/4 lg:w-1/2 mx-auto bg-white mt-32 rounded-md p-16">
        <h2 className="text-center text-3xl font-semibold pb-12 mb-12 border-b">Login</h2>
        
        <form onSubmit={handleLogin} className=" ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-rose-500 text-white font-semibold text-lg hover:bg-rose-600">Login</button>
          </div>
          <p className="pt-4 text-center">Do not have an account? <Link to='/register' className="text-rose-600 font-semibold" >Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
