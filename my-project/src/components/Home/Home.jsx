import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
     return (
          <div className="container mx-auto mt-40">
               <h1 className="text-2xl text-gray-800 bg-lime-500 text-center" >Hello home page</h1>
               <Header></Header>
               <Outlet></Outlet>
               <h1>This is footer section</h1>
          </div>
     );
};

export default Home;