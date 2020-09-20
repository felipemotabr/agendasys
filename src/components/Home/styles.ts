import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--primary-text);
    padding: 20px;

    h1 {
      font-size: 40px;
      line-height: 45px;
      font-weight: 400;


      span {
        display: block;
        color: var(--primary);
        font-weight: 700;
      }
    }
    h2 {
      font-size: 20px;
      font-weight: 500;
      margin-top: 27px;
      margin-bottom: 16px;
    }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around; 
  margin-bottom: 10px;
  
  a {
    text-decoration: none;
  }

  div {
    background: var(--primary-background);
    height: 132px;
    width: 132px;
    flex-wrap: wrap;
    display: flex;
    align-content: flex-end;
    justify-content: center;
    text-align: center;
    padding-bottom:20px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 15px;
    color: var(--third-text);
    font-weight: 600;
    border-radius: 15px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    
  }
`;

export const ContentBookmark = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
`;


export const Bookmark = styled.div`
  background: linear-gradient(110.94deg, #ECECEC 0%, #D6D6D6 100%);
  border-radius: 15px;
  height: 120px;
  margin-bottom: 20px;
  padding: 10px 9px;
  display: flex;


  h1 {
    font-weight: 800;
    font-size: 15px;
    margin: 0;
    color: var(--primary);
    padding: 0;
    line-height: 26px;
  }
  h2 {
    font-weight: 500;
    font-size: 15px;
    margin: 0;
    padding: 0;
    color: #828282;
  }
  h3 {
    font-weight: 500;
    font-size: 11.25px;
    margin: 0;
    color: #828282;
  }
  p {
    font-weight: 400;
    font-size: 11.25px;
    line-height: 13px;
    color: #4F4F4F;
  }
`;
