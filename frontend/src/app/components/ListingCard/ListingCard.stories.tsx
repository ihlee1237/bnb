import type { Meta, StoryObj } from "@storybook/react";

import ListingCard from "./ListingCard";

const meta = {
  title: "Components/ListingCard",
  component: ListingCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof ListingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "서울의 아파트",
    price: 159_765,
    imageSrc: "https://placehold.co/242x229",
    rating: 4.93,
    checkInDate: new Date("2025-03-06"),
    checkOutDate: new Date("2025-03-08"),
  },
};
