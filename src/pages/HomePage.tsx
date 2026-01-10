import { Link } from "react-router-dom";
import { homePageLinks } from "../consts/Links";

const HomePage = () => {
  return (
    <div className="container mx-auto my-20 flex flex-col items-center gap-5">
      <h1 className="text-3xl font-bold text-center">
        Welcome to the Home Page
      </h1>
      <p className="mt-4 text-gray-700">
        This is my tech task for victoria plumbing.
      </p>
      <div className="flex flex-row items-center gap-5 mt-6">
        {homePageLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="border-b border-gray-300 px-4 py-2 rounded-lg hover:border hover:border-blue-500 hover:text-blue-500 transition"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
