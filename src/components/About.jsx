import Footer from "./Footer";
import Header from "./Header";

export default function About() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20"> 
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 transition-transform transform hover:scale-105">
                About Our Fitness Platform
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg transform transition-transform duration-300 hover:scale-105"> {/* Added: transition-transform, hover:scale-105 */}
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Our Mission
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Helping You Achieve Your Health Goals
                </h1>
                <p className="leading-relaxed mb-3">
                  We are committed to providing top-notch fitness services and resources
                  to empower individuals on their health and wellness journey.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg transform transition-transform duration-300 hover:scale-105"> {/* Added: transition-transform, hover:scale-105 */}
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Our Team
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Meet Our Dedicated Team
                </h1>
                <p className="leading-relaxed mb-3">
                  Our team consists of fitness experts, trainers, and professionals
                  who are passionate about guiding and supporting your fitness journey.
                </p>
              </div>
            </div>
          </div>

          {/* Additional content or sections */}
          <div className="flex flex-col items-center mt-16">
            <h2 className="text-3xl font-semibold mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"> {/* Added: transition-transform, hover:scale-105 */}
                <h3 className="text-xl font-medium mb-4">Customer-Centric Approach</h3>
                <p className="text-gray-700">
                  We prioritize our customers, ensuring their needs are at the core of everything we do.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"> {/* Added: transition-transform, hover:scale-105 */}
                <h3 className="text-xl font-medium mb-4">Innovation and Quality</h3>
                <p className="text-gray-700">
                  Striving for innovation and delivering top-quality services is our commitment.
                </p>
              </div>
              {/* Add more values */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
