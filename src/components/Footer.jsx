import { FaGithub } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-pink-100">
      <footer className="footer w-11/12 md:container xl:w-11/12 mx-auto text-black/70 py-10">
        <div>
          <h2 className="font-bold text-xl md:text-2xl text-purple-800">
            Flower Luxe
          </h2>
          <p className="w-[70%]">
            We believe in delivering not just flowers but happiness.
          </p>
        </div>
        <nav>
          <h6 className="font-bold text-lg mb-4 text-black/80">About</h6>
          <a className=" link-hover">Home</a>
          <a className=" link-hover">Service</a>
          <a className="link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg mb-4 text-black/80">Company</h6>
          <a className="link-hover">Why Flower Luxe</a>
          <a className="link-hover">About</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg mb-4 text-black/80">Support</h6>
          <a className="link-hover">Terms of use</a>
          <a className="link-hover">Privacy policy</a>
          <a className="link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="w-11/12 md:container xl:w-11/12 mx-auto pb-10">
        <div className="border border-t-1 border-black/30 my-10 w-full"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-black/80 font-medium">
            Copyright © {new Date().getFullYear()} - All right reserved by
            Flower luxe.
          </p>
          <div className="flex gap-4 mt-5 md:mt-0">
            <a
              href="https://www.facebook.com/profile.php?id=100089745247384"
              target="_blank"
            >
              <FaFacebook className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
            </a>
            <a href="https://github.com/fatemaDiba" target="_blank">
              <FaGithub className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer"></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/fatema-tabassum-diba/"
              target="_blank"
            >
              <FaLinkedin className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
