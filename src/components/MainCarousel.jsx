import React from "react";
import MyPhoto from "../resources/MyPhoto.png";
export default function MainCarousel() {
  return (
    <div className="carousel w-full  rounded-2xl shadow-2xl border-2 border-slate-700 border-slate-100">
      <div id="slide1" className="carousel-item relative w-full ">
        <section className="  md:flex md:justify-around w-[100%] py-10 px-20 ">
          {" "}
          <div className="avatar mask mask-squircle md:w-[400px] md:h-[400px]  overflow-hidden shadow-3xl bg-green-200 ">
            <img
              className="bg-cover  w-[400px] h-[400px] transition duration-1000 ease-out hover:scale-110"
              src={MyPhoto}
            />
          </div>
          <section className=" m-auto">
            <h1 className="text-5xl font-bold text-teal-600">Hi, </h1>
            <h1 className="text-4xl font-bold mt-2 text-teal-600">
              I AM FULLSTACK DEVELOPER.
            </h1>
            <div>
              <p className="text-xl font-bold mt-4 text-slate-500">
                B Tech in mechanical engineering{" "}
              </p>
              <p className="text-xl font-bold mt-2 text-slate-500">
                Walchand College of Engineering, Sangli
              </p>
            </div>
          </section>
        </section>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
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
