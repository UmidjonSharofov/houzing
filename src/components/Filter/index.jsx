import { Input,Button } from "../Generic"
import houses from "../../assets/icon/houses.svg"
import filter from "../../assets/icon/filter.svg"
import serach from "../../assets/icon/serach.svg"
import { Dropdown } from "antd"
import { useRef } from "react"
import { uzeReplace } from "../../hooks/UseReplace"
import { useLocation, useNavigate } from "react-router-dom"
import useSearch from "../../hooks/useSearch"

const Filter = () => {
  const navigate=useNavigate()
  const location=useLocation()
  const query=useSearch()

  const Country=useRef()
  const Region=useRef()
  const City=useRef()
  const Zipcode=useRef()

  const Rooms=useRef()
  const Size=useRef()
  const Sort=useRef()
  
  const Minprice=useRef()
  const Maxprice=useRef()

 const onChange=({target:{value,name}})=>{
  console.log(value ,name);
   navigate(`${location?.pathname}${uzeReplace(name,value)}`)
 } 
  const menu = () => {
    return (
      <div className="menuWrapper">
        <h3 className="sub_Title">Address</h3>
        <div className="menu_Section">
          <Input defaultValue={query.get('country')} onChange={onChange} name='country' ref={Country}  placeholder={'Country'} />
          <Input defaultValue={query.get('region')} onChange={onChange} name='region' ref={Region} placeholder={'Region'} />
          <Input defaultValue={query.get('address')} onChange={onChange} name='address' ref={City}  placeholder={'City'} />
          <Input defaultValue={query.get('zip_code')} onChange={onChange} name='zip_code' ref={Zipcode}  placeholder={'Zip code'} />
        </div>
        <h3 className="sub_Title">Apartment info</h3>
        <div className="menu_Section">
          <Input ref={Rooms}  placeholder={'Rooms'} />
          <Input ref={Size} placeholder={'Size'} />
          <Input ref={Sort}  placeholder={'Sort'} />
        </div>
        <h3 className="sub_Title">Price</h3>
        <div className="Min menu_Section">
          <Input ref={Minprice}  placeholder={'Min price'} />
          <Input ref={Maxprice}  placeholder={'Max price'} />
        </div>
      </div>
    )
  }
  return (
    <div className="Container">
      <div className="Wrapper">
        <div className="Filter">
          <div className="Input_filter">
            <img className="houses" src={houses} alt="houses" />
            <Input  icon={houses} placeholder={'Enter an address, neighborhood, city, or ZIP code'} />
          </div>
          <div className="Filter_Button">
            <Dropdown overlay={menu} placement="bottomRight" trigger={['click']} arrow>
              <div onClick={(e) => e.preventDefault()}>
                <Button type={'ligth'}> <img src={filter} alt="filter" /> Advanced</Button>
              </div>
            </Dropdown>
          </div>
          <div className="Filter_button">

            <Button>
              <img src={serach} alt="serch" />
              Search</Button>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Filter