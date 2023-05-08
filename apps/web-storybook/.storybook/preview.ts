import type { Preview } from "@storybook/react";
import '../configure'

import { withTheme } from './theme'

export const decorators = [withTheme]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'pa',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['pa', 'ex'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
