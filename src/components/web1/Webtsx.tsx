import React from "react";
import Logo from "@/assets/web1/logo.svg";
import computer from "@/assets/web1/image-computer.png";
import device from "@/assets/web1/image-devices.png";
import IconBlack from "@/assets/web1/icon-blacklist.svg";
import Iconpreview from "@/assets/web1/icon-preview.svg";
import Icontext from "@/assets/web1/icon-text.svg";
import twitter from "@/assets/web1/icon-twitter.svg";
import Instagram from "@/assets/web1/icon-instagram.svg";
import fBook from "@/assets/web1/icon-facebook.svg";
import google from "@/assets/web1/logo-google.png";
import hp from "@/assets/web1/logo-hp.png";
type Props = {};

export default function Webtsx({}: Props) {
  return (
    // Hero Section
    <>
      <section className="hero">
        <div className="section-container mb-40pt-16">
          <img src={Logo} alt="" className="mx-auto my-16" />
          <h3>A history of everything you copy</h3>

          <p className="mb-10 section-content">
            Clipboard allows you to tack you orgainize evrything you copy.
            Instally access your clipboard on all your device
          </p>

          <button className="button-container">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan hover:opacity-80 duration-200 
          "
            >
              Donwload for Ios
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue hover:opacity-80 duration-200 
          "
            >
              Donwload for Ios
            </a>
          </button>
        </div>
      </section>

      {/* Snippets Section */}
      <section className="snippets">
        <div className="section-container my-20 px-10">
          <h3>Kepp track of your snippets</h3>
          <p className="section-content mb-24">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            voluptas reprehenderit repellat eaque. Voluptate tempore tempora
            eius mollitia veritatis maxime, dignissimos eos libero animi debitis
            itaque excepturi laboriosam illo iste?
          </p>
        </div>
      </section>

      {/* Features Section */}

      <section id="features">
        <div id="section-container my-20 ">
          <div className="relative  flex flex-col  md:flex-row md:space-x-32">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={computer}
                alt=""
                className="md:absolute top-0 right-[50%]"
              />
            </div>
            {/* Items Container */}

            <div className="flex justify-center items-center flex-col mt-16 space-y-12 text-xl md:mb-60 md:text-left md:pl-16">
              {/* Item 1 */}

              <div>
                <h5>Quick Search</h5>
                <p className="max-w-md text-grayishBlue">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus provident quas dolorum debitis reiciendis, sed
                  corporis iusto optio atque placeat voluptatibus quos dolorem
                  adipisci modi minima nobis ratione maiores velit.
                </p>
              </div>

              {/* Item2 */}
              <div>
                <h5>Complete History</h5>
                <p className="max-w-md text-grayishBlue">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus provident quas dolorum debitis reiciendis, sed
                  corporis iusto optio atque placeat voluptatibus quos dolorem
                  adipisci modi minima nobis ratione maiores velit.
                </p>
              </div>

              {/* Item3 */}
              <div>
                <h5>Icould Sync</h5>
                <p className="max-w-md text-grayishBlue">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus provident quas dolorum debitis reiciendis, sed
                  corporis iusto optio atque placeat voluptatibus quos dolorem
                  adipisci modi minima nobis ratione maiores velit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access anywhere section */}

      <section id="access">
        <div className="section-container my-20">
          <h3>Access Clipboard AnyWhere</h3>
          <p className="section-content mb-24">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            voluptas reprehenderit repellat eaque. Voluptate tempore tempora
            eius mollitia veritatis maxime, dignissimos eos libero animi debitis
            itaque excepturi laboriosam illo iste?
          </p>
        </div>
      </section>

      <img src={device} alt="" className="mx-auto" />

      {/* Section SuperCharge */}

      <section id="supercharge">
        <div className="section-container my-20">
          <h3>SuperCharge your workflow</h3>

          <p className="section-content mb-16">
            We've got the tools to boost your product
          </p>

          {/* Itmes Container */}
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            {/* Items1 */}

            <div className="flex flex-col items-center space-y-5">
              <img src={IconBlack} alt="  " className="mb-6" />
              <h5>Create Blacklists</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippetys by content, category, web ,address
                ,application
              </p>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <img src={Icontext} alt="  " className="mb-6" />
              <h5>Create Blacklists</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippetys by content, category, web ,address
                ,application
              </p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <img src={Iconpreview} alt="  " className="mb-6" />
              <h5>Snack Preview</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippetys by content, category, web ,address
                ,application
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Refereces Section */}

      <div className="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src={twitter} alt="" />
          <img src={Instagram} alt="" />
          <img src={fBook} alt="" />
          <img src={hp} alt="" />
          <img src={google} alt="" />
        </div>
      </div>

      {/* Bottom Cta Section */}
      <div className="bottom">
        <div className="section-container my-20">
          <h3>Clipboard for ios and Macos</h3>
          <p className="section-content my-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            totam aperiam sunt error iure maxime earum odio aliquid
            reprehenderit? Neque, suscipit blanditiis. Dolorum, ducimus non
            mollitia accusantium blanditiis eum minima!
          </p>

          {/* Button Container */}
          <div className="button-container mt-12">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan hover:opacity-80 duration-200 
          "
            >
              Donwload for Ios
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue hover:opacity-80 duration-200 
          "
            >
              Donwload for Ios
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Image */}
            <img src={Logo} alt="" />

            <div className="flex flex-col items-center justify-between mb-10 space-y-6 md:flex-row md:space-y-0 md:mb-0 text-grayishBlue">
              {/* Menus */}
              <div className="flex items-center flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                {/* menu1 */}
                <div className="flex flex-col  space-y-4  text-center  md:text-left">
                  <div>
                    <a href="" className="hover:text-strongCyan">
                      FaQs
                    </a>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="" className="hover:text-strongCyan">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="" className="hover:text-strongCyan">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Socail Icons */}

            <div className="flex space-x-4 m-4 justify-between w-32 py-1">
              <a href="#">
                <img src={fBook} alt="" className="duration-200 ficon" />
              </a>

              <a href="#">
                <img src={twitter} alt="" className="duration-200 ficon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
