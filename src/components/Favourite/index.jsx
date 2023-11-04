
import axios from "axios"
import { useState } from "react"
import HoseCart from '../houses-cart'
import { useNavigate } from "react-router-dom"
import { useQuery } from "react-query"
import { useDispatch } from "react-redux"
import { addrefetch } from "../../redux/features/refetch"
// import useRequest from "../../hooks/useRequest"

const Favourite = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const url = import.meta.env.VITE_SOME_BASE_URL;
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()


    const { refetch } = useQuery([], () => {
        return axios.get(`${url}houses/getAll/favouriteList`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then((res) => {
            setData(res?.data?.data)
            dispatch(addrefetch(refetch))
        });

    })
    const onSelect = (id) => {
        navigate(`/properties/:${id}`)
    }
    return (
        <div className="Container">
            <div className="Wrapper">
                <div className="Properties_wrapper">
                    <div className="Properties_title">
                        <h3 className="title">Favourite</h3>
                        <p className="sub_Title">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
                    </div>
                    <div className="Properties">
                        {data?.length
                            ? data?.map(v => (
                                <HoseCart onClick={() => onSelect(v.id)} data={v} key={v.id} />
                            ))
                            : <h1>s</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Favourite

