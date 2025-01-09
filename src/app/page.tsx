"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "Feb, 20, 2025";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, [deadline]);
  return (
    <section className="relative h-screen bg-gray-900 ">
      <div className="w-full mx-auto h-screen flex">
        <div className="w-full md:px-16 px-10 md:pt-16 pt-10 pb-10  flex-col justify-end items-center lg:gap-28 md:gap-16 gap-10 inline-flex">
          <div className="flex-col justify-end items-center lg:gap-16 gap-10 flex">
            <h1 className="text-center text-white md:text-6xl text-5xl font-bold font-manrope leading-normal">
              The Global Ad Company
            </h1>
            <div className="flex-col justify-center items-center gap-10 flex">
              <div className="flex-col justify-start items-center gap-2.5 flex">
                <h2 className="text-center text-emerald-400 md:text-6xl text-5xl font-bold font-manrope leading-normal">
                  Coming Soon
                </h2>
                <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                  Just {days} remaining until the big reveal of our new product!
                </p>
              </div>
              <div className="flex items-start justify-center w-full gap-2 count-down-main">
                <div className="timer flex flex-col gap-0.5">
                  <div className="">
                    <h3 className="countdown-element days text-center text-white text-2xl font-bold font-manrope leading-9" />
                  </div>
                  <p className="text-center text-gray-500 text-2xl font-normal leading-normal w-full">
                    {days < 10 ? "0" + days : days} DAYS
                  </p>
                </div>
                <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">
                  :
                </h3>
                <div className="timer flex flex-col gap-0.5">
                  <div className="">
                    <h3 className="countdown-element hours text-center text-white text-2xl font-bold font-manrope leading-9" />
                  </div>
                  <p className="text-center text-gray-500 text-2xl font-normal leading-normal w-full">
                    {hours < 10 ? "0" + hours : hours} HRS
                  </p>
                </div>
                <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">
                  :
                </h3>
                <div className="timer flex flex-col gap-0.5">
                  <div className="">
                    <h3 className="countdown-element minutes text-center text-white text-2xl font-bold font-manrope leading-9" />
                  </div>
                  <p className="text-center text-gray-500 text-2xl font-normal leading-normal w-full">
                    {minutes < 10 ? "0" + minutes : minutes} MINS
                  </p>
                </div>
                <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">
                  :
                </h3>
                <div className="timer flex flex-col gap-0.5">
                  <div className="">
                    <h3 className="countdown-element seconds text-center text-white text-2xl font-bold font-manrope leading-9" />
                  </div>
                  <p className="text-center text-gray-500 text-2xl font-normal leading-normal w-full">
                    {seconds < 10 ? "0" + seconds : seconds} SECS
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-center gap-5 flex">
                <h6 className="text-center text-emerald-400 text-base font-semibold leading-relaxed">
                  Launching Date: {deadline}
                </h6>
                <div className="justify-center items-center gap-2.5 flex sm:flex-row flex-col">
                  <input
                    type="text"
                    className="w-80 focus:outline-none px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed h-10 bg-white rounded-lg border border-gray-200 justify-start items-center gap-1.5 inline-flex"
                    placeholder="Type your mail..."
                  />
                  <button className="sm:w-fit w-full px-3.5 py-2 bg-emerald-400 hover:bg-emerald-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-1.5 text-gray-900 text-sm font-medium leading-6 whitespace-nowrap">
                      Notify Me
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm font-normal leading-snug">
            Get in touch with us:{" "}
            <a
              href=""
              className="hover:text-gray-100 transition-all duration-700 ease-in-out"
            >
              {" "}
              mail@theglobaladcompany.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
