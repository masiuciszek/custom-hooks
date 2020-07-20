import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { mainTheme } from "../../utils/theme";
import GlobalStyles from "./GlobalStyles";
import Nav from "./navbar";
import Footer from "./footer";

export const Page = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
`;

const Main = styled.main`
  max-width: ${(props) => props.theme.size.maxWidth};
  margin: 0 auto;
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Nav className="main-navbar" />
      <Page>
        <Main>{children}</Main>
      </Page>
      <Footer className="MainFooter" />
    </ThemeProvider>
  );
};

export default Layout;
