import PropertiesPages from '../Pages/Properteis'
import HomePages from '../Pages/Home'
import useId from '../hooks/useid'


export const navbar = [
  { id: useId, 
    element: <HomePages />,
    title: "Home",
    path: "/home",
    private:false,
    hidden:false
 },
 { id: useId, 
    element: <PropertiesPages />,
    title: "Properties",
    path: "/Properties",
    private:false,
    hidden:false
 },
    
];
