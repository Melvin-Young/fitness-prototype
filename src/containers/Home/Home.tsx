import * as React from "react";
import Section, { ISectionProps } from "../../components/Section";
import styled from "styled-components";

const StyledLandingSection = styled.div`
  position: absolute;
  top: 38%;
  width: 100%;
  max-width: 100%;
  z-index: 1;
  span {
    color: ${(props) => props.theme.secondary};
  }
`;
export const Home: React.FunctionComponent<ISectionProps> = (props) => (
  <StyledLandingSection className="caption text-center text-light text-uppercase">
    <h1 className="font-weight-bold">
      Welcome to <span>Nuno</span>
    </h1>
  </StyledLandingSection>
);
