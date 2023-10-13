import bathimg from '../../assets/icon/huses-cart/bath.svg'
import bedimg from '../../assets/icon/huses-cart/bed.svg'
import Group from '../../assets/icon/huses-cart/Group.svg'
import rulerImg from '../../assets/icon/huses-cart/ruler.svg'
import resize from '../../assets/icon/huses-cart/resize.svg'
import love from '../../assets/icon/huses-cart/love.svg'
import noImg from '../../assets/images/no_image.jpg'


// eslint-disable-next-line react/prop-types
const HousesCart = ({ data={} }) => {
    return (
            <div className='Houses_Cart'>
                        <div className='Houses_Cart_Wrapper'>
                            <div className='Houses_img'>
                                <img src={data?.attachments[0]?.imgPath || noImg} alt="hosescart" />
                            </div>
                            <div className='Houses_wrapper'>
                                <div className='Houses_title'>
                                    <h2 className='sub_Title inline' >{data?.city||'city'},{data?.country||""},{data?.description||""}</h2>
                                    <h4 className='info inline' >{data?.address || 'Quincy St, Brooklyn, NY, USA'} - {data?.category?.name||"category"} {data?.houseDetails?.room ||0}-rooms</h4>
                                </div>
                            </div>
                            <div className='Detials'>
                                <div className='Detials_Itme'>
                                    <img src={bedimg} alt="" />
                                    <p className='info'>Beds {data?.houseDetails?.beds || 0}</p>
                                </div>
                                <div className='Detials_Itme'>
                                    <img src={bathimg} alt="" />
                                    <p className='info'>Baths {data?.houseDetails?.bath || 0}</p>
                                </div>

                                <div className='Detials_Itme'>
                                    <img src={Group} alt="" />
                                    <p className='info'>Garage {data?.houseDetails?.garage || 0}</p>
                                </div>
                                <div className='Detials_Itme'>
                                    <img src={rulerImg} alt="" />
                                    <p className='info'>Area {data?.houseDetails?.area || 0} kv</p>
                                </div>
                            </div>
                            <div className='divider' />
                            <div className='Houses_footer'>
                                <div className='Houses_footer_title'>
                                    <p className='info'>${data?.salePrice || 0}/mo</p>
                                    <h3 className='sub_Title'>${data.price || 0}/mo</h3>
                                </div>
                                <div className='Houses_footer_img'>
                                    <img src={resize} alt="resize" />
                                    <img className='love' src={love} alt="love" />
                                </div>
                            </div>
                        </div>
                
            </div>
    )
}
export default HousesCart