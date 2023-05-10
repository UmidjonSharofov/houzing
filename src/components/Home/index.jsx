import React from 'react'
import { Container } from './styled'
import Input from '../generic/Input'


export const Home = () => {
  return (
    <>
      <Container>Home</Container>
      <Input wd={200} placeholder={'TITL'} />
    </>
  )
}

export default Home
