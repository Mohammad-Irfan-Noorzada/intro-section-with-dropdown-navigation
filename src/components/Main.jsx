import React from "react";

function Main() {
  return (
    <main className="main text-center px-3 py-3 md:text-left xl:pr-10 xl:pl-32 xl:py-[2.9rem] lg:px-20 lg:py-16 md:px-12 md:p-10">
      <div className="wrapper flex justify-around flex-col md:gap-10 md:flex-row ">

        <div className="content mt-16 md:mt-0 gap-10 sm:mt-24 sm:mx-auto md:mx-0 md:gap-12 xl:pt-[6.5rem] lg:pt-20 md:pt-16 flex flex-col justify-between
          sm:w-[38rem] md:w-[33.2rem] order-1 md:order-none">
          <div className="">
            <h1 className="text-4xl md:text-[clamp(3rem,6vw,5rem)] font-bold leading-[1]">Make remote work</h1>
            <p className="text[1rem] md:text-[clamp(1.125rem,6vw,1rem)] text-mediumGray font-medium leading-7 xl:pr-20 md:pr-10 xl:mt-[3rem]
              xl:mb-[3.225rem] lg:my-10 md:my-6 mt-4 mb-6">
              Get your team in sync, no matter your location. Streamline processes, 
              create team rituals, and watch productivity soar.</p>
            <button className="py-2.5 px-5 xl:pt-3.5 xl:pb-3 xl:px-8 bg-almostBlack text-white font-bold font-epilogue text-[1rem] lg:text-base md:rounded-2xl
              rounded-[0.9rem] border-2 border-almostBlack duration-300 hover:bg-transparent hover:text-almostBlack">Learn more</button>
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-7 xl:gap-7 lg:gap-5 md:gap-4">
            <img src="images/client-databiz.svg" alt="databiz" className="w-20 lg:w-24 xl:w-auto" />
            <img src="images/client-audiophile.svg" alt="audiophile" className="w-12 md:w-14 lg:w-24 xl:w-auto" />
            <img src="images/client-meet.svg" alt="meet" className="w-16 md:w-20 lg:w-24 xl:w-auto" />
            <img src="images/client-maker.svg" alt="makter" className="w-16 md:w-20 lg:w-24 xl:w-auto" />
          </div>
        </div>

        <div className="image">
          <img src="images/image-hero-mobile.png" alt="man with laptop" className="md:hidden scale-[1.08]" />
          <img src="images/image-hero-desktop.png" alt="man with laptop" className="hidden md:block w-[30rem] max-w-full"/>
        </div>
      </div>
    </main>
  )
}

export default Main;