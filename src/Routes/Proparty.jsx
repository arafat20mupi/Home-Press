
import { useLoaderData } from "react-router-dom"
import Propartys from "../Layouts/Propartys";
import { Helmet } from "react-helmet-async";
const Proparty = () => {
    const proparty = useLoaderData();
    console.log(proparty);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
            <Helmet>
                <title>
                    HomePress.Proparty
                </title>
            </Helmet>
            {
                proparty.map(prop => <Propartys key={prop.id} prop={prop}></Propartys> )
            }
        </div>
    );
};

export default Proparty;