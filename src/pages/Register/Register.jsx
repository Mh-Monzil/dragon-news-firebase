import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

  const {registerUser} = useContext(AuthContext);
  

  const handleRegister = (e) => {
    e.preventDefault();
    const form =  new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    registerUser(email,password)
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
      <div className="md:w-3/4 lg:w-1/2 mx-auto bg-white mt-12 rounded-md p-16">
        <h2 className="text-center text-3xl font-semibold pb-12 mb-12 border-b">Register your account</h2>
        <form onSubmit={handleRegister} className=" ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="photoUrl"
              name="PhotoUrl"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn bg-rose-500 text-white font-semibold text-lg hover:bg-rose-600">Register</button>
          </div>
          <p className="pt-4 text-center">ALready have an account? <Link to='/login' className="text-rose-600 font-semibold" >Login</Link></p>
        </form>
      </div>
    </div>
    );
};

export default Register;