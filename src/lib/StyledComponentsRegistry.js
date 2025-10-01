"use client";

import React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({ children }) {
  const [styleSheet] = React.useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styleSheet.getStyleElement();
    styleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}

// StyledComponentsRegistry.propTypes = {
//   children: PropTypes.node.isRequired,
// };
