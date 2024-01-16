import Footer from "./Footer";
import Header from "./Header";

export default function Social() {
    return (
        <div className="min-h-screen bg-cover bg-center transition-all duration-300" style={{ backgroundImage: 'url("one.png")' }}>
          <main className="flex items-center justify-center min-h-screen">
            <div className="max-w-2xl p-8 bg-white bg-opacity-80 rounded-md shadow-md transition-all duration-300 hover:shadow-lg">
              <h2 className="text-3xl font-semibold mb-4">Latest Fitness Updates</h2>
              <div className="space-y-4">
                <div className="bg-gray-300 p-4 rounded transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-700">Completed a 5K run today! 🏃‍♂️ #Running #Fitness</p>
                </div>
                <div className="bg-gray-300 p-4 rounded transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-700">Just finished a high-intensity workout session! 💪 #HIIT #Fitness</p>
                </div>
              </div>
            </div>
          </main>
        </div>
    );
}
