import {
  setCustomElementsManifest,
  type Preview,
} from "@storybook/web-components";
import customElements from "../custom-elements.json";

setCustomElementsManifest(customElements);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Introduction",
          [
            "Welcome",
            "Getting started",
            "Reading the storybook",
            "Design philosophy",
          ],
          "Components",
          "Templates",
          "Other",
        ],
      },
    },
  },
};

export default preview;
