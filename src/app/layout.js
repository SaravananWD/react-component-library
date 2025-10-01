import "../styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Wrapper from "@/components/Wrapper";
import Container from "@/components/Container";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { PageContent, MainFlex } from "@/components/StyleExports";
import ComponentList from "@/components/ComponentList";

export const metadata = {
  title: "React Component Library by Saravanan",
  description:
    "Simple react component library created to experiment and demonstrate component building process and its involved complexities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Wrapper>
            <Container>
              <Header />
              <MainFlex>
                <PageContent>{children}</PageContent>
                <ComponentList />
              </MainFlex>
            </Container>
            <Footer />
          </Wrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
