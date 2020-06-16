import * as React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  height: 100vh;
  background-color: transparent;

  &.offset::before {
    content: "";
    height: 4rem;
    display: block;
    margin-top: -4rem;
  }
`;
const Section: React.FunctionComponent<ISectionProps> = (props) => {
  return (
    <StyledSection id={props.id} className={props.className}>
      {props.children}
    </StyledSection>
  );
};

export interface ISectionProps extends React.HtmlHTMLAttributes<any> {
  id?: string;
}

export default Section;
