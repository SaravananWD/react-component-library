import "../styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Wrapper from "@/components/Wrapper";
import Container from "@/components/Container";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "React Component Library by Saravanan",
  description:
    "Simple react component library created to experiment and demonstrate component building process and its involved complexities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="" data-theme="dark">
      <body>
        <StyledComponentsRegistry>
          <Wrapper>
            <Container>
              <Header />
              <PageLayout>{children}</PageLayout>
            </Container>
            <Footer />
          </Wrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
