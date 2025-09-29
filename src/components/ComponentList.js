"use client";
import space from "@/utils/space";
import styled from "styled-components";
import Link from "next/link";
import { device } from "@/styles/breakpoints";

export default function ComponentList() {
  return (
    <>
      <ComponentLinks>
        <NavHeader>Available Components</NavHeader>
        <Link href="/Accordion" target="_blank" rel="noopener noreferrer">
          Accordion
        </Link>
        <NavHeader>Under development</NavHeader>
        <Link
          // className="active"
          href="/Tooltip"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tooltip
        </Link>{" "}
        <Link href="/Button" target="_blank" rel="noopener noreferrer">
          Button
        </Link>
        <Link href="/Button" target="_blank" rel="noopener noreferrer">
          Button
        </Link>{" "}
        <Link href="/Button" target="_blank" rel="noopener noreferrer">
          Button
        </Link>
        <Link href="/Button" target="_blank" rel="noopener noreferrer">
          Button
        </Link>
        <Link href="/Button" target="_blank" rel="noopener noreferrer">
          Button
        </Link>
        <Link href="/Button" target="_blank" rel="noopener noreferrer">
          Button
        </Link>
        <Link href="/Button" target="_blank" rel="noopener noreferrer">
          Button
        </Link>
        <Link href="/Button" target="_blank" rel="noopener noreferrer">
          Button
        </Link>
      </ComponentLinks>
    </>
  );
}

const ComponentLinks = styled.div`
  border: 1px solid var(--color-gray-80);
  border-radius: ${space(2)}px;
  overflow: hidden;
  width: 100%;
  a {
    display: block;
    padding: ${space(2)}px;
    background-color: var(--color-gray-90);
    font-size: var(--type-size-xs);
    text-decoration: none;
    border-bottom: 1px solid var(--color-gray-85);
    transition: var(--transition-bg);
    color: var(--color-text);
  }

  a:hover {
    font-weight: 600;
  }

  a:last-child {
    border-bottom: none;
  }

  a.active {
    font-weight: 600;
    background-color: var(--color-gray-85);
  }

  @media ${device.tablet} {
    max-width: ${space(60)}px;
  }
`;

const NavHeader = styled.div`
  padding: ${space(2)}px ${space(2)}px;
  border-bottom: 1px solid var(--color-gray-85);
`;
