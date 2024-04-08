
import { useParams, useLoaderData } from "react-router-dom"
const HomeCardDetails = () => {

    const homes = useLoaderData()
    const { id } = useParams()

    const home = homes.find(home => home.id == id);
    const { image, estate_title, description, price, status, area, location, facilities } = home
    return (
        <section className="">
            <div className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center items-center  w-full ">
                    <img src={image} alt="" className=" flex  h-96 w-full md:px-20 rounded-lg justify-center items-center" />
                    <div className='flex space-x-3 items-start lg:space-x-10'>
                        <p className="mt-6 text-start text-xl font-bold ">
                            Price: <span className="text-red-500 ml-2 ">{price}</span>
                        </p>
                        <p className="mt-6 text-start text-xl font-bold ">
                            Status: <span className="text-red-500 ml-2 ">{status}</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:justify-center p-6  rounded-sm lg:max-w-md xl:max-w-lg ">
                    <h1 className="text-3xl font-bold leading-none sm:text-4xl">{estate_title}
                    </h1>
                    <p className="mt-6 mb-6 text-lg ">
                        {description}
                    </p>
                    <p className="mt-6 text-xl font-bold ">
                        All Facilities:
                    </p>
                    <div>
                        {
                            facilities.map((fac, id) => <li
                                className="text-lg ml-2 text-black"
                                key={id} > {fac}
                            </li>)
                        }
                    </div>
                    <div className='lg:flex justify-between  '>
                        <p className="mt-6 text-start text-xl font-bold ">
                            Location: <span className="text-red-500 ml-2 ">{location.split(",")[0]}</span>
                        </p>
                        <p className="mt-6 text-start text-xl font-bold ">
                        Area: <span className="text-red-500 ml-2 ">{area}</span>
                        </p>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default HomeCardDetails;