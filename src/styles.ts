import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #9E9E9E;
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
    }
    *, button, input{
        border: 0;
        background: none;
        font-family:  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    html {
        background: var(--primary)
    }
    :root {
        --primary: #FAFBFD;
        --secondary: #FFFFFF;
        --search: #202327;
        --active: #090F31;
        --gray: #9E9E9E;
        --header: #4F4F4F;
        --footer: #828282;
  }
  
`
