import { FaRegBookmark, FaRegEye, FaStar } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NewsHome = ({news}) => {
    const {author,image_url, title, total_view,details, rating, _id } = news;
    console.log(news);
  return (
    <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-100 text-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <img
            alt=""
            src="https://source.unsplash.com/100x100/?portrait"
            className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
                {author?.name}
            </a>
            <span className="text-xs text-gray-600">4 hours ago</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
            <FaRegBookmark className="text-xl cursor-pointer" />
            <IoShareSocialOutline className="text-2xl cursor-pointer" />
          </div>
      </div>
      <div>
        <h2 className="mb-1 text-xl font-semibold">
            {title}
        </h2>
        <img
          src={image_url}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 mt-5"
        />
        <p className="mt-8 text-gray-600">
          {
            details.length > 300 ?
            <p>{details.slice(0,300)} <Link 
            to={`/news/${_id}`}
            className="text-rose-500 font-semibold"> Read More...</Link></p> :
            <p>{details}</p>
          }
        </p>
      </div>
      <div className="flex flex-wrap justify-between border-t-2 pt-5">
        <div className="flex items-center gap-2">
            <div className="flex items-center text-xl gap-1 text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <span className="font-medium mt-1">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2 font-medium">
            <FaRegEye />
            {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsHome;
