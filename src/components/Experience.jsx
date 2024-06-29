import React from "react";

function Experience() {
  return (
    <div className="Experience shadow-2xl w-full rounded-xl border-2 border-white text-white p-5 mt-4 flex  ">
      <section className="mr-2 w-1/2">
        <div className="w-full mx-auto p-4 rounded-3xl bg-white border-2 border-gray-600 shadow-lg">
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
        <div className="flex flex-col mt-2 bg-red-400 rounded-3xl p-4 border-2 border-gray-600">
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
      <section className="w-[70%] bg-blue-400 rounded-3xl p-2 border-2 border-gray-600 shadow-lg">
        <div className=" flex flex-col mb-4 p-4">
          <h2 className="text-lg font-semibold  text-white mb-4">
            Description:
          </h2>

          <p className=" leading-relaxed text-base  text-white ">
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
