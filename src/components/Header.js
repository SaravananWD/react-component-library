"use client";
import space from "@/utils/space";
import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Logo>
        <Link href="/" className="text-link">
          React Component Library...
        </Link>
        <span className="logo-tag">
          by{" "}
          <Link
            className="name"
            href="https://saravanan.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saravanan
          </Link>
        </span>
      </Logo>
    </div>
  );
}

const Logo = styled.div`
  padding: ${space(5)}px 0;
  font-size: var(--type-size-md);
  font-weight: 600;
  color: var(--color-text);
  /* border-bottom: 1px solid var(--color-gray-85);
  margin-bottom: ${space(7)}px; */

  .logo-tag {
    display: block;
    font-size: var(--type-size-xs);
    font-weight: 500;
    color: var(--color-muted);
  }
  a.name {
    color: var(--color-muted);
    text-decoration: none;
  }
  a.name:hover {
    text-decoration: underline;
  }
`;
