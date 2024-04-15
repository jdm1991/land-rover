import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "../app/globals.css";
import { useState } from "react";

const ContactPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const bgColor = darkMode ? "bg-gray-800" : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const footerBgColor = darkMode ? "bg-gray-900" : "bg-green-600";
  const footerTextColor = darkMode ? "text-white" : "text-white";

  return (
    <div className={`min-h-screen ${bgColor} py-12 relative`}>
      <button
        className="absolute top-4 right-4 flex items-center justify-center text-sm font-medium text-green-600 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <FaSun className="h-5 w-5 mr-2" />
        ) : (
          <FaMoon className="h-5 w-5 mr-2" />
        )}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-8 border border-gray-300 p-8 rounded-lg">
          <h2
            className={`text-base text-green-600 font-semibold tracking-wide uppercase ${textColor}`}
          >
            Contact Us
          </h2>
          <p
            className={`mt-2 text-4xl leading-8 font-extrabold tracking-tight ${textColor} sm:text-5xl`}
          >
            Get in Touch
          </p>
        </div>

        <div className="mt-8 border border-gray-300 p-8 rounded-lg">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0">
                <div
                  className={`flex items-center justify-center h-12 w-12 rounded-md ${
                    darkMode ? "bg-green-600" : "bg-green-600 text-white"
                  } hover:bg-green-700 hover:scale-110 transition-all duration-300`}
                >
                  <FaWhatsapp className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <dt className={`text-lg leading-6 font-medium ${textColor}`}>
                  WhatsApp
                </dt>
                <dd
                  className={`mt-2 text-base ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  +1 123-456-7890
                </dd>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex-shrink-0">
                <div
                  className={`flex items-center justify-center h-12 w-12 rounded-md ${
                    darkMode ? "bg-green-600" : "bg-green-600 text-white"
                  } hover:bg-green-700 hover:scale-110 transition-all duration-300`}
                >
                  <FaMapMarkerAlt className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <dt className={`text-lg leading-6 font-medium ${textColor}`}>
                  Address
                </dt>
                <dd
                  className={`mt-2 text-base ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  123 Main Street, City, Country
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div
          className={`mt-8 border border-gray-300 p-8 rounded-lg ${
            darkMode ? "bg-gray-800 border-gray-700" : ""
          }`}
        >
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className={`text-lg font-bold leading-6 ${textColor}`}>
                  Send us a message
                </h3>
                <p
                  className={`mt-4 text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Fill in the form below to send us a message and we will get
                  back to you as soon as possible.
                </p>
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-2">
              <form>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div
                    className={`px-4 py-5 ${
                      darkMode ? "bg-gray-700" : "bg-white"
                    } sm:p-6`}
                  >
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="name"
                          className={`block text-sm font-medium ${textColor}`}
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="given-name"
                          className={`mt-1 focus:ring-green-600 focus:border-green-600 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-3 ${
                            darkMode ? "bg-gray-700 text-white" : "bg-white"
                          }`}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="email"
                          className={`block text-sm font-medium ${textColor}`}
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className={`mt-1 focus:ring-green-600 focus:border-green-600 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-3 ${
                            darkMode ? "bg-gray-700 text-white" : "bg-white"
                          }`}
                        />
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="message"
                          className={`block text-sm font-medium ${textColor}`}
                        >
                          Message
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className={`shadow-sm focus:ring-green-600 focus:border-green-600 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md py-3 pl-3 pr-20 ${
                              darkMode ? "bg-gray-700 text-white" : "bg-white"
                            }`}
                            placeholder="Your message..."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`px-4 py-3 ${
                      darkMode ? "bg-gray-800" : "bg-gray-50"
                    } text-right sm:px-6`}
                  >
                    <button
                      type="submit"
                      className={`inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md ${
                        darkMode
                          ? "text-white bg-green-600 hover:bg-green-700"
                          : "text-white bg-green-600 hover:bg-green-700"
                      } hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 border border-gray-300 p-8 rounded-lg ${
            darkMode ? "bg-gray-800 border-gray-700" : ""
          }`}
        >
          <div className="px-4 sm:px-0">
            <h3 className={`text-lg font-medium leading-6 ${textColor}`}>
              Disclaimer
            </h3>
            <p
              className={`mt-4 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Please note that the information provided on this website is for
              general informational purposes only and should not be construed as
              professional advice. We make no representations or warranties of
              any kind, express or implied, about the completeness, accuracy,
              reliability, suitability, or availability of the information
              contained on this website. Any reliance you place on such
              information is strictly at your own risk.
            </p>
          </div>
        </div>

        <div
          className={`mt-16 border border-gray-300 p-8 rounded-lg ${
            darkMode ? "bg-gray-800 border-gray-700" : ""
          }`}
        >
          <div className="px-4 sm:px-0">
            <h3 className={`text-lg font-medium leading-6 ${textColor}`}>
              Location
            </h3>
          </div>

          <div className="mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.9115437651944!2d0.5415342156200626!3d52.90013437986499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d58f0d3d2221%3A0x9a49b9acd4aaa558!2s24%20Hipkin%20Rd%2C%20Dersingham%2C%20King&#39;s%20Lynn%20PE31%206XX%2C%20UK!5e0!3m2!1sen!2sus!4v1681338709831!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <footer className={`mt-16 py-8 ${footerBgColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className={`text-sm ${footerTextColor}`}>
                &copy; {new Date().getFullYear()} Your Company. All rights
                reserved.
              </div>
              <div className="flex mt-4 md:mt-0">
                <a
                  href="#"
                  className={`ml-6 hover:text-gray-300 transition duration-300`}
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className={`ml-6 hover:text-gray-300 transition duration-300`}
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className={`ml-6 hover:text-gray-300 transition duration-300`}
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className={`ml-6 hover:text-gray-300 transition duration-300`}
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;
