import Footer from "./Footer";
import Header from "./Header";

export default function GroupsPage() {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Fitness Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Group Cards */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Cardio Enthusiasts</h3>
              <p className="text-gray-600 mb-4">
                Join us for high-energy cardio workouts! Whether you're a beginner or an advanced fitness enthusiast, this group is for you. Let's sweat it out together!
              </p>
              <a
                href="#"
                className="text-indigo-500 hover:underline transition-all duration-300"
              >
                Join Group
              </a>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Strength Training Crew</h3>
              <p className="text-gray-600 mb-4">
                Ready to build muscle and get stronger? Our Strength Training Crew is here to support and motivate you on your fitness journey. Let's lift together!
              </p>
              <a
                href="#"
                className="text-indigo-500 hover:underline transition-all duration-300"
              >
                Join Group
              </a>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Yoga for All</h3>
              <p className="text-gray-600 mb-4">
                Find your inner peace and flexibility with our Yoga for All group. All levels are welcome! Join us for calming yoga sessions and connect with like-minded individuals.
              </p>
              <a
                href="#"
                className="text-indigo-500 hover:underline transition-all duration-300"
              >
                Join Group
              </a>
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
