import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-top: 60px;
  text-align: center;
  padding-bottom: 60px;

  p {
      color: var(--secondary-text);
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 20px;
    }

  .header {
    width: 90%;
    text-align: center;
    margin-bottom: 24px;

    h1 {
    color: var(--fourth);
    font-size: 35.53px;
    margin-bottom: 9px;
    }

  }


`;
