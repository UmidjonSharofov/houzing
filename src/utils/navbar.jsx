import React from 'react'
import { v4 } from 'uuid'
const Properties = React.lazy(() => import('../pages/Properties'))
const Home = React.lazy(() => import('../pages/Home/index'))

export const navbar = [
   {
      id: v4(),
      element:
         <React.Suspense fallback={<React.Fragment><h1>Loadin...</h1></React.Fragment>}>
            <Home />
         </React.Suspense>,
      title: "Home",
      path: "/home",
      private: false,
      hidden: false
   },
   {
      id: v4(),
      element:
         <React.Suspense fallback={<React.Fragment>Loading..</React.Fragment>}>
            <Properties />
         </React.Suspense>,
      title: "Properties",
      path: "/properties",
      private: false,
      hidden: false
   },
   {
      id: v4(),
      element: <h1>SIng</h1>,
      title: "Sing in",
      path: "/singin",
      private: false,
      hidden: true
   },
   {
      id: v4(),
      element: <h1>SIng</h1>,
      title: "Sing Up",
      path: "/singup",
      private: false,
      hidden: true
   },
]