import Footer from "./Footer";
import Header from "./Header";

export default function Reviews() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 transition-opacity duration-300">
                Reviews by our members
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded transition-all duration-300"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 transform hover:scale-105 transition-transform duration-300">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-2xl hover:shadow-xl transition-all duration-300">
                <img
                  className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-indigo-500 bg-gray-100 transition-all duration-300"
                  src="john.png"
                  alt="John Lee"
                />
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 transition-all duration-300">
                  John Lee
                </h1>
                <p className="leading-relaxed mb-3 transition-all duration-300">
                  "I've been using this fitness program for a month, and I'm already feeling stronger and healthier!"
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 transform hover:scale-105 transition-transform duration-300">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-2xl hover:shadow-xl transition-all duration-300">
                <img
                  className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-indigo-500 bg-gray-100 transition-all duration-300"
                  src="jane.png"
                  alt="Jane Smith"
                />
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 transition-all duration-300">
                  Jane Smith
                </h1>
                <p className="leading-relaxed mb-3 transition-all duration-300">
                  "The trainers are amazing! They really motivate me to push my limits and achieve my fitness goals."
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 transform hover:scale-105 transition-transform duration-300">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-2xl hover:shadow-xl transition-all duration-300">
                <img
                  className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-indigo-500 bg-gray-100 transition-all duration-300"
                  src="lisa.png"
                  alt="Lisa Johnson"
                />
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 transition-all duration-300">
                  Lisa Johnson
                </h1>
                <p className="leading-relaxed mb-3 transition-all duration-300">
                  This fitness community is incredibly supportive. Whether you're a beginner or advanced, everyone is welcoming and encouraging.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 transform hover:scale-105 transition-transform duration-300">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-2xl hover:shadow-xl transition-all duration-300">
                <img
                  className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-indigo-500 bg-gray-100 transition-all duration-300"
                  src="mark.png"
                  alt="Mark Davis"
                />
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 transition-all duration-300">
                  Mark Davis
                </h1>
                <p className="leading-relaxed mb-3 transition-all duration-300">
                  I've been a part of this fitness program for a few months now, and I'm thrilled with the results! The combination of workouts and nutritional guidance has helped me achieve my fitness milestones. Definitely worth it!
                </p>
              </div>
            </div>
          </div>

          {/* Additional content or sections */}
          <div className="flex flex-col items-center mt-16">
            {/* More content can be added here */}
          </div>
        </div>
      </section>
    </>
  );
}
