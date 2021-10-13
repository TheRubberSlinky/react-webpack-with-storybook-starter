import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Empty } from "./Empty";

export default {
  title: "Components/Empty",
  component: Empty,
} as ComponentMeta<typeof Empty>;

const Template: ComponentStory<typeof Empty> = (args) => <Empty {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
