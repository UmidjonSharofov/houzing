import PropertisProvider from "./properties";


const RootContext = ({ children }) => {
    return < >
        <PropertisProvider>
            {children}  
        </PropertisProvider>
    </>
}

export default RootContext