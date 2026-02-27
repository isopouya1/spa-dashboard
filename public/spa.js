import Dashboard from "./comps/Dashboard.js";
import Products from "./comps/Products.js";
import Courses from "./comps/Courses.js";
import Users from "./comps/Users.js";

function router(params) {
  const routes = [
    { path: "/", view: () => Dashboard },
    { path: "/products", view: () => Products },
    { path: "/courses", view: () => Courses },
    { path: "/users", view: () => Users },
  ];

  const potentialRoute = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname == route.path,
    };
  });
  const matchRoute = potentialRoute.find((route) => route.isMatch);
  const component = matchRoute.route.view();
  if (!matchRoute) {
    matchRoute = {
      route: { path: "/not-found", view: () => console.log("not found") },
      isMatch: true,
    };
  }
  document.getElementById("app").innerHTML =
    typeof component === "function" ? component() : component;
  console.log(matchRoute.route.view());
}

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
    console.log(e);
  });
});
