import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftNav from "../shared/LeftNav/LeftNav";
import Navbar from "../shared/Navbar/Navbar";
import RightNav from "../shared/RightNv/RightNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news =useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1 className="text-3xl font-poppins font-bold">This is home</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftNav></LeftNav>

                </div>
                {/* news container */}
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsCard
                            key={aNews._id}
                            news={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div className="border">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;