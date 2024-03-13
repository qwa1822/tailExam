import React from "react";
import Image from "@/assets/grid/bg-pattern-quotation.svg";
import jeanette from "@/assets/grid/image-jeanette.jpg";
import imageJonathan from "@/assets/grid/image-jonathan.jpg";
import imageKira from "@/assets/grid/image-kira.jpg";

import daniel from "@/assets/grid/image-daniel.jpg";
type Props = {};
export default function Grids({}: Props) {
  return (
    <div className="bg-gray-200">
      {/* Global Container */}

      {/* Grid Container */}
      <div className="grid gap-6 grid-cols-1 md:grid-rows-2 md:grid-cols-4 container mx-auto max-w-7xl p-2 md:p-10 ">
        {/* Box1 */}

        <div className="relative  text-white p-10 rounded-xl bg-purple-700 md:col-span-2">
          {/* Quotes Image */}
          <img
            src={Image}
            className="absolute top-3 right-10 scale-125 md:top-7 md:right:right-24 md:scale-150"
            alt=""
          />

          {/* box Hedaer */}
          <div className="flex z-10 space-x-4">
            <img
              src={daniel}
              className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              alt=""
            />

            <div className="text-sm">
              <h4 className="opacity-90">Daniel Cifford</h4>
              <p className="opacity-50">Daniel Cifford</p>
            </div>
          </div>

          <p className="relative z-10 mt-6 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            corporis, quae voluptatibus omnis inventore deserunt natus tenetur
            rerum dolores, porro at cupiditate sit consequuntur ipsa dicta saepe
            voluptates magni quos.
          </p>

          <p className="mt-6 opacity-50 line-clamp-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            porro cupiditate facilis numquam aspernatur delectus a cumque ut
            officia eos commodi totam nisi, nesciunt atque perspiciatis incidunt
            ipsa doloribus itaque? lorem-50 Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cum numquam veritatis minus incidunt,
            ad consectetur voluptate excepturi blanditiis doloribus, laborum
            repudiandae sapiente, atque ipsum tempore consequuntur cumque.
            Recusandae, delectus dolorem!
          </p>
        </div>

        {/* Box2 */}
        <div className="relative p-10 rounded-xl  text-white bg-gray-700">
          {/* Quotes Image */}
          <img
            src={Image}
            className="absolute top-3 right-10 scale-125 md:top-7 md:right:right-24 md:scale-150"
            alt=""
          />

          {/* box Hedaer */}
          <div className="flex z-10 space-x-4">
            <img
              src={jeanette}
              className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              alt=""
            />

            <div className="text-sm">
              <h4 className="opacity-90">Johnhan walters</h4>
              <p className="opacity-50">Daniel Cifford</p>
            </div>
          </div>

          <p
            className="relative
           mt-6 text-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            corporis, quae voluptatibus omnis inventore deserunt natus tenetur
            rerum dolores, porro at cupiditate sit consequuntur ipsa dicta saepe
            voluptates magni quos.
          </p>

          <p className="mt-6 opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            porro cupiditate facilis numquam aspernatur delectus a cumque ut
            officia eos commodi totam nisi, nesciunt atque perspiciatis incidunt
            ipsa doloribus itaque?
          </p>
        </div>

        {/* box3 */}
        <div className="  md:row-span-2 relative p-10 rounded-xl md:block  text-gray-700 bg-white">
          {/* Quotes Image */}
          <img
            src={Image}
            className="absolute top-3 right-10 scale-125 md:top-7 md:right:right-24 md:scale-150"
            alt=""
          />

          {/* box Hedaer */}
          <div className="flex z-10 space-x-4">
            <img
              src={imageKira}
              className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              alt=""
            />

            <div className="text-sm">
              <h4 className="opacity-90">Johnhan walters</h4>
              <p className="opacity-50">Daniel Cifford</p>
            </div>
          </div>
          {/* Large Text */}
          <p
            className="relative
           mt-6 text-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            corporis, quae voluptatibus omnis inventore deserunt natus tenetur
            rerum dolores, porro at cupiditate sit consequuntur ipsa dicta saepe
            voluptates magni quos.
          </p>
          {/* Small Text */}
          <p className="mt-6 opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            porro cupiditate facilis numquam aspernatur delectus a cumque ut
            officia eos commodi totam nisi, nesciunt atque perspiciatis incidunt
            ipsa doloribus itaque?
          </p>
        </div>

        {/* box-4 */}
        <div className=" relative p-10 rounded-xl  text-gray-700 bg-white">
          {/* Quotes Image */}
          <img
            src={Image}
            className="absolute top-3 right-10 scale-125 md:top-7 md:right:right-24 md:scale-150"
            alt=""
          />

          {/* box Hedaer */}
          <div className="flex z-10 space-x-4">
            <img
              src={imageJonathan}
              className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              alt=""
            />

            <div className="text-sm">
              <h4 className="opacity-90">Johnhan walters</h4>
              <p className="opacity-50">Daniel Cifford</p>
            </div>
          </div>
          {/* Large Text */}
          <p
            className="relative
           mt-6 text-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            corporis, quae voluptatibus omnis inventore deserunt natus tenetur
            rerum dolores, porro at cupiditate sit consequuntur ipsa dicta saepe
            voluptates magni quos.
          </p>
          {/* Small Text */}
          <p className="mt-6 opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            porro cupiditate facilis numquam aspernatur delectus a cumque ut
            officia eos commodi totam nisi, nesciunt atque perspiciatis incidunt
            ipsa doloribus itaque?
          </p>
        </div>

        {/* Box5 */}
        <div className="relative p-10 rounded-xl md:col-span-2  text-white bg-gray-700">
          {/* Quotes Image */}
          <img
            src={Image}
            className="absolute top-3 right-10 scale-125 md:top-7 md:right:right-24 md:scale-150"
            alt=""
          />

          {/* box Hedaer */}
          <div className="flex z-10 space-x-4">
            <img
              src={imageKira}
              className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              alt=""
            />

            <div className="text-sm">
              <h4 className="opacity-90">Johnhan walters</h4>
              <p className="opacity-50">Daniel Cifford</p>
            </div>
          </div>

          <p
            className="relative
           mt-6 text-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            corporis, quae voluptatibus omnis inventore deserunt natus tenetur
            rerum dolores, porro at cupiditate sit consequuntur ipsa dicta saepe
            voluptates magni quos.
          </p>

          <p className="mt-6 opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            porro cupiditate facilis numquam aspernatur delectus a cumque ut
            officia eos commodi totam nisi, nesciunt atque perspiciatis incidunt
            ipsa doloribus itaque?
          </p>
        </div>

        {/* box6 */}
        <div className="  relative p-10 rounded-xl  text-gray-700 md:hidden bg-white">
          {/* Quotes Image */}
          <img
            src={Image}
            className="absolute top-3 right-10 scale-125 md:top-7 md:right:right-24 md:scale-150"
            alt=""
          />

          {/* box Hedaer */}
          <div className="flex z-10 space-x-4">
            <img
              src={imageKira}
              className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              alt=""
            />

            <div className="text-sm">
              <h4 className="opacity-90">Johnhan walters</h4>
              <p className="opacity-50">Daniel Cifford</p>
            </div>
          </div>
          {/* Large Text */}
          <p
            className="relative
           mt-6 text-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            corporis, quae voluptatibus omnis inventore deserunt natus tenetur
            rerum dolores, porro at cupiditate sit consequuntur ipsa dicta saepe
            voluptates magni quos.
          </p>
          {/* Small Text */}
          <p className="mt-6 opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            porro cupiditate facilis numquam aspernatur delectus a cumque ut
            officia eos commodi totam nisi, nesciunt atque perspiciatis incidunt
            ipsa doloribus itaque?
          </p>
        </div>
      </div>
    </div>
  );
}
