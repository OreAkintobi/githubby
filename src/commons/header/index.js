import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../theme/types";
import HomeIcon from "../../../assets/icons/BottomNav/HomeIcon";
import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  HeaderLeft,
  HeaderRight,
  HeaderBackTitle,
  HeaderName,
  HeaderTitleContainer,
  BackButtonTouchable,
} from "./styles";

export default function Header(props) {
  const { colors } = theme;
  const navigation = useNavigation();

  const {
    title,
    style,
    headerBackTitleVisible,
    headerLeftContainerStyle,
    headerRightContainerStyle,
    functionPassDown,
  } = props;

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.COLOR_WHITE} />
      <Container>
        {props.headerLeft ? (
          <HeaderLeft style={headerLeftContainerStyle}>
            <BackButtonTouchable
              onPress={() => {
                navigation.goBack();
              }}
            >
              <HomeIcon />
            </BackButtonTouchable>
            {headerBackTitleVisible && <HeaderBackTitle>back</HeaderBackTitle>}
          </HeaderLeft>
        ) : null}

        <HeaderTitleContainer style={{ marginLeft: props.headerLeft ? 0 : 20 }}>
          <AntDesign name="github" size={24} color="black" />
          <HeaderName> {title}</HeaderName>
        </HeaderTitleContainer>

        <HeaderRight style={headerRightContainerStyle}>
          {props.headerRight ? (
            <BackButtonTouchable onPress={functionPassDown}>
              <props.headerRight />
            </BackButtonTouchable>
          ) : null}
        </HeaderRight>
      </Container>
    </>
  );
}
