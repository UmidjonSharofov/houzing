import {v4} from 'uuid'
import Home from '../pages/Home'
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

]