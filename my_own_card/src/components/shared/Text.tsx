import { CSSProperties } from "react";
import { Colors, colors } from "@/styles/colorPalette";
import { Typography, typographyMap } from "@/styles/typography";
import styled from "@emotion/styled";


interface TextProps {
  //? : 해당속성을 선택적으로 만들기 위해서 사용 
  typography?: Typography
  color?: Colors
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontWeight?: CSSProperties['fontWeight']
  bold?: boolean
}

export const Text = styled.span<TextProps>(
  ({ color = 'black', display, textAlign, fontWeight, bold }) => ({
    color: colors[color], //var(--red)
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight,
  }),
  ({ typography = 't5' }) => typographyMap[typography],
)

export default Text;