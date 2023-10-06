import { Input,Button } from "../Generic"
import houses from "../../assets/icon/houses.svg"
import filter from "../../assets/icon/filter.svg"
import serach from "../../assets/icon/serach.svg"
import { Dropdown } from "antd"
import { useRef } from "react"
const Filter = () => {
  const Country=useRef()
  const Region=useRef()
  const City=useRef()
  const Zipcode=useRef()

  const Rooms=useRef()
  const Size=useRef()
  const Sort=useRef()
  
  const Minprice=useRef()
  const Maxprice=useRef()
  const menu = () => {
    return (
      <div className="menuWrapper">
        <h3 className="sub_Title">Address</h3>
        <div className="menu_Section">
          <Input ref={Country} wd={200} placeholder={'Country'} />
          <Input ref={Region} wd={200} placeholder={'Region'} />
          <Input ref={City} wd={200} placeholder={'City'} />
          <Input ref={Zipcode} wd={200} placeholder={'Zip code'} />
        </div>
        <h3 className="sub_Title">Apartment info</h3>
        <div className="menu_Section">
          <Input ref={Rooms} wd={200} placeholder={'Rooms'} />
          <Input ref={Size} wd={200} placeholder={'Size'} />
          <Input ref={Sort} wd={200} placeholder={'Sort'} />
        </div>
        <h3 className="sub_Title">Price</h3>
        <div className="Min menu_Section">
          <Input ref={Minprice} wd={200} placeholder={'Min price'} />
          <Input ref={Maxprice} wd={200} placeholder={'Max price'} />
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