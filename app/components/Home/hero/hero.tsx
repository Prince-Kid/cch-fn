import React from "react";
import Image from "next/image";
import img from "../../../../public/images/logo.jpg";
const Hero = () => {
  return (
    <section className="border-2 flex flex-row items-center gap-5 max-w-[75rem] my-0 mx-auto h-[32rem]">
      <div className="flex flex-col">
        <h1 className="text-4xl text-[50px]">
          “Stay Updated with ULK's Community Hub”
        </h1>
        <br />
        <p className=" ">
          Get the latest news, announcements, and updates directly from our{" "}
          <br />
          campus community. Don't miss out on what's happening—stay informed
          with us!
        </p>
      </div>

      <Image src={img} alt="" />
    </section>
  );
};

export default Hero;
