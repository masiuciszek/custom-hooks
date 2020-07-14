import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { mainTheme } from "../../utils/theme";
import { handleFlex } from "../styled/utils/handleFlex";
import GlobalStyles from "./GlobalStyles";
import Nav from "./navbar";
import Footer from "./footer";

export const Page = styled.div`
  ${handleFlex("column", "center", "center")};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  height: 100%;
  padding: 0;
`;

const Main = styled.main`
  max-width: ${(props) => props.theme.size.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  flex-grow: 1;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  @media (max-width: 430px) {
    padding: 0;
  }
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
