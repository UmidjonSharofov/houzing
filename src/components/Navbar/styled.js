import styled from "styled-components";
import { ReactComponent as icon  } from "../../assets/icon/logo.svg";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Main = styled.div`
 display: flex;
  justify-content: center;
  background-color: var(--colorPrimary);
`;
const Wrapper = styled.div`
 max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
 
`;
const Section=styled.div`
display: flex;
align-items: center;
cursor:  ${({logo})=>logo&&'pointer'};
.active{
    color: #b8ff06;
}
`
const Logo=styled(icon)`
  width: 30px;
  margin-right: 12px;
  &{
    fill:#fff
  }
`
const Link=styled(NavLink)`
  text-decoration: none;
  padding: 32px;
  color: #fff;
  cursor: pointer;

`

export { Container, Wrapper, Main,Section,Logo,Link};
