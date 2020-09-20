import styled from "styled-components"

export const Container = styled.div.attrs({
  className: "ContainerBox"
})`
  width:60%;
  min-height:150px;
  height:auto;
  border-radius:15px;
  background-color:#FEFEFE90;
  backdrop-filter: blur(5px);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
  padding:20px;
  position:absolute;
  left:25%;
  right:25%;
  top:50px;
  z-index:100;

  display:flex;
  flex-flow:column;
  justify-content:flex-start;
`

export const Content = styled.div`
  width:100%;
  height:100%;  
  padding-top:10px;  
  display:flex;
  flex-flow:column;
  justify-content:space-between;    

  button {
    width:130px;
    height:30px;
    border-radius:15px;
    margin-top:35px;
    background:var(--primary-background);
    color:#ffff;
    cursor:pointer;

    align-self:flex-end;
  }
`