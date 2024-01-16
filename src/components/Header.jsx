

export default function Header() {
  return (
    <>
      <header className="bg-gray-800 text-white py-4 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="transition-transform duration-300 hover:scale-105">
            <h1 className="text-3xl font-semibold">FITNESS WEBSITE</h1>
          </div>
          <div className="flex justify-center items-center transition-opacity duration-300 hover:opacity-75">
            <nav className="flex">
              <a href="/" className="mr-5 text-lg transition-all duration-300 hover:text-indigo-500">
                Home
              </a>
              
              <a href="/about" className="mr-5 text-lg transition-all duration-300 hover:text-indigo-500">
                About
              </a>
              <div className="group relative inline-block">
                <a href="/social" className="mr-5 text-lg transition-all duration-300 hover:text-indigo-500">
                  Social
                </a>
            
              </div>
              <a href="/gallery" className="mr-5 text-lg transition-all duration-300 hover:text-indigo-500">
                Gallery
              </a>
              <a href="/contact" className="mr-5 text-lg transition-all duration-300 hover:text-indigo-500">
                Contact
              </a>
              <a href="/reviews" className="mr-5 text-lg transition-all duration-300 hover:text-indigo-500">
                Reviews
              </a>
            </nav>
            {/* Navigation or other header content */}
          </div>
          <div className="transition-all duration-300 transform hover:scale-105">
            <img src="logo.png" height={50} width={100} alt="Logo" />
          </div>
        </div>
      </header>
    </>
  );
}