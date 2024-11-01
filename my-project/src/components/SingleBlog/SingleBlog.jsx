import { Link } from "react-router-dom";

const SingleBlog = ({post}) => {
     const{title,id,body}=post
     return (
          <div className="border border-yellow-300 rounded-xl p-4 bg-slate-200">
               <h1>userId : {id}</h1>
               <h1> {title}</h1>
               <h1>Title : {body}</h1>
               <Link className="bg-lime-50 p-3 rounded-lg"
                to={`/blog/:${id}`}>Show data</Link>
          </div>
     );
};

export default SingleBlog;


// body
// : 
// "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// id
// : 
// 1
// title
// : 
// "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
// userId
// : 
// 1