import React from "react";
import { theme } from "../../theme/types";

import { Label } from "./styles";

export default function TabBarLabel(props) {
  const { fonts, colors } = theme;
  const { label, focused, color } = props;

  return (
    <Label
      style={{
        fontFamily: focused ? fonts.FUTURA_MD_BOLD : fonts.FUTURA_MD_MEDIUM,
        fontSize: focused ? 12 : 11,
        color,
      }}
    >
      {label}
    </Label>
  );
}
