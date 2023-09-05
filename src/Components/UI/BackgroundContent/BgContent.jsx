import React from "react";
import { styled } from "styled-components";

const StyledComponent = styled.div`
  min-height: 100vh;
  width: auto;
  position: relative;

  &::before {
    content: ${(props) => (props.content ? props.content : "")};
    color: var(--color-darken-main);
    position: absolute;
    top: -5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10rem;
    opacity: 0.3;
    text-transform: capitalize;
    font-family: "Playfair Display", Georgia, serif;
    z-index: -1;
  }

  @media (max-width: 768px) {
    &::before {
      font-size: 3rem;
    }

    margin-block: 10rem;
  }
`;

function BgContent(props) {
  const { content } = props;
  return (
    <StyledComponent content={`"${content}"`}>{props.children}</StyledComponent>
  );
}

export default BgContent;
