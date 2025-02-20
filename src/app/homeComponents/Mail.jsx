import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const Mail = () => {
  return (
    <section className="mb-14 mt-12 py-10">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="w-full h-full">
              <div className="relative h-full">
                <div className="relative w-full md:h-full min-h-96">
                  <Image
                    src="/i3.jpg"
                    alt="Contact Us"
                    fill
                    className="  object-cover lg:rounded-l-2xl rounded-2xl "
                  />
                </div>

                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block">
                    <a href="#" className="flex items-center mb-6">
                      <IoCallOutline className="text-purple-800 text-xl"></IoCallOutline>
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        470-601-1911
                      </h5>
                    </a>
                    <a href="#" className="flex items-center mb-6">
                      <IoMailOutline className="text-purple-800 text-xl"></IoMailOutline>
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        flowerluxe@gmail.com
                      </h5>
                    </a>
                    <a href="#" className="flex items-center">
                      <SlLocationPin className="text-purple-800 text-2xl"></SlLocationPin>
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        654 Sycamore Avenue, Meadowville, WA 76543
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-purple-800 font-manrope text-4xl font-semibold leading-10 mb-11">
              Reach Out To Us
            </h2>
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Email"
            />

            <textarea
              className="w-full h-24 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none pl-4 pt-2 mb-10"
              placeholder="Message"
            ></textarea>

            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-purple-800 bg-purple-700 shadow-sm">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mail;
