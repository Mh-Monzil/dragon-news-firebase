
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="bg-[#F3F3F3] flex items-center gap-5 p-4 mt-7">
      <button className="bg-rose-600 py-2 px-6 text-xl font-medium text-white">
        Latest
      </button>
      <Marquee speed={100}>
        <p className="text-lg font-semibold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
