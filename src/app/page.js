"use client";
import Link from "next/link";
import CodeBox from "@/components/CodeBox";

export default function Home() {
  const code = `import { Accordion } from "@sui/react";`;

  return (
    <>
      <h1>Hey there!</h1>
      <p className="para-max-width">
        These components are created primarily for learning purposes. You may
        use and experiment with them as needed. This is the{" "}
        <Link
          href="https://github.com/falsydev/react-component-library"
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
      </p>{" "}
      <p className="gray-text">
        (Select one of the components to see its detail and demo here.)
      </p>
      <h2>Installation</h2>
      <p className="mb0">Install sui library to your application via npm.</p>
      <CodeBox>npm install @sui/react</CodeBox>
      <p className="mb0">Import the required component.</p>
      <CodeBox language="javascript">{code}</CodeBox>
      <p className="fs-xs">
        (These data are under editing. Do not try for now.)
      </p>
    </>
  );
}
