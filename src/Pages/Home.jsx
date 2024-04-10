/* eslint-disable react/jsx-key */
import { Helmet } from "react-helmet-async";
import Banner from "../Layouts/Banner";
import HomeCard from "../Layouts/HomeCard";
import { useLoaderData } from "react-router-dom"
import Contacts from "../Layouts/Contacts";
import Offer from "../Layouts/Offer";
import Marquee from "react-fast-marquee";

const Home = () => {
    const homes = useLoaderData();
    return (
        <div>
            <Helmet>
                <title> HomePress-Home </title>
            </Helmet>
            <Banner></Banner>
            <div className="mt-10 space-y-5">
                <Marquee speed={300}>
                    <h1 className="text-3xl font-bold leading-none sm:text-4xl flex justify-center my-5"> Select Your House
                    </h1>
                </Marquee>
                <div className="flex-1  h-2 rounded-xl px-2  dark:bg-purple-500"></div>
                <div className="grid   grid-cols-1 md:grid-cols-3 gap-8 shadow-lg">
                    {
                        homes.map(home => <HomeCard key={home.id} home={home}></HomeCard>)
                    }
                </div>
            </div>
            <Contacts></Contacts>
            <Offer></Offer>

        </div>
    );
};

export default Home;