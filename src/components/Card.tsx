import Image from "@/assets/image.jpg";
type Props = {};

export default function Card({}: Props) {
  return (
    <div className="flex items-center justify-center h-screen  bg-zinc-700">
      {/* Card */}
      <div className="bg-zinc-800 px-2 mx-6 rounded-2xl">
        {/* FlexContainer */}
        <div className="flex flex-col md:flex-row rounded-l-xl">
          {/* Image */}
          <img
            src={Image}
            alt=""
            className="object-fit md:rounded-l-xl rounded-xl md:rounded-r-none hover:scale-105 h-80  transform duration-500"
          />

          {/* Content */}
          <div className="p-6 md:p-12">
            <h2 className="font-medium font-serif  text-white md:text-left text-center text-xl">
              Hello
            </h2>

            <p className="text-white tracking-wide leading-5 max-w-xs font-medium font-sarif md:text-left text-center text-xs ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              nemo doloremque magnam veritatis quia eaque consequuntur, culpa
              velit ipsa eum quisquam necessitatibus molestiae quam sunt
              perferendis ipsum aperiam aliquid temporibus.
            </p>

            <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <input
                type="text"
                placeholder="Enter your email"
                className="text-white md:text-left text-center p-2 px-4 focus:outline-none bg-zinc-800 border-zinc-600 placeholder:text-xs placeholder:text-center placeholder:md:text-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
