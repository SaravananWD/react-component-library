"use client";
import space from "@/utils/space";
import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Logo>
        React Component Library...
        <span className="logo-tag">
          by{" "}
          <Link
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
  a {
    color: var(--color-muted);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
