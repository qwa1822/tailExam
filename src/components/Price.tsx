type Props = {};

export default function Price({}: Props) {
  return (
    // Global Container
    <div className="flex items-center justify-center h-screen bg-slate-800">
      {/* inner Container */}
      <div className="flex  flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
        {/* Col1 */}
        <div className="bg-slate-700 rounded-xl text-white">
          {/* Upper Container */}

          <div className="p-8 mx-3 mt-8 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">Basisc</div>

            <h2 className="mt-10 font-serif text-5xl text-center">100GB</h2>
            <h3 className="mt-2 text-center">$1.99/Month</h3>

            <div className="flex justify-center">
              <a
                href="#"
                className="inline-block px-10 py-3 my-6 text-center border duration-200 border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800"
              >
                Purchase
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700"></div>

          {/* Lower Container */}
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            {/* List Container */}

            <div className="flex flex-col space-y-2">
              {/* List Items */}
              <div className="flex justify-center">{/* Checked Icon */}</div>
              <span className="text-sm">100 GB of storage</span>
              <span className="text-sm">Option to Member</span>
              <span className="text-sm">Extra member benefits</span>
            </div>
          </div>
        </div>

        {/* COl2 */}
        <div className="bg-violet-700 rounded-xl text-white">
          {/* Upper Container */}

          <div className="p-8 mx-3 mt-8 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">Extra</div>

            <h2 className="mt-10 font-serif text-5xl text-center">200GB</h2>
            <h3 className="mt-2 text-center">$8.99/Month</h3>

            <div className="flex justify-center">
              <a
                href="#"
                className="inline-block px-10 py-3 my-6 text-center border duration-200 border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800"
              >
                Purchase
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700"></div>

          {/* Lower Container */}
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            {/* List Container */}

            <div className="flex flex-col space-y-2">
              {/* List Items */}
              <div className="flex justify-center">{/* Checked Icon */}</div>
              <span className="text-sm">200 GB of storage</span>
              <span className="text-sm">Option to Member</span>
              <span className="text-sm">Extra member benefits</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-700 rounded-xl text-white">
          {/* Upper Container */}

          <div className="p-8 mx-3 mt-8 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">premium</div>

            <h2 className="mt-10 font-serif text-5xl text-center">300GB</h2>
            <h3 className="mt-2 text-center">$16.99/Month</h3>

            <div className="flex justify-center">
              <a
                href="#"
                className="inline-block px-10 py-3 my-6 text-center border duration-200 border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800"
              >
                Purchase
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700"></div>

          {/* Lower Container */}
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            {/* List Container */}

            <div className="flex flex-col space-y-2">
              {/* List Items */}
              <div className="flex justify-center">{/* Checked Icon */}</div>
              <span className="text-sm">300 GB of storage</span>
              <span className="text-sm">Option to Member</span>
              <span className="text-sm">Extra member benefits</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
