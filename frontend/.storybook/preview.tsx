import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const args = {
        ...context.args,
      };

      for (const key in context.argTypes) {
        // note: 스토리북 타입 잘못되어 있는 듯..
        const control = (context.argTypes[key].control as { type: "date" })?.type;
        if (control === "date" && typeof context.args[key] === "number") {
          args[key] = new Date(context.args[key]);
        }
      }

      return <Story {...context} args={args} />;
    },
  ],
  /* cspell:ignore autodocs */
  tags: ["autodocs"],
};

export default preview;
