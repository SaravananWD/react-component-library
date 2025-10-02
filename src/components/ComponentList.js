"use client";
import space from "@/utils/space";
import styled from "styled-components";
import Link from "next/link";
import { device } from "@/styles/breakpoints";
import COMPONENTS from "@/data/COMPONENTS";
import { usePathname } from "next/navigation";

export default function ComponentList() {
  const pathname = usePathname();

  return (
    <>
      <ComponentLinks>
        <NavHeader>Available Components</NavHeader>
        {COMPONENTS.map((comp) => {
          if (comp.status === "incomplete") return;
          return (
            <Link
              className={pathname === comp.link ? "active" : ""}
              key={comp.id}
              href={comp.link}
            >
              {comp.title}
            </Link>
          );
        })}
        <NavHeader>Under development</NavHeader>
        {COMPONENTS.map((comp) => {
          if (comp.status === "complete") return;
          return (
            <Link
              key={comp.id}
              href={comp.link}
              aria-disabled
              className="disabled"
            >
              {comp.title}
            </Link>
          );
        })}
      </ComponentLinks>
    </>
  );
}

const ComponentLinks = styled.div`
  border: 1px solid var(--color-gray-80);
  border-radius: ${space(2)}px;
  overflow: hidden;
  width: 100%;
  margin-bottom: ${space(5)}px;
  a {
    display: block;
    padding: ${space(2)}px;

    font-size: var(--type-size-xs);
    text-decoration: none;
    border-bottom: 1px solid var(--color-gray-85);
    transition: all var(--base-transition);
    color: var(--color-text);
  }

  a:hover {
    font-weight: 600;
  }

  a:last-child {
    border-bottom: none;
  }

  a.active {
    font-weight: 700;
  }

  a.disabled {
    pointer-events: none;
    cursor: default;
    color: var(--color-gray-40);
  }

  @media ${device.tablet} {
    max-width: ${space(60)}px;
    justify-content: start;
  }
`;

const NavHeader = styled.div`
  padding: ${space(2)}px ${space(2)}px;
  border-bottom: 1px solid var(--color-gray-85);
  color: var(--color-gray-20);
  background-color: var(--color-gray-85);
  font-size: var(--type-size-xs);
  text-align: left;
  font-weight: 600;
`;
