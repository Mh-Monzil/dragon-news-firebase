import moment from 'moment';
import logo from '../../../assets/logo.png';


const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-10' src={logo} alt="" />
            <p className="text-lg mt-4">Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium mt-2'>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;