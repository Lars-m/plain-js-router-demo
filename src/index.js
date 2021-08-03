/* jshint esversion: 6 */

import routes from "./routes";
import { ErrorComponent } from "./components";
import "./style.css";

document.getElementById("nav1").onclick = switchToV2;

window.switchTo = function (id) {
  document.getElementById(id).click();
};

function switchToV2(ev) {
  const id = ev.target.id;

  document.getElementById(id).click();
};

const parseLocation = () => location.hash.slice(1).toLowerCase() || "/";

const findComponentByPath = (path, routes) => routes.find((r) => r.path.match(new RegExp(`^${path}$`))) || undefined;

const baseTitle = document.getElementById("title").innerHTML;

const router = async () => {
  // Find the component based on the current path
  const path = parseLocation();
  // If there's no matching route, get the "Error" component
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
  // Render the component in the "app" placeholder

  const html = await component.render();
  console.log(html)
  //document.getElementById("app").innerHTML = component.render();
  document.getElementById("app").innerHTML = html;
  document.title = `${baseTitle} ${path}`;
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

