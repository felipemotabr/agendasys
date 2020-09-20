import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--primary-text);
    padding: 20px;
`;

export const Card = styled.div`
  background: var(--primary-background);
  border-radius: 15px;
  padding: 19px 18px;
  margin-top: 20px;

    h1 {
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
      color: var(--primary);
      margin-bottom: 10px;
    }
      
    p {
      font-size: 15px;
      color: var(--third-text);
    }
    strong, span {
      color: var(--third-text);
      display: block;
    }

    .wrapper {
      display: flex;
      flex-direction: row;
    }

    .infos {
      > p {
        > span {
          font-weight: 300;
          line-height: 20px;
          font-style: italic;
        }
        strong {
          font-weight: 500;
          &:first-child {
              margin-bottom: 2px;
          }
          &:last-child {
              margin-top: 10px;
          }
        }
      }
    }
    .alarm {
      button {
        background: linear-gradient(110.94deg, #ECECEC 0%, #D6D6D6 100%);
        color: var(--fourth);
        border-radius: 15px;
        font-style: normal;
        font-weight: 500;
        font-size: 11.25px;
        line-height: 13px;
        padding: 7px 11px;
        outline: none;
        margin-top: 10px;
        text-transform: uppercase;
      }
    }
    .notification {
       > p {
        font-weight: 300;
       }
    }
    .wpp {
      > p {
          padding-top: 1px;
        a {
          background: linear-gradient(110.94deg, #ECECEC 0%, #D6D6D6 100%);
          color: var(--fourth);
          border-radius: 50px;
          padding: 10px 10px 10px 16px;
          font-weight: 500;
          font-size: 11.25px;
          line-height: 13px;
          display: flex;
          align-items: center;

          img {
            margin-left: 4px;
          }
        }
      }
    }

`;

export const Icon = styled.div`
  width: 30px;
`;

export const Content = styled.div`

`;