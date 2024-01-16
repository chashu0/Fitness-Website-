import Footer from "./Footer";
import Header from "./Header";

export default function Contact() {
    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex flex-col items-center">
                    <div className="w-full mb-10 text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 transform scale-105 transition-all duration-500">
                            Contact Us
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
                            We'd love to hear from you! Fill out the form below to get in touch with us.
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-col w-full mb-6">
                            <div className="relative mb-4 transition-all duration-300">
                                <div className="flex items-center border-b border-gray-300 py-2">
                                    <img src='person.png' className="w-6 h-6 mr-3 transition-transform duration-300" alt="person icon" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:outline-none text-base py-2 px-4 transition-all duration-300 shadow-md hover:shadow-lg"
                                    />
                                </div>
                            </div>
                            <div className="relative mb-4 transition-all duration-300">
                                <div className="flex items-center border-b border-gray-300 py-2">
                                    <img src='email.png' className="w-6 h-6 mr-3 transition-transform duration-300" alt="email icon" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:outline-none text-base py-2 px-4 transition-all duration-300 shadow-md hover:shadow-lg"
                                    />
                                </div>
                            </div>
                            <div className="relative mb-4 transition-all duration-300">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:outline-none text-base py-2 px-4 h-32 resize-none transition-all duration-300 shadow-md hover:shadow-lg"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
