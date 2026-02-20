import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "sketch-paper",
      values: [
        { name: "sketch-paper", value: "oklch(0.97 0.005 90)" },
        { name: "dark", value: "oklch(0.20 0.015 70)" },
        { name: "white", value: "#ffffff" },
      ],
    },
  },
};

export default preview;
