export default function Footer(){
  return(
      <>
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto">
        <p className="text-center">
          Address: 123 Fitness Street,Florida, USA | Email: contact@fitnesswebsite.com | Thank you for contacting us!
        </p>
        <p className="text-center">&copy; {new Date().getFullYear()} Fitness Website. All rights reserved.</p>
        {/* Footer links or other content */}
      </div>
    </footer>
    </>
  )
}
