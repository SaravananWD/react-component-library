"use client";
import styled from "styled-components";
import { device } from "@/styles/breakpoints";
import ComponentList from "@/components/ComponentList";
import space from "@/utils/space";

export default function Home() {
  return (
    <MainFlex>
      {" "}
      <PageContent>
        <h1>Welcome!</h1>
        <p>Select one of the components to see its detail and demo here.</p>
      </PageContent>
      <ComponentList />
    </MainFlex>
  );
}

const PageContent = styled.div``;

const MainFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${space(7)}px;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
