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

const Container = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border:1px solid #E6E9EC;
  font-size: ${({ FS }) => (FS ? `${FS}px` : "14px")};
  height: ${({ hd }) => (hd ? `${hd}px` : "44px")};
  width: ${({ wd }) => (wd ? `${wd}px` : "100%")};
  border-radius: ${({ br }) => (br ? `${br}px` : "2px")};
  padding-left:  ${({ icon }) => (icon ? `50px` : "10px")};
  outline:none;

  :active {
    opacity: 0.7;
  }
  /* ${getType} */
`;

export { Container };
