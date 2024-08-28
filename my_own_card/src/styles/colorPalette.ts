import { css } from "@emotion/react";

export const colorPalette=css`
  :root{
    --red:#FF3333;
    --blue:#43A5FF;
    --green:#61D09E;
    --white:#F1FCFF;
    --black:#000000;
    --grey:#F5F5F5;
  }
`
export const colors={
  red:`var(--red)`,
  blue:`var(--blue)`,
  green:`var(--green)`,
  white:`var(--white)`,
  black:`var(--black)`,
  grey:`var(--grey)`,
}
export type Colors= keyof typeof colors