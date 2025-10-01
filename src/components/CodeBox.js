import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

import styled from "styled-components";

export default function CodeBox({ children }) {
  return (
    <CodeWrap>
      <SyntaxHighlighter
        language="javascript"
        style={vs}
        customStyle={{
          borderRadius: "8px",
          padding: "20px",
          fontSize: "16px",
        }}
      >
        {children}
      </SyntaxHighlighter>
    </CodeWrap>
  );
}

const CodeWrap = styled.div`
  .syntax-code .token.string {
    color: #ecc48d !important;
  }
  .syntax-code .token.keyword {
    color: #c792ea !important;
  }
  .syntax-code .token.function {
    color: #82aaff !important;
  }
`;
