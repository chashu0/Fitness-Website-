import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Main() {
  const sectionStyle = {
    backgroundImage: `url('main.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 20px',
  };

  const contentStyle = {
    color: 'white',
    maxWidth: '600px',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <>
      <section className="text-gray-600 body-font relative transition-opacity duration-500 ease-in-out hover:opacity-75" style={sectionStyle}>
        <div style={contentStyle}>
          <h1 className="text-6xl font-semibold transition-transform transform hover:scale-105">Welcome to the Fitness Website</h1>
          <p className="mt-6">
            Welcome to our fitness platform dedicated to helping you achieve your health goals.
            We provide a range of services and resources to support your fitness journey.
            Explore our offerings below!
          </p>
        </div>
        <div className="container mx-auto"></div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto flex flex-wrap transition-transform transform hover:scale-105">
              <div className="lg:w-1/3 md:w-1/2 w-full mb-12 lg:mb-0 lg:px-4">
                <div className="h-64 relative">
                  <img
                    className="object-cover object-center rounded-lg h-full w-full"
                    src='one.png'
                  />
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full mb-12 lg:mb-0 lg:px-4">
                <div className="h-64 relative">
                  <img
                    className="object-cover object-center rounded-lg h-full w-full"
                    src='two.png'
                  />
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full mb-12 lg:mb-0 lg:px-4">
                <div className="h-64 relative">
                  <img
                    className="object-cover object-center rounded-lg h-full w-full"
                    src='three.png'
                  />
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full mb-12 lg:mb-0 lg:px-4">
                <div className="h-64 relative">
                  <img
                    className="object-cover object-center rounded-lg h-full w-full"
                    src='four.png'
                  />
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full mb-12 lg:mb-0 lg:px-4">
                <div className="h-64 relative">
                  <img
                    className="object-cover object-center rounded-lg h-full w-full"
                    src='five.png'
                  />
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full mb-12 lg:mb-0 lg:px-4">
                <div className="h-64 relative">
                  <img
                    className="object-cover object-center rounded-lg h-full w-full"
                    src='six.png'
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="text-gray-600 body-font bg-gray-100 transition-transform transform hover:scale-105">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Testimonials
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="p-4 lg:w-1/2">
              <Slider {...settings}>
                {/* Jane Doe's Testimonial */}
                <div className="h-full bg-gray-200 p-8 rounded-lg overflow-hidden text-center relative transition-transform transform hover:scale-105">
                  <img
                    className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-indigo-500 bg-gray-100"
                    src="jane.png"
                    alt="Jane Doe"
                  />
                  <p className="leading-relaxed mb-3">
                    "I've seen great improvements in my health and fitness since joining this platform. The workouts are challenging and effective, and the community support is amazing!"
                  </p>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Jane Doe
                  </h2>
                </div>

                {/* John Smith's Testimonial */}
                <div className="h-full bg-gray-200 p-8 rounded-lg overflow-hidden text-center relative transition-transform transform hover:scale-105">
                  <img
                    className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-indigo-500 bg-gray-100"
                    src="john.png"
                    alt="John Smith"
                  />
                  <p className="leading-relaxed mb-3">
                    "The trainers here are knowledgeable and motivating. The variety of workouts keeps me engaged, and I've noticed significant progress in my fitness level!"
                  </p>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    John Smith
                  </h2>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}