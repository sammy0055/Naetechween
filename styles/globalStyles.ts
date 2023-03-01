import { createGlobalStyle } from "styled-components";
import { theme } from "../pages";
export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    background-color: ${({ theme }: { theme: theme }) => theme.body};
    font-family: 'Roboto', sans-serif;
    font-family: 'Work Sans', sans-serif;
}
`;
