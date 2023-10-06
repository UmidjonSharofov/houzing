import {v4} from 'uuid'
import Home from '../pages/Home/index'
import Properties from '../pages/Properties'

export const navbar=[
    { id: v4(), 
        element: <Home/>,
        title: "Home",
        path: "/home",
        private:false,
        hidden:false
     }, 
     { id: v4(), 
        element: <Properties/>,
        title: "Properties",
        path: "/properties",
        private:false,
        hidden:false
     },
     { id: v4(), 
      element: <h1>SIng</h1>,
      title: "Sing in",
      path: "/singin",
      private:false,
      hidden:true
   },  
   { id: v4(), 
      element: <h1>SIng</h1>,
      title: "Sing Up",
      path: "/singup",
      private:false,
      hidden:true
   },  
]