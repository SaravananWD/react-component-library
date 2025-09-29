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
      <p className="para-max-width">
        These components are created primarily for learning purposes. You may
        use and experiment with them as needed. This is the{" "}
        <Link
          href="https://github.com/SaravananWD/react-component-library"
          target="_blank"
          rel="noopener noreferrer"
        >
          repo link
        </Link>{" "}
        and to read more about this project, see its{" "}
        <Link
          href="https://saravanan.dev/projects/ui-library"
          target="_blank"
          rel="noopener noreferrer"
        >
          project details
        </Link>{" "}
        page.
      </p>
    </div>
  );
}

const Logo = styled.div`
  padding: ${space(5)}px 0;
  font-size: var(--type-size-md);
  font-weight: 600;
  color: var(--color-text);

  .logo-tag {
    display: block;
    font-size: var(--type-size-sm);
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
