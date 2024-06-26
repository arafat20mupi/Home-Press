
import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom"
const HomeCardDetails = () => {

    const homes = useLoaderData()
    const { id } = useParams()

    const home = homes.find(home => home.id == id);
    const { image, estate_title, description, price, status, area, location, facilities } = home
    return (
        <section className="">
            <Helmet>
                <title>
                    HomePress.HomeDetails
                </title>
            </Helmet>
            <div className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center items-center  w-full ">
                    <img data-aos="zoom-in"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        src={image} alt="" className=" flex  h-96 w-full md:px-20 rounded-lg justify-center items-center" />
                    <div className='flex space-x-3 items-start lg:space-x-10'>
                        <p
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="200"
                            data-aos-easing="ease-in-out"
                            className="mt-6 text-start text-xl font-bold ">
                            Price: <span className="text-red-500 ml-2 ">{price}</span>
                        </p>
                        <p data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="200"
                            data-aos-easing="ease-in-out"
                            className="mt-6 text-start text-xl font-bold ">
                            Status: <span className="text-red-500 ml-2 ">{status}</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:justify-center p-6  rounded-sm lg:max-w-md xl:max-w-lg ">
                    <h1 data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="200"
                        data-aos-easing="ease-in-out"
                        className="text-3xl font-bold leading-none sm:text-4xl">{estate_title}
                    </h1>
                    <p data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-out"
                        className="mt-6 mb-6 text-lg ">
                        {description}
                    </p>
                    <p data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="400"
                        data-aos-easing="ease-in-out" className="mt-6 text-xl font-bold ">
                        All Facilities:
                    </p>
                    <div data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out">
                        {
                            facilities.map((fac, id) => <li
                                className="text-lg ml-2 text-black"
                                key={id} > {fac}
                            </li>)
                        }
                    </div>
                    <div className='lg:flex justify-between  '>
                        <p data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="600"
                            data-aos-easing="ease-in-out" className="mt-6 text-start text-xl font-bold ">
                            Location: <span className="text-red-500 ml-2 ">{location.split(",")[0]}</span>
                        </p>
                        <p data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="600"
                            data-aos-easing="ease-in-out" className="mt-6 text-start text-xl font-bold ">
                            Area: <span className="text-red-500 ml-2 ">{area}</span>
                        </p>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default HomeCardDetails;