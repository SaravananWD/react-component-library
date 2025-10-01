"use client";
import styled from "styled-components";
import space from "@/utils/space";

const Container = styled.div`
  padding: 0 ${space(5)}px;
  background-color: var(--color-surface);
  border-radius: ${space(3)}px;
  border: 1px solid var(--color-gray-85);
  border-top: var(--space-2) solid var(--color-gray-85);
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  /* 
  &:hover {
    box-shadow: 0px -8px 0px 0 rgba(0, 0, 0, 0.15);
  } */
`;

export default Container;
