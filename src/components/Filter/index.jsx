import { Input, Button } from "../Generic"
import houses from "../../assets/icon/houses.svg"
import filter from "../../assets/icon/filter.svg"
import serach from "../../assets/icon/serach.svg"
import { Dropdown } from "antd"
import { useEffect, useRef, useState } from "react"
import { uzeReplace } from "../../hooks/UseReplace"
import { useLocation, useNavigate } from "react-router-dom"
import useSearch from "../../hooks/useSearch"
import axios from "axios"
import { Select, } from 'antd';

const Filter = () => {


  const url = import.meta.env.VITE_SOME_BASE_URL
  const [data, setData] = useState([])

  const [value, setValue] = useState('Select Category')



  useEffect(() => {
    axios.get(`${url}categories/list`).then((res) => {
      setData(res?.data?.data)

    })
  }, [url])

  const navigate = useNavigate()
  const location = useLocation()
  const query = useSearch()

  useEffect(() => {
    const [d] = data.filter((v) => v.id === Number(query.get('category_id')))
    d?.name && setValue(d?.name)
    !query.get('category_id') && setValue('Select Category')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, data])

  const Country = useRef()
  const Region = useRef()
  const City = useRef()
  const Zipcode = useRef()

  const Rooms = useRef()
  // const Size = useRef()
  // const Sort = useRef()

  const Minprice = useRef()
  const Maxprice = useRef()

  const onChange = ({ target: { value, name } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`)
  }

  const onChangeCategory = (category_id) => {
    navigate(`/properties/${uzeReplace('category_id', category_id)}`)
  }

  const onChangeSort = (sort) => {
    navigate(`/properties/${uzeReplace('sort', sort)}`)
  }
  const menu = () => {
    return (
      <div className="menuWrapper">
        <h3 className="sub_Title">Address</h3>
        <div className="menu_Section">
          <Input defaultValue={query.get('country')} onChange={onChange} name='country' ref={Country} placeholder={'Country'} />
          <Input defaultValue={query.get('region')} onChange={onChange} name='region' ref={Region} placeholder={'Region'} />
          <Input defaultValue={query.get('address')} onChange={onChange} name='address' ref={City} placeholder={'City'} />
          <Input defaultValue={query.get('zip_code')} onChange={onChange} name='zip_code' ref={Zipcode} placeholder={'Zip code'} />
        </div>
        <h3 className="sub_Title">Apartment info</h3>
        <div className="menu_Section">
          <Input ref={Rooms} name='room' onChange={onChange} placeholder={'Rooms'} />
          {/* <Input ref={Size} placeholder={'Size'} /> */}
          <Select className="menu_Select" defaultValue={query.get('sort') || 'Select Sort'} onChange={onChangeSort}>
            <option value={''}>Select Sort</option>
            <option value={'asc'}>Ascending</option>
            <option value={'desc'}>Decreasing</option>
          </Select>
          {/* <Input ref={Sort}  placeholder={'Sort'} /> */}
          <Select className="menu_Select" value={value} onChange={onChangeCategory}>
            <option value={''}>Select category</option>
            {
              data?.map(v => (
                <option value={v.id} key={v.id} >{v.name}</option>
              ))
            }
          </Select>
        </div>
        <h3 className="sub_Title">Price</h3>
        <div className="Min menu_Section">
          <Input onChange={onChange} name='min_price' ref={Minprice} placeholder={'Min price'} />
          <Input onChange={onChange} name='max_price' ref={Maxprice} placeholder={'Max price'} />
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
            <Input icon={houses} placeholder={'Enter an address, neighborhood, city, or ZIP code'} />
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