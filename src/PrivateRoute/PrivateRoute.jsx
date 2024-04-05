import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <div className='w-full h-40 flex justify-center'>
            <span className="loading loading-spinner text-error"></span>
        </div>
    }
    if(user){
        return children;
    }
    return  <Navigate to='/login'></Navigate>
};

export default PrivateRoute;