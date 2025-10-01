"use client";
import styled from "styled-components";
import space from "@/utils/space";
import Link from "next/link";

export default function Footer() {
  return (
    <StyledFooter>
      Project being developed and maintained by{" "}
      <Link
        href="https://saravanan.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Saravanan
      </Link>
      .
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  font-size: var(--type-size-xs);
  padding: ${space(3)}px 0 ${space(5)}px ${space(3)}px;
`;
