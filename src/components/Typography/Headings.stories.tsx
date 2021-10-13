import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading } from "./Headings";

export default {
  title: "Typeography/Headings",
  component: Heading,
  decorators: [
    (story) => (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        {story()}
      </div>
    ),
  ],
  args: {
    children: "Heading Text",
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 1,
};

export const Underline = Template.bind({});
Underline.args = {
  size: 1,
  underline: true,
};
