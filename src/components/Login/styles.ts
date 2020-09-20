import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  width: 300px;
  margin: auto;

  img {
    margin-bottom: 40px;
  }

  input {
    width: 100%;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    border-bottom: 1px solid #9B9B9B;
    padding: 8px 0px;
    outline: 0;
    margin-bottom: 10px;

    &::placeholder {
      color: #9B9B9B
    }
  }

  p {
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #263680;
    margin-top: 40px;

    span {
      font-weight: 800;
      color: #263680;
    }

  }
`;

export const Button = styled.div`
  background: #4AB593;
  border-radius: 200px;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  padding: 9px;
  text-align: center;
  color: var(--third-text);
  margin-top: 44px;
`;

export const Divisor = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
  span {
    width: 20px;
    height: 30px;
    background: var(--third-background);
    z-index:2;
    width:100%;
    left: 50%;
  }

`;

export const Social = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    border-radius: 200px;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: var(--third-text);
    padding: 9px;
    width: 50%;



    &:first-child {
      background: #A81E1E;
    }
    
    &:last-child {
      background:#1E9BA8;;
    }
    }
`;

