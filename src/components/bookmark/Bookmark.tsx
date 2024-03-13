import React, { useState } from "react";
import Logo from "@/assets/bookmark/logo-bookmark.svg";
import chrome from "@/assets/bookmark/logo-chrome.svg";
import facebook from "@/assets/bookmark/icon-facebook.svg";
import twitter from "@/assets/bookmark/icon-twitter.svg";
import firefox from "@/assets/bookmark/logo-firefox.svg";
import opera from "@/assets/bookmark/logo-opera.svg";
import Img1 from "@/assets/bookmark/illustration-hero.svg";
import feature1 from "@/assets/bookmark/illustration-features-tab-1.svg";
import body1 from "@/assets/bookmark/bodybuilder-training-arm-with-resistance-band.jpg";
import exercise from "@/assets/bookmark/런닝.jpg";
import body2 from "@/assets/bookmark/운동.jpg";
import body3 from "@/assets/bookmark/조깅.jpg";
import { FaArrowDown } from "react-icons/fa";
type Props = {};

export default function Bookmark({}: Props) {
  const [state, setState] = useState(0);

  const [menuState, setMenuState] = useState(false);
  const handleClick = (e: any) => {
    const { dataset } = e.target;

    const { target } = dataset;

    let match = String(target).replace(/[a-zA-Z-]/g, "");

    setState(Number(match));
  };

  return (
    <>
      <div className="container mx-auto p-6">
        {/* NavContainer */}
        <div className="flex mt-10 space-x-3 items-center justify-between ">
          <div className="z-30">
            <img src={Logo} alt="" />
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-10 uppercase  text-grayishViolet">
            <a href="#" className="tracking-widest hover:text-red">
              Features
            </a>
            <a href="#" className="tracking-widest hover:text-red">
              Features
            </a>
            <a href="#" className="tracking-widest hover:text-red">
              Features
            </a>

            <a
              href=""
              className="border-2 rounded-xl bg-red text-white shadow-md px-8 py-2 hover:text-red hover:bg-white"
            >
              Login
            </a>
          </div>

          {/* Hamburger Button*/}
          <button
            onClick={() => setMenuState(prev => !prev)}
            className={`z-30 ${
              menuState ? "block" : "open"
            }  md:hidden focus:outline-none hamburger`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`menu ${
            menuState ? "hidden" : "block"
          } fixed inset-0 flex z-20 flex-col items-center self-end w-full h-full max-h-screen px-6 py-1 pt-24 tracking-widest
          text-white uppercase divide-y divide-red-500 opacity-90 bg-veryDarkBlue`}
        >
          <div className="w-full py-3 text-center ">
            <a href="#features" className="hover:text-red block">
              Features
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#features" className="block hover:text-red">
              Download
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#features" className="block hover:text-red">
              Faq
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#features" className="block hover:text-red">
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}

      <section id="hero">
        {/* Container For Image & Content */}
        <div className="container flex flex-col-reverse p-6 space-y-5 mx-auto lg:flex-row lg:mb-0">
          {/* Content */}
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
              A Simple BookMark Manager
            </h1>

            <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              ratione esse cum minima inventore blanditiis repellat recusandae
              praesentium, ullam numquam maiores eveniet, fuga assumenda sunt
              quia officiis officia. Ratione, pariatur?
            </p>

            {/* BUttons Container */}

            <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
              <a
                href=""
                className="p-4 text-sm font-semibold border-2 text-white bg-blue-400 shadow-md border-blue-300 rounded-xl hover:text-slate-400"
              >
                Get It On Chrome
              </a>

              <a
                href=""
                className="p-4 text-sm font-semibold border-2 text-black bg-gray-300 shadow-md border-gray-300 rounded-xl hover:bg-gray-100"
              >
                Get It On Chrome
              </a>
            </div>
          </div>
          {/* Image */}

          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <div className="bgHero"></div>
            <img
              src={exercise}
              className="relative rounded-sm  z-10 lg:top-24 xl:top-0  overflow-x-visible"
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container mx-auto mt-16 px-6 md:mx-0">
          <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
          <p className="max-w-md mx-auto text-center text-grayishViolet">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            eveniet iusto nisi, fuga mollitia natus itaque possimus voluptatibus
            similique corrupti, ex eaque cumque fugiat, omnis architecto dicta
            sint veniam animi.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section id="tabs">
        {/* Tabs/Panels Container */}
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="bgTabs"></div>

          {/* Tabs Flex Container */}
          <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b-2 md:space-x-10 md:flex-row ">
            {/* Tab1 */}
            <div
              onClick={handleClick}
              data-target="panel-0"
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 md:w-1/3 hover:text-red tab"
            >
              <div className="py-5 border-b-4 border-red" data-target="panel-0">
                Simple Bookmarking
              </div>
            </div>

            {/* Tab2 */}
            <div
              onClick={handleClick}
              data-target="panel-1"
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 md:w-1/3 hover:text-red tab"
            >
              <div className="py-5 " data-target="panel-1">
                Speedy Searching
              </div>
            </div>
            {/* Tab3 */}
            <div
              onClick={handleClick}
              data-target="panel-2"
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 md:w-1/3 hover:text-red tab"
            >
              <div className="py-5 " data-target="panel-2">
                Easy Sharing
              </div>
            </div>
          </div>

          {/* Tab Penels */}

          <div className={`container mx-auto ${state === 0 ? "" : "hidden"}`}>
            {/* Penel1 */}
            <div className="flex flex-col gap-5 md:flex-row md:space-y-7 panel penel-1 py-5">
              <div className="flex justify-center md:w-1/2">
                {/* Penel Image */}
                <img className="relative z-10 rounded-xl" src={body1} alt="" />
              </div>

              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left uppercase">
                  shoulder
                </h3>

                <p className="max-w-md text-center text-gray-300 md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione ipsam molestias id veritatis voluptatum corrupti illum
                  et iusto. Dicta deserunt fugit ad, consequatur repudiandae est
                  sint similique totam quia ut.
                </p>

                <a
                  href="#"
                  className="p-4 text-sm text-center font-semibold border-2 text-white bg-blue-400 shadow-md border-blue-300 rounded-xl hover:text-slate-900"
                >
                  Get It On Chrome
                </a>
              </div>
            </div>
          </div>

          <div
            className={` ${
              state === 1 ? "" : "hidden"
            } container  mt-12 mx-auto`}
          >
            {/* Penel2 */}
            <div className="flex flex-col gap-5 md:flex-row md:space-y-7 panel penel-1 py-5">
              <div className="flex justify-center md:w-1/2">
                {/* Penel Image */}
                <img className="relative z-10 rounded-xl" src={body2} alt="" />
              </div>

              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left uppercase">
                  Chest
                </h3>

                <p className="max-w-md text-center text-gray-300 md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione ipsam molestias id veritatis voluptatum corrupti illum
                  et iusto. Dicta deserunt fugit ad, consequatur repudiandae est
                  sint similique totam quia ut.
                </p>

                <a
                  href="#"
                  className="p-4 text-sm text-center font-semibold border-2 text-white bg-blue-400 shadow-md border-blue-300 rounded-xl hover:text-slate-900"
                >
                  Get It On Chrome
                </a>
              </div>
            </div>
          </div>

          <div
            className={`container ${state === 2 ? "" : "hidden"} mt-12 mx-auto`}
          >
            {/* Penel3 */}
            <div className="flex flex-col gap-5 md:flex-row md:space-y-7 panel penel-1 py-5">
              <div className="flex justify-center md:w-1/2">
                {/* Penel Image */}
                <img className="relative z-10 rounded-xl" src={body3} alt="" />
              </div>

              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left uppercase">
                  Leg
                </h3>

                <p className="max-w-md text-center text-gray-300 md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione ipsam molestias id veritatis voluptatum corrupti illum
                  et iusto. Dicta deserunt fugit ad, consequatur repudiandae est
                  sint similique totam quia ut.
                </p>

                <a
                  href="#"
                  className="p-4 text-sm text-center font-semibold border-2 text-white bg-blue-400 shadow-md border-blue-300 rounded-xl hover:text-slate-900"
                >
                  Get It On Chrome
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Heading */}
      <div className="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Download the extension
          </h2>

          <p className="max-w-md mx-auto text-center text-grayishViolet">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            fugiat vero porro, necessitatibus illum id sed minus pariatur
            nesciunt magnam! Ipsa natus atque, illum possimus quos eum
            laudantium sint. Adipisci.
          </p>
        </div>
      </div>

      {/* Downloads boxes */}
      <div className="download-boxes py-32">
        <div className="relative flex flex-col items-center max-w-5xl mx-auto md:flex-row space-y-10 md:space-x-4 md:space-y-0 md:px-6">
          {/* Box1 */}

          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            {/* Image */}
            <div className="flex justify-center">
              <img src={chrome} alt="" />
            </div>

            {/* Text */}
            <div className="pt-6 text-xl font-bold">Add To Chrome</div>
            <p className="text-gray-400">Minimum Version 62</p>

            {/* Dots */}
            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="#"
                className="block w-full py-3 text-white duration-200 bg-black rounded-xl hover:bg-red hover:text-white border-2 hover:border-red"
              >
                Add & To Cart
              </a>
            </div>
          </div>

          {/* box2 */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col md:mt-10 w-full py-6 space-y-4 text-center rounded-lg shadow-lg ">
              <div className="flex justify-center">
                <img src={firefox} alt="" />
              </div>

              {/* Text */}
              <div className="pt-6 text-xl font-bold">Add To firefox</div>
              <p className="text-gray-400">Minimum Version 62</p>

              {/* Dots */}
              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="block w-full py-3 text-white duration-200 bg-black rounded-xl hover:bg-red hover:text-white border-2 hover:border-red"
                >
                  Add & To Cart
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full md:mt-16 py-6 space-y-4  text-center rounded-lg shadow-lg ">
              <div className="flex justify-center">
                <img src={opera} alt="" />
              </div>

              {/* Text */}
              <div className="pt-6 text-xl font-bold">Add To Opera</div>
              <p className="text-gray-400">Minimum Version 62</p>

              {/* Dots */}
              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="block w-full py-3 text-white duration-200 bg-black rounded-xl hover:bg-red hover:text-white border-2 hover:border-red"
                >
                  Add & To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faq Heading */}
      <div className="faq">
        <div className="container mx-auto">
          <h2 className="mb-2 text-3xl font-semibold text-center md:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="max-w-lg mx-auto px-6 text-center text-grayishViolet">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam
            pariatur, ex quidem esse enim quas ab illum deserunt voluptate ea
            dicta exercitationem quis libero dolorum ipsum repudiandae, tempore
            officiis.
          </p>
        </div>
      </div>

      {/* Faq Accordion */}
      <section className="faq-accodion">
        {/* Main Container */}
        <div className="container mx-auto px-6 mb-32">
          {/*Accodianon COntainer */}
          <div className="max-w-2xl mx-auto mt-8 overflow-hidden">
            {/* Tab1 */}

            <div className="py-1 border-b outline-none group">
              <div className="flex items-center justify-between text-gray-500 transition-all duration-500 cursor-pointer">
                {/* Tab TItle */}

                <div className="traisition duration-500 ease group-hover:text-red-500">
                  Waht is BookMark?
                </div>

                {/* Arrow */}

                <div className="transition duration-500 ease group-focus:-rotate-180 group-hover:text-red">
                  <FaArrowDown />
                </div>
              </div>

              {/* Tab inner Content */}

              <div className="overflow-hidden transition-all duration-500 ease-out group-hover:max-h-screen max-h-0">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  numquam esse obcaecati inventore vero neque doloribus magni
                  libero consequuntur velit at quis recusandae eum perspiciatis
                  illum, saepe excepturi laboriosam iste.
                </p>
              </div>
            </div>

            <div className="py-1 border-b outline-none group">
              <div className="flex items-center justify-between text-gray-500 transition-all duration-500 cursor-pointer">
                {/* Tab TItle */}

                <div className="traisition duration-500 ease group-hover:text-red-500">
                  is ther mobile app?
                </div>

                {/* Arrow */}

                <div className="transition duration-500 ease group-focus:-rotate-180 group-hover:text-red">
                  <FaArrowDown />
                </div>
              </div>

              {/* Tab inner Content */}

              <div className="overflow-hidden transition-all duration-500 ease-out group-hover:max-h-screen max-h-0">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  numquam esse obcaecati inventore vero neque doloribus magni
                  libero consequuntur velit at quis recusandae eum perspiciatis
                  illum, saepe excepturi laboriosam iste.
                </p>
              </div>
            </div>

            {/* Tab3 */}
            <div className="py-1 border-b outline-none group">
              <div className="flex items-center justify-between text-gray-500 transition-all duration-500 cursor-pointer">
                {/* Tab TItle */}

                <div className="traisition duration-500 ease group-hover:text-red-500">
                  How Can i request new Browser?
                </div>

                {/* Arrow */}

                <div className="transition duration-500 ease group-focus:-rotate-180 group-hover:text-red">
                  <FaArrowDown />
                </div>
              </div>

              {/* Tab inner Content */}

              <div className="overflow-hidden transition-all duration-500 ease-out group-hover:max-h-screen max-h-0">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  numquam esse obcaecati inventore vero neque doloribus magni
                  libero consequuntur velit at quis recusandae eum perspiciatis
                  illum, saepe excepturi laboriosam iste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NewsLetter Section */}

      <section id="newsletter" className="bg-blue-500">
        <div className="max-w-lg mx-auto py-24">
          <p className="mb-6 text-lg tracking-widest text-center text-white uppercase">
            35,000+ Already Joined
          </p>

          <h2 className="px-3 mb-3 text-3xl font-semibold text-center text-white md:text-4xl">
            Stay up-to-date With what we're doing
          </h2>

          {/* FOrm */}
          <form
            className="form flex flex-col items-start justify-center max-w-2xl 
          mx-auto space-y-6 text-base px-6 md:flex-row md:space-x-4 md:space-y-0"
          >
            {/* Input & button Container */}
            <div className="flex flex-col  justify-between items-center md:gap-4 mx-auto md:flex-row md:mx-0">
              <input
                type="email"
                className="flex-1 px-6 pb-2  focus:outline-none border-white md:mr-3 py-4 border rounded-xl hover:border-blue-500 md:space-y-0 md:space-x-3  "
              />
              <input
                type="submit"
                className="px-6 text-center mt-4 md:mt-0 py-4 inline-flex font-semibold text-white transform duration-200 hover:opacity-90  bg-red rounded-lg "
              />
            </div>
          </form>
        </div>

        {/* Footer */}

        <footer className="py-16 bg-veryDarkBlue">
          {/* Footer Flex Containr */}

          <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
            {/* Logo */}

            <div className="flex flex-col items-center justify-between space-y-8 md:space-y-0  text-grayishViolet md:space-x-14 md:flex-row">
              <img src={Logo} alt="" className="mb-1" />

              <a href="#" className="uppercase hover:text-red">
                Features
              </a>

              <a href="#" className="uppercase hover:text-red">
                Download
              </a>

              <a href="#" className="uppercase hover:text-red">
                FAQ
              </a>

              {/* Social Container */}

              <div className="flex space-x-10">
                <a href="#">
                  <img src={twitter} alt="" />
                </a>

                <a href="#">
                  <img src={facebook} alt="" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
