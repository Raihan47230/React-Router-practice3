import { useLoaderData } from "react-router-dom";

const Todos = () => {
     const todo=useLoaderData()
     const {title}=todo
     console.log(todo)
     return (
          <div>
               <h3>Todo : {title}</h3>
          </div>
     );
};

export default Todos;

// completed
// : 
// false
// id
// : 
// 1
// title
// : 
// "delectus aut autem"
// userId
// : 
// 1