import React from "react";

const Hero = () => {
  return (
    <div className="px-3 py-9">

      <div className="relative">
        <div className="absolute w-full h-60">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1754152728457-902f155ebcae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
            alt="image"
          />
        </div>
        <div className="absolute flex flex-col justify-center px-5 w-full h-60 bg-gradient-to-b from-transparent to-black text-white">
          <p className="uppercase text-white px-[5px] py-[2px] w-fit bg-red-800 font-bold text-sm opacity--90">
            sports
          </p>
          <h1 className="w-2/3 font-bold">
            Olympics 2025 : The Athletes to watch
          </h1>
          <p className="text-sm tracking-tighter opacity-80 line-clamp-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            eos. Sit, tempore voluptas, possimus molestias aliquam omnis qui
            voluptatum deleniti a tempora, consequatur impedit officia.
          </p>
        </div>
      </div>

      <div className="mt-65 h-40 flex justify-between w-full">
        <div className="w-[40%] h-full">
          <img
            src="https://images.unsplash.com/photo-1570470705071-2393ef5cbe3a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D"
            alt="img-2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 justify-center px-5 w-full h-full">
          <p className="uppercase text-white px-[5px] py-[2px] w-fit bg-red-800 font-bold text-sm opacity--90">
            politics
          </p>
          <h1 className="text-black font-bold">
            Election 2025 : Key Issues shaping the Campaign Trail
          </h1>
          <p className="text-sm tracking-tighter opacity-80 line-clamp-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
          </p>
        </div>
      </div>

      <div className="mt-5 h-40 flex justify-between w-full">
        <div className="w-[40%] h-full">
          <img
            src="https://images.unsplash.com/photo-1753952253400-da11f889ee3f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt="img-3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 justify-center px-5 w-full h-full">
          <p className="uppercase text-white px-[5px] py-[2px] w-fit bg-red-800 font-bold text-sm opacity--90">
            health
          </p>
          <h1 className="text-black font-bold">
            Exploring the Connection Between Gut Health and Mental Well-being
          </h1>
          <p className="text-sm tracking-tighter line-clamp-2 opacity-80">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
