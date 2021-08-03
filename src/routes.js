/* jshint esversion: 6 */

import { HomeComponent, Page1Component, AllJokes, OneJokeComponent } from "./components";

export default [
  { path: "/", component: HomeComponent },
  { path: "/page-1", component: Page1Component },
  { path: "/all-jokes", component: AllJokes },
  { path: "/get-joke", component: OneJokeComponent },
];
