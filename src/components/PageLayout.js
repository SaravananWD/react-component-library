"use client";
import styled from "styled-components";
import { device } from "@/styles/breakpoints";
import ComponentList from "@/components/ComponentList";
import space from "@/utils/space";

export default function PageLayout({ children }) {
  return (
    <MainFlex>
      <PageContent>{children}</PageContent>
      <ComponentList />
    </MainFlex>
  );
}

const PageContent = styled.div`
  width: 100%;

  p.gray-text {
    color: var(--color-muted);
  }
`;

const MainFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${space(0)}px ${space(7)}px;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
