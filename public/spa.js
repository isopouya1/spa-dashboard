function router(params) {
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

  if (!matchRoute) {
    matchRoute = {
        route : {path : '/not-found', view : () => console.log('not found')},
        isMatch : true,
    }
  }

  matchRoute.route.view()
  
}

function navigateTo(url){
    history.pushState(null,null,url)
    router()
}

window.addEventListener("popstate" , router)

document.addEventListener("DOMContentLoaded" , () => {
    document.body.addEventListener("click" , (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault()
            navigateTo(e.target.href)
        }    
    })
    router()
})