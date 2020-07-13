import React from "react";

import {
  Container,
  TodoHeaderContainer,
  TodoHeader,
  TodoListContainer,
} from "./styles";

const CommitBox = ({ handlePress, headerText, children }) => {
  return (
    <>
      <Container onPress={handlePress}>
        <TodoHeaderContainer>
          <TodoHeader>{headerText}</TodoHeader>
        </TodoHeaderContainer>
        <TodoListContainer>{children}</TodoListContainer>
      </Container>
    </>
  );
};

export default CommitBox;
