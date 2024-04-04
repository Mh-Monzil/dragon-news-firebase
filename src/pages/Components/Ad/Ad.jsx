import backgroundImg from '../../../assets/bg.png';

const Ad = () => {
    return (
        <div style={{
            backgroundImage: 'url(' + backgroundImg + ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}  className="py-16 px-10 text-white text-center mt-5">
            <h3 className='text-3xl font-bold leading-[45px]'>Create an Amazing Newspaper</h3>
            <p className='leading-7 mt-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className='px-5 py-4 bg-rose-600 text-xl font-semibold mt-7'>Learn More</button>
        </div>
    );
};

export default Ad;