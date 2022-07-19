import React from "react";

export default function Hero() {
  return (
    <section className=" text-white for-bg h-auto 2xl:h-screen">
      <div className="container mx-auto flex pl-5 pt-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-52 items-center text-center ">
          <h1 className="title-font text-4xl md:text-7xl mb-4 font-black text-white ">
            Minted
            <br className="hidden lg:inline-block" />
            With Delight
          </h1>
          <h6 className="mb-8 leading-relaxed mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br className="hidden lg:inline-block" />
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever.
          </h6>
          <div className="flex justify-center mt-5">
            <button className="inline-flex text-white btn1 border-0 py-2 px-6 focus:outline-none  rounded-full text-lg font-normal">
              Mint Now
            </button>
            <button className="ml-4 inline-flex text-white  border-2 border-white py-2 px-6 focus:outline-none  hover:text-white rounded-full text-lg font-normal">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/assets/hero-image.png"
          /> */}
          <video
            controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
            className="w-96"
          >
            <source src="/assets/image-from.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
