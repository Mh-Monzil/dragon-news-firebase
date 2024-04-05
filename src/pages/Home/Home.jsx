import { useLoaderData } from "react-router-dom";
import Ad from "../Components/Ad/Ad";
import LeftSideNav from "../Components/LeftSideNav/LeftSideNav";
import NewsHome from "../Components/NewsHome/NewsHome";
import RightSideNav from "../Components/RightSideNav/RightSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";


const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div className=''>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6 mt-20">
                <div><LeftSideNav /></div>
                <div className="col-span-2">
                    <h2 className="text-2xl font-semibold">Dragon News Home</h2>
                    <div className="mt-5 grid grid-cols-1 gap-5">
                        {
                        news.map(news => <NewsHome 
                            key={news._id} 
                            news={news} ></NewsHome>)
                        }
                    </div>
                </div>
                <div>
                    <RightSideNav />
                    <Ad />
                </div>
            </div>
        </div>
    );
};

export default Home;