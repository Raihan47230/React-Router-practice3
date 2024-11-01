import { useLoaderData } from "react-router-dom";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = () => {
     const posts=useLoaderData();
     return (
          <div className="text-center grid md:grid-cols-3 gap-3">
               
               {
                    posts.map(post=><SingleBlog key={post.id} post={post}></SingleBlog>)
               }
          </div>
     );
};

export default Blog;