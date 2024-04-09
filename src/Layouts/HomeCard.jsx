/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HomeCard = ({ home }) => {
    const { id, image, location, estate_title } = home;
    return (
        <div data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
         className="w-full  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-wide">{location.split(",")[0]}</h2>
                    <p className="dark:text-gray-800 text-xl text-black ">{estate_title}</p>
                </div>
                <Link to={`home/${id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View Property</Link>
            </div>
        </div>
    );
};

export default HomeCard;