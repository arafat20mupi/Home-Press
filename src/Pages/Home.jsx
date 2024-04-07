/* eslint-disable react/jsx-key */
import Banner from "../Layouts/Banner";
import HomeCard from "../Layouts/HomeCard";
import { useLoaderData } from "react-router-dom"

const Home = () => {
    const homes = useLoaderData();
    console.log(homes);
    return (
        <div>
            <Banner></Banner>
            <div className="mt-10 space-y-5">
                <div>
                    <div>
                        <h1 className="text-5xl text-black font-extrabold ">Find Your Dream House </h1>
                        <h1 className="text-5xl text-black font-extrabold mt-3">Search By Area</h1>
                    </div>
                </div>
                <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 shadow-lg">
                    {
                        homes.map(home => <HomeCard kew={home.id} home={home}></HomeCard>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Home;