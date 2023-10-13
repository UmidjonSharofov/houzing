import { Button } from '../Generic'


import Img1 from '../../assets/images/carusle IMG1.png'


const Banner = () => {
    return (
        <div className='Banner'>
            <div className='Carousel'>
                <div className='Banner_title'>
                    <h1 className='subChild'>{`Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home`}</h1>
                    <Button >Read more</Button>
                </div>
                <div className='blur'>
                </div>
                <img src={Img1} alt="carousel" />
            </div>
        </div>
    )
}
export default Banner