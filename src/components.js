/* jshint esversion: 6 */
import chuckFacade from "./chuckFacade";
import jokeFacade from "./jokeFacade";

const HomeComponent = {
  render: () => {
    return `
          <section>
            <h1 class="animate__animated animate__flash">Home</h1>
            <p>Laboris ex do id duis amet exercitation veniam ut deserunt in fugiat. Nisi mollit cillum sit ut tempor duis laboris ullamco adipisicing. Minim sint dolore aute deserunt laborum veniam cillum. Aliquip occaecat duis sunt in adipisicing voluptate ad dolor dolore dolore consectetur.</p>
          </section>
        `;
  },
};

const Page1Component = {
  render: async () => {
    const joke = await chuckFacade.getJoke();
    return `
          <section>
            <h1>Chuck Norris</h1>
            <h3 style="color:blue">
            ${joke}
            </h3>
          </section>
        `;
  },
};

const AllJokes = {
  render: async () => {
    const all = await jokeFacade.getAllJokes();
    const allJokesAsRows = all.map(j => `<tr><td>${j.id}</td><td>${j.setup}</td><td>${j.punchline}</td></tr>`).join("")
    return `
          <section>
            <h1>All our cool jokes</h1>
            <table>
              <thead>
              <tr><td>ID</td><td>Setup</td><td>Punchline</td></tr>
              </thead>
              <tbody>
              ${allJokesAsRows}
              </tbody>
            </table>
          </section>
        `;
  },
};

const OneJokeComponent = {
  // buttonClicked: async () => {
  //   const id = document.getElementById("jokeId").value;
  //   const joke = await jokeFacade.getJoke(id);
  //   document.getElementById("joke").innerHTML = joke;
  // },
  render: () => {
    const button = document.createElement("button");
    setTimeout(() => {
      document.getElementById("joke-button").onclick = async () => {
        const id = document.getElementById("jokeId").value;
        const joke = await jokeFacade.getJoke(id);
        const p = `<p>${joke.setup} --- ${joke.punchline}`
        document.getElementById("joke").innerHTML = p;
      }
    }, 500)

    return `
            <section>
              <h1>Get a single joke</h1>
              <div>
              <p>Enter ID for joke to fetch</p><input id="jokeId"></input>
             <span id="btnPlaceholder"></span>
              <button id="joke-button">Fetch Joke</button>
              <p id="joke"></p>
            </section>
          `;
  },
};

const ErrorComponent = {
  render: () => {
    return `
          <section>
            <h1 class="animate__animated animate__flash">Error</h1>
            <p>No landing page for this!</p>
          </section>
        `;
  },
};

export { HomeComponent, Page1Component, AllJokes, OneJokeComponent, ErrorComponent };
