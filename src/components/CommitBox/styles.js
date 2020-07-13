import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const Container = styled.TouchableOpacity`
  margin-top: 40px;
  margin-left: 10px;
  width: 30%;
  height: 200px;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${theme.colors.PURPLE};
  align-items: center;
  border: 1px;
  border-radius: 8px;
`;

export const TodoHeaderContainer = styled.View`
  height: 50px;
  width: 80%;
  margin-left: 5px;
  margin-top: 5px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.COLOR_WHITE};
`;

export const TodoHeader = styled.Text`
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  font-family: ${theme.fonts.FUTURA_MD_MEDIUM};
  color: ${theme.colors.COLOR_WHITE};
  text-transform: capitalize;
`;

export const TodoText = styled.Text`
  margin-top: 10px;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  font-family: ${theme.fonts.FUTURA_MD_MEDIUM};
  color: ${theme.colors.COLOR_WHITE};
  text-transform: capitalize;
`;

export const TodoListContainer = styled.View`
  height: 120px;
  width: 80%;
  margin-left: 5px;
  align-items: flex-start;
  flex-direction: column;
`;
