import Banner from "../Banner"
import Carousel from "../Carousel"
import Category from "../Category"
import Recent from "../Recent"
import Recommended from "../Recommended"
// import Testimonials from "../Testimonials"
import Why from "../why"



const Home = () => {
  return (
    <div>
      <Carousel />
      <Recommended/>
      <Why/>
      <Category/>
      <Banner/>
      <Recent/>
      {/* <Testimonials/> */}

    </div>
  )
}
export default Home