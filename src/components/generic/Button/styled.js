import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #fff",
        color: "#fff",
      };
    case "light":
      return {
        background: "#FFF",
        border: "1px solid #E6E9EC",
        color: " #0D263B",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "#fff",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "#fff",
      };
  }
};

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  min-width: 120px;

  font-size: ${({ FS }) => (FS ? `${FS}px` : "14px")};
  height: ${({ hd }) => (hd ? `${hd}px` : "44px")};
  width: ${({ wd }) => (wd ? `${wd}px` : "130px")};
  cursor: pointer;

  :active{
    opacity:0.7;
  }

  ${getType}
`;

export { Container };
