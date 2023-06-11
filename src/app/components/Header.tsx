import {
  ArrowRight,
  Email,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Phone,
} from "../assets/svg";
import { kanit } from "../utils/fonts";
import Button from "./Button";

const Header = () => {
  return (
    <header className="header-wrapper absolute w-full">
      <div className="container mx-auto">
        <div className="flex columns-2 justify-between py-3">
          <div className="header-contact flex text-white">
            <a
              href="mailto: markbensonopena@gmail.com"
              className="flex items-center hover:text-yellow"
            >
              <Email className="mr-3 h-6 w-6 text-white hover:text-yellow" />
              markbensonopena@gmail.com
            </a>
            <a
              href="tel: +639156768584"
              className="ml-5 flex items-center hover:text-yellow"
            >
              <Phone className="mr-3 h-6 w-6 text-white hover:text-yellow" />
              (+63) 915 676 8584
            </a>
          </div>
          <div className="flex items-center text-white">
            <a href="#">
              <Facebook
                width="26"
                height="26"
                className="ml-2 text-white hover:text-yellow"
              />
            </a>
            <a href="#">
              <Instagram
                width="26"
                height="26"
                className="ml-2 text-white hover:text-yellow"
              />
            </a>
            <a href="#">
              <Linkedin
                width="26"
                height="26"
                className="ml-2 text-white hover:text-yellow"
              />
            </a>
            <a href="#">
              <Github
                width="26"
                height="26"
                className="ml-2 text-white hover:text-yellow"
              />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-12 items-center rounded-md bg-white px-6 py-6">
          <div className="logo col-span-3">
            <span
              className={`${kanit.className} text-primary text-3xl font-bold text-blue`}
            >
              mark<span className="text-yellow">benson.</span>
            </span>
          </div>
          <div className="navigation col-span-7 pr-4">
            <ul className={`${kanit.className} flex flex-row justify-end`}>
              <li className="p-3">
                <a href="#" className="hover:text-yellow">
                  Home
                </a>
              </li>
              <li className="p-3">
                <a href="#" className="hover:text-yellow">
                  About
                </a>
              </li>
              <li className="p-3">
                <a href="#" className="hover:text-yellow">
                  Services
                </a>
              </li>
              <li className="p-3">
                <a href="#" className="hover:text-yellow">
                  Portfolio
                </a>
              </li>
              <li className="p-3">
                <a href="#" className="hover:text-yellow">
                  Testimonials
                </a>
              </li>
              <li className="p-3">
                <a href="#" className="hover:text-yellow">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="header-btn col-span-2 flex justify-end">
            <Button
              href="#"
              bgColor="yellow"
              textColor="blue"
              size="base"
              icon={<ArrowRight />}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
