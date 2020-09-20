import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--primary-text);
  }
  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }
  html {
    background: var(--third-background);
    max-width: 368px;
    margin: auto;
  }

  a {
    text-decoration: none;
  }
  
  :root {
    --primary: #25387D;
    --secondary: #42B693;
    --third: #3a3b3c;
    --fourth: #1E9BA8;


    --primary-text: #000000;
    --secondary-text: #888888;
    --third-text: #FFFFFF;

    --primary-background: linear-gradient(135.44deg, #4AB593 0%, #1E9BA8 99.98%);
    --secondary-background: #E5E5E5;
    --third-background: #FFFFFF;

  }

  .form-group {
    margin: auto;
    display: flex;
    flex-direction: column;

    select, input {
      background: linear-gradient(135.44deg, #ECECEC 0%, #D6D6D6 99.98%);
      box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.05);
      border-radius: 15px;
      padding: 8px 15px;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: var(--secondary-text);
      margin-bottom: 35px;
      max-width: 300px;
      outline: none;
    }

    .btn-default {
      background: linear-gradient(135.44deg, #ECECEC 0%, #D6D6D6 99.98%);
      box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.05);
      border-radius: 15px;
      padding: 16px 23px;
      color: var(--secondary-text);
      font-weight: 500;
      outline: none;
      display: block;
      margin: auto;
      margin-top: 20px;
    }
  }
`;