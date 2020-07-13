import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const Container = styled.View`
  flex: 1;
  margin-top: 60px;
  justify-content: flex-start;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
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
