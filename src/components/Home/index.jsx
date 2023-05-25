import React from 'react'
import { Container } from './styled'
import GenCarousel from '../Carousel'
import HouseCart from '../House-cart'


export const Home = () => {
  return (
    <>
      <Container>
        <GenCarousel/>
        <HouseCart/>
      </Container>
    </>
  )
}

export default Home
