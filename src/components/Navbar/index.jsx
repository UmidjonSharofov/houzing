import React from 'react'
import { Container, Link, Logo, Main, Section, Wrapper } from './styled'
import { Outlet, useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { Button } from '../generic'


export const Navbar = () => {
  const navget = useNavigate()
  return (
    <Container>
      <Main>

        <Wrapper>
          <Section onClick={() => navget('/home')} logo>
            <Logo />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {
              navbar.map(({hidden, title, path, id }, index) => {
               return !hidden && <Link className={({ isActive }) => isActive && 'active'} key={index} to={path}>{title}</Link>
              })
            }
          </Section>
          <Section><Button onClick={()=>navget('/signin')} wd={120} type={'dark'}>Login</Button></Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  )
}

export default Navbar
