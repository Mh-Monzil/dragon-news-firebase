import { Link } from "react-router-dom";
import userImage from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const NavLinks = <>
    <li><Link className="text-lg " to='/'>Home</Link></li>
    <li><Link className="text-lg " to='/about'>About</Link></li>
    <li><Link className="text-lg " to='/career'>Career</Link></li>
    <li><Link className="text-lg " to='/register'>Register</Link></li>
    <li><Link className="text-lg " to='/login'>Login</Link></li>
  </>
  return (
    <div className="navbar pt-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {NavLinks}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {NavLinks}
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <img className="w-10" src={userImage} alt="" />
    {
      user ? 
      <button onClick={logOut}>Log Out</button>
      :
      <Link to='/login' className="btn bg-[#403F3F] rounded-none text-white text-xl font-semibold px-10">Login</Link>
    }
  </div>
</div>
  );
};

export default Navbar;
