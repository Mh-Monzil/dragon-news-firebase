import { useEffect, useState } from "react";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    },[])
    console.log(categories);

    return (
        <div className="">
            <h2 className="text-xl font-semibold">All Category</h2>
            <div className="mt-5 rounded-md text-xl font-semibold">
                <p className="bg-[#E7E7E7] pl-12 py-4">National News</p>
                <div className="pl-12 text-[#9F9F9F] space-y-4 p-4">
                    {
                        categories.map(category => <p key={category.id}>{category.name}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;