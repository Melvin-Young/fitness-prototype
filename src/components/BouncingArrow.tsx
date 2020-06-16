import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Animated } from "react-animated-css";

const StyledArrowIcon = styled.div`
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  text-align: center;
  .arrow {
    color: white;
    font-size: 2rem;
    opacity: 0.3;
    &:hover {
      opacity: 0.8;
    }
  }
`;
export const BouncingArrow: React.FunctionComponent = () => (
  <StyledArrowIcon className="arrow d-none d-md-block">
    <Animated animationIn="bounce" animationOut="fadeOut" isVisible>
      <a href="#contact">
        <FontAwesomeIcon className="arrow" icon={faAngleDown} />
      </a>
    </Animated>
  </StyledArrowIcon>
);
