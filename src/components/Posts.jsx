import Footer from "./Footer";
import Header from "./Header";


export default function Posts() {
    return (
        <div className="max-w-md mx-auto bg-white shadow-md p-4 my-4 rounded-md">
        <div className="flex items-center mb-4">
          <div className="bg-gray-300 h-12 w-12 rounded-full flex-shrink-0"></div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">{username}</h2>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{content}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button className="text-gray-700 hover:text-indigo-500 focus:outline-none">
              Like
            </button>
            <span className="text-gray-500">{likes} Likes</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-gray-700 hover:text-indigo-500 focus:outline-none">
              Comment
            </button>
            <span className="text-gray-500">{comments} Comments</span>
          </div>
        </div>
      </div>
    );
  };