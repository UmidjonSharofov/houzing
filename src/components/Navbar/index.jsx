import { NavLink, Outlet, useNavigate } from "react-router-dom"
import logo from '../../assets/icon/logo.svg'
import { navbar } from "../../utils/navbar"
import Button from "../Generic/Button"
import Filter from "../Filter"
import Footer from "../Footer"
import { useState } from "react"
import { Drawer, } from 'antd';
// Media Img
import nav from '../../assets/images/medi/nav.png'
import fe from '../../assets/images/medi/fe.png'
import t from '../../assets/images/medi/t.png'
import i from '../../assets/images/medi/i.png'
import In from '../../assets/images/medi/in.png'


const Navbar = () => {

  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [placement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  // const onChange = (e) => {
  //   setPlacement(e.target.value);
  // };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="Container_Navbar">
        <div className="Wrapper">
          <div className="media">
              <img src={nav} alt="" onClick={showDrawer} />
            <Drawer
              title=""
              placement={placement}
              width={500}
              onClose={onClose}
              open={open}
            >
              <div className="media_wrapper">
                <div className="media_navbar">
                  {navbar.map(({ path, title, id, hidden }) => {
                    return !hidden && <NavLink onClick={onClose} key={id} to={path}>{title}</NavLink>
                  })
                  }
                </div>
                <div className="media_img">
                  <img src={fe} alt=""></img>
                  <img src={t} alt=""></img>
                  <img src={i} alt=""></img>
                  <img src={In} alt=""></img>
                </div>
              </div>

            </Drawer>
          </div>
          <div className="Section_Navbar" onClick={() => navigate('/home')}>
            <img src={logo} alt="logo" />
            <h3>Houzing</h3>
          </div>
          <div className="Section_Navbar blok">
            {navbar.map(({ path, title, id, hidden }) => {
              return !hidden && <NavLink className={({ isActive }) => isActive && 'active'} key={id} to={path}>{title}</NavLink>
            })
            }
          </div>
          <div className="Section_Navbar">
            <Button onClick={() => navigate('/signin')} type={'dark'}>Login</Button>
          </div>
        </div>
      </div>
      <Filter />
      <Outlet />
      <Footer />
    </>
  )
}
export default Navbar