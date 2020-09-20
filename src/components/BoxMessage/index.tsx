import React, { memo } from "react"

// Icons

// Components
import PrimaryTitle from "../PrimaryTitle";
import SecundaryTitle from "../SecundaryTitle";

// Styles
import { Container, Content } from "./styles";

// @ts-ignore
function BoxMessage({ title, message, callback }) {
  return <Container>
    <PrimaryTitle>{title}</PrimaryTitle>
    <Content>
      <SecundaryTitle color="#42B693">
        {message}
      </SecundaryTitle>
      <button type="button" onClick={() => callback()}>
        fechar
        </button>
    </Content>
  </Container>
}

export default memo(BoxMessage)