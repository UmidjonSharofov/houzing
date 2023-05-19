import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icon/Arrow.svg";

const Container = styled.div`
  position: relative;
  height: 571px;
`;
const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  width: 18px;
  height: 18px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: ${({ right }) => right && "rotate(180deg)"};
  right: ${({ right }) => right && "20px"};
  left: ${({ right }) => !right && "20px"};
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;
const Img = styled.img`
  width: 100%;
  height: 571px;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  gap: 8px;
  h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: -0.02em;
  }
  h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
Content.Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
`;

export { Container, Arrow, Img, Blur, Content };
