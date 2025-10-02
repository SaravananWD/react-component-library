"use client";
import space from "@/utils/space";
import styled from "styled-components";

export default function NotFound() {
  return (
    <Error404>
      <h1>404</h1>
      <p>This page could not be found.</p>
    </Error404>
  );
}

const Error404 = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  color: var(--color-accent);
  margin-top: ${space(10)}px;

  h1 {
    margin-bottom: 0;
  }
  p {
    font-weight: 600;
  }
`;
