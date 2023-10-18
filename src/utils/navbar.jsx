import React from 'react'
import { v4 } from 'uuid'
import SignInPage from '../pages/Signin'
import SignUpPage from '../pages/Signup'

// eslint-disable-next-line react-refresh/only-export-components
const Properties = React.lazy(() => import('../pages/Properties'))
// eslint-disable-next-line react-refresh/only-export-components
const Home = React.lazy(() => import('../pages/Home/index'))
// eslint-disable-next-line react-refresh/only-export-components
const HouseItme = React.lazy(() => import('../pages/HouseItme/index'))

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
      element: <SignUpPage/>,
      title: "Sing Up",
      path: "/singup",
      private: false,
      hidden: true
   },
   {
      id: v4(),
      element: <SignInPage />,
      title: "Sing in",
      path: "/signin",
      private: false,
      hidden: true
   },
   {
      id: v4(),
      element:
         <React.Suspense fallback={<React.Fragment>Loading..</React.Fragment>}>
            <HouseItme />
         </React.Suspense>,
      title: "HouseItme",
      path: "/properties/:id",
      private: false,
      hidden: true
   },
]