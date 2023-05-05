// import React from "react";
// import { ComponentStory, ComponentMeta } from "@storybook/react-native";
// import { MyButton } from "./Button";

// const MyButtonMeta: ComponentMeta<typeof MyButton> = {
//   title: "MyButton",
//   component: MyButton,
//   argTypes: {
//     onPress: { action: "pressed the button" },
//   },
//   args: {
//     text: "Hello world",
//   },
// };

// export default MyButtonMeta;

// type MyButtonStory = ComponentStory<typeof MyButton>;

// export const Basic: MyButtonStory = (args) => <MyButton {...args} />;

import type { Meta, StoryObj } from '@storybook/react';

import { DSButton, DSButtonProps } from '@design-system-poc/react-native-components';

export default {
  title: 'MyButton',
  component: DSButton,
  tags: ['autodocs'],
  parameters: {
    title: 'teste'
  },
  argTypes: {
    variant: {
      options: ['contained', 'outlined'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary', 'destructive'],
      control: { type: 'select' },
    },
  },

} as Meta<DSButtonProps>;

type Story = StoryObj<DSButtonProps>;

export const Basic: Story = {
  args: {
    title: "Primary small",
    size: "small",
    variant: "contained",
    color: 'primary',
  },
};

export const PrimaryMedium: Story = {
  args: {
    title: "Primary medium",
    size: "medium",
  },
};

export const PrimaryLarge: Story = {
  args: {
    title: "Primary large",
    size: "large",
  },
};

export const Destructive: Story = {
  args: {
    title: "Destructive",
    color: "destructive",
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled",
    disabled: true,
  },
};

export const Outlined: Story = {
  args: {
    title: "Outlined",
    variant: "outlined",
  },
};

export const DestructiveOutlined: Story = {
  args: {
    title: "Destructive outlined",
    color: "destructive",
    variant: "outlined",
  },
};

export const DisabledOutlined: Story = {
  args: {
    title: "Disabled outlined",
    disabled: true,
    variant: "outlined",
  },
};

export const Loading: Story = {
  args: {
    title: "Loading",
    loading: true,
  },
};

export const LoadingMedium: Story = {
  args: {
    title: "Loading",
    size: "medium",
    loading: true,
  },
};

export const LoadingLarge: Story = {
  args: {
    title: "Loading",
    size: "large",
    loading: true,
  },
};

