import { CiSearch } from "react-icons/ci";
import Image1 from "@/assets/image1.jpg";
import Image2 from "@/assets/image2.jpg";
import Image3 from "@/assets/image3.jpg";
import Image4 from "@/assets/image4.jpg";
import Image5 from "@/assets/image5.jpg";
import Image6 from "@/assets/image6.jpg";
import bookMark from "@/assets/bookmark.svg";
type Props = {};

export default function Image({}: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-50">
      {/* Card Container */}

      <div className="bg-white p-6 space-y-10 shadow-2xl rounded-3xl md:p-40">
        {/* Menu Container */}

        <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
          {/* Menu Items */}
          <div className="group">
            <a href="#">Vertor</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>

          <div className="group">
            <a href="#">Images</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <a href="#">Listen</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <a href="#">Icon</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
        </div>

        {/* Search Container */}

        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
          <input type="text" />
          {/* input and SVG COntainer */}
          <div className="flex justify-between border-b">
            <input
              placeholder="Search"
              type="text"
              className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
            />
            <button>
              <CiSearch className="text-xl" />
            </button>
          </div>

          {/* upload Button */}
          <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:text-black">
            Upload
          </button>
        </div>

        {/* Gallery Container */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* Image1 */}
          <div className="relative group">
            <img src={Image1} alt="" className="w-72" />
            <div
              className="absolute left-0 bottom-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 
            group-hover:opacity-100 bg-opacity-40"
            >
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes -35 shareds</p>
                </div>
                <div className="flex items-center">
                  <img src={bookMark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          {/* image-2 */}
          <div className="relative group">
            <img src={Image2} alt="" className="w-72" />
            <div
              className="absolute left-0 bottom-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 
            group-hover:opacity-100 bg-opacity-40"
            >
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes -35 shareds</p>
                </div>
                <div className="flex items-center">
                  <img src={bookMark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          {/* image -3 */}
          <div className="relative group">
            <img src={Image3} alt="" className="w-72" />
            <div
              className="absolute left-0 bottom-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 
            group-hover:opacity-100 bg-opacity-40"
            >
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes -35 shareds</p>
                </div>
                <div className="flex items-center">
                  <img src={bookMark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          {/* image4 */}
          <div classNzme="relative group">
            <img src={Image4} alt="" className="w-72" />
            <div
              className="absolute left-0 bottom-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 
            group-hover:opacity-100 bg-opacity-40"
            >
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes -35 shareds</p>
                </div>
                <div className="flex items-center">
                  <img src={bookMark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          {/* image5 */}
          <div className="relative group">
            <img src={Image5} alt="" className="w-72" />
            <div
              className="absolute left-0 bottom-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 
            group-hover:opacity-100 bg-opacity-40"
            >
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes -35 shareds</p>
                </div>
                <div className="flex items-center">
                  <img src={bookMark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          {/* image 6 */}
          <div className="relative group">
            <img src={Image6} alt="" className="w-72" />
            <div
              className="absolute left-0 bottom-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 
            group-hover:opacity-100 bg-opacity-40"
            >
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes -35 shareds</p>
                </div>
                <div className="flex items-center">
                  <img src={bookMark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
