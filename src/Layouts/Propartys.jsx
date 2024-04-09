/* eslint-disable react/prop-types */

const Propartys = ({ prop }) => {
    return (
        <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
          className="rounded-md shadow-md">
            <p className="text-2xl font-bold  text-red-500 text-center flex justify-center p-3 ">{prop.title}</p>
            <img src={prop.image} alt="" className=" rounded-lg  mt-8" />
        </div>
    );
};

export default Propartys;