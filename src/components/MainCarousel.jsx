import React from "react";
import MyPhoto from "../resources/MyPhoto.png";
import resume from "../resources/Off_Resume.pdf";
export default function MainCarousel() {
  // const [photoColor, setPhotoColor] = useState("bg-green-200");

  // useEffect(() => {
  //   const timeOutId = setTimeout(() => {
  //     console.log("Inside the carousel");
  //     if (photoColor === "bg-green-200") {
  //       setPhotoColor("bg-blue-200");
  //     } else if (photoColor === "bg-blue-200") {
  //       setPhotoColor("bg-red-200");
  //     } else if (photoColor === "bg-red-200") {
  //       setPhotoColor("bg-voilet-200");
  //     } else {
  //       setPhotoColor("bg-green-200");
  //     }
  //   }, 1000);
  //   return () => clearTimeout(timeOutId);
  // }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Shreyash_Resume.pdf";
    link.click();
  };

  return (
    <div className="carousel w-full  rounded-2xl shadow-2xl border-2 ">
      <div
        id="slide1"
        className="carousel-item relative w-full duration-700 ease-in-out border-2 border-white"
      >
        <section className="md:flex  w-[100%] py-10 px-20 ">
          {" "}
          <div
            className={`avatar mask mask-circle md:w-[400px] mr-5 md:h-[400px]  overflow-hidden shadow-3xl `}
          >
            <img
              className="bg-cover w-[400px] h-[400px] transition duration-1000 ease-out hover:scale bg-gray-800"
              src={MyPhoto}
              alt="MyPhoto"
            />
          </div>
          <section className=" m-auto ">
            <h1 className="text-5xl font-bold text-gray-800 animate-slideIn">
              Hi,{" "}
            </h1>

            <h1 className="text-4xl font-bold mt-2 text-gray-800 animate-slideIn2">
              I AM SHREYASH JADHAV.
            </h1>
            <h1 className="text-4xl font-bold mt-2 text-gray-800 animate-slideIn3">
              A FULLSTACK DEVELOPER
            </h1>
            <div>
              <p className="text-xl font-bold mt-4 text-slate-500 ">
                B-Tech in Mechanical Engineering{" "}
              </p>
              <p className="text-xl font-bold mt-2 text-slate-500 ">
                Walchand College of Engineering, Sangli
              </p>
              {/* the tri color strip */}
              <div class="flex h-2 border-2 border-gray-600 my-5">
                <div class="flex-1  bg-blue-500"></div>
                <div class="flex-1  bg-white"></div>
                <div class="flex-1  bg-red-500"></div>
              </div>

              <button
                class=" text-white border-2 bg-gray-800 hover:bg-gray-900   font-bold p-5 rounded-xl inline-flex items-center h-[40px] w-[300px] mt-3"
                data-theme="nord"
                onClick={handleDownload}
              >
                Click here for CV ....
                <svg
                  className="w-6 h-6 ml-3 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M12 6L12 18 17 15 7 15 12 18z"
                  />
                </svg>
              </button>
            </div>
          </section>
        </section>

        <div>
          <div
            id="slide1"
            class="hidden duration-700 ease-in-out"
            data-carousel-item
          ></div>
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
      <div id="slide2" className="carousel-item relative w-full border-white">
        <div className="p-10">
          <h1 className="text-3xl fond-bold ">About me :</h1>
          <div className="mt-4 ml-4 mr-4 rounded-3xl bg-red-400 p-5">
            <p className="font-mono justify-evenly leading-relaxed text-base ">
              Hello! I'm Shreyash Gajanan Jadhav. I completed my B.Tech at
              Walchand College of Engineering, Sangli, and my 10th and 12th
              grades in the Satara district. I have hands-on experience from my
              internship at Atlas Primary, where I worked as a Backend Developer
              in Java SpringBoot and an Automation Tester using Java Selenium.
              My technical skills include Core Java, Kotlin, JavaScript,
              SpringBoot, ReactJS, NodeJS, System Design, OOP, DSA, and DBMS. I
              aspire to become a versatile developer, adept in both backend and
              frontend technologies, and I am committed to continuously evolving
              and making meaningful contributions in the tech industry..
            </p>
          </div>
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
