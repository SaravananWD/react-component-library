"use client";
import styled from "styled-components";
import { device } from "@/styles/breakpoints";
import space from "@/utils/space";

export const PageContent = styled.div`
  width: 100%;

  p.gray-text {
    color: var(--color-muted);
  }
`;

export const MainFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${space(0)}px ${space(7)}px;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
