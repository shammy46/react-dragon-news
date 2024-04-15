import Header from "../shared/Header/Header";
import LeftNav from "../shared/LeftNav/LeftNav";
import Navbar from "../shared/Navbar/Navbar";
import RightNav from "../shared/RightNv/RightNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
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
                <div className="lg:col-span-2 border">
                    <h2 className="text-4xl ">News Coming soon...</h2>

                </div>
                <div className="border">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;