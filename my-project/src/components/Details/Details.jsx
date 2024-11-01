import { useLoaderData } from "react-router-dom";

const Details = () => {
     const user=useLoaderData()
     console.log(user)
     return (
          <div>
               <h1>Details Imformation :{user.id} </h1>
               <p>Title : {user.title}</p>
          </div>
     );
};

export default Details;