import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

export type Getter<out T> = () => T;

const props = defineProperties({
  properties: {
    border: {
      black: "2px solid #000",
    },
  },
});

export const sprinkles = createSprinkles(props);

export const button = recipe({
  base: style([
    sprinkles({
      border: "black",
    }),
    {
      borderRadius: 100,
    },
  ]),

  variants: {
    red: {
      true: {
        borderColor: "#f33",
      },
    },
  },
});
