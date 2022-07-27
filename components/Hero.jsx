import React from "react";

export default function Hero() {
  return (
    <section className="h-auto text-white for-bg 2xl:h-[90%]">
      <div className="container flex flex-col items-center pt-24 pl-5 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-52 ">
          <h1 className="mb-4 text-4xl font-black text-white title-font md:text-7xl ">
            Minted
            <br className="hidden lg:inline-block" />
            With Delight
          </h1>
          <h6 className="mt-3 mb-8 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br className="hidden lg:inline-block" />
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever.
          </h6>
          <div className="flex justify-center mt-5">
            <button className="inline-flex px-6 py-2 text-lg font-normal text-white border-0 rounded-full btn1 focus:outline-none">
              Mint Now
            </button>
            <button className="inline-flex px-6 py-2 ml-4 text-lg font-normal text-white border-2 border-white rounded-full focus:outline-none hover:text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          {/* <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/assets/hero-image.png"
          /> */}
          <video
            
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
            className="w-96"
          >
            <source src="/assets/card.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
