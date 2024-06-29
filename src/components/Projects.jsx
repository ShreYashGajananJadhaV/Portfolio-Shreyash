import React from "react";

function Projects() {
  return (
    <div className="Projects border border-transparent rounded-lg p-5">
      <div class="flex flex-col justify-center">
        <div class=" shadow-2xl w-full border-2 border-white hover:animate-border-color rounded-xl p-5 flex flex-row">
          <section className="w-1/2 border-2 border-slate-800 rounded-3xl p-5">
            <div className="flex flex-col mb-4 ">
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
              class=" hover:text-blue-400 text-indigo-700"
            >
              View Project
            </a>
          </section>

          <section className="w-1/2 p-4 rounded-3xl ml-3 bg-red-400 shadow-xl">
            <div className="flex flex-col mb-4 p-2">
              <h1 className="text-lg font-semibold text-white mr-2">
                Description:{" "}
              </h1>
              <p class=" leading-relaxed text-white">
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

        <div className="shadow-2xl border-2 border-white hover:animate-border-color rounded-xl p-5 mt-3 flex ">
          <section className="w-1/2 mr-3 p-5 rounded-3xl border-2 border-slate-800 ">
            <div className="flex flex-col mb-4 ">
              <h1 className="text-lg font-semibold text-stone-600 mr-2">
                Title:{" "}
              </h1>
              <p className="text-lg font-semibold text-stone-500">
                {" "}
                Android Application (Tic-Tac-Toe)
              </p>
            </div>

            <div className="flex flex-col  ">
              <h1 className="text-lg font-semibold text-stone-600 mr-2">
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
              class=" hover:text-blue-400 text-indigo-700"
            >
              View Project
            </a>
          </section>
          <section className="w-1/2 rounded-3xl  p-4 bg-blue-400 shadow-xl">
            <div className="flex flex-col mb-4 p-2">
              <h1 className="text-lg font-semibold text-white mr-2">
                Description:{" "}
              </h1>
              <p class="leading-relaxed  text-white mb-4">
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
