import { Link } from "react-router-dom";

const Header = () => {
     return (
          <div>
              <nav className="bg-yellow-100 font-bold text-2xl px-5 py-2 rounded-lg flex gap-10 ">
                    <Link  to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/todo'}>Todo</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'/blog'}>Blogs</Link>
              </nav>
          </div>
     );
};

export default Header;