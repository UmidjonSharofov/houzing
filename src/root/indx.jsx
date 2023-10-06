import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { navbar } from "../utils/navbar"
import Navbar from "../components/Navbar"

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            {
              navbar.map(({ path, element, id }) => (
                <Route key={id} path={path} element={element} />
              ))
            }
            <Route path="/" element={<Navigate to={"/home"} />} />
          </Route>
          <Route path="*" element={<h1>404 eror</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Root