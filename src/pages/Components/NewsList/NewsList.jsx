import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import { useParams, useLoaderData } from "react-router-dom";
import RightSideNav from "../RightSideNav/RightSideNav";

const NewsList = () => {
  const news = useLoaderData();
  const { id } = useParams();
  const singleNews = news.find((news) => news._id === id);
  console.log(singleNews);

  const { image_url, title, details } = singleNews;

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h2 className="text-2xl font-semibold mb-5">Dragon News</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-3 p-7 shadow-md bg-gray-50 text-gray-800">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={image_url}
                alt=""
                className="block object-cover object-center w-full rounded-md bg-gray-500"
              />
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold ">{title}</h3>
              </a>
              <p className="leading-snug text-gray-600">{details}</p>
            </div>
          </div>
        </div>
        <div>
            <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
