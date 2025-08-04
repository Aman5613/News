import { FaArrowRight } from "react-icons/fa";

const Health = () => {
  return (
    <div className="px-3 py-9 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className="vline w-[3px] rounded-full h-8 bg-red-800"></div>
        <p className="font-bold">Health</p>
        <div className="hline w-[50%] h-[2px] rounded-full bg-black opacity-80"></div>
        <p className="flex items-center gap-1 text-red-800 font-semibold">
          View All <FaArrowRight />
        </p>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col">
          <div className="w-full h-90 mb-5 bg-teal-900">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1741768019347-7fd7730dc9ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <p className="uppercase text-red-800 font-semibold text-sm">health</p>
          <h1 className="font-bold tracking-wide text-md">
            The Mental Health Benefits Backed by Science
          </h1>
          <p className="text-sm opacity-70">February 24, 205</p>
        </div>
        <div className="flex flex-col">
          <div className="w-full h-90 mb-5 bg-teal-900">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <p className="uppercase text-red-800 font-semibold text-sm">health</p>
          <h1 className="font-bold tracking-wide text-md">
            How Climate Change is Impacting Global Health
          </h1>
          <p className="text-sm opacity-70">February 24, 205</p>
        </div>
        <div className="flex flex-col">
          <div className="w-full h-90 mb-5 bg-teal-900">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <p className="uppercase text-red-800 font-semibold text-sm">health</p>
          <h1 className="font-bold tracking-wide text-md">
           Breaking Down the Latest Nutritional Guidelines
          </h1>
          <p className="text-sm opacity-70">February 24, 205</p>
        </div>
        <div className="flex flex-col">
          <div className="w-full h-90 mb-5 bg-teal-900">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <p className="uppercase text-red-800 font-semibold text-sm">health</p>
          <h1 className="font-bold tracking-wide text-md">
            The Role of Sleep in Immune System Support
          </h1>
          <p className="text-sm opacity-70">February 24, 205</p>
        </div>
      </div>
    </div>
  );
};

export default Health;
