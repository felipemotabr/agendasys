import styled from 'styled-components';

export const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: var(--primary-text);
      padding: 20px;
      
      > div {
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #263680;
        display: flex;
        flex-direction: column;
        margin-top: calc(50vh - 120px);

        > button {
        background: var(--primary-background);
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        color: var(--third-text);
        padding: 15px;
        font-size: 15px;
        font-weight: 600;
        outline: none;
        margin-top: 20px;
      }
    }

`;
