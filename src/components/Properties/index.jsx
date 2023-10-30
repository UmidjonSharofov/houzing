import axios from "axios"
import { useEffect, useState } from "react"
import HoseCart from '../houses-cart'
import { useLocation, useNavigate } from "react-router-dom"
// import useRequest from "../../hooks/useRequest"

const Properties = () => {
  const [data, setData] = useState([])
  const { search } = useLocation()
  const navigate = useNavigate()
  const url = import.meta.env.VITE_SOME_BASE_URL;

  useEffect(() => {
    axios.get(`${url}houses/list${search}`).then((res) => {
      setData(res?.data?.data)
    });

  }, [search])
  const onSelect = (id) => {
      navigate(`/properties/:${id}`)
  }
  return (
    <div className="Container">
      <div className="Wrapper">
        <div className="Properties_wrapper">
          <div className="Properties_title">
            <h3 className="title">Properties</h3>
            <p className="sub_Title">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
          </div>
          <div className="Properties">
            {
              data.map(v => (
                <HoseCart onClick={() => onSelect(v.id)} data={v} key={v.id} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Properties