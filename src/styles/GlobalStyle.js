import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --coral: #E85C47;
    --coral-light: #FFEAE1;
    --dark: #333333;
    --text-light: #999999;
    --white: #ffffff;
    --beige: #FAF1E7;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--beige);
    color: var(--dark);
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }
`

export default GlobalStyle
