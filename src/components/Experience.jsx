import React from "react";
import { useState, useEffect } from "react";

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [isADDVisible, setISADDVisible] = useState(false);
  const [isNameVisible, setISNameVisible] = useState(false);

  useEffect(() => {
    const div = document.getElementById("my-div");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(div);

    return () => {
      observer.unobserve(div);
    };
  }, []);

  useEffect(() => {
    const div = document.getElementById("names");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setISNameVisible(true);
        } else {
          setISNameVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(div);

    return () => {
      observer.unobserve(div);
    };
  }, []);

  useEffect(() => {
    const div = document.getElementById("addi");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setISADDVisible(true);
        } else {
          setISADDVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(div);

    return () => {
      observer.unobserve(div);
    };
  }, []);

  return (
    <div
      className={` Experience shadow-2xl w-full rounded-xl border-2 border-white text-white p-5 mt-4 flex md:flex-row flex-col `}
    >
      <section className={` mr-3 w-full md:w-1/2 `}>
        <div
          id="names"
          className={`${
            isNameVisible ? "animate-flip-down" : "opacity-0"
          } w-full mx-auto p-4 rounded-3xl bg-white border-2 border-gray-600 shadow-lg`}
        >
          <div className="flex flex-col mb-4">
            <h1 className="text-lg font-semibold  text-stone-600">Company:</h1>
            <p className="text-base font-semibold  text-stone-500 ">
              Atlas Primary
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <h1 className="text-lg font-semibold  text-stone-600">
              Designation:
            </h1>
            <p className="text-base  hover:text-stone-700 text-stone-500">
              Backend Developer Intern
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <h1 className="text-lg font-semibold  text-stone-600">
              Technology:
            </h1>
            <p className="text-base  hover:text-stone-700 text-stone-500">
              SpringBoot, Postman API, MAVEN, Spring Security, Spring Cloud,
              BitBucket
            </p>
          </div>
        </div>
        <div
          id="addi"
          className={`${
            isADDVisible ? "animate-fade-right animate-once" : "opacity-0"
          } flex sm:w-full flex-col mt-3 bg-red-400 rounded-3xl p-4 shadow-2xl`}
        >
          <h2 className="text-lg font-semibold  text-white mb-4">
            Additional:
          </h2>

          <p className="leading-relaxed text-base  text-white ">
            Utilized Selenium, Selenide, Gherkin, and TestNG frameworks to
            automate frontend testing processes, enhancing the efficiency and
            accuracy of the testing phase.
          </p>
        </div>
      </section>
      <section
        id="my-div"
        className={`${
          isVisible ? "animate-fade-left animate-once" : "opacity-0"
        } w-full md:w-1/2 md:mt-0 mt-3 bg-blue-400 rounded-3xl p-2 shadow-2xl`}
      >
        <div className=" flex flex-col mb-4 p-4">
          <h2 className="text-lg font-semibold  text-white mb-4">
            Description:
          </h2>

          <p className=" leading-relaxed text-base  text-white z-50">
            Designed and implemented various microservices, ensuring seamless
            integration and high performance. Applied robust security measures
            using Spring Security to protect the application from potential
            threats. Developed and integrated a comprehensive email service to
            enhance communication capabilities within the application. Designed
            and implemented adapters to facilitate smooth communication between
            different system components. Conducted thorough unit testing using
            the Mockito framework to ensure the reliability and stability of the
            codebase.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Experience;
