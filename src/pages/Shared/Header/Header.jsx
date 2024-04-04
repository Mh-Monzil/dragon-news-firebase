import moment from 'moment';
import logo from '../../../assets/logo.png';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-10' src={logo} alt="" />
            <p className="text-lg mt-4">Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium mt-2'>{moment().format('dddd, MMMM D, YYYY')}</p>
            <div className='bg-[#F3F3F3] flex items-center gap-5 p-4 mt-7'>
                <button className='bg-rose-600 py-2 px-6 text-xl font-medium text-white'>Latest</button>
                <Marquee speed={100}>
                <p className='text-lg font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>
        </div>
    );
};

export default Header;