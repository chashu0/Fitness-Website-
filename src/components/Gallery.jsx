import Footer from "./Footer";
import Header from "./Header";

export default function Gallery() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="lg:w-1/3 md:w-1/2 w-full mb-12 lg:mb-0 lg:px-4 transform transition-transform duration-300 hover:scale-105">
          <div className="h-64 relative overflow-hidden rounded-lg shadow-lg">
            <img
              alt="Building"
              className="object-cover object-center h-full w-full"
              src='building.png'
            />
            <p className="absolute top-0 left-0 bg-gray-800 text-white px-4 py-2 rounded-br-lg text-sm transition-opacity duration-300 opacity-0 hover:opacity-75">Building</p>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full mb-12 lg:mb-0 lg:px-4 transform transition-transform duration-300 hover:scale-105">
          <div className="h-64 relative overflow-hidden rounded-lg shadow-lg">
            <img
              alt="Exercise"
              className="object-cover object-center h-full w-full"
              src='exercise.png'
            />
            <p className="absolute top-0 left-0 bg-gray-800 text-white px-4 py-2 rounded-br-lg text-sm transition-opacity duration-300 opacity-0 hover:opacity-75">Exercise</p>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full mb-12 lg:mb-0 lg:px-4 transform transition-transform duration-300 hover:scale-105">
          <div className="h-64 relative overflow-hidden rounded-lg shadow-lg">
            <img
              alt="Diet"
              className="object-cover object-center h-full w-full"
              src='diet.png'
            />
            <p className="absolute top-0 left-0 bg-gray-800 text-white px-4 py-2 rounded-br-lg text-sm transition-opacity duration-300 opacity-0 hover:opacity-75">Diet</p>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full mb-12 lg:mb-0 lg:px-4 transform transition-transform duration-300 hover:scale-105">
          <div className="h-64 relative overflow-hidden rounded-lg shadow-lg">
            <img
              alt="Meditation"
              className="object-cover object-center h-full w-full"
              src='meditnation.png'
            />
            <p className="absolute top-0 left-0 bg-gray-800 text-white px-4 py-2 rounded-br-lg text-sm transition-opacity duration-300 opacity-0 hover:opacity-75">Meditation</p>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full mb-12 lg:mb-0 lg:px-4 transform transition-transform duration-300 hover:scale-105">
          <div className="h-64 relative overflow-hidden rounded-lg shadow-lg">
            <img
              alt="Yoga"
              className="object-cover object-center h-full w-full"
              src='yoga.png'
            />
            <p className="absolute top-0 left-0 bg-gray-800 text-white px-4 py-2 rounded-br-lg text-sm transition-opacity duration-300 opacity-0 hover:opacity-75">Yoga</p>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full mb-12 lg:mb-0 lg:px-4 transform transition-transform duration-300 hover:scale-105">
          <div className="h-64 relative overflow-hidden rounded-lg shadow-lg">
            <img
              alt="Training"
              className="object-cover object-center h-full w-full"
              src='training.png'
            />
            <p className="absolute top-0 left-0 bg-gray-800 text-white px-4 py-2 rounded-br-lg text-sm transition-opacity duration-300 opacity-0 hover:opacity-75">Training</p>
          </div>
        </div>
      </div>
    </section>
  );
};
