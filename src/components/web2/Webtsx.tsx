import WomanGirl from "@/assets/web2/woman-exercise-workout-gym-fitness-breaking-relax-holding-dumbbell.jpg";
import Logo from "@/assets/web2/logo.svg";

import MiddleFitness from "@/assets/web2/athletic-man-woman-with-dumbbells-training-practicing-gym.jpg";
import fb from "@/assets/web2/icon-facebook.svg";
import instagram from "@/assets/web2/icon-instagram.svg";
import pinterest from "@/assets/web2/icon-pinterest.svg";
import twitter from "@/assets/web2/icon-twitter.svg";
import close from "@/assets/web2/icon-close.svg";
import hambuger from "@/assets/web2/icon-hamburger.svg";
import DeskCuriosity from "@/assets/web2/desktop/image-curiosity.jpg";
import DeskFisheye from "@/assets/web2/desktop/image-fisheye.jpg";
import DeskNight from "@/assets/web2/desktop/image-night-arcade.jpg";
import Desksoccer from "@/assets/web2/desktop/image-soccer-team.jpg";
import DeskDepp from "@/assets/web2/desktop/image-deep-earth.jpg";
import DeskImageFromAbove from "@/assets/web2/desktop/image-from-above.jpg";
import DeskImagePocket from "@/assets/web2/desktop/image-pocket-borealis.jpg";
import DeskImageGrid from "@/assets/web2/desktop/image-grid.jpg";
import DeskImageHero from "@/assets/web2/desktop/image-hero.jpg";
import DeskInteractive from "@/assets/web2/desktop/image-interactive.jpg";

import MobileCuriosity from "@/assets/web2/mobile/image-curiosity.jpg";
import MobileDeep from "@/assets/web2/mobile/image-deep-earth.jpg";
import MobileFisheye from "@/assets/web2/mobile/image-fisheye.jpg";
import MobileNight from "@/assets/web2/mobile/image-night-arcade.jpg";
import MobileSoccer from "@/assets/web2/mobile/image-soccer-team.jpg";
import MobileImageFromAbove from "@/assets/web2/mobile/image-from-above.jpg";
import MobileImagePocket from "@/assets/web2/mobile/image-pocket-borealis.jpg";
import MobileImageGrid from "@/assets/web2/mobile/image-grid.jpg";
import MobileImageHero from "@/assets/web2/mobile/image-hero.jpg";
import MobileInteractive from "@/assets/web2/mobile/image-interactive.jpg";
import { useState } from "react";

type Props = {};

export default function Web2tsx({}: Props) {
  const [state, setState] = useState(false);
  const HamburgetClasse = state ? "open" : "";

  console.log(HamburgetClasse);

  return (
    // Hero Section
    <>
      <div id="hero">
        {/* Hero Container */}
        <div>
          {/* Menu/Logo Container[left ,right]*/}
          <div className="container max-w-6xl mx-auto px-6 py-12  ">
            <div className="flex items-center justify-between font-bold">
              {/* Logo(Left) */}
              <img src={Logo} alt="" />

              {/* Menu(Right) */}
              <div className="hidden h-10 md:flex text-white md:space-x-8">
                <div className="group ">
                  <a href="#">About</a>
                  <div className="mx-2 group-hover:border group-hover:border-blue-50"></div>
                </div>

                <div className="group">
                  <a href="#">Products</a>
                  <div className="mx-2 group-hover:border group-hover:border-blue-50"></div>
                </div>

                <div className="group">
                  <a href="#">Suppoert</a>
                  <div className="mx-2 group-hover:border group-hover:border-blue-50"></div>
                </div>

                <div className="group">
                  <a href="#">Event</a>
                  <div className="mx-2 group-hover:border group-hover:border-blue-50"></div>
                </div>
              </div>

              {/* Todo Hambuger Button */}

              <div className="md:hidden">
                <button
                  onClick={() => setState(prev => !prev)}
                  id="menu-btn"
                  type="button"
                  className={` ${HamburgetClasse} z-40  block hamburger md:hidden focus:outline-none`}
                >
                  <span className="hamburger-top"></span>
                  <span className="hamburger-middle"></span>
                  <span className="hamburger-bottom"></span>
                </button>
              </div>
            </div>

            {/* Mobile Hambuger  Menu*/}
            <div
              id="menu"
              className={` ${
                HamburgetClasse === "open" ? "flex" : "hidden"
              } absolute top-0  bottom-0 left-0    flex-col    w-full min-h-screen py-1 pt-40 pl-12 space-y-4 text-lg text-white uppercase bg-black`}
            >
              <a href="#" className="hover:text-pink-500">
                Home
              </a>
              <a href="" className="hover:text-pink-500">
                About
              </a>
              <a href="#" className="hover:text-pink-500">
                Contact
              </a>
              <a href="#" className="hover:text-pink-500">
                Careers
              </a>
              <a href="#" className="hover:text-pink-500">
                Event
              </a>
            </div>

            {/* TOdo -Mobile Menu */}
            <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
              Impressive Experiences That Deliver
            </div>
          </div>
        </div>
      </div>
      {/* COntentTop */}
      <div className="feature">
        <div className="relative container  flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          {/* Image */}

          <img src={MiddleFitness} alt="" />

          {/* Text Container */}
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left ">
              The Leader in interctive VR
            </h2>

            <p className="max-w-md text-center md:text-left">
              Founded in 2011, Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Autem culpa commodi id iure dolor ducimus,
              adipisci impedit nam corporis aliquid, voluptates recusandae
              doloremque nulla quam. Molestiae molestias exercitationem debitis
              voluptates.
            </p>
          </div>
        </div>
      </div>
      {/* ContentSection */}
      <div className="creations">
        {/* Creations Container */}

        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          {/* Createions Header */}

          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Crations
            </h2>

            <button className="btn hidden  md:block">See All</button>
          </div>
          {/* Items Container */}
          <div className="items-container">
            {/* Itmes */}
            <div className="group item">
              <img
                src={DeskDepp}
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* Mobile Image */}
              <img src={MobileDeep} alt="" className="w-full md:hidden" />

              {/* Item Gadient */}
              <div className="item-gradient"></div>
              {/* Item Text */}

              <h5>Deep Earth</h5>
            </div>
            {/* Items2 */}
            <div className="group item">
              <img
                src={DeskNight}
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* Mobile Image */}
              <img src={MobileNight} alt="" className="w-full md:hidden" />

              {/* Item Gadient */}
              <div className="item-gradient"></div>
              {/* Item Text */}

              <h5>Night Arcade</h5>
            </div>

            {/* items3*/}
            <div className="group item">
              <img
                src={Desksoccer}
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* Mobile Image */}
              <img src={MobileSoccer} alt="" className="w-full md:hidden" />

              {/* Item Gadient */}
              <div className="item-gradient"></div>
              {/* Item Text */}

              <h5>Soccer Team VR</h5>
            </div>

            {/* items3 */}
            <div className="group item">
              <img
                src={DeskImageGrid}
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* Mobile Image */}
              <img src={MobileImageGrid} alt="" className="w-full md:hidden" />

              {/* Item Gadient */}
              <div className="item-gradient"></div>
              {/* Item Text */}

              <h5>The Grid</h5>
            </div>
          </div>

          {/* Container2 */}
          <div className="items-container mt-10">
            {/* Itmes */}
            <div className="group item">
              <img
                src={DeskImageFromAbove}
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* Mobile Image */}
              <img
                src={MobileImageFromAbove}
                alt=""
                className="w-full md:hidden"
              />

              {/* Item Gadient */}
              <div className="item-gradient"></div>
              {/* Item Text */}

              <h5>From Up Above Vr</h5>
            </div>
            {/* Items2 */}
            <div className="group item">
              <img
                src={DeskImagePocket}
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* Mobile Image */}
              <img
                src={MobileImagePocket}
                alt=""
                className="w-full md:hidden"
              />

              {/* Item Gadient */}
              <div className="item-gradient"></div>
              {/* Item Text */}

              <h5>Pocket Borealias</h5>
            </div>

            {/* items3*/}
            <div className="group item">
              <img
                src={DeskCuriosity}
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* Mobile Image */}
              <img src={MobileCuriosity} alt="" className="w-full md:hidden" />

              {/* Item Gadient */}
              <div className="item-gradient"></div>
              {/* Item Text */}

              <h5>Curious</h5>
            </div>

            {/* items3 */}
            <div className="group item">
              <img
                src={DeskFisheye}
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* Mobile Image */}
              <img src={MobileFisheye} alt="" className="w-full md:hidden" />

              {/* Item Gadient */}
              <div className="item-gradient"></div>
              {/* Item Text */}

              <h5>Make it Fisheye</h5>
            </div>
          </div>

          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn w-full md:hidden">See All</button>
          </div>
        </div>
      </div>
      <div className="bg-black ">
        {/* Container */}
        <div className="container max-w-6xl py-10 mx-auto">
          {/* Footer Flex Container */}
          <div className="flex flex-col items-center md:items-center mb-8 space-y-8 md:flex-row md:space-y-0 md:justify-between">
            {/* Menu && Logo Container */}

            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-5">
              {/* Logo */}
              <div className="h-8">
                <img src={Logo} className="w-48 md:ml-3" alt="" />{" "}
              </div>

              <div className="flex flex-col items-center space-y-4 font-bold md:ml-3 text-white md:flex-row md:space-x-4 md:space-y-0">
                {/* Item1 */}
                <div className="h-10 group">
                  <a href="#">Event</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                <div className="h-10 group">
                  <a href="#">Product</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Fiteness</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">MakeIt</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>
            {/* Social & copy COntainer */}

            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              {/* Icons Container */}
              <div className="flex items-center mx-auto justify-center space-x-7 md:justify-end">
                {/* Items1 */}
                <div className="h-8 group">
                  <a href="#">
                    <img src={fb} alt="" />
                  </a>
                </div>

                {/* 2 */}
                <div className="h-8 group">
                  <a href="#">
                    <img src={instagram} alt="" />
                  </a>
                </div>
                {/* 3 */}
                <div className="h-8 group">
                  <a href="#">
                    <img src={twitter} alt="" />
                  </a>
                </div>

                {/* 4 */}
                <div className="h-8 group">
                  <a href="#">
                    <img src={pinterest} alt="" />
                  </a>
                </div>
              </div>

              {/* Copy */}

              <div className="font-bold">
                $copy;2024 LoopStudioes All.Rights Reversed
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
