import React from "react";

function Projects() {
  return (
    <div className="Projects border border-transparent rounded-lg p-5">
      <div class="flex flex-col justify-center">
        <div class=" shadow-2xl w-full border-2 border-white hover:animate-border-color rounded-xl p-4 ">
          <div className="flex flex-col mb-4 ">
            <h1 className="text-lg font-semibold text-indigo-500 mr-2">
              Title:{" "}
            </h1>
            <p className="text-lg font-semibold  text-stone-600">
              {" "}
              Bank Application API
            </p>
          </div>
          <div className="flex flex-col mb-4 ">
            <h1 className="text-lg font-semibold text-indigo-500 mr-2">
              Description:{" "}
            </h1>
            <p class=" leading-relaxed hover:text-stone-700 text-stone-500">
              Secured bank application developed using SpringBoot. It had
              features like authenticating the user before giving access. Create
              User, Create Account, Change Password, credit, debit money, etc.
              Giving access based on type of user. Admin or User. JWT based
              authorization, Email Service, Schedulers(for two types of accounts
              SAVINGS, CURRENT). Deployed the security API and main API on
              EUREKA using Spring cloud.
            </p>
          </div>
          <div className="flex flex-col  ">
            <h1 className="text-lg font-semibold text-indigo-500 mr-2">
              Tools:{" "}
            </h1>
            <p class="leading-relaxed  hover:text-stone-700 text-stone-500 mb-4">
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
            class=" text-indigo-500 hover:text-indigo-700"
          >
            View Project
          </a>
        </div>

        <div className="shadow-2xl border-2 border-white hover:animate-border-color rounded-xl p-4 mt-3">
          <div className="flex flex-col mb-4 ">
            <h1 className="text-lg font-semibold text-indigo-500 mr-2">
              Title:{" "}
            </h1>
            <p className="text-lg font-semibold text-stone-600">
              {" "}
              Android Application (Tic-Tac-Toe)
            </p>
          </div>
          <div className="flex flex-col mb-4 ">
            <h1 className="text-lg font-semibold text-indigo-500 mr-2">
              Description:{" "}
            </h1>
            <p class="leading-relaxed  hover:text-stone-700 text-stone-500 mb-4">
              The Tic Tac Toe game is a game for two players, who take turns
              marking the spaces in a 3×3 grid. The player who succeeded in
              placing three respective marks in a horizontal, vertical, or
              diagonal row wins the game.Developed using OOPs concepts and Java
              Programming. Apart from this Java Swing and Java JWT for UI
              designing.
            </p>
          </div>

          <div className="flex flex-col  ">
            <h1 className="text-lg font-semibold text-indigo-500 mr-2">
              Tools:{" "}
            </h1>
            <p class="leading-relaxed  hover:text-stone-700 text-stone-500 mb-4">
              Android Studio, Java, OOPs, Java Swing, Java AWT.
            </p>
          </div>

          <a
            href={" https://github.com/ShreYashGajananJadhaV/Tic-Tac-Toe.git"}
            target="_blank"
            rel="noreferrer"
            class=" text-indigo-500 hover:text-indigo-700"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
export default Projects;
