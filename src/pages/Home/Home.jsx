import Ad from "../Components/Ad/Ad";
import LeftSideNav from "../Components/LeftSideNav/LeftSideNav";
import NewsHome from "../Components/NewsHome/NewsHome";
import RightSideNav from "../Components/RightSideNav/RightSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div className=''>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6 mt-20">
                <div><LeftSideNav /></div>
                <div className="col-span-2"><NewsHome /></div>
                <div>
                    <RightSideNav />
                    <Ad />
                </div>
            </div>
        </div>
    );
};

export default Home;