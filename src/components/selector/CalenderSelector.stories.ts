import { Meta, StoryObj } from "@storybook/react";
import CalendarSelector from "./CalenderSelector"

const meta = {
  title: "Example/Components/CalendarSelector",
  component: CalendarSelector,
  tags: ["autodocs"],
} satisfies Meta<typeof CalendarSelector>

export default meta;
type Story = StoryObj<typeof meta>;

export const _CalendarSelector: Story = {}