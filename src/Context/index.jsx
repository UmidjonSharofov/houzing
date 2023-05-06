import { createContext } from "react";
import PropertisProvider from "./properties";

const Root = createContext()

const RootContext = ({ children }) => {
    return <Root.Provider>
        <PropertisProvider>
            {children}
        </PropertisProvider>
    </Root.Provider>
}

export default RootContext