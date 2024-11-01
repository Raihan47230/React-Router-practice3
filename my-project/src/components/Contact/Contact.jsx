import { useLoaderData } from "react-router-dom";

const Contact = () => {
     const users=useLoaderData()
     return (
          <div className="text-center">
               <div>user: {users.name}</div>
               
          </div>
     );
};

export default Contact;