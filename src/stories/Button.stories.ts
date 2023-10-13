import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@chakra-ui/react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    colorScheme: "blue",
    children: "Hello World!",
  },
};

export default meta;
