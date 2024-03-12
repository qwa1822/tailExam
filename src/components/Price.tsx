type Props = {};

export default function Price({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-800">
      <div className="flex mt-5 space-y-6 md:flex-row flex-col md:space-x-5">
        {/* innerContent */}
        {/* rows */}

        {/* topContent */}
        <div className="bg-slate-700 rounded-xl  text-white">
          {/* Content */}
          <div className="p-8 mt-8 px-3 rounded-t-xl  bg-slate-800 ">
            <div className="text-center uppercase">Basisc</div>

            <h2 className="mt-10 font-serif text-5xl text-center">100GB</h2>
            <h3 className="mt-2 text-center">$1.99/Month</h3>

            <div className="flex  justify-center">
              <a
                href="#"
                className="bg-lime-500 px-10 py-3 mt-3  inline-block rounded-xl hover:bg-lime-700 transform duration-500 text-white"
              >
                Oliver
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700"></div>
        </div>

        <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
          <div className="flex flex-col space-y-2">
            {/* List Items */}
            <div className="flex justify-center">{/* Checked Icon */}</div>
            <span className="text-sm">100 GB of storage</span>
            <span className="text-sm">Option to Member</span>
            <span className="text-sm">Extra member benefits</span>
          </div>
        </div>
      </div>
    </div>
  );
}
