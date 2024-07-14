import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hero() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="z-10 no-scrollbar">
      <div className="w-full pb-20  md:h-[calc(100vh-120px)] bg-[#F2F0FF] flex hero">
      <div className="flex container">
        <div className="ml-[-11vw] h-[250px] w-[150px] md:w-[300px] bg-cover">
          <img src="./src/assets/lamp-pic.png" alt="lamp" />
          <div className="mt-[85px] ml-[50px]  md:ml-[90px] h-[10px] w-[10px] bg-[#FB2E86] rounded-lg"></div>
        </div>

        <div className="w-48 md:w-[40vw] md:h-[200px] mt-20 md:mt-40 md:ml-[-60px]">
          <p className="text-[16px] text-[#FB2E86] mb-[12px]">
            Best Furniture For Your Castle....
          </p>
          <h2 className="text:xl md:text-4xl font-bold mb-[12px]">
            New Furniture Collection Trends in 2020
          </h2>
          <p className="text-[12px] md:text-[14px] text-[#8A8FB9] mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="text-[17px] bg-[#FB2E86] w-[120px] h-[40px] text-white font-semibold">
            Shop Now
          </button>
        </div>

        <div className="hidden md:block relative my-[10px] w-[300px] h-[300px] mt-[70px] bg-cover">
          <img
            className="absolute z-40"
            src="./src/assets/chair-pic.png"
            alt="chair"
          />
          <div className="absolute z-20 w-[300px] h-[300px] rounded-full bg-[#ECD2FA]"></div>
          <div className="z-10 ml-5 mt-[-20px] absolute w-[300px] h-[300px] rounded-full bg-[#F0E5FD]"></div>
          <div className="z-10 ml-[-12px] mt-5 absolute w-[300px] h-[300px] rounded-full bg-[#F0E5FD]"></div>

          <div className="absolute z-30 bg-[#00C1FE] h-[80px] w-[85px] ml-[220px] mt-[-45px] text-white text-3xl rounded-full flex px-5 items-center">
            50% off
          </div>
        </div>
      </div>
    </div>

      <div className="bg-[url('./assets/heroimage2.avif')] w-full h-[calc(100vh-120px)] bg-cover">
        <h3 className="text-2xl text-center my-40 text-white font-bold">Adventure is worthwhile.</h3>
      </div>
      <div className="bg-[url('./assets/heroimage3.avif')] w-full h-[calc(100vh-120px)] bg-cover">
        <h3 className="text-2xl text-center my-40 text-white font-bold">Travel far enough, you meet yourself.</h3>
      </div>
      <div className="bg-[url('./assets/heroimage4.avif')] w-full h-[calc(100vh-120px)] bg-cover">
        <h3 className="text-2xl text-center my-40 text-white font-bold">Not all those who wander are lost.</h3>
      </div>
      <div className="bg-[url('./assets/heroimage5.avif')] w-full h-[calc(100vh-120px)] bg-cover">
        <h3 className="text-2xl text-center my-40 text-white font-bold">Take only memories, leave only footprints.</h3>
      </div>
      <div className="bg-[url('./assets/heroimage6.avif')] w-full h-[calc(100vh-120px)] bg-cover">
        <h3 className="text-2xl text-center my-40 text-white font-bold">The journey of a thousand miles begins with a single step.</h3>
      </div>
    </Slider> 
  );
}

export default Hero;
