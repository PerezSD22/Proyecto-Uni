import { lazy,startTransition, Suspense  } from "react";
import { Route } from "react-router-dom";

export const renderRoutes = () =>{
    return routes.map((route)=>{
        const Component = route.element;
        return <Route key={route.path} path={route.path} element={
            <Suspense fallback={<div>Loading...</div>}>
           
              {startTransition(() => <Component />)}
            </Suspense>
          }  />
    })
}

export const routes = [
    {
        path: "/",
        element: lazy(async ()=> await import("../pages/Home/Home"))
      
    },
    {
        path: "/Sobre",
        element: lazy(async ()=> await import("../pages/About/About"))
    },
    {
        path: "/Login",
        element: lazy(async ()=> await import("../pages/Login/Login"))
    },
    {
        path: "/Register",
        element: lazy(async ()=> await import("../pages/Register/Register"))
    },
]