import space from "@/utils/space";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import {
  vs,
  materialLight,
  ghcolors,
  nightOwl,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import styled from "styled-components";

export default function CodeBox({ children, language, style, ...rest }) {
  return (
    <CodeWrap>
      <SyntaxHighlighter
        language={language ? language : "jsx"}
        style={style ? style : ghcolors}
        customStyle={{
          borderRadius: "8px",
          padding: "20px",
          fontSize: "16px",
        }}
        {...rest}
      >
        {children}
      </SyntaxHighlighter>
    </CodeWrap>
  );
}

const CodeWrap = styled.div`
  margin-bottom: ${space(5)}px;

  pre {
    background-color: var(--color-bg) !important;
  }

  .keyword {
    display: inline-block;
    border-bottom: 1px solid var(--color-secondary);
    color: var(--color-secondary);
  }
`;
