import styled from "styled-components";
import { ReactComponent as houses } from "../../assets/icon/houses.svg";
import { ReactComponent as filter } from "../../assets/icon/Filter.svg";
import { ReactComponent as search } from "../../assets/icon/Search.svg";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;
const Icon = styled.div``;
Icon.Filter = styled(filter)`
  margin-right: 8px;
`;
Icon.Houses = styled(houses)`
  margin-right: 8px;
`;
Icon.Search = styled(search)`
  margin-right: 8px;
`;
const MenuWrapper = styled.div`
  padding: 30px;
  border: 1px solid #f6f8f9;
  background: #fff;
`;
const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export { Container, Icon, MenuWrapper, Section };
