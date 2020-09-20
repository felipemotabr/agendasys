import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-top: 60px;
  text-align: center;

  p {
    
  }

  .header {
    width: 225px;
    text-align: center;
    margin-bottom: 54px;

    h1 {
    color: var(--fourth);
    font-size: 35.53px;
    margin-bottom: 9px;
    }

    p {
      color: #263680;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      margin-top: 30px;
    }

  }
`;
export const Card = styled.div`
  background: linear-gradient(135.44deg, #4AB593 0%, #1E9BA8 99.98%);
  /* Shadow */
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 18px 19px;
  text-align: left;
  min-width: 230px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: row;

    div:first-child {
      margin-right: 5px;
    }
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 5px;
    color: var(--primary);
  }

    span {
    color: var(--third-text);
    display: block;
    line-height: 22px;
    }
    strong {
      color: var(--third-text);
      font-weight:bold;
      display: block;

      &:first-child {
        line-height: 32px;
      }

      &:last-child {
        line-height: 52px;
      }
    }

`;
export const Button = styled.div`
  background: linear-gradient(110.94deg, #ECECEC 0%, #D6D6D6 100%);
  border-radius: 50px;
  padding:  20px 13px;
  text-align: center;
  color: var(--fourth);
  font-size: 11.25px;
  line-height: 13px;
  font-weight: 500;
  justify-content: center;
`;
