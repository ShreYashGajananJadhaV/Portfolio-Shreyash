import React from "react";

function Experience() {
  return (
    <div className="Experience shadow-2xl w-full rounded-xl border border-transparent text-white hover:animate-border-color p-4 ">
      <div className="w-full mx-auto p-4 rounded ">
        <div className="flex flex-col mb-4">
          <h1 className="text-lg font-medium text-indigo-400">Company:</h1>
          <p className="text-base  hover:text-neutral-100 text-neutral-300">
            Atlas Primary
          </p>
        </div>
        <div className="flex flex-col mb-4">
          <h1 className="text-lg font-medium text-indigo-400">Designation:</h1>
          <p className="text-base  hover:text-neutral-100 text-neutral-300">
            Backend Developer Intern
          </p>
        </div>
        <div className="flex flex-col mb-4">
          <h1 className="text-lg font-medium text-indigo-400">Technology:</h1>
          <p className="text-base  hover:text-neutral-100 text-neutral-300">
            SpringBoot, Postman API, MAVEN, Spring Security, Spring Cloud,
            BitBucket
          </p>
        </div>

        <div className=" flex flex-col mb-4">
          <h2 className="text-lg font-medium text-indigo-400 mb-4">
            Description:
          </h2>

          <p className=" leading-relaxed text-base  hover:text-neutral-100 text-neutral-300 ml-4">
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

        <div className="flex flex-col mb-4">
          <h2 className="text-lg font-medium text-indigo-400 mb-4">
            Additional:
          </h2>

          <p className="leading-relaxed text-base  hover:text-neutral-100 text-neutral-300 ml-4">
            Utilized Selenium, Selenide, Gherkin, and TestNG frameworks to
            automate frontend testing processes, enhancing the efficiency and
            accuracy of the testing phase.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
