import styled from "@emotion/styled";
import React from "react";

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 0.4rem;
  color: #0d0d0d;
  height: 1.75rem;
  margin-right: 0.25rem;
  padding: 0.25rem;
  width: 1.75rem;

  svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  &:hover,
  &.is-active {
    background-color: #0d0d0d;
    color: #fff;
  }
`;
const MenuItem = ({ icon, title, action, isActive = null }: any) => (
  <Button
    className={`${["menu-item"]}${isActive && isActive() ? " is-active" : ""}`}
    onClick={action}
    title={title}
  >
    {React.cloneElement(icon)}
  </Button>
);
export default MenuItem;
