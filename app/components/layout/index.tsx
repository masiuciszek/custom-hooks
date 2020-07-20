import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { mainTheme, secondaryTheme } from "../../utils/theme";
import GlobalStyles from "./GlobalStyles";
import Nav from "./navbar";
import Footer from "./footer";
import { useSiteState } from "../../context/site.context/Site.context";

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
  const { theme } = useSiteState();
  return (
    <ThemeProvider theme={theme === "light" ? mainTheme : secondaryTheme}>
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
