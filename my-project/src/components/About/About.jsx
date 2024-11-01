import { useLoaderData } from "react-router-dom";
import SingleData from "./SingleData";

const About = () => {
     const data=useLoaderData();
     return (
          <div className="grid md:grid-cols-3 gap-4">
               {
                    data.map(data=><SingleData key={data.playerId} data={data}></SingleData>)
               }
          </div>
     );
};

export default About;