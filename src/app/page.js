"use client";
import Link from "next/link";

import { PageContent, MainFlex } from "@/components/StyleExports";

export default function Home() {
  return (
    <>
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
      </p>{" "}
      <p className="gray-text">
        (Select one of the components to see its detail and demo here.)
      </p>
    </>
  );
}
