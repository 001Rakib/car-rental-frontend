const Footer = () => {
  return (
    <div>
      <footer className="bg-orange-500 text-white py-8">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <h3 className="text-lg font-bold mb-2">About Us</h3>
              <p className="text-gray-200 mb-4">
                We're a car rental company dedicated to providing the best
                experience for our customers.
              </p>
              <ul className="list-none mb-4">
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white transition duration-300"
                  >
                    Our Story
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white transition duration-300"
                  >
                    Our Team
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white transition duration-300"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <h3 className="text-lg font-bold mb-2">Quick Links</h3>
              <ul className="list-none mb-4">
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <h3 className="text-lg font-bold mb-2">Get in Touch</h3>
              <p className="text-gray-200 mb-4">
                Contact us for any questions or concerns.
              </p>
              <ul className="list-none mb-4">
                <li className="mb-2">
                  <a
                    href="mailto:info@example.com"
                    className="text-gray-200 hover:text-white transition duration-300"
                  >
                    info@example.com
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="tel:+1234567890"
                    className="text-gray-200 hover:text-white transition duration-300"
                  >
                    +1 234 567 890
                  </a>
                </li>
              </ul>
              <div className="flex justify-start mb-4">
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition duration-300 mr-4"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition duration-300 mr-4"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition duration-300 mr-4"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-200">
            &copy; 2024 Ride Flex. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
