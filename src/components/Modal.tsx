import Add from "@/assets/weight.png";
import Image from "@/assets/headphone.png";
import Heart from "@/assets/heart.png";
type Props = {};

export default function Modal({}: Props) {
  return (
    // Global Container

    // Global Container
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      {/* Card Container */}
      <div
        className="flex flex-col p-6 m-3 space-y-10 bg-whit
     e rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:p-16"
      >
        {/* image */}
        <div>
          <img
            src={Image}
            alt=""
            className="mx-auto hover:scale-105 duration-200"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col space-y-6">
          {/* label&& Description Container*/}

          <div className="flex flex-col mb-4 space-y-4 text-center md:text-left">
            <div>
              <div className="inline-block px-3 py-1 text-white bg-black rounded-full">
                Free Shopping
              </div>
            </div>

            {/* Description */}

            {/*     TItle */}
            <div className="max-w-sm text-2xl font-medium">
              Razer karzhen kiyyu Edgt
            </div>
            {/* price */}
            <div className="flex flex-col mb-4 space-y-4 text-center md:text-left">
              <p className="line-through">$799</p>
              <p className="text-5xl font-bold">$799</p>
              <p className="text-sm font-light text-gray-400">
                This offer is valid until April 3rd or as long as stock lasts!
              </p>
            </div>

            <div className="group">
              <button className="w-full bg-blue-700 text-white transition-all duration-150 border-b-8 group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 border-b-blue-700 rounded-lg">
                <div className="px-8 py-4 bg-blue-500 rounded-lg  group-hover:bg-blue-700 ">
                  Add to Cart
                </div>
              </button>
            </div>

            {/* Stock */}

            <div className="flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
              <div className="text-sm">50+ pcs. in stock</div>
            </div>

            {/* Bottom Buttons COntainer */}

            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <img src={Add} alt="" className="w-8" />
                <span>Add to Cart</span>
              </button>

              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <img src={Heart} alt="" className="w-8" />
                <span>Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
