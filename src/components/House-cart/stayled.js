import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icon/bed.svg";
import { ReactComponent as beth } from "../../assets/icon/bath.svg";
import { ReactComponent as garage } from "../../assets/icon/car.svg";
import { ReactComponent as ruler } from "../../assets/icon/Group.svg";
import { ReactComponent as love } from "../../assets/icon/2.svg";
import { ReactComponent as resize } from "../../assets/icon/1.svg";

const Container = styled.div`
  width: 380px;
  height: 430px;
  border-radius: 3px;
  margin: 100px;
  filter: drop-shadow(0px 20px 38px rgba(0,0,0,0.06))
  drop-shadow(0px 7px 48px rgba(0,0,0,0.06))
  drop-shadow(0px 8px 15px rgba(0,0,0,0.06))
  ;
`;
const Img = styled.img`
  width: 100%;
  max-height: 220px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({footer})=>footer?"row":'column'};
  justify-content: ${({footer})=>footer&&"space-between"};
  padding-top: 20px;
  padding: 16px 20px;
  background: white;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;

Details.Itme = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${({row})=>row?"row":'column'};
  align-items: ${({footer})=>!footer&&"center"};

`;
const Icon = styled.div``;

Icon.Bet = styled(bed)``;
Icon.Beth = styled(beth)``;
Icon.Garage = styled(garage)``;
Icon.Ruler = styled(ruler)``;
Icon.Love = styled(love)`
  width: 30px;
  height: 30px;
  padding: 6px;
  background: #F6F8F9;
  border-radius:50%;
  margin-left: 20px;
  cursor: pointer;
  :active{
    transform: scale(0.9);
  }

`;
Icon.Resize = styled(resize)``;

const Diver = styled.div`
  background: #e6e9ec;
  height: 1px;
  width: 100%;
`;

export { Container, Img, Content, Details, Icon, Diver };
