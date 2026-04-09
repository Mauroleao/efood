import { createGlobalStyle } from 'styled-components'

export const Colors = {
  TitleColor: '#E66767',
  BackgroundColor: '#FFF8F2',
  SecondaryBackground: '#FFEBD9',
}

export const Styles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        list-style: none;
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
        background-color: ${Colors.BackgroundColor};
        font-family: 'Roboto', sans-serif;
        color: var(--dark);
      }

      html, body, #root {
        height: 100%;
        width: 100%;
      }

      .container {
        max-width: 1024px;
      }
`
