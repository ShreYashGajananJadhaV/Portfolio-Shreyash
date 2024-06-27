import React, { useState, useEffect } from "react";
import MyPhoto from "../resources/MyPhoto.png";

export default function MainCarousel() {
  let colorArray;
  const [photoColor, setPhotoColor] = useState("bg-green-200");

  useEffect(() => {
    // console.log("Inside the carousel");
    // if (photoColor === "bg-green-200") {
    //   setPhotoColor("bg-blue-200");
    // } else if (photoColor === "bg-blue-200") {
    //   setPhotoColor("bg-red-200");
    // } else if (photoColor === "bg-red-200") {
    //   setPhotoColor("bg-voilet-200");
    // } else {
    //   setPhotoColor("bg-green-200");
    // }

    const timeOutId = setTimeout(() => {
      console.log("Inside the carousel");
      if (photoColor === "bg-green-200") {
        setPhotoColor("bg-blue-200");
      } else if (photoColor === "bg-blue-200") {
        setPhotoColor("bg-red-200");
      } else if (photoColor === "bg-red-200") {
        setPhotoColor("bg-voilet-200");
      } else {
        setPhotoColor("bg-green-200");
      }
    }, 1000);
    return () => clearTimeout(timeOutId);
  }, []);
  return (
    <div className="carousel w-full  rounded-2xl shadow-2xl border-2 border-slate-700">
      <div
        id="slide1"
        className="carousel-item relative w-full duration-700 ease-in-out"
      >
        <section className="md:flex md:justify-around w-[100%] py-10 px-20 ">
          {" "}
          <div
            className={`avatar mask mask-squircle md:w-[400px] mr-5 md:h-[400px]  overflow-hidden shadow-3xl ${photoColor}`}
          >
            <img
              className="bg-cover w-[400px] h-[400px] transition duration-1000 ease-out hover:scale-110"
              src={MyPhoto}
            />
          </div>
          <section className=" m-auto ">
            <h1 className="text-5xl font-bold text-teal-600 animate-slidein300">
              Hi,{" "}
            </h1>

            <h1 className="text-4xl font-bold mt-2 text-teal-600 animate-slidein500">
              I AM SHREYASH JADHAV.
            </h1>
            <h1 className="text-4xl font-bold mt-2 text-teal-600 animate-slidein500">
              A FULLSTACK DEVELOPER
            </h1>
            <div>
              <p className="text-xl font-bold mt-4 text-slate-500 animate-slidein700">
                B-Tech in Mechanical Engineering{" "}
              </p>
              <p className="text-xl font-bold mt-2 text-slate-500 animate-slidein700">
                Walchand College of Engineering, Sangli
              </p>
            </div>
          </section>
        </section>
        <div>
          <div
            id="slide1"
            class="hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <p>I am new dkfldf</p>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full ">
        <div className="p-5">
          <h1 className="text-3xl fond-bold ">About me :</h1>
          <p>More about about me ssection.</p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
