import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import { useParams } from "react-router-dom";


const NewsList = () => {
    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            newslist
            {id}
        </div>
    );
};

export default NewsList;