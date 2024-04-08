/* eslint-disable react/jsx-key */
import { Helmet } from "react-helmet-async";
import Banner from "../Layouts/Banner";
import HomeCard from "../Layouts/HomeCard";
import { useLoaderData } from "react-router-dom"
import About from "./About";

const Home = () => {
    const homes = useLoaderData();
    console.log(homes);
    return (
        <div>
            <Helmet>
                <title> HomePress-Home </title>
            </Helmet>
            <Banner></Banner>
            <div className="mt-10 space-y-5">
                <h1 className="text-3xl font-bold leading-none sm:text-4xl flex justify-center my-10"> Select House
                </h1>
                <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 shadow-lg">
                    {
                        homes.map(home => <HomeCard key={home.id} home={home}></HomeCard>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Home;