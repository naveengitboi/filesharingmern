import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  background: rgba(${(props) => props.color}, 0.8);
  border: ${props => (props.type === 0 ? "0px solid" : "1px solid")};

/* border: 2px solid red; */

`;
