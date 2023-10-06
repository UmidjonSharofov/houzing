import { NavLink, Outlet, useNavigate } from "react-router-dom"
import logo from '../../assets/icon/logo.svg'
import { navbar } from "../../utils/navbar"

 const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className="Container_Navbar">
      <div className="Wrapper">
        <div className="Section_Navbar" onClick={()=>navigate('/home')}>
          <img src={logo} alt="logo" />
         <h3>Houzing</h3>
        </div>
        <div className="Section_Navbar">
          {navbar.map(({ path, title, id })=>{
            return <NavLink className={({isActive})=>isActive && 'active'} key={id} to={path}>{title}</NavLink>
          })
          }
        </div>
        <div className="Section_Navbar">
          <button>sing ip</button>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}
export default Navbar