"use client";
import React from "react";
import styled from "styled-components";
import space from "@/utils/space";

export default function Select({
  id = "",
  className = "",
  children,
  ...props
}) {
  return (
    <StyledSelect id={id ? id : "select-menu"} className={className} {...props}>
      {children}
    </StyledSelect>
  );
}

const StyledSelect = styled.select`
  outline: none;
  border: none;
  background: transparent;

  option {
    outline: none;
    border: none;
    background: transparent;
  }
`;
