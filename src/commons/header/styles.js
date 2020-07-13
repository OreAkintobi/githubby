import styled from "styled-components/native";
import applyScale from "../../utils/applyScale";
import { Platform } from "react-native";
import { theme } from "../../theme/types";

export const Container = styled.View`
  width: 100%;
  height: ${Platform.select({
    ios: applyScale(70),
    android: applyScale(75),
  })}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${theme.colors.COLOR_WHITE};
  z-index: 999;
`;

export const HeaderBackTitle = styled.Text`
  font-size: ${theme.sizes.FONT_MEDIUM_SIZE}px;
  font-family: ${theme.fonts.FUTURA_MD_MEDIUM};
  color: ${theme.colors.DARK_TEXT};
  position: absolute;
  right: -10px;
`;

export const HeaderLeft = styled.View`
  width: ${applyScale(70)}px;
  height: 100%;
  margin-left: ${applyScale(8)}px;
  background-color: transparent;
`;

export const HeaderRight = styled.View`
  width: ${applyScale(50)}px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const HeaderTitleContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;

export const HeaderName = styled.Text`
  font-size: ${theme.sizes.FONT_LARGE_SIZE + 5}px;
  font-family: ${theme.fonts.FUTURA_MD_MEDIUM};
  color: ${theme.colors.DARK_TEXT};
  text-transform: capitalize;
`;

export const BackButtonTouchable = styled.TouchableOpacity`
  width: 70%;
  height: 100%;
  justify-content: flex-end;
  padding-right: 20px;
`;
