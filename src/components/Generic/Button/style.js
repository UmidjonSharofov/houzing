import styled from "styled-components";
const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #fff",
        color: "#fff",
      };
      case "ligth":
      return {
        background: "#fff",
        border: "1px solid #E6E9EC",
        color: "#0D263B",
      };
    case "cklic":
      return {
        background: "transparent",
        border: "1px solid #0066CC",
        color: "#0066CC",
        opacity: "0.2",
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
  color: #fff;
  font-weight: 400;
  background-color: #2567c5;
  border: none;
  width: 100%;
  font-size: ${({ FS }) => (FS ? `${FS}px` : "14px")};
  height: ${({ hd }) => (hd ? `${hd}px` : "44px")};
  width: ${({ wd }) => (wd ? `${wd}px` : "150px")};
  border-radius: ${({ br }) => (br ? `${br}px` : "2px")};
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }
  ${getType}
`;

export { Container };
