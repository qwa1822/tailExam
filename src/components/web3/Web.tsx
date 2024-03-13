import React, { useState } from "react";
import Logo from "@/assets/web3/logo.svg";
import IconBrand from "@/assets/web3/icon-brand-recognition.svg";
import fb from "@/assets/web3/icon-facebook.svg";
import twitter from "@/assets/web3/icon-twitter.svg";
import instagram from "@/assets/web3/icon-instagram.svg";
import IconCustom from "@/assets/web3/icon-fully-customizable.svg";
import IconDetail from "@/assets/web3/icon-detailed-records.svg";
import working from "@/assets/web3/illustration-working.svg";

interface PropsState {
  search: string;
  errorMessage: {
    error: string;
  };
  place: boolean;
}

export default function Web() {
  // NavContainer

  const [clicked, setClicked] = useState(false);

  const [allMenu, setMenu] = useState<PropsState>({
    search: "",
    errorMessage: {
      error: "",
    },
    place: false,
  });

  console.log(allMenu);

  const onHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setMenu(prev => {
      return {
        ...prev,
        [name]: value,
        errorMessage: {
          ...prev.errorMessage,
          error:
            !/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(
              value
            )
              ? "not Valid"
              : "",
        },
      };
    });
  };

  return (
    <>
      <nav className="relative mx-auto pt-6">
        {/* Flex Container for all items */}
        <div className="flex items-center justify-between">
          {/* Flex Container FOr logo/Menu */}
          <div className="flex items-center space-x-20">
            {/* Logo */}
            <img src={Logo} alt="" />

            {/* Left Menu */}
            <div className="hidden space-x-8 font-bold lg:flex">
              <a href="" className="text-grayishViolet hover:text-veryDarkBlue">
                Features
              </a>
              <a href="" className="text-grayishViolet hover:text-veryDarkBlue">
                Pricing
              </a>

              <a href="" className="text-grayishViolet hover:text-veryDarkBlue">
                Resource
              </a>
            </div>
          </div>

          {/* Right Buttons Menu */}

          <div className="hidden lg:flex items-center space-x-6 font-bold text-grayishViolet">
            <div className="hover:text-veryDarkBlue ">Login</div>
            <a
              href=""
              className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
            >
              Sign Up
            </a>
          </div>

          {/* @todo Hamburger Menu */}

          <button
            id="menu-btn"
            onClick={() => setClicked(prev => !prev)}
            className="block hamburger lg:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>

          {/* @todo Mobile Menu */}
        </div>

        <div
          id="menu"
          className={`absolute ${
            clicked ? "flex" : "hidden"
          } p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100`}
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 text-white rounded-sm">
            <a href="#" className="w-full text-center">
              Features
            </a>
            <a href="#" className="w-full text-center">
              Pricing
            </a>
            <a href="#" className="w-full text-center">
              Resource
            </a>
            <a href="#" className="w-full text-center">
              Login
            </a>
            <a
              href="#"
              className="w-full pt-6 border-t border-gray-400 text-center"
            >
              Features
            </a>
            <a
              href="#"
              className="w-full py-3 rounded-full bg-cyan text-center"
            >
              Features
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          {/* Content Container */}

          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 xl:mb-52 lg:w-1/2 ">
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
              More than just shorter Links
            </h1>

            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam a sunt officia quia. Doloribus veniam cupiditate quidem,
              consequuntur fuga laudantium corrupti magni nulla, distinctio
              atque, eveniet ipsam doloremque inventore aut!
            </p>

            <div className="mx-auto lg:mx-0">
              <a
                href=""
                className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Image */}

          <div className="mb-24 mx-auto md:w-180  lg:w-1/2 lg:mb-0">
            <img src={working} alt="" />
          </div>
        </div>
      </section>

      {/* Shorteten Section */}

      <div id="shorten" className="relative bg-gray-100">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <form className="relative flex flex-col -mt-20 p-10 w-full space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3">
            <input
              onChange={onHandler}
              name="search"
              type="url"
              placeholder="shorten a Link here"
              className={`flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none ${
                allMenu.errorMessage.error.length > 1 ? "border-red" : ""
              }`}
            />
            <button
              type="submit"
              className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2"
            >
              Shorten It
            </button>

            {/* Error Message */}
            <div
              className={`absolute left-7 bottom-3 text-red text-sm italic ${
                allMenu.place ? "border-red" : ""
              }`}
            >
              {allMenu.errorMessage.error && allMenu.errorMessage.error}
            </div>
          </form>

          {/* Link 1 */}
          {/* bg-white text-cyan */}

          <div className="flex flex-col items-center  -mt-20 md:flex-row w-full p-6 justify-between">
            {/*  */}
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://frontedmentod.io
            </p>

            <div className="flex flex-col items-center flex-1 space-x-4 justify-end space-y-4  md:flex-row md:space-y-0 ">
              <div className="font-bold text-cyan">https://rel.ink/k4Ikyk</div>
              <button className="rounded-lg text-white  bg-cyan p-2 px-8 hover:opacity-50 focus:outline-none">
                Click
              </button>
            </div>
          </div>

          {/* Link2 */}
          <div className="flex flex-col items-center  -mt-20 md:flex-row w-full p-6 justify-between">
            {/*  */}
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://twitter.com
            </p>

            <div className="flex flex-col items-center flex-1 space-x-4 justify-end space-y-4  md:flex-row md:space-y-0 ">
              <div className="font-bold text-cyan">https://rel.ink/k4Ikyk</div>
              <button className="rounded-lg text-white  bg-darkViolet p-2 px-8 hover:opacity-50 focus:outline-none">
                Click
              </button>
            </div>
          </div>

          {/* Link3 */}
          <div className="flex flex-col items-center  -mt-20 md:flex-row w-full p-6 justify-between">
            {/*  */}
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://linkedin.com/frontend-mentor
            </p>

            <div className="flex flex-col items-center flex-1 space-x-4 justify-end space-y-4  md:flex-row md:space-y-0 ">
              <div className="font-bold text-cyan">https://rel.ink/k4Ikyk</div>
              <button className="rounded-lg text-white  bg-cyan p-2 px-8 hover:opacity-50 focus:outline-none">
                Click
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* State Section */}

      <section id="status" className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            quasi. Quidem aspernatur, fugit odit error maxime odio magnam
            sapiente similique et iusto. Consequatur in ut nemo adipisci ad fuga
            dolorum.
          </p>
        </div>
      </section>

      {/* Feature Box Section */}

      <section id="features" className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          {/* Horizontal Line */}
          <div className="hidden absolute top-24 left-16 h-3 bg-cyan md:block w-1/2"></div>

          {/* Vertical Lines */}

          <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

          {/* Box1 */}
          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* Image Position */}

            <div className="absolute -ml-10 -top-10 md:left-16 left-1/2">
              {/* Image Container For Background & COntent */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkBlue">
                <img src={IconBrand} alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-xl text-center font-bold capitalize md:text-left">
              Brand Reconginition
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ab
              velit! At rem enim, corporis eos impedit assumenda, magni debitis
              similique unde adipisci expedita fugit quaerat. Dolore molestias
              rem cum!
            </p>
          </div>

          {/* Box2 */}
          <div className="relative flex flex-col mt-24 md:mt-8 p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* Image Position */}

            <div className="absolute -ml-10 -top-10 md:left-16 left-1/2">
              {/* Image Container For Background & COntent */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkBlue">
                <img src={IconDetail} alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-xl text-center font-bold capitalize md:text-left">
              Detaqild Records
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ab
              velit! At rem enim, corporis eos impedit assumenda, magni debitis
              similique unde adipisci expedita fugit quaerat. Dolore molestias
              rem cum!
            </p>
          </div>

          <div className="relative flex flex-col mt-24 md:mt-16 p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* Image Position */}

            <div className="absolute -ml-10 -top-10 md:left-16 left-1/2">
              {/* Image Container For Background & COntent */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkBlue">
                <img src={IconCustom} alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-xl text-center font-bold capitalize md:text-left">
              Fully customizable
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ab
              velit! At rem enim, corporis eos impedit assumenda, magni debitis
              similique unde adipisci expedita fugit quaerat. Dolore molestias
              rem cum!
            </p>
          </div>
        </div>
      </section>

      {/* Cta Section */}
      <section id="cta" className="py-24 bg-darkViolet">
        <div className="flex flex-col p-2 space-y-6">
          <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
            Boost your links today
          </h5>

          <button className="px-10 py-6 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:opacity-80 md:py-3 focus:outline-none">
            Click
          </button>
        </div>
      </section>

      <div className="py-16 bg-veryDarkBlue ">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
          {/* logo */}

          <img src={Logo} alt="" />

          {/* Menu Container */}
          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
            {/* Menu1 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Features
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href=""
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Link
                </a>
                <a
                  href=""
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Link
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">Blog</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href=""
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Developer
                </a>
                <a
                  href=""
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Support
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Company
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href=""
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  About
                </a>
                <a
                  href=""
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Team
                </a>
                <a
                  href=""
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Careers
                </a>

                <a
                  href=""
                  className="capitalize text-grayishViolet hover:text-cyan"
                >
                  Content
                </a>
              </div>
            </div>
          </div>

          {/* Sociail Container */}
          <div className="flex space-x-6">
            <a href="#">
              <img src={fb} alt="" />
            </a>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
