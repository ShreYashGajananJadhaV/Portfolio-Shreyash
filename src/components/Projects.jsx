import React from "react";
import { useEffect, useState } from "react";

function Projects() {
  const [isP1Visible, setIsP1Visible] = useState(false);
  const [isD1Visible, setIsD1Visible] = useState(false);
  const [isP2Visible, setIsP2Visible] = useState(false);
  const [isD2Visible, setIsD2Visible] = useState(false);

  useEffect(() => {
    const div = document.getElementById("prj1");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsP1Visible(true);
        } else {
          setIsP1Visible(false);
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
    const div = document.getElementById("desc1");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsD1Visible(true);
        } else {
          setIsD1Visible(false);
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
    const div = document.getElementById("prj2");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsP2Visible(true);
        } else {
          setIsP2Visible(false);
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
    const div = document.getElementById("desc2");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsD2Visible(true);
        } else {
          setIsD2Visible(false);
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
    <div className="Projects border border-transparent rounded-lg p-5">
      <div class="flex flex-col justify-center">
        <div class=" shadow-2xl w-full border-2 md:flex-row flex-col  border-white hover:animate-border-color rounded-xl p-5 flex ">
          <section
            id="prj1"
            className={`${
              isP1Visible ? "animate-flip-down animate-ease-in" : "opacity-0"
            } md:w-1/2 w-full  border-2 border-slate-800 rounded-3xl p-5`}
          >
            <div className={`flex flex-col mb-4 `}>
              <h1 className="text-lg font-semibold text-stone-600 ">Title: </h1>
              <p className="text-lg font-semibold  text-stone-500">
                {" "}
                Bank Application API
              </p>
            </div>

            <div className="flex flex-col  ">
              <h1 className="text-lg font-semibold text-stone-600 mr-2">
                Tools:{" "}
              </h1>
              <p class="leading-relaxed hover:text-stone-700 text-stone-500 mb-4">
                SpringBoot, Spring Security, Spring Cloud, Spring JPA, Email
                Service, PostMan API, MOKITO, JWT ,PostgresSQL
              </p>
            </div>

            <a
              href={
                " https://github.com/ShreYashGajananJadhaV/BankApplication.git"
              }
              target="_blank"
              rel="noreferrer"
              class=" hover:text-blue-400 text-indigo-700 underline"
            >
              View Project
            </a>
          </section>
          <section
            id="desc1"
            className={`${
              isD1Visible ? "animate-fade-left animate-ease-in" : "opacity-0"
            } md:w-1/2 md:mt-0 mt-3 w-full md:ml-3 ml-0 rounded-3xl  p-4 bg-red-400 shadow-xl`}
          >
            <div className="flex flex-col mb-4 p-2">
              <h1 className="text-lg font-semibold text-white mr-2">
                Description:{" "}
              </h1>
              <p class="leading-relaxed  text-white mt-4">
                Secured bank application developed using SpringBoot. It had
                features like authenticating the user before giving access.
                Create User, Create Account, Change Password, credit, debit
                money, etc. Giving access based on type of user. Admin or User.
                JWT based authorization, Email Service, Schedulers(for two types
                of accounts SAVINGS, CURRENT). Deployed the security API and
                main API on EUREKA using Spring cloud.
              </p>
            </div>
          </section>
        </div>

        <div className="shadow-2xl border-2 md:flex-row flex-col border-white hover:animate-border-color rounded-xl p-5 mt-3 flex ">
          <section
            id="prj2"
            className={`${
              isP2Visible ? "animate-fade-right animate-ease-in" : "opacity-0"
            } md:w-1/2 w-full bg-blue-400 mr-3 p-5 rounded-3xl  `}
          >
            <div className="flex flex-col mb-4 ">
              <h1 className="text-lg font-semibold text-white mr-2">Title: </h1>
              <p className="text-lg font-semibold text-white">
                {" "}
                Android Application (Tic-Tac-Toe)
              </p>
            </div>

            <div className="flex flex-col  ">
              <h1 className="text-lg font-semibold text-white mr-2">Tools: </h1>
              <p class="leading-relaxed text-white  mb-4">
                Android Studio, Java, OOPs, Java Swing, Java AWT.
              </p>
            </div>

            <a
              href={" https://github.com/ShreYashGajananJadhaV/Tic-Tac-Toe.git"}
              target="_blank"
              rel="noreferrer"
              class=" text-indigo-700 hover:text-white underline "
            >
              View Project
            </a>
          </section>
          <section
            id="desc2"
            className={`${
              isD2Visible ? "animate-flip-down animate-ease-in" : "opacity-0"
            } md:w-1/2 md:mt-0 mt-3 w-full rounded-3xl  p-4 border-2 border-slate-800 shadow-xl`}
          >
            <div className="flex flex-col mb-4 p-2">
              <h1 className="text-lg font-semibold text-stone-600 mr-2">
                Description:{" "}
              </h1>
              <p class="leading-relaxed  hover:text-stone-700 text-stone-500 mt-3">
                The Tic Tac Toe game is a game for two players, who take turns
                marking the spaces in a 3×3 grid. The player who succeeded in
                placing three respective marks in a horizontal, vertical, or
                diagonal row wins the game.Developed using OOPs concepts and
                Java Programming. Apart from this Java Swing and Java JWT for UI
                designing.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Projects;
