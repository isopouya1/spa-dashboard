function router() {
  const routes = [
    { path: "/", view: () => console.log("home") },
    { path: "/products", view: () => console.log("products") },
    { path: "/courses", view: () => console.log("course") },
    { path: "/users", view: () => console.log("users") },
  ];


  const potentialRoute = routes.map((route) => {
    return {
        route: route , 
        isMatch : location.pathname == route.path
    }
  })
  const matchRoute = potentialRoute.find((route) => route.isMatch)
  matchRoute.route.view()
  
}

document.addEventListener("DOMContentLoaded" , () => {
    router()
})