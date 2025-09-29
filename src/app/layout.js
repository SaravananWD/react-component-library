import "../styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Wrapper from "@/components/Wrapper";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";

export const metadata = {
  title: "React Component Library by Saravanan",
  description:
    "Simple react component library created to experiment and demonstrate component building process and its involved complexities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body>
        <StyledComponentsRegistry>
          <Wrapper>
            <Header />

            {children}
            <Footer />
          </Wrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
