import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @media screen and (min-width:200px) and (max-width:1020px) {    
    .ContainerBox {
      width:90%;
      height:300px;
      background-color:#FEFEFE;
      backdrop-filter:none;
      left:20px;
      right:0;
      top:50px;
    }    
  }   
`