import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div className="">
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold pb-3">Login with</h2>
                <button className="w-full border border-rose-600 text-rose-600 flex items-center justify-center gap-2 py-2 rounded-sm">
                    <FaGoogle />
                    Login With Google 
                </button>
                <button className="w-full border border-black flex items-center justify-center gap-2 py-2 rounded-sm">
                    <FaGithub />
                    Login With Google 
                </button>
            </div>
            <div className="mt-7">
                <h2 className="text-xl font-semibold">Find Us On</h2>
                <div className="mt-5">
                    <p className="border rounded-t-md flex items-center p-4 font-medium gap-2">
                        <FaFacebook  className="text-2xl text-blue-600"/>
                        Facebook
                    </p>
                    <p><span></span></p>
                    <p><span></span></p>
                </div>
                <div>
                    <p className="border-x flex items-center p-4 font-medium gap-2">
                        <FaTwitter  className="text-2xl text-sky-400"/>
                        Twitter
                    </p>
                    <p><span></span></p>
                    <p><span></span></p>
                </div>
                <div>
                    <p className="border rounded-b-md flex items-center p-4 font-medium gap-2">
                        <FaInstagram  className="text-2xl text-rose-600"/>
                        Instagram
                    </p>
                    <p><span></span></p>
                    <p><span></span></p>
                </div>
            </div>
            {/* Q zone  */}
            <div className="mt-5 p-4 space-y-7 bg-[#F3F3F3]">
                <h2 className="text-xl font-semibold">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;